"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../../../public/logoo.png";

import "react-lazy-load-image-component/src/effects/blur.css";
import { FaCcAmazonPay, FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { TbBrandVisa } from "react-icons/tb";
import { RiMastercardLine } from "react-icons/ri";
 
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="Footer_yell">
          <Container>
            <Row className="text-center footer-row">
              <Col md={4} className="column-footer">
                <ul className="SouqImage_container">
                  <div className="">
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
                  <li>
                    <div className="Souq_Links">
                      <FaFacebookF />
                      <BsTwitter />
                      <AiFillInstagram />
                    </div>
                  </li>
                </ul>
              </Col>
              <Col md={2} className="column-footer">
                <h3> عن فاتورتى</h3>

                <ul>
                  <li>
                    <Link href={"/"}> من نحن</Link>{" "}
                  </li>
                  <li>
                    <Link href={"/"}>فروعنا</Link>{" "}
                  </li>
                </ul>
              </Col>

              <Col md={2} className="column-footer">
                <h3> المزيد </h3>

                <ul>
                  <li>
                    <Link href={"ظ"}>الإرجاع والاستبدال</Link>
                  </li>
                  <li>
                    <Link href={"/"}>الشروط والأحكام</Link>
                  </li>
                  <li>
                    <Link href={"/"}>سياسة الخصوصية</Link>
                  </li>
                </ul>
              </Col>
              <Col md={4} className="column-footer">
                <h3> اشتراك </h3>
                <p className=" ">اشترك الان لمزيد من العروض والخصومات والقائمة البريدية</p>
                <form class="search" action="#" id="myForm">
                  <input
                    placeholder="ادخل بريدك الالكترونى..."
                    class="search__input"
                    id="search__input"
                    type="email"
                    fdprocessedid="c5k4w"
                  />
                  <button
                    type="submit"
                    class="mic__button"
                    id="submit_foot"
                    fdprocessedid="j4w1bs"
                  >
                    اشتراك
                  </button>
                </form>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="Footer_yell2">
          <Container>
              <div className="rights-container">
                <div className="icon_footer">
                  <TbBrandVisa />
                  <RiMastercardLine />
                  <FaCcAmazonPay />
                </div>
                <h2 className="text-center">@All rights reserved to Deltawy</h2>
              </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Footer;
