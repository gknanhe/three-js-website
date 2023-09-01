import React from "react";

const imageUrls = [
  "./galley/p1.avif",
  "./galley/p2.avif",
  "./galley/p3.avif",
  "./galley/p4.avif",
  "./galley/p5.avif",
  "./galley/p6.avif",
  "./galley/p7.avif",
  "./galley/p8.png",
  "./galley/p9.png",
  "./galley/p10.png",
  "./galley/p11.png",
  "./galley/p12.png",
  "./galley/p13.png",
  "./galley/p14.png",
  "./galley/p15.png",

  // Add more image URLs as needed
];
const AIPicker = ({ handleSubmit }) => {
  return (
    <div className="aipicker-container  overflow-auto">
      {imageUrls.map((imageUrl, index) => (
        <div
          key={index}
          className="image-item w-auto "
          onClick={() => handleSubmit("logo", imageUrl)}
        >
          {/* {console.log(imageUrl)} */}
          <img src={imageUrl} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default AIPicker;
