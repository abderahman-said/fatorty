"use client";
import React, { useState } from "react";
import styles from "@/app/page.module.css";
import { Container } from "react-bootstrap";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <form className="formLogin ">
        <h1 className={styles.mainHeading}>تسجيل الدخول </h1>
        <div className={styles.inputDiv}>
          <label htmlFor="name">اسم المستخدم</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="اسم المستخدم"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.inputDiv}>
          <label htmlFor="password"> كلمة السر</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="كلمة السر"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button name="login" type="submit" className={styles.submit_button}>
          تسجيل الدخول
        </button>
        <button className={styles.forget_Pass} name="forgetPass" type="button">
          هل نسيت كلمة السر ؟
        </button>
        <div className={styles.go_to_Register_Div}>
          <span>ليس لديك حساب ؟</span>
          <button
            className={styles.go_to_regPage_button}
            name="go_to_regPage_button"
            type="button"
          >
            انشاء حساب
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Login;
