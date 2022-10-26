import React, { useState } from "react";
import "./style.scss";
import avatar from "../../images/avatar.jpg";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { Badge } from "react-bootstrap";
import ModalChangeInfo from "./components/ModalChangInfo";
import ModalChangePass from "./components/ModalChangePass";
import axiosClient from "../../apis/clientAxios";
import useAuth from "../../stores/auth";

interface ProfilePageProps { }

export const ProfilePage = (props: ProfilePageProps) => {
  const [auth] = useAuth()
  const [open, setOpen] = useState(false);
  const handdleOpen = () => {
    setOpen(true);
  };
  const handdleCancel = () => {
    setOpen(false);
  };
  const [open2, setOpen2] = useState(false);
  const handdleOpen2 = () => {
    setOpen2(true);
  };
  const handdleCancel2 = () => {
    setOpen2(false);
  };
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const submit = async (data: any, e: any) => {
    e.preventDefault();
  };

  const onChangeImage = async (e: any) => {
    if(auth.user)
    {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      await axiosClient.put(`user/avatar/${(auth.user as any).id}`, formData);
      location.reload();
    }
  }

  return (
    <div className="profilePage container">
      <div className="profilePage-wrapper">
        <div className="profilePage-wrapper-headerBackground"></div>
        <input id="avatar" type={"file"} onChange={onChangeImage} hidden></input>
        <label htmlFor="avatar" className="profilePage-wrapper-avatar">
          <img src={(auth.user as any)?.avatar} alt="" />
        </label>
        <div className="profilePage-wrapper-bottomBackground">
          <div className="signInPage-form-content">
            <h3>
              Tên <span style={{ color: "#87CEFA" }}>{(auth.user as any)?.fullname||(auth.user as any)?.email||"Chưa cập nhật"}</span>
            </h3>

            <h3>
              SDT <span style={{ color: "#87CEFA" }}>{(auth.user as any)?.phone||"Chưa cập nhật"}</span>
            </h3>

            <button
              onClick={handdleOpen}
              id="changeinfo"
              className="btn btn-block login-btn mb-4"
              type="submit"
              style={{
                backgroundColor: "#00000",
                color: "#87CEFA",
                border: "2px solid #87CEFA"
              }}
            >
              Thay đổi thông tin 
            </button>
            <button
              onClick={handdleOpen2}
              id="changpassword"
              className="btn btn-block login-btn mb-4"
              type="submit"
              style={{
                backgroundColor: "#00000",
                color: "#87CEFA",
                border: "2px solid #87CEFA"
              }}
            >
              Thay đổi mật khẩu
            </button>
          </div>
          <ModalChangeInfo open={open} cancel={handdleCancel} />
          <ModalChangePass open2={open2} cancel2={handdleCancel2} />
        </div>
      </div>
    </div>
  );
};
