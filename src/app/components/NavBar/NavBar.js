"use client";
import React, { useEffect, useState } from "react";
import {
  AiFillHome,
  AiOutlineShop,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RiArrowRightSLine, RiMenu4Line, RiWhatsappFill } from "react-icons/ri";
import { GrUserSettings } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { IoLogIn, IoPersonOutline } from "react-icons/io5";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Sidebar } from "primereact/sidebar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../../../public/logoo.png";
import { MdLocalOffer, MdProductionQuantityLimits } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import styles from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import SearchHesder from "../SearchHesder/SearchHesder";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

 

function OffCanvasExample({ ...props }, { getSouqLogin }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "700" : "normal",
      color: isActive ? "#253b70" : "#fff",
      fontSize: isActive ? "22px" : "20px",
    };
  };

  return (
    <div>
      <button
        onClick={toggleShow}
        className={styles.mobileButton}
        name="navbar"
        type="button"
      >
        <RiMenu4Line className="mobileIcon" />
      </button>
      <Offcanvas
        show={show}
        className={styles.dallel_canves}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ color: "#274160", fontWeight: "bold" }}>
            القائمة
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.Links_nav_container}>
            <Link
              onClick={() => {
                handleClose();
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
              }}
              className={`${styles.Navitem} ${styles.nav_link}`}
              style={navLinkStyles({ isActive: true })}
              href="/"
            >
              <AiFillHome />
              الرئيسية
            </Link>
            <Link
              onCLinklick={() => {
                handleClose();
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
              }}
              className={`${styles.Navitem} ${styles.nav_link}`}
              style={navLinkStyles({ isActive: true })}
              href="/offers"
            >
              <MdLocalOffer />
              العروض
            </Link>
            <Link
              onClick={() => {
                handleClose();
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
              }}
              className={`${styles.Navitem} ${styles.nav_link}`}
              style={navLinkStyles({ isActive: true })}
              href="/shop"
            >
              <MdProductionQuantityLimits />
              المتجر
            </Link>
            <Link
              onClick={() => {
                handleClose();
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
              }}
              className={`${styles.Navitem} ${styles.nav_link}`}
              style={navLinkStyles({ isActive: true })}
              href="/matgars"
            >
              <AiOutlineShop />
              المتاجر
            </Link>
            {getSouqLogin ? (
              <>
                <Link
                  className={`${styles.Navitem} ${styles.nav_link}`}
                  style={navLinkStyles({ isActive: true })}
                  href="/cp"
                  onClick={() => {
                    handleClose();
                    window.scrollTo({
                      top: 0,
                      left: 100,
                      behavior: "instant",
                    });
                  }}
                >
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#274160",
                      color: "#fff",
                      width: "100%",
                    }}
                  >
                    <GrUserSettings />
                    لوحه التحكم
                  </button>
                </Link>
                <Link
                  style={navLinkStyles({ isActive: true })}
                  href={"/"}
                  // onClick={() => {
                  //   dispatch(Logout());
                  //   dispatch(ClearCart());
                  // }}
                >
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#274160",
                      color: "#fff",
                      width: "100%",
                    }}
                  >
                    <IoLogIn />
                    تسجيل الدخول
                  </button>
                </Link>
              </>
            ) : (
              <Link
                style={navLinkStyles({ isActive: true })}
                href={"/login"}
                onClick={() => {
                  handleClose();
                  window.scrollTo({
                    top: 0,
                    left: 100,
                    behavior: "instant",
                  });
                }}
              >
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#274160",
                    color: "#fff",
                    width: "100%",
                  }}
                >
                  <IoLogIn />
                  تسجيل الدخول
                </button>
              </Link>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

const NavBar = () => {


  const [visibleTop, setVisibleTop] = useState(false);
  const [showNav2, setShowNav2] = useState(false);
  const [isNavBarCompTowVisible, setNavBarCompTowVisible] = useState(false);

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 159) {
        setIsFixed(true);
        document.body.style.paddingTop = "159px";
      } else {
        setIsFixed(false);
        document.body.style.paddingTop = "0";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

   

  return (
    <>
      <div className={isFixed ? "nav_2d nav_fixed" : "nav_2d"}>
        <div className="nav_2">
          <Container fluid>
            <Row className="align-items-center position-relative">
              <Col xs={12} md={5} className={styles.diff_col_screen2}>
                <div className="d-flex gap-4">
                  <Link
                    className="  nav_link_flex "
                    href="#"
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        left: 100,
                        behavior: "instant",
                      });
                    }}
                  >
                    <LuPhoneCall />
                    0109 653 0192
                  </Link>
                  <Link
                    className="  nav_link_flex "
                    href="#"
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        left: 100,
                        behavior: "instant",
                      });
                    }}
                  >
                    <HiOutlineMail />
                    info@Sobek-store.net
                  </Link>
                </div>
              </Col>
              <Col md={2}></Col>
              <Col xs={12} md={5} className="   d-md-flex">
                <div className="d-flex   me-auto nav_left">
                  <Link
                    className="nav_link_flex "
                    href="/"
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        left: 100,
                        behavior: "instant",
                      });
                    }}
                  >
                    الرئيسية
                  </Link>
                  <Link
                    className="nav_link_flex "
                    href="/shop"
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        left: 100,
                        behavior: "instant",
                      });
                    }}
                  >
                    المتجر
                  </Link>
                  <Link
                    className="nav_link_flex "
                    href="/cart"
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        left: 100,
                        behavior: "instant",
                      });
                    }}
                  >
                     السله
                  </Link>
                  
                  <Link
                    className="nav_link_flex"
                    href="/addClint"
                   
                  >
                     لوحة التحكم
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="nav_box_shadow">
          <Container fluid>
            <Sidebar
              visible={visibleTop}
              position="top"
              onHide={() => setVisibleTop(false)}
              className={styles.showfrist}
            >
              <form>
                <div className={`${styles.search_section}  d-flex`}>
                  <button
                    type="submit"
                    htmlFor="search"
                    className={styles.b_LOCK}
                  >
                    <Link href={"/shop"}>
                      {" "}
                      <BsSearch />
                    </Link>
                  </button>
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="ابحث عن المنتجات"
                  />
                </div>
              </form>
            </Sidebar>
            <div className={styles.NavBar} onClick={() => setShowNav2(true)}>
              <div className={`${styles.NavBarComp} ${styles.disFlex}`}>
                <div className=" d-sm-block d-lg-none">
                  {/* <OffCanvasExample
                      placement={"end"}
                      {...props}
                    /> */}
                </div>
                <div className={styles.Souq}>
                  <Link href="/">
                    <Image
                      src={logo}
                      alt="logo"
                      width={180}
                      height={75}
                      loading="lazy"
                    />
                  </Link>
                </div>
                
                <div
                  id="SearchHesder"
                  className={`${styles.NavList} ${styles.disFlex}`}
                  style={{ flexGrow: 1, justifyContent: "center" }}
                >
                  <SearchHesder />
                </div>
                <div className={styles.disFlex}>
                  <div className="felx_nav_2">
                    <Link href={"/login"} className="fav">
                      <RiWhatsappFill />
                      التواصل مع <br />
                      خدمه العملاء
                    </Link>
                    <Link href={"/login"} className="fav">
                      <FaRegUser />
                      تسجيل الدخول
                    </Link>

                    {/*  */}
                  </div>
                </div>
              </div>
              
            </div>
          </Container>
        </div>

        <Container fluid id="SearchHesder_phone">
          <div
            className={`${styles.NavList} ${styles.disFlex}`}
            style={{ flexGrow: 1, justifyContent: "center" }}
          >
            <SearchHesder />
          </div>
        </Container>
      </div>
    </>
  );
};

export default NavBar;
