import React, { useEffect, useRef, useState } from "react";
import { getLoginQrCKey, getLoginQrCreate, getLoginQrCheck } from "@/request";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
// import storejs from "storejs";
export default function Login() {
  const navigate = useNavigate();
  const QR = useRef("");
  const [status, setStatus] = useState();
  const uniKey = useRef("");
  const timer = useRef(null);
  const CheckScanStatus = () => {
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      getLoginQrCheck({ key: uniKey.current })
        .then((res) => {
          console.log(res.data.code);
          setStatus(res.data.code);
          if ([800, 803].includes(res.data.code)) clearInterval(timer);
          if (res.data.code === 803) navigate("/HomeView");
        })
        .catch(() => clearInterval(timer));
    }, 3000);
  };
  useEffect(() => {
    getLoginQrCKey()
      .then((res) => (uniKey.current = res.data.data.unikey)) //获取二维码
      .then((key) => getLoginQrCreate({ key, qrimg: true })) //获取传递图片
      .then((res) => (QR.current = res.data.data.qrimg)) //传递参数
      .then(() => CheckScanStatus()) //执行函数查看状态码
      .catch((err) => console.log(err));
    return () => clearInterval(timer.current);
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-between h-[100vh]
    bg-gradient-to-b from-[#fff] to-[#FCFCFE]"
    >
      <div className="flex flex-col items-center justify-between p-[5vw]">
        <div className="flex items-center justify-between w-[90vw]">
          <Icon icon="teenyicons:left-outline" width="5.6vw" height="5.6vw" />
          <span className="text-[4vw] text-[#838383]">游客登录</span>
        </div>
        <img
          src={"/static/logo.fill.svg"}
          alt=""
          className="w-[38vw] h-[7.2vw] mt-[15vw]"
        />
        <div className="p-[20vw] flex flex-col items-center">
          {[800, 801].includes(status) ? (
            <div className=" relative ">
              {status === 800 ? (
                <div className=" absolute flex items-center justify-center w-[100%] h-[100%] bg-[#fff] opacity-[.8]">
                  <div className="text-[4vw] px-[2vw] rounded-full bg-[#000] text-[#fff]">
                    二维码已失效
                  </div>
                </div>
              ) : null}
              <img src={QR.current} alt="" />
            </div>
          ) : null}
          {status === 802 ? (
            <div className="flex flex-col items-center">
              <img src="/public/login1.png" alt="" className="w-[39.2vw]" />
              <span className="text-[4.5vw] mt-[4vw] font-[700]">扫描成功</span>
              <span className="mt-[6vw] text-[3.5vw] font-[600]">
                请在手机上确认登录
              </span>
            </div>
          ) : null}
        </div>
      </div>
      <img src="/static/login.png" alt="" class="mt-[20vw]" />
    </div>
  );
}
