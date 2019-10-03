
FilePond.registerPlugin(
    FilePondPluginImageCrop,
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginImageTransform
);

const inputElement = document.querySelector('input[type="file"]');
const pond = FilePond.create(inputElement, {
    imageCropAspectRatio: 1,
    imageResizeTargetWidth: 256,
    imageResizeMode: 'contain',
    imageTransformVariants: {},
    onaddfile: (err, fileItem) => {
        console.log(err, fileItem.getMetadata('resize'));
    },
    onpreparefile: (fileItem, outputFiles) => {
        outputFiles.forEach(output => {
            const img = new Image();
            img.src = URL.createObjectURL(output.file);
            document.body.appendChild(img);

        
        })
    }
});
