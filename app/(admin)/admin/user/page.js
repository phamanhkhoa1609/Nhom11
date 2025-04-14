"use client";

import React from "react";
import SearchInput from "@/components/custom/SearchInput";
import Image from "next/image";
import { useState, useEffect } from "react";
import icPlus from "@/public/ic_admin/ic_plus.svg";
import icEditBlue from "@/public/ic_admin/ic_edit_blue.svg";
import icBin from "@/public/ic_admin/ic_bin.svg";
import { PaginationSelection } from "@/components/HomePage";
import CustomTable from "@/components/custom/Admin/Table/CustomTable";
import { CustomCreateDialog } from "@/components/custom/Admin/Dialog/CustomCreateDialog";
import { getAccessToken, getSession } from "@/services/authServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CustomUpdateDialog } from "@/components/custom/Admin/Dialog/CustomUpdateDialog";
import { CustomAlertDialog } from "@/components/custom/Admin/Dialog/CustomAlertDialog";
import {
  createUser,
  deleteUserById,
  getAllUsers,
  searchUserByName,
  updateUserById,
} from "@/services/userServices";
import { UserInfoForm } from "@/components/custom/Admin/Form/UserInfoForm";
import UserRow from "@/components/custom/Admin/Table/UserRow";
import { set } from "date-fns";

const UserAdminPage = () => {
  const [userList, setUserList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const userField = [
    { name: "Tên", width: "12%" },
    { name: "Ngày sinh", width: "8%" },
    { name: "Giới tính", width: "6%" },
    { name: "Email", width: "28%" },
    { name: "Số điện thoại", width: "14%" },
    { name: "Tên đăng nhập", width: "18%" },
  ];
  const [selectedUser, setSelectedUser] = useState(-1);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userUsername, setUserUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [userBirthDate, setUserBirthDate] = useState(new Date());
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  const getSearchUserData = async () => {
    let token = "";
    try {
      token = await getAccessToken();
    } catch (error) {
      console.log(error);
    }
    const data = await searchUserByName(
      token,
      searchValue,
      currentPage,
      itemsPerPage
    );
    setUserList(data.content);
    setTotalItems(data.totalElements);
  };

  const getUserData = async () => {
    let token = "";
    try {
      token = await getAccessToken();
    } catch (error) {
      console.log(error);
    }
    const data = await getAllUsers(token, currentPage, itemsPerPage);
    setUserList(data.content);
    setTotalItems(data.totalElements);
  };

  const resetState = () => {
    setUserName("");
    setUserEmail("");
    setUserUsername("");
    setUserPassword("");
    setUserBirthDate(new Date());
    setGender("");
    setPhone("");
  };

  const showError = (errorArr) => {
    errorArr.forEach((error) => {
      toast.error(error[1]);
    });
  };

  useEffect(() => {
    if (searchValue && searchValue.length > 0) {
      getSearchUserData();
    } else {
      getUserData();
    }
  }, [currentPage]);

  return (
    <div className="flex flex-col justify-between items-center h-full">
      {/* Search bar */}
      <div className="flex flex-row items-center w-full border-b-[1px] border-gray-300 px-[32px] py-[10px]">
        <div className="flex flex-row items-center mr-[64px]">
          <div className="text-[18px] font-semibold">Tổng người dùng</div>
          <div className="px-[8px] py-[1px] bg-blue-600 text-white text-[14px] rounded-[16px] ml-[12px] flex items-center justify-center">
            {totalItems}
          </div>
        </div>

        <div className="grow">
          <SearchInput
            placeholder={"Nhập từ khóa tên người dùng..."}
            value={searchValue}
            onValueChange={(e) => setSearchValue(e.target.value)}
            onSubmit={(e) => {
              e.preventDefault();
              if (searchValue && searchValue.length > 0) {
                getSearchUserData();
              } else {
                getUserData();
              }
            }}
          />
        </div>

        <div className="flex flex-row justify-center items-center gap-[16px] ml-[64px]">
          {/* Delete user button */}
          <CustomAlertDialog
            itemTrigger={
              <button
                className="border-red-500 border-[1px] px-[20px] py-[6px] rounded-[8px] hover:drop-shadow-xl hover:opacity-80 flex flex-row items-center justify-center bg-red-50 w-[110px]"
                style={{ opacity: selectedUser != -1 ? 1 : 0 }}
                disabled={selectedUser == -1}
              >
                <Image alt="Bin icon" src={icBin} width={12} height={12} />
                <div className="text-red-500 text-[14px] font-bold ml-[4px]">
                  Xóa
                </div>
              </button>
            }
            title={"Xóa người dùng: " + userList[selectedUser]?.name}
            content={
              "Bạn có chắc chắn muốn xóa người dùng này? Thao tác này không thể hoàn tác!"
            }
            cancelContent={"Hủy"}
            confirmContent={"Xóa"}
            onConfirm={async () => {
              console.log("Confirm delete user");
              let token = "";
              try {
                token = await getAccessToken();
              } catch (error) {
                console.log(error);
              }
              const res = await deleteUserById(
                token,
                userList[selectedUser].id
              );
              console.log(res);
              if (res.status == 200) {
                toast.success("Xóa người dùng thành công");
                await getUserData();
                setSelectedUser(-1);
              } else {
                const errorArray = Object.entries(res.data);
                showError(errorArray);
              }
            }}
          />

          {/* Update user dialog */}
          <CustomUpdateDialog
            confirmDialogTitle={
              "Bạn có chắc chắn muốn cập nhật thông tin người dùng này?"
            }
            confirmDialogContent={
              "Thông tin của người dùng sẽ được lưu vào hệ thống."
            }
            confirmContent={"Cập nhật"}
            onConfirm={async () => {
              console.log("Confirm update user");
              let token = "";
              try {
                token = await getAccessToken();
              } catch (error) {
                console.log(error);
              }
              const res = await updateUserById(
                {
                  name: userName,
                  email: userEmail,
                  username: userUsername,
                  password: userPassword,
                  phone: phone,
                },
                token,
                userList[selectedUser].id
              );
              console.log(res);
              if (res.status == 200) {
                toast.success("Cập nhật người dùng thành công");
                await getUserData();
                resetState();
              } else {
                const errorArray = Object.entries(res.data);
                showError(errorArray);
              }
            }}
            onCancel={() => {
              console.log("Cancel update user");
              resetState();
            }}
            itemTrigger={
              <button
                className="border-blue-600 border-[1px] px-[20px] py-[6px] rounded-[8px] hover:drop-shadow-xl hover:opacity-80 flex flex-row items-center justify-center bg-blue-50 w-[110px]"
                style={{ opacity: selectedUser != -1 ? 1 : 0 }}
                disabled={selectedUser == -1}
                onClick={() => {
                  resetState();
                  setUserName(userList[selectedUser].name);
                  setUserEmail(userList[selectedUser].email);
                  setUserUsername(userList[selectedUser].username);
                  setPhone(userList[selectedUser].phone);
                }}
              >
                <Image
                  alt="Edit icon"
                  src={icEditBlue}
                  width={12}
                  height={12}
                />
                <div className="text-blue-600 text-[14px] font-bold ml-[4px]">
                  Sửa
                </div>
              </button>
            }
            title={"Cập nhật thông tin người dùng"}
            itemContent={
              <UserInfoForm
                userUsername={userUsername}
                onUserUsernameChange={(e) => {
                  setUserUsername(e.target.value);
                }}
                userName={userName}
                onUserNameChange={(e) => {
                  setUserName(e.target.value);
                }}
                userEmail={userEmail}
                onUserEmailChange={(e) => {
                  setUserEmail(e.target.value);
                }}
                userPassword={userPassword}
                onUserPasswordChange={(e) => {
                  setUserPassword(e.target.value);
                }}
                userBirthDate={userBirthDate}
                onUserBirthDateSelected={setUserBirthDate}
                gender={gender}
                onFemaleSelected={() => setGender("female")}
                onMaleSelected={() => setGender("male")}
                userPhone={phone}
                onUserPhoneChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            }
          />

          {/* Create user dialog */}
          <CustomCreateDialog
            confirmDialogTitle={"Bạn có chắc chắn muốn thêm người dùng này?"}
            confirmDialogContent={
              "Thông tin người dùng sẽ được thêm vào hệ thống."
            }
            confirmContent={"Thêm"}
            onConfirm={async () => {
              console.log("Confirm create user");
              let token = "";
              try {
                token = await getAccessToken();
              } catch (error) {
                console.log(error);
              }
              const res = await createUser(
                {
                  name: userName,
                  email: userEmail,
                  username: userUsername,
                  password: userPassword,
                  phone: phone,
                },
                token
              );
              console.log(res);
              if (res.status == 201) {
                toast.success("Thêm người dùng thành công");
                await getUserData();
                setSelectedUser(-1);
                resetState();
              } else {
                const errorArray = Object.entries(res.data);
                showError(errorArray);
              }
            }}
            onCancel={() => {
              console.log("Cancel create user");
              // resetState();
            }}
            itemTrigger={
              <button className="bg-blue-600 px-[20px] py-[6px] rounded-[8px] hover:drop-shadow-xl hover:opacity-80 flex flex-row items-center justify-center w-[110px]">
                <Image alt="Plus icon" src={icPlus} width={12} height={12} />
                <div className="text-white text-[14px] font-bold  ml-[4px]">
                  Thêm
                </div>
              </button>
            }
            title={"Thêm người dùng"}
            itemContent={
              <UserInfoForm
                userUsername={userUsername}
                onUserUsernameChange={(e) => {
                  setUserUsername(e.target.value);
                }}
                userName={userName}
                onUserNameChange={(e) => {
                  setUserName(e.target.value);
                }}
                userEmail={userEmail}
                onUserEmailChange={(e) => {
                  setUserEmail(e.target.value);
                }}
                userPassword={userPassword}
                onUserPasswordChange={(e) => {
                  setUserPassword(e.target.value);
                }}
                userBirthDate={userBirthDate}
                onUserBirthDateSelected={setUserBirthDate}
                gender={gender}
                onFemaleSelected={() => setGender("female")}
                onMaleSelected={() => setGender("male")}
                userPhone={phone}
                onUserPhoneChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            }
          />
        </div>
      </div>

      {/* User table data */}
      <div className="flex flex-col justify-between items-center grow px-[32px] py-[20px] w-full">
        <CustomTable
          data={userList}
          renderRow={(item, index) => (
            <UserRow
              key={index}
              user={item}
              onSelected={() => {
                selectedUser == index
                  ? setSelectedUser(-1)
                  : setSelectedUser(index);
              }}
              className={selectedUser == index ? "bg-blue-200" : ""}
            />
          )}
          field={userField}
        />

        {/* Pagination */}
        <div>
          <PaginationSelection
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default UserAdminPage;
