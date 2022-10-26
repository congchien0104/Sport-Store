import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { IoLogoFacebook, IoLogoGoogle, IoLogoTwitter } from "react-icons/io";
import { Link, useHistory } from "react-router-dom";
import { loginAsync } from "../../apis/auths/login.api";
import { notifyError, notifySuccess } from "../../utils/notify";
import { signInSchema } from "../../validate/auth";
import "./style.scss";

interface SignInProps {}

export const SignIn = (props: SignInProps) => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });
  const submit = async (data: any, e: any) => {
    e.preventDefault();
    const result = await loginAsync(data);
    console.log(result);
    if ([200, 201].includes(result.statusCode)) {
      //Luu token
      localStorage.setItem("token", result.data.token);
      //Thong bao
      notifySuccess("Sign in success");
      //Chuyen trang
      history.push("/");
    } else {
      notifyError("Sign in fail");
    }
  };

  return (
    <div className="signInPage container">
      <div className="signInPage-form">
        <div className="signInPage-form-img">
          <img
            src="https://images.pexels.com/photos/2846814/pexels-photo-2846814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <form
          onSubmit={handleSubmit(submit)}
          className="signInPage-form-content"
        >
          <p>Đăng nhập tài khoản</p>
          <input
            type="text"
            {...register("phone")}
            id="phone"
            className="form-control"
            placeholder="Nhập địa chỉ email"
          />
          <p className="text-danger">{errors.phone?.message}</p>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="form-control"
            placeholder="Nhập mật khẩu"
          />
          <p className="text-danger">{errors.password?.message}</p>

          <button
            id="login"
            className="btn btn-block login-btn mb-4"
            type="submit"
            disabled={isSubmitting}
          >
            {!isSubmitting ? (
              "Đăng nhập"
            ) : (
              <span className="spinner-border spinner-border-sm"></span>
            )}
          </button>
          <Link to="/forgotpass">Quên mật khẩu ?</Link>
          <p></p>
          <p>
            Chưa có tài khoản ? <Link to="/signup">Đăng kí ở đây</Link>
          </p>
          <p>
            Đăng nhập với{" "}
            <a href="#">
              <IoLogoGoogle />
            </a>
            {""}{" "}
            <a href="#">
              <IoLogoFacebook />
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
