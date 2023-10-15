import React, { useEffect, useState } from "react";
import MineHeader from "./components/MineHeader";
import MineTop from "./components/MineTop";
import MineInf from "./components/MineInf";
import MineNav from "./components/MineNav";
import Footer from "../FooterRouters";
import { useRequest } from "ahooks";
import { getUserAccount, getUserDetail } from "@/request";

export default function Mine() {
  const { data: UserAccounts } = useRequest(() => getUserAccount()); //账户信息
  const [userInf, setUserInf] = useState();
  useEffect(() => {
    if (UserAccounts?.data) {
      getUserDetail(UserAccounts?.data.account.id)
        .then((res) => setUserInf(res.data))
        .catch((err) => console.log(err));
    }
    // console.log(UserDetails);
  }, [UserAccounts?.data]);
  return userInf ? (
    <div className=" w-screen mb-[15vw] bg-[#F5F5F5]">
      {/* {console.log(userInf)} */}
      <MineTop />
      <MineHeader />
      <MineInf data={userInf} />
      <MineNav data={userInf} />
      <Footer />
    </div>
  ) : null;
}
