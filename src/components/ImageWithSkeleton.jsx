import React, { useState } from "react";

const ImageWithSkeleton = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-48">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-700 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-48 object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default ImageWithSkeleton;
