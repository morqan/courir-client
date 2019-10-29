// Include gulp
// var gulp = require("gulp");
var { src, dest, series,watch,parallel } = require('gulp');
// Include Our Plugins
let uglify = require('gulp-uglify-es').default;
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var watch = require('gulp-watch');
var autoprefixer = require('autoprefixer-core');
var rigger = require('gulp-rigger');
// var minify = require('gulp-minify');
var minifyCSS=require('gulp-minify-css');
var rename = require("gulp-rename"); //minify elediyimiz dosyanın adını değiştirmek için kullandık bunu
var concat = require('gulp-concat'); //tüm js dosyalarını birleştirip all.js diye bir js dosyasında toplamak için
var flatten = require('gulp-flatten'); //fondaki klasör altında olan fontları tek klasöre toplamak için
var path = {
    build: { //Burada işlemden sonra bitmiş dosyaların nereye koyulacağını gösteriyoruz
        html: 'build/',
        js: 'build/js/',
        vendor: 'build/js/vendor/', //src deki vendor klasörünü buildeki vendor klasörüne eklemek için 
        css: 'build/css/main/',
        images: 'build/img/',
        fonts: 'build/fonts/',
        libs: 'build/libs/', //bower ile src klasörüne yüklediğim dosyaları build klasörüne eklemek için 
        assets: 'build/assets/'
    },
    src: { //Burası kaynaklar
        html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/js/main/**/*.js',
        vendor: 'src/js/vendor/*.js',
        css: 'src/css/main.scss',
        images: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        libs: 'src/libs/**/*',
        assets: 'src/assets/**/*.*'
    },
    watch: { //Burada izlemek istediğimiz dosyaları belirtiyoruz
        html: 'src/**/*.html',
        js: 'src/js/main/*.js',
        vendor: 'src/js/vendor/*.js',
        css: 'src/css/**/*.scss',
        images: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        libs: 'src/libs/',
        assets: 'src/assets/'
    },
};
 function html() {
    return src(path.src.html) 
    .on('error', function(err) {
        console.log(err)
        this.emit('end')
    })
        .pipe(rigger()) //rigger ile dosyaları birleşdiriyoruz header footer gibi komponentleri import ediyoruz bir nevi
        .pipe(dest(path.build.html)) //Выплюнем их в папку build
}
exports.html = html;
function js() {
    return src(path.src.js)
        .pipe(concat('all.js'))
        .pipe(dest(path.build.js))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(dest(path.build.js))
}
exports.js = js;
 function css() {
    return src(path.src.css) //Bizim main.scss seçer
        .pipe(sass()) //sass da derler
        .on('error', function(err) {
            console.log(err)
            this.emit('end')
        })
        .pipe(postcss([ autoprefixer({ browsers: ["> 0%"] }) ]))
        .pipe(dest(path.build.css))
        .pipe(minifyCSS())
        .pipe(rename({suffix:'.min'}))
        .pipe(dest(path.build.css)); //build deki css e atar
    }
exports.css = css;
 function images() {
   return src(path.src.images) //resimleri seçer
    .on('error', function(err) {
        console.log(err)
        this.emit('end')
    })
    .pipe(dest(path.build.images));
}
exports.images = images;
 function libs() {
    return src(path.src.libs) 
   
    .pipe(dest(path.build.libs));
}
exports.libs = libs;
function assets() {
  
    return src(path.src.assets)
    .pipe(dest(path.build.assets))
}
exports.assets = assets;
// function vendor() {
//     return src(path.src.vendor) 
//     .on('error', function(err) {
//         console.log(err)
//         this.emit('end')
//     })
//     .pipe(dest(path.build.vendor));
// }
// exports.vendor = vendor;
 function fonts() {
    return src(path.src.fonts)
    .on('error', function(err) {
        console.log(err)
        this.emit('end')
    })
    .pipe(flatten())
    .pipe(dest(path.build.fonts))
}
exports.fonts = fonts;
function watcher() {
   
    watch(path.watch.html,html);
    watch(path.watch.css, css);
    watch(path.watch.images,images);
    watch(path.watch.js,js);
    watch(path.watch.libs,libs);
    watch(path.watch.assets,assets);
    watch(path.watch.fonts,fonts);
  
}
exports.watcher = watcher;
exports.default = parallel(series(html,js,css,images,fonts,assets,libs),watcher );
// gulp.task('default', ['build', 'watch']);
function copy() {
    return src('./src/assets/**/*')
     
    .pipe(dest('./build/assets/'))
}

exports.copy = copy;
