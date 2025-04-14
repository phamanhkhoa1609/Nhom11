"use client";

import { BreadCrumb } from "@/components/custom/BreadCrumb";
import React, { useState, useEffect } from "react";
import { ProductImage } from "@/components/custom/ProductDetail/ProductImage";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import Image from "next/image";

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [currentImage, setCurrentImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

  useEffect(() => {
    // Find product from products array using productId
    const foundProduct = products.find(item => item.id === params.productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setCurrentImage(foundProduct.image);
      // Set default color if available
      if (foundProduct.colors?.length > 0) {
        setSelectedColor(foundProduct.colors[0].colorName);
      }
    }
  }, [params.productId]);

  const handleColorChange = (colorName) => {
    setSelectedColor(colorName);
    const selectedColorObj = product.colors.find(c => c.colorName === colorName);
    if (selectedColorObj) {
      setCurrentImage(selectedColorObj.image);
    }
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Đang tải...</h1>
          <p className="text-gray-600">Vui lòng đợi trong giây lát</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 px-32 py-4">
      <BreadCrumb category={product.category} information={product.name} />
      <div className="bg-white rounded-lg p-6">
        <div className="flex gap-8">
          {/* Left side - Product Image */}
          <div className="w-[480px] shrink-0">
            <div className="relative w-full h-[400px] bg-white rounded-lg overflow-hidden">
              <Image
                src={currentImage}
                alt={product.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right side - Product Info */}
          <div className="flex-1">
            {/* Product Name and Rating */}
            <h1 className="text-2xl font-medium mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-semibold">4.2</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${
                      star <= 4
                        ? "text-yellow-300"
                        : "text-gray-300"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
            <span className="text-2xl font-bold text-gray-900">{new Intl.NumberFormat('vi-VN').format(product.price)}</span>
              <span className="text-2xl font-bold text-gray-900">$</span>
              
            </div>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-2">Màu:</div>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <Button
                      key={color.colorName}
                      variant={selectedColor === color.colorName ? "default" : "outline"}
                      className={`min-w-[60px] h-8 text-sm ${
                        selectedColor === color.colorName
                          ? "bg-blue-500 text-white hover:bg-blue-600"
                          : "bg-white hover:bg-gray-100"
                      }`}
                      onClick={() => handleColorChange(color.colorName)}
                    >
                      {color.colorName}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <div className="text-sm text-gray-600 mb-2">Số lượng</div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="h-8 w-8 border-gray-200 hover:bg-gray-100"
                >
                  -
                </Button>
                <input
                  type="number"
                  className="w-12 h-8 text-center text-sm border border-gray-200 rounded-md"
                  value={quantity}
                  readOnly
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                  className="h-8 w-8 border-gray-200 hover:bg-gray-100"
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                className="h-10 flex-1 bg-[#EBF5FF] text-blue-500 hover:bg-blue-50 border-none font-medium text-sm px-4"
                variant="outline"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                  />
                </svg>
                Thêm Vào Giỏ Hàng
              </Button>
              <Button 
                className="h-10 flex-1 bg-red-500 hover:bg-red-600 text-white font-medium text-sm px-4"
              >
                Mua Ngay
              </Button>
            </div>

            {/* Product Features */}
            <div className="mt-8 space-y-4">
              {product.description && product.description.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-sm">{feature}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
