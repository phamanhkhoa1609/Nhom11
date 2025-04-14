import React from "react";
import Image from "next/image";

export const ProductImage = ({ product, selectedColor }) => {
  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative w-full h-[400px] bg-white rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};
