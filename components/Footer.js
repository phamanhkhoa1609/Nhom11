import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 pt-4 divide-y px-32">
      <div className="flex justify-between w-full p-4 bg-white rounded-t-md">
        <div className="flex flex-col gap-4 w-1/5">
          <span>Hỗ trợ khách hàng</span>
          <div className="space-y-2">
            <div className="grid grid-cols-2">
              <span className="text-gray-500 text-xs">Backend Developer: </span>
              <Link
                className="flex"
                href="https://www.facebook.com/hoangducmanh254"
              >
                <span className="text-primary text-xs hover:underline hover:cursor-pointer">
                  Đức Mạnh
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-gray-500 text-xs">
                Fullstack Developer:{" "}
              </span>
              <Link
                className="flex"
                href="https://www.facebook.com/andrew.nguyen0505"
              >
                <span className="text-primary text-xs hover:underline hover:cursor-pointer">
                  Hoàng Anh
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-gray-500 text-xs">Frontend Developer:</span>
              <Link
                className="flex"
                href="https://www.facebook.com/baoduy.truonghoang.581/"
              >
                <span className="text-primary text-xs hover:underline hover:cursor-pointer">
                  Bảo Duy
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-gray-500 text-xs">Frontend Developer:</span>
              <Link
                className="flex"
                href="https://www.facebook.com/phuocphan162"
              >
                <span className="text-primary text-xs hover:underline hover:cursor-pointer">
                  Ngọc Phước
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-gray-500 text-xs">Frontend Developer:</span>
              <Link
                className="flex"
                href="https://www.facebook.com/profile.php?id=100036010281125"
              >
                <span className="text-primary text-xs hover:underline hover:cursor-pointer">
                  Đình Tâm
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/5">
          <span>Về Harbe</span>
          <div className="flex flex-col gap-2">
            <div className="text-xs text-gray-500">Giới thiệu Harbe</div>
            <div className="text-xs text-gray-500">Harbe Blog</div>
            <div className="text-xs text-gray-500">Tuyển dụng</div>
            <div className="text-xs text-gray-500">
              Chính sách bảo mật thanh toán
            </div>
            <div className="text-xs text-gray-500">
              Chính sách bảo mật thông tin cá nhân
            </div>
            <div className="text-xs text-gray-500">
              Chính sách giải quyết khiếu nại
            </div>
            <div className="text-xs text-gray-500">Điều khoản sử dụng</div>
            <div className="text-xs text-gray-500">Giới thiệu Harbe Xu</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/5">
          <span>Phương thức thanh toán</span>
          <div className="flex gap-2">
            <img
              className=" w-20"
              alt="paypal"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTWdwT_cuFXtmXBY7e97F1pIfxjUf_U1OG6pqSIlcnsw&s"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/5">
          <div>Kết nối với chúng tôi</div>
          <div className="flex gap-4">
            <Link href="https://www.facebook.com/andrew.nguyen0505">
              <Avatar>
                <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" />
                <AvatarFallback>Facebook</AvatarFallback>
              </Avatar>
            </Link>

            <Avatar>
              <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/2048px-Icon_of_Zalo.svg.png" />
              <AvatarFallback>Zalo</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
              <AvatarFallback>GitHub</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mx-32 p-4 bg-white gap-4">
        <div>Công ty TNHH Harbe</div>
        <div className="space-y-2">
          <div className="text-xs text-gray-500">
            Trường Đại học Công nghệ Thông tin - Đường Hàn Thuyên, khu phố 6 P,
            Thủ Đức, Thành phố Hồ Chí Minh
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
