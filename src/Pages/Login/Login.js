import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import logo1 from "../../Images/app_icon.png";
import logo2 from "../../Images/login_img.png";
import { Helmet } from "react-helmet";
import "./Login.css";
import config from "../../Context/serverProperties.json";

// toggles password input to hide sensitive input
function togglePassword() {
  var x = document.getElementById("password");
  var y = document.getElementById("eye-open");
  var z = document.getElementById("eye-close");

  if (x.type === "password") {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }
}

// login page
function Login() {
  const {
    handleSubmit,
    getFieldProps,
    touched,
    errors,
    handleBlur,
    handleChange,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      admin: false,
    },

    // validation for email and password
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .matches(/(?=.*[0-9])/, "Password must contain at least a number"),
    }),

    // to validate and reset the form
    onSubmit(values, { resetForm, setSubmitting }) {
      console.log("Submitting");
      console.log(values);
      setTimeout(() => {
        resetForm();
        setSubmitting(false);
      }, 2000);

      const data = {
        email: values.email,
        password: values.password,
        admin: values.admin,
      };

      // to validate user login, which uses an HTTP POST request to send login information
      axios
        .post(config["backend-url"] + "/api/v1/login/validateLogin", data, {
          auth: {
            username: "user",
            password: "password",
          },
        })
        .then((res) => {
          console.log(res);
          // check if the data return from database
          if (res.data != '') {
            console.log(res.data);
            window.localStorage.setItem("isLoggedIn", true);
            window.localStorage.setItem("userID", res.data.id);
            window.localStorage.setItem("currentEmail", res.data.email);
            window.localStorage.setItem("currentName", res.data.name);
            window.localStorage.setItem("isAdmin", res.data.admin);
            navigate("/DashBoard");
          } else {
            alert("Wrong account credentials, Please try again!");
          }
        })
        .catch((err) => {
          alert("Account does not exist. Please try again!");
          console.log(err);
        });
    },
  });

  // use for redirecting
  let navigate = useNavigate();

  return (
    <div className="login-background">
      <Helmet bodyAttributes={{ style: "background-color : #4869B2" }} />
    <div className="login-container">
      <section id="left-box">
        <img src={logo1} alt="Application Logo" id="app-logo" />
        <img src={logo2} alt="Example Img" id="example-img" />
        <h2 id="login-display-text">
          Monitor your business with our software.
        </h2>
        <h2 id="login-display-text">Powered by Apache Kafka.</h2>
      </section>
      <section id="right-box">
        <h1 id="login-title">Log in to WareEyes</h1>
        <Formik>
          <form onSubmit={handleSubmit}>
            <label id="admin-toggle">Admin Login</label>
            <label class="switch">
              <input name="admin" id="admin" type="checkbox" onChange={handleChange} />
              <span class="slider round"></span>
            </label>
            <label id="user-pwd" htmlFor="username">
              Username
            </label>
            <input
              name="email"
              type="email"
              id="username"
              placeholder="Enter username..."
              {...getFieldProps("email")}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
              className={errors.email && touched.email && "error"}
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
            <label id="user-pwd" htmlFor="password">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Enter password..."
              {...getFieldProps("password")}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
              className={errors.password && touched.password && "error"}
            />
            {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
            )}
            <span className="eye-main" onClick={togglePassword}>
              <i id="eye-open" className="fa fa-eye"></i>
              <i id="eye-close" className="fa fa-eye-slash"></i>
            </span>
            <p>
              <Link to={"/ForgetPassword"}>
                <p id="forgetpassword">Forgot password?</p>
              </Link>
            </p>
            <button id="login-btn" type="submit" disabled={isSubmitting}>
              {" "}
              {isSubmitting ? "Loading" : "Log in"}
            </button>
          </form>
        </Formik>
      </section>
    </div>
    </div>
  );
}

export default Login;
