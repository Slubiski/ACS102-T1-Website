// Open the lightbox with the correct image
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    lightbox.classList.add('active');
}

// Close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}
