import Image from "next/image";
import userAvatar from "@/public/pictures/user/user-01.png";
import iconDown from "@/public/ic_admin/ic_down.svg";
import { useEffect, useState } from "react";
import { getAccessToken, getSession, logout } from "@/services/authServices";
import { getUserByProfile } from "@/services/userServices";

const AdminHeader = ({ title }) => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const session = await getSession();
      const accessToken = await getAccessToken();
      if (session) {
        const data = await getUserByProfile(accessToken);
        console.log(">>> check user: ", data);
        setUserInfo(data);
      }
    };
    fetchUserInfo();
  }, []);

  return (
    <>
      {userInfo && (
        <div className="border-b-[1px] border-gray-300 w-full py-[10px] px-[32px] flex flex-row justify-between items-center">
          <div className="text-[24px] font-semibold tracking-wide">{title}</div>
          <div className="flex flex-row items-center">
            <div className="flex flex-col items-end w-fit">
              <div className="text-[15px] w-fit font-medium">
                {userInfo.name}
              </div>
              <div className="font-light text-[12px] w-fit">
                {userInfo.username}
              </div>
            </div>
            <Image
              alt="User avatar"
              src={userAvatar}
              width={46}
              height={46}
              className="ml-[16px]"
            />
            <Image
              alt="Icon down"
              src={iconDown}
              width={20}
              height={20}
              className="ml-[8px]"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AdminHeader;
