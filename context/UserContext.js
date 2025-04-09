import { createContext, useContext, useState, useEffect } from "react";
import { getSession, getAccessToken } from "@/services/authServices";
import { getUserByProfile } from "@/services/userServices";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const session = await getSession();
      const accessToken = await getAccessToken();
      if (session) {
        const data = await getUserByProfile(accessToken);
        setUserInfo(data);
      }
    };
    fetchUserInfo();
  }, []);

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
