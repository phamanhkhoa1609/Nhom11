"use client";

import Link from "next/link";
import Image from "next/image";
import logo2 from "../../../public/ic_logo_2.svg";
import { useState } from "react";
import { register } from "@/services/authServices";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterButtonClick = async () => {
    console.log("Click", name, email, username, password);
    const res = await register(username, name, email, password);
    if (res === "User register successfully!") toast.success(res);
    else if (res.message) toast.error(res.message);
    else {
      if (res.email) toast.error(res.email);
      if (res.name) toast.error(res.name);
      if (res.password) toast.error(res.password);
    }
    console.log(res);
  };

  return (
    <>
      <div className="bg-blue-100 flex flex-row items-center justify-evenly py-[100px]">
        {/* Logo */}
        <Image
          src={logo2}
          alt="Harbe Logo"
          priority={true}
          className="h-auto w-[600px]"
        ></Image>

        {/* Form */}
        <div className="bg-white p-[32px] rounded-lg w-[480px]">
          <div className="text-xl">Đăng ký</div>

          <input
            placeholder="Họ và tên"
            className="w-full text-[14px] focus:outline-none focus:border-primary focus:border-2 py-[10px] px-[20px] rounded border-2 border-gray-300 mt-[24px]"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>

          <input
            placeholder="Email"
            className="w-full text-[14px] focus:outline-none focus:border-primary focus:border-2 py-[10px] px-[20px] rounded border-2 border-gray-300 mt-[20px]"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>

          <input
            placeholder="Tên đăng nhập"
            className="w-full text-[14px] focus:outline-none focus:border-primary focus:border-2 py-[10px] px-[20px] rounded border-2 border-gray-300 mt-[20px]"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>

          <input
            placeholder="Mật khẩu"
            type="password"
            className="w-full text-[14px] focus:outline-none focus:border-primary focus:border-2 py-[10px] px-[20px] rounded border-2 border-gray-300 mt-[20px]"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>

          <button
            className="w-full bg-primary text-white mt-[32px] rounded py-[12px] hover:bg-blue-400"
            onClick={handleRegisterButtonClick}
          >
            ĐĂNG KÝ
          </button>

          <div className="flex flex-row justify-center items-center mt-[32px] text-[14px] text-gray-500">
            <div>Bạn đã có tài khoản?</div>
            <Link href={"/login"}>
              <div className="ml-[6px] text-primary hover:decoration-solid hover:underline">
                Đăng nhập
              </div>
            </Link>
          </div>
        </div>
        <ToastContainer position="top-right" />
      </div>
    </>
  );
};
export default page;
