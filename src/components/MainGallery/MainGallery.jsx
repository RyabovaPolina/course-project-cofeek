import "./MainGalleryStyle.css";

export default function MainGallery() {
  return (
    <>
      <section className="coffee-promo">
        <div className="image-block">
          <img src="src/assets/image-left-top.png" className="img-top" />
          <img src="src/assets/image-left-bottom.png" className="img-bottom" />
        </div>

        <div className="vertical-text">
          <img src="src/assets/image-center.png" className="img-center" />
        </div>

        <div className="image-block">
          <img src="src/assets/image-right-top.png" className="img-top" />
          <img src="src/assets/image-right-bottom.png" className="img-bottom" />
        </div>
      </section>
    </>
  );
}
