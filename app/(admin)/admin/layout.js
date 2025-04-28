"use client";

import AdminHeader from "@/components/custom/Admin/AdminHeader";
import AdminSideBar from "@/components/custom/Admin/AdminSideBar";
import icDashboards from "@/public/ic_admin/ic_dashboards.svg";
import icProduct from "@/public/ic_admin/ic_product.svg";
import icTag from "@/public/ic_admin/ic_tag.svg";
import icOrder from "@/public/ic_admin/ic_order.svg";
import icSetting from "@/public/ic_admin/ic_setting.svg";
import icExit from "@/public/ic_admin/ic_exit.svg";
import icUser from "@/public/ic_admin/ic_user.svg";
import icNotification from "@/public/ic_admin/ic_notification.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const menu = [
    // { name: "Dashboard", icon: icDashboards, link: "/admin" },
    { name: "Sản phẩm", icon: icProduct, link: "/admin/product" },
    { name: "Phân loại", icon: icTag, link: "/admin/category" },
    { name: "Đơn hàng", icon: icOrder, link: "/admin/order" },
    { name: "Người dùng", icon: icUser, link: "/admin/user" },
    { name: "Thông báo", icon: icNotification, link: "/admin/notification" },
  ];

  const others = [
    { name: "Setting", icon: icSetting, link: "/admin/user/settings" },
    { name: "Exit", icon: icExit, link: "/admin/exit" },
  ];

  const pathname = usePathname();
  const [headerTitle, setHeaderTitle] = useState("");
  useEffect(() => {
    const name = menu.find((item) => item.link === pathname)?.name;
    if (name) {
      setHeaderTitle(name);
    } else {
      const name = others.find((item) => item.link === pathname)?.name;
      if (name) {
        setHeaderTitle(name);
      }
    }
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-row">
      <AdminSideBar menu={menu} others={others} />
      <div className="flex-grow flex flex-col">
        <AdminHeader title={headerTitle} />
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
}
