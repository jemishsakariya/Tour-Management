import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "./galleryImages";

const MasonryImagesGallery = () => {
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
        <Masonry gutter="1rem">
          {galleryImages.map((item, index) => {
            return (
              <img
                src={item}
                alt="item"
                key={index}
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: "10px",
                }}
                className="masonry__img"
              />
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default MasonryImagesGallery;
