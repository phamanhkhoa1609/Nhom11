import ImagePicker from "@/components/custom/Admin/ImagePicker";
import iconPlusBlue from "@/public/ic_admin/ic_plus_blue.svg";
import { NameValueForm } from "./NameValueForm";
import Image from "next/image";
import { DatePicker } from "../../DatePicker";

export const UserInfoForm = ({
  userEmail,
  onUserEmailChange,
  userName,
  onUserNameChange,
  userUsername,
  onUserUsernameChange,
  userPassword,
  onUserPasswordChange,
  userBirthDate,
  onUserBirthDateSelected,
  gender,
  onMaleSelected,
  onFemaleSelected,
  userPhone,
  onUserPhoneChange,
}) => {
  return (
    <>
      <div className="flex flex-col items-start justify-start w-full h-[500px] overflow-y-scroll py-[8px]">
        {/* User general information */}
        <div className="flex flex-row w-full">
          <div className="w-full p-[16px] bg-white rounded-[8px] border-[1.5px] border-gray-300 flex flex-grow flex-col mr-[16px] mt-[16px]">
            <div className="text-base text-black font-semibold">
              Thông tin người dùng
            </div>
            <div className="flex flex-col items-start justify-start bg-white mt-[12px] flex-grow">
              <div className="w-full mt-[12px]">
                <div className="text-sm font-semibold text-black flex flex-col justify-start items-start">
                  Tên
                </div>
                <div className="w-full relative flex items-center justify-center flex-row">
                  <input
                    value={userName || ""}
                    onChange={onUserNameChange}
                    type="text"
                    className="border-[1.5px] border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-600 focus:border-[1.5px] text-black text-sm py-[8px] px-[16px] rounded-[6px] w-full mt-[4px] pr-[32px]"
                  />
                </div>
              </div>

              <div className="w-full mt-[12px]">
                <div className="text-sm font-semibold text-black flex flex-col justify-start items-start">
                  Email
                </div>
                <div className="w-full relative flex items-center justify-center flex-row">
                  <input
                    value={userEmail || ""}
                    onChange={onUserEmailChange}
                    type="text"
                    className="border-[1.5px] border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-600 focus:border-[1.5px] text-black text-sm py-[8px] px-[16px] rounded-[6px] w-full mt-[4px] pr-[32px]"
                  />
                </div>
              </div>

              <div className="w-full mt-[12px]">
                <div className="text-sm font-semibold text-black flex flex-col justify-start items-start">
                  Số điện thoại
                </div>
                <div className="w-full relative flex items-center justify-center flex-row">
                  <input
                    value={userPhone || ""}
                    onChange={onUserPhoneChange}
                    type="text"
                    className="border-[1.5px] border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-600 focus:border-[1.5px] text-black text-sm py-[8px] px-[16px] rounded-[6px] w-full mt-[4px] pr-[32px]"
                  />
                </div>
              </div>

              <div className="w-full mt-[12px]">
                <div className="text-sm font-semibold text-black flex flex-col justify-start items-start">
                  Tên đăng nhập
                </div>
                <div className="w-full relative flex items-center justify-center flex-row">
                  <input
                    value={userUsername || ""}
                    onChange={onUserUsernameChange}
                    type="text"
                    className="border-[1.5px] border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-600 focus:border-[1.5px] text-black text-sm py-[8px] px-[16px] rounded-[6px] w-full mt-[4px] pr-[32px]"
                  />
                </div>
              </div>

              <div className="w-full mt-[12px]">
                <div className="text-sm font-semibold text-black flex flex-col justify-start items-start">
                  Mật khẩu
                </div>
                <div className="w-full relative flex items-center justify-center flex-row">
                  <input
                    value={userPassword || ""}
                    onChange={onUserPasswordChange}
                    type="text"
                    className="border-[1.5px] border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-600 focus:border-[1.5px] text-black text-sm py-[8px] px-[16px] rounded-[6px] w-full mt-[4px] pr-[32px]"
                  />
                </div>
              </div>

              <div className="flex flex-row items-center w-full gap-[64px]">
                <div className="w-full mt-[12px]">
                  <div className="text-sm font-semibold text-black flex flex-col justify-start items-start">
                    Ngày sinh
                  </div>
                  <div className="w-full relative flex items-center justify-start flex-row">
                    <DatePicker
                      date={userBirthDate}
                      setDate={onUserBirthDateSelected}
                    />
                  </div>
                </div>

                <div className="w-full mt-[12px]">
                  <div className="text-sm font-semibold text-black flex flex-col justify-start items-start">
                    Giới tính
                  </div>
                  <div className="w-full relative flex items-center justify-start flex-row gap-[4px]">
                    <button
                      className={`px-[24px] py-[8px] rounded-[8px] border-[1.5px] border-blue-600 ${
                        gender == "male"
                          ? "bg-blue-600 text-white"
                          : "bg-blue-50 text-black"
                      }`}
                      onClick={onMaleSelected}
                    >
                      Nam
                    </button>
                    <button
                      className={`px-[24px] py-[8px] rounded-[8px] border-[1.5px] border-blue-600 ${
                        gender == "female"
                          ? "bg-blue-600 text-white"
                          : "bg-blue-50 text-black"
                      }`}
                      onClick={onFemaleSelected}
                    >
                      Nữ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
