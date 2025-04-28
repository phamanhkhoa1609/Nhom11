"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { Avatar } from "@/components/ui/avatar";
import BorderSide from "@/components/custom/BorderSide";
import CarouselPromotion from "@/components/custom/CarouselPromotion";
import ProductCard from "@/components/custom/ProductCard";
import CategoryCard from "@/components/custom/CategoryCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

import { getListProduct } from "@/services/productServices";
import { getCategories } from "@/services/categoryServices";
import { ArrowUp } from "@/components/icons/arrow-up";
// import { products } from "@/data/products";

const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(30);
  const [totalItems, setTotalItems] = useState();
  const [viewportWidth, setViewportWidth] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getProductData = async () => {
    const data = await getListProduct(currentPage, itemsPerPage);
    setProductList(data?.content || []);
    setTotalItems(data?.totalElements || 0);
  };

  const getCategoryData = async () => {
    const data = await getCategories();
    console.log(">>> check cate:", data);
    setCategoryList(data?.content || []);
  };

  useEffect(() => {
    const updateViewPortWidth = () => {
      setViewportWidth(window.innerWidth - 128);
    };

    updateViewPortWidth();

    window.addEventListener("resize", updateViewPortWidth);

    return () => {
      window.removeEventListener("resize", updateViewPortWidth);
    };
  });

  useEffect(() => {
    getProductData();
    getCategoryData();
  }, [currentPage]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const category = [
    { name: "SmartPhone" },
    { name: "Tablet" },
    { name: "Laptop" },
    { name: "Accessories" },
    { name: "Máy lạnh điều hòa" },
    { name: "Tivi tủ lạnh" },
  ];

  const handleCategoryClick = (categoryName) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryName);
    }
  };

  // const filteredProducts = selectedCategory
  //   ? products.filter(item => item.category === selectedCategory)
  //   : products;
  // handle
  const filteredProducts = selectedCategory
    ? productList.filter((item) => item.category === selectedCategory)
    : productList;

  return (
    <div className="bg-gray-100">
      {/* Badges */}
      <div className="flex justify-center pt-4 mx-32">
        <div className="flex flex-grow justify-evenly p-4 bg-white rounded-md">
          <div className="flex items-center gap-2 w-fit">
            <Avatar className="bg-primary flex justify-center items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </Avatar>
            <div className="">
              <div className="text-sm font-bold">Chất lượng</div>
              <div className="text-xs text-gray-500">Cam kết chính hãng</div>
            </div>
          </div>
          <BorderSide />
          <div className="flex items-center gap-2">
            <Avatar className="bg-[#e600a0] flex justify-center items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                />
              </svg>
            </Avatar>
            <div className="">
              <div className="text-sm font-bold">Tiện lợi</div>
              <div className="text-xs text-gray-500">
                Thanh toán & giao hàng nhanh
              </div>
            </div>
          </div>
          <BorderSide />
          <div className="flex items-center gap-2">
            <Avatar className="bg-[#8dc94c] flex justify-center items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </Avatar>
            <div className="">
              <div className="text-sm font-bold">Tích lũy</div>
              <div className="text-xs text-gray-500">
                Tích điểm mỗi đơn hàng
              </div>
            </div>
          </div>
          <BorderSide />
          <div className="flex items-center gap-2">
            <Avatar className="flex justify-center items-center text-white bg-violet-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </Avatar>
            <div className="">
              <div className="text-sm font-bold">Đổi trả</div>
              <div className="text-xs text-gray-500">Trong vòng 14 ngày</div>
            </div>
          </div>
          <BorderSide />
          <div className="flex items-center gap-2">
            <Avatar className="bg-[#ffbc59] flex justify-center items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                />
              </svg>
            </Avatar>
            <div className="">
              <div className="text-sm font-bold">Cửa hàng</div>
              <div className="text-xs text-gray-500">Luôn luôn sẵn sàng</div>
            </div>
          </div>
        </div>
      </div>

      {/* Promotion */}
      <div className="flex justify-center pt-4 mx-32">
        <div className="flex flex-grow justify-center p-4 bg-white rounded-md">
          <div className="flex gap-1 w-fit ">
            <div className="w-full">
              <CarouselPromotion />
            </div>
          </div>
        </div>
      </div>

      {/* Category */}
      <div className="flex items-center justify-center pt-4 mx-32">
        <div className="flex-grow grid grid-cols-6 gap-4 bg-white p-4 rounded-md">
          {category.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(item.name)}
              className={`group cursor-pointer ${
                selectedCategory === item.name ? "bg-blue-50" : ""
              }`}
            >
              <div className="flex flex-col items-center justify-center p-2 hover:text-primary transition-colors">
                <div
                  className={`w-16 h-16 mb-2 rounded-full flex items-center justify-center ${
                    selectedCategory === item.name
                      ? "bg-blue-100"
                      : "bg-gray-100 group-hover:bg-blue-50"
                  }`}
                >
                  {index === 0 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-gray-600 group-hover:text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-gray-600 group-hover:text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                      />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-gray-600 group-hover:text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                  )}

                  {index === 3 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-gray-600 group-hover:text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                      />
                    </svg>
                  )}
                  {index === 4 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-gray-600 group-hover:text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5ZM3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z"
                      />
                    </svg>
                  )}
                  {index === 5 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-gray-600 group-hover:text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                      />
                    </svg>
                  )}
                </div>
                <span
                  className={`text-sm text-center ${
                    selectedCategory === item.name
                      ? "text-primary"
                      : "text-gray-600 group-hover:text-primary"
                  }`}
                >
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="mx-32 pt-4">
        <div className="flex-grow grid grid-cols-5 gap-4 auto-rows-fr">
          {filteredProducts.map((item) => (
            <Link
              href={`/product/${item.name.toLowerCase().replace(/ /g, "-")}/${
                item.id
              }`}
              key={item.id}
              className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col h-full">
                {/* Image */}
                <div className="relative h-[200px] mb-3">
                  <Image
                    src={item.thumbnailUrl}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                  {item.discountPrice && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      -
                      {Math.round(
                        ((item.price - item.discountPrice) / item.price) * 100
                      )}
                      %
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex flex-col flex-grow">
                  {/* Name */}
                  <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2">
                    {item.name}
                  </h3>

                  {/* Price */}
                  <div className="mt-auto">
                    {item.discountPrice ? (
                      <div className="flex flex-col">
                        <span className="text-red-500 font-medium">
                          {item.discountPrice.toLocaleString()}$
                        </span>
                        <span className="text-gray-400 text-sm line-through">
                          {item.price.toLocaleString()}$
                        </span>
                      </div>
                    ) : (
                      <span className="text-red-500 font-medium">
                        {item.price.toLocaleString()}$
                      </span>
                    )}
                  </div>

                  {/* Rating & Sold */}
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <div className="flex items-center">
                      <svg
                        className="w-3 h-3 text-yellow-400 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>4.5</span>
                    </div>
                    <span className="mx-1">|</span>
                    <span>Đã bán 100+</span>
                  </div>

                  {/* Brand & Warranty */}
                  <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                    <span>{item.brand}</span>
                    {item.warranty && <span>{item.warranty}</span>}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <PaginationSelection
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <Button
        className="fixed z-50 bottom-10 right-10 bg-primary"
        variant="primary"
        size="icon"
        onClick={() => scrollToTop()}
      >
        <ArrowUp className="size-5 text-white" />
      </Button>
    </div>
  );
};

export const PaginationSelection = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Pagination className="pt-4">
      <PaginationContent className="bg-white rounded-md p-2">
        <PaginationItem className="hover:cursor-pointer">
          <PaginationPrevious onClick={() => handlePrevPage()} />
        </PaginationItem>
        {pages.map((page, index) => (
          <PaginationItem
            key={index}
            className={
              currentPage === page - 1
                ? "bg-primary text-white rounded-md hover:cursor-pointer"
                : "hover:cursor-pointer"
            }
          >
            <PaginationLink onClick={() => handleCurrentPage(page - 1)}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem className="hover:cursor-pointer">
          <PaginationNext onClick={() => handleNextPage()} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default HomePage;
