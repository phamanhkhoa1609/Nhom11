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
import { getAccessToken } from "@/services/authServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CustomUpdateDialog } from "@/components/custom/Admin/Dialog/CustomUpdateDialog";
import { CustomAlertDialog } from "@/components/custom/Admin/Dialog/CustomAlertDialog";
import {
  createNotification,
  deleteNotificationById,
  getAllNotifications,
  getShockNotificationById,
  searchNotificationByTitle,
  updateNotificationById,
} from "@/services/notificationSevice";
import { NotificationInfoForm } from "@/components/custom/Admin/Form/NotificationForm";
import NotificationRow from "@/components/custom/Admin/Table/NotificationRow";
import { CustomViewDialog } from "@/components/custom/Admin/Dialog/CustomViewDialog";
import { set } from "date-fns";
import { getAllOrders } from "@/services/orderSevice";
import OrderRow from "@/components/custom/Admin/Table/OrderRow";

const OrderAdminPage = () => {
  const [orderList, setOrderList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const orderField = [
    { name: "Ngày tạo", width: "18%" },
    { name: "Trạng thái đơn hàng", width: "15%" },
    { name: "Tên người dùng", width: "12%" },
    { name: "Tổng cộng", width: "18%" },
    { name: "Phương thức thanh toán", width: "10%" },
    { name: "Trạng thái thanh toán", width: "12%" },
    { name: "Phí vận chuyển", width: "13%" },
  ];
  const getOrderData = async () => {
    let token = "";
    try {
      token = await getAccessToken();
    } catch (error) {
      console.log(error);
    }
    const data = await getAllOrders(token, currentPage, itemsPerPage);
    console.log("data", data);
    setOrderList(data?.orderList);
    setTotalItems(data?.totalElements);
  };

  const showError = (errorArr) => {
    errorArr.forEach((error) => {
      toast.error(error[1]);
    });
  };

  useEffect(() => {
    getOrderData();
  }, [currentPage]);

  return (
    <div className="flex flex-col justify-between items-center h-full">
      {/* Search bar */}
      <div className="flex flex-row items-center w-full border-b-[1px] border-gray-300 px-[32px] py-[10px]">
        <div className="flex flex-row items-center mr-[64px]">
          <div className="text-[18px] font-semibold">Tổng đơn hàng</div>
          <div className="px-[8px] py-[1px] bg-blue-600 text-white text-[14px] rounded-[16px] ml-[12px] flex items-center justify-center">
            {totalItems}
          </div>
        </div>

        <div className="grow">
          <SearchInput
            disabled={true}
            opacity={"0"}
            placeholder={"Nhập từ khóa tiêu đề..."}
          />
        </div>
      </div>

      {/* User table data */}
      <div className="flex flex-col justify-between items-center grow px-[32px] py-[20px] w-full">
        <CustomTable
          data={orderList}
          renderRow={(item, index) => <OrderRow key={index} order={item} />}
          field={orderField}
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

export default OrderAdminPage;
