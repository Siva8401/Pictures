// script.js

document.addEventListener('DOMContentLoaded', function () {
    const imageElements = document.querySelectorAll('.image img');
    const videoElements = document.querySelectorAll('.video video');
    const previewContainer = document.getElementById('preview-container');
    const previewImage = document.getElementById('preview-image');
    const previewVideo = document.getElementById('preview-video');

    imageElements.forEach((img) => {
        img.addEventListener('mouseover', function () {
            const previewSrc = this.getAttribute('data-preview');
            previewImage.src = previewSrc;
            previewImage.style.display = 'block';
            previewVideo.style.display = 'none';
            previewContainer.style.display = 'block';
        });

        img.addEventListener('mouseout', function () {
            previewImage.style.display = 'none';
            previewContainer.style.display = 'none';
        });
    });

    videoElements.forEach((video) => {
        video.addEventListener('mouseover', function () {
            const previewSrc = this.getAttribute('data-preview');
            previewVideo.src = previewSrc;
            previewVideo.style.display = 'block';
            previewImage.style.display = 'none';
            previewContainer.style.display = 'block';
        });

        video.addEventListener('mouseout', function () {
            previewVideo.style.display = 'none';
            previewContainer.style.display = 'none';
        });
    });
});
