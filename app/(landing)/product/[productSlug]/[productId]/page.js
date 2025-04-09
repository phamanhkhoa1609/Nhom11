"use client";

import { BreadCrumb } from "@/components/custom/BreadCrumb";
import React from "react";
import { ProductImage } from "@/components/custom/ProductDetail/ProductImage";
import { ProductSharing } from "@/components/custom/ProductDetail/ProductSharing";
import { ProductInformation } from "@/components/custom/ProductDetail/ProductInformation";
import { useState, useEffect } from "react";
import { getProductById } from "@/services/productServices";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const [product, setProduct] = new useState({});
  const params = useParams();

  const getProductData = async () => {
    const productData = await getProductById(params.productId);
    setProduct(productData);
  };

  useEffect(() => {
    if (params.productId) {
      getProductData();
    }
  }, [params.productId]);

  return (
    <>
      {product && product.category && (
        <div className="bg-gray-100 px-32">
          <BreadCrumb category={product.category} information={product.name} />
          <div className="flex p-0 bg-white gap-8 rounded-md">
            <section className="shrink-0 p-4 block" style={{ width: "450px" }}>
              <ProductImage product={product} />
            </section>
            <section className="flex flex-auto">
              <ProductInformation product={product} />
            </section>
          </div>
        </div>
      )}
    </>
  );
}
