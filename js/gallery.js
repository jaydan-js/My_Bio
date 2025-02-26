document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('galleryGrid');
    const totalImages = 40;

    for (let i = 0; i < totalImages; i++) {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <img 
                src="https://source.unsplash.com/random/600x800?portrait&sig=${i}" 
                alt="Gallery image ${i + 1}" 
                class="gallery-image"
                loading="lazy"
            >
            <div class="gallery-overlay">
                <span class="image-number">#${i + 1}</span>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    }
});
