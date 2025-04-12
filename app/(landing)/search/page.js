"use client";

import { useState, useEffect } from "react";
import { searchProductByName } from "@/services/productServices";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import ProductCard from "@/components/custom/ProductCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SearchDetail() {
  const [searchValue, setSearchValue] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);
  const [activeToggle, setActiveToggle] = useState(null); // State để lưu trạng thái của các toggle
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    setSearchValue(searchParams.get("name"));
  }, [searchParams]);

  const getSearchData = async () => {
    const data = await searchProductByName(searchValue);
    console.log("Search..." + searchValue);
    setSortedProducts(data);
    console.log(data);
  };

  useEffect(() => {
    if (searchValue !== "") {
      getSearchData();
    }
  }, [searchValue]);

  // Hàm xử lý khi một toggle được nhấn
  const handleToggle = (toggleName) => () => {
    setActiveToggle((prevToggle) =>
      prevToggle === toggleName ? null : toggleName
    );
  };

  const handleBackHome = async () => {
    router.push("/");
  };

  useEffect(() => {
    if (sortedProducts) {
      let sorted = [...sortedProducts];
      if (activeToggle === "toggle1") {
        sorted.sort((a, b) => b.price - a.price);
      } else if (activeToggle === "toggle2") {
        sorted.sort((a, b) => a.price - b.price);
      } else if (activeToggle === "toggle3") {
        sorted.sort((a, b) => b.discountRate - a.discountRate);
      }
      // Sử dụng một biến tạm thời để lưu kết quả sắp xếp
      const newSortedProducts = [...sorted];
      setSortedProducts(newSortedProducts);
    }
  }, [activeToggle]);

  if (!sortedProducts) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="bg-gray-100 pt-2">
        <div className="mx-32 font-bold text-stone-600 text-lg">
          <div className="mb-2">Sắp xếp theo</div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className={`bg-white hover:bg-blue-50 hover:border-blue-500 flex text-xs items-center gap-2 p-1 ${
                activeToggle === "toggle1"
                  ? "bg-blue-50 border-blue-500"
                  : "text-stone-600"
              }`}
              onClick={handleToggle("toggle1")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`size-4 ${
                  activeToggle === "toggle1"
                    ? "text-blue-500"
                    : "text-stone-600"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
                />
              </svg>
              <div
                className={`${
                  activeToggle === "toggle1"
                    ? "text-blue-500"
                    : "text-stone-600"
                }`}
              >
                Giá Cao - Thấp
              </div>
            </Button>

            <Button
              variant="outline"
              className={`bg-white hover:bg-blue-50 hover:border-blue-500 flex text-xs items-center gap-2 p-1 ${
                activeToggle === "toggle2"
                  ? "bg-blue-50 border-blue-500"
                  : "text-stone-600"
              }`}
              onClick={handleToggle("toggle2")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`size-4 ${
                  activeToggle === "toggle2"
                    ? "text-blue-500"
                    : "text-stone-600"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                />
              </svg>

              <div
                className={`${
                  activeToggle === "toggle2"
                    ? "text-blue-500"
                    : "text-stone-600"
                }`}
              >
                Giá Thấp - Cao
              </div>
            </Button>

            <Button
              variant="outline"
              className={`bg-white hover:bg-blue-50 hover:border-blue-500 flex text-xs items-center gap-2 p-1 ${
                activeToggle === "toggle3"
                  ? "bg-blue-50 border-blue-500"
                  : "text-stone-600"
              }`}
              onClick={handleToggle("toggle3")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`size-4 ${
                  activeToggle === "toggle3"
                    ? "text-blue-500"
                    : "text-stone-600"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>

              <div
                className={`${
                  activeToggle === "toggle3"
                    ? "text-blue-500"
                    : "text-stone-600"
                }`}
              >
                Khuyến Mãi Hot
              </div>
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap mx-32 justify-start mt-5 items-center gap-[14px]">
          {sortedProducts &&
            sortedProducts.map((item, index) => (
              <Link
                href={`/product/${item.productSlug}/${item.id}`}
                key={index}
              >
                <ProductCard
                  id={item.id}
                  product={item}
                  //parentWidth={viewportWidth}
                />
              </Link>
            ))}
          {!sortedProducts ||
            (sortedProducts.length === 0 && (
              <div className="flex justify-center items-center gap-4 flex-col w-full my-8">
                <div className="font-bold text-xl text-center ">
                  Không tìm thấy sản phẩm nào !
                </div>
                <button
                  className="bg-primary w-fit text-white p-2 rounded-md shadow-sm font-semibold"
                  onClick={handleBackHome}
                >
                  Quay về trang chủ
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
