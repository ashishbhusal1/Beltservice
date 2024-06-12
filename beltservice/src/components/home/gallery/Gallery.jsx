import React from "react";
import "./gallery.css";
import { GalleryImage } from "../../storage/HomeDb";

function Gallery() {
  return (
    <section className="gallery flexrow">
      <img src={GalleryImage.img1} alt="" />
      <img src={GalleryImage.img2} alt="" />
      <img src={GalleryImage.img3} alt="" />
    </section>
  );
}

export default Gallery;
