"use client";
import React, { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
 
import "swiper/css";
import product from "../../../public/Gaming-Computer-PNG-Image.png";
import styles from "@/app/page.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";


import {
  FaAngleLeft,
  FaRegHeart,
  FaRegUserCircle,
  FaStar,
} from "react-icons/fa";
import ProductCard from "../components/ProductCard/ProductCard";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

 
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={`${styles.Arrow} ${styles.NextArrow}`} onClick={onClick}>
      <MdKeyboardArrowRight />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={`${styles.Arrow} ${styles.PrevArrow}`} onClick={onClick}>
      <MdKeyboardArrowLeft />
    </div>
  );
};

const Product = () => {
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [value2, setValue2] = useState(1);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 200,
    centerPadding: "60px",
    autoplay: false,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    initialSlide: 0,
    rtl: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container style={{ maxWidth: "1800px" }}>
      <div className="BreadCrumb">
        <a className="home_a" href="/">
          موارد غذائية
        </a>
        <div className="FaAngleLeft home_a">
          <FaAngleLeft />
        </div>
        <span className="">الحليب واللبن</span>
      </div>
      <Row className="align-items-center">
        <Col md={5} className="RightProducts">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <Image
                loading="lazy"
                src={product}
                alt="Image"
                width={300}
                height={300}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                loading="lazy"
                src={product}
                alt="Image"
                width={300}
                height={300}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                loading="lazy"
                src={product}
                alt="Image"
                width={300}
                height={300}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                loading="lazy"
                src={product}
                alt="Image"
                width={300}
                height={300}
              />
            </SwiperSlide>
           
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
        
            <SwiperSlide>
              <Image
                loading="lazy"
                src={product}
                alt=""
                width={90}
                height={80}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                loading="lazy"
                src={product}
                alt=""
                width={90}
                height={80}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                loading="lazy"
                src={product}
                alt=""
                width={90}
                height={80}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                loading="lazy"
                src={product}
                alt=""
                width={90}
                height={80}
              />
            </SwiperSlide>
          </Swiper>
        </Col>
        <Col md={7} className="leftProducts">
          <div className="heart-card">
            <FaRegHeart />
          </div>
          <div className="productData_name">
            <h2 className="pb-3">المراعي لبن كامل الدسم</h2>
            <h3 className="pb-3"> - 1 لتر</h3>
            <h2 className="price">
              50.00 <span>جنيه</span>
            </h2>
            <button class="btnAddCart mt-4" >
              
اضافة إلى السلة
            </button>
          </div>
        </Col>
      </Row>

      <div className="reviewContent">
        <h6 className="title">تفاصيل المنتج</h6>
        <p className="p pt-3">
          لبن المراعي كامل الدسم يأتي في عبوة سعة 1 لتر. هذا النوع من اللبن
          يُعتبر خيارًا ممتازًا لمن يبحث عن طعم غني وقوام كريمي. يحتوي لبن
          المراعي كامل <br />
          الدسم على العديد من العناصر الغذائية المهمة مثل الكالسيوم، البروتين،
          والفيتامينات.الفوائد:مصدر غني بالكالسيوم: يساعد في تعزيز <br /> صحة
          العظام والأسنان.مصدر للبروتين: يساهم في بناء العضلات وتجديد الأنسجة.
          الفيتامينات: يحتوي على فيتامينات مهمة مثل فيتامين D وفيتامين B12.
        </p>
        <hr className="hr" />
        <h6 className="title ">تفاصيل المنتج</h6>
        <p className="p pt-3">
          لبن المراعي كامل الدسم يأتي في عبوة سعة 1 لتر. هذا النوع من اللبن
          يُعتبر خيارًا ممتازًا لمن يبحث عن طعم غني وقوام كريمي. يحتوي لبن
          المراعي كامل <br />
          الدسم على العديد من العناصر الغذائية المهمة مثل الكالسيوم، البروتين،
          والفيتامينات.الفوائد:مصدر غني بالكالسيوم: يساعد في تعزيز <br /> صحة
          العظام والأسنان.مصدر للبروتين: يساهم في بناء العضلات وتجديد الأنسجة.
          الفيتامينات: يحتوي على فيتامينات مهمة مثل فيتامين D وفيتامين B12.
        </p>
      </div>

      <Row className="reviewContent">
        <Col md={6}>
          <div className="review">
            <div className="icon">
              <FaRegUserCircle />
            </div>
            <div className="flex-user">
              <div className="star-products">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h6> 5 سبتمبر 2015</h6>
              <h5>
                اشتريتة من موقع فاتورتى وبجد كل حاجة وصلتنى تمام بدون اى مشاكل
                والتوصيل كان سريع جدا
              </h5>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="review">
            <div className="icon">
              <FaRegUserCircle />
            </div>
            <div className="flex-user">
              <div className="star-products">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h6> 5 سبتمبر 2015</h6>
              <h5>
                اشتريتة من موقع فاتورتى وبجد كل حاجة وصلتنى تمام بدون اى مشاكل
                والتوصيل كان سريع جدا
              </h5>
            </div>
          </div>
        </Col>
        <hr className="hr" />
        <Col md={6}>
          <div className="review">
            <div className="icon">
              <FaRegUserCircle />
            </div>
            <div className="flex-user">
              <div className="star-products">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h6> 5 سبتمبر 2015</h6>
              <h5>
                اشتريتة من موقع فاتورتى وبجد كل حاجة وصلتنى تمام بدون اى مشاكل
                والتوصيل كان سريع جدا
              </h5>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="review">
            <div className="icon">
              <FaRegUserCircle />
            </div>
            <div className="flex-user">
              <div className="star-products">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h6> 5 سبتمبر 2015</h6>
              <h5>
                اشتريتة من موقع فاتورتى وبجد كل حاجة وصلتنى تمام بدون اى مشاكل
                والتوصيل كان سريع جدا
              </h5>
            </div>
          </div>
        </Col>
      </Row>

      <textarea
        rows="4"
        cols="50"
        className="textarea"
        placeholder="   اضف تعليقك..."
      ></textarea>

      <div className="productsSimilar" style={{ padding: "60px 0 60px 0" }}>
        <h2 className="Main_title">منتجات مشابها</h2>
        <Slider {...settings} className="MarketsData_slick">
          {[...Array(6)].map((_, index) => (
            <div className="card_products" key={index}>
              <ProductCard />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Product;
