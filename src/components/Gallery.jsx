// import './Gallery.css'

function Gallery() {
  const images = [
    { id: 1, src: '/images/photo1.jpg', alt: 'ARI Event 1' },
    { id: 2, src: '/images/photo2.jpg', alt: 'ARI Event 2' },
    { id: 3, src: '/images/photo3.jpg', alt: 'ARI Event 3' },
    { id: 4, src: '/images/photo4.jpg', alt: 'ARI Event 4' },
    { id: 5, src: '/images/photo5.jpg', alt: 'ARI Event 5' },
    { id: 6, src: '/images/photo6.jpg', alt: 'ARI Event 6' },
  ]

  return (
    <section className="gallery">
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
