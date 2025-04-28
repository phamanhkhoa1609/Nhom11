"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { register } from "@/services/authServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import iconEye from "@/public/ic_eye.svg";
import iconHidden from "@/public/ic_hidden.svg";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [visibleIcon1, setVisibleIcon1] = useState(iconEye);
  const [visibleIcon2, setVisibleIcon2] = useState(iconEye);

  const handleRegisterButtonClick = async (event) => {
    event.preventDefault();
    if (repassword != password) {
      toast.error("Mật khẩu không trùng khớp");
    } else {
      const res = await register(username, name, email, phone, password);
      if (res.status == 201) {
        toast.success(
          "Đăng ký tài khoản thành công, Vui lòng kiểm tra email để xác thực tài khoản!"
        );
        // wait for 2 seconds
        setTimeout(() => {
          router.replace("/login");
        }, 2000);
      } else {
        if (res.email) toast.error(res.email);
        if (res.name) toast.error(res.name);
        if (res.username) toast.error(res.username);
        if (res.password) toast.error(res.password);
        if (res.message) toast.error(res.message);
        if (res.phone) toast.error(res.phone);
      }
    }
  };

  return (
    <>
      <div className="bg-blue-100 flex flex-row items-center justify-evenly w-full">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="text-[120px] font-bold mb-6 tracking-tight">
            <span className="text-[#0A68FF]">e</span>
            <span className="text-[#0A68FF]">M</span>
            <span className="text-[#EAB308]">artix</span>
          </div>
          <div className="text-4xl text-[#0A68FF] tracking-wide font-bold">
            Tốt & Nhanh
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-[32px] rounded-lg w-[480px]">
          <div className="text-xl">Đăng ký</div>

          <form onSubmit={handleRegisterButtonClick}>
            <div className="flex flex-row items-center mt-[24px] gap-[12px]">
              <input
                placeholder="Họ và tên (*)"
                className="w-full text-[14px] focus:outline-none focus:border-primary focus:border-2 py-[10px] px-[20px] rounded border-2 border-gray-300"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
              <input
                placeholder="Email (*)"
                className="w-full text-[14px] focus:outline-none focus:border-primary focus:border-2 py-[10px] px-[20px] rounded border-2 border-gray-300"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>

            <input
              placeholder="Số điện thoại (*)"
              className="w-full text-[14px] focus:outline-none focus:border-primary focus:border-2 py-[10px] px-[20px] rounded border-2 border-gray-300 mt-[20px]"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            ></input>

            <input
              placeholder="Tên đăng nhập (*)"
              className="w-full text-[14px] focus:outline-none focus:border-primary focus:border-2 py-[10px] px-[20px] rounded border-2 border-gray-300 mt-[20px]"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>

            <div className="relative flex flex-row items-center mt-[20px]">
              <input
                id="pass"
                placeholder="Mật khẩu (*)"
                type={visibleIcon1 == iconEye ? "password" : "text"}
                className="w-full text-[14px] focus:outline-none focus:border-primary focus:border-2 py-[10px] px-[20px] rounded border-2 border-gray-300"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <Image
                alt="Show/Hidden pass button"
                className="hover:cursor-pointer absolute right-[16px]"
                src={visibleIcon1}
                width={20}
                onClick={() => {
                  if (visibleIcon1 == iconEye) setVisibleIcon1(iconHidden);
                  else setVisibleIcon1(iconEye);
                }}
              />
            </div>

            <div className="relative flex flex-row items-center mt-[20px]">
              <input
                id="repass"
                placeholder="Nhập lại mật khẩu (*)"
                type={visibleIcon2 == iconEye ? "password" : "text"}
                className="w-full text-[14px] focus:outline-none focus:border-primary focus:border-2 py-[10px] px-[20px] rounded border-2 border-gray-300"
                onChange={(e) => {
                  setRepassword(e.target.value);
                }}
              ></input>
              <Image
                alt="Show/Hidden pass button"
                className="hover:cursor-pointer absolute right-[16px]"
                src={visibleIcon2}
                width={20}
                onClick={() => {
                  if (visibleIcon2 == iconEye) setVisibleIcon2(iconHidden);
                  else setVisibleIcon2(iconEye);
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white mt-[32px] rounded py-[12px] hover:bg-blue-400"
              onClick={handleRegisterButtonClick}
            >
              ĐĂNG KÝ
            </button>
          </form>

          <div className="flex flex-row justify-center items-center mt-[32px] text-[14px] text-gray-500">
            <div>Bạn đã có tài khoản?</div>
            <Link href={"/login"}>
              <div className="ml-[6px] text-primary hover:decoration-solid hover:underline">
                Đăng nhập
              </div>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default RegisterPage;
