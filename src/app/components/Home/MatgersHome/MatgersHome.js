"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import styles from "@/app/page.module.css";
import ProductCard from "../../ProductCard/ProductCard";
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
const MatgersHome = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 200,
    centerPadding: "60px",
    autoplay: false,
    autoplaySpeed: 2000,
    // cssEase: "linear",
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
    <div
      className={styles.SlMatgerHomeick_Product}
      style={{ margin: "60px 0px" }}
      id="SlMatgerHomeick_Product"
    >
      <Container  >
        
        <h2 className="Main_title">
        منتجات مقترحه
        </h2>
        <Slider {...settings} className="MarketsData_slick">
            <div className="card_products">
              <ProductCard />
            </div>
            <div className="card_products">
              <ProductCard />
            </div>
            <div className="card_products">
              <ProductCard />
            </div>
            <div className="card_products">
              <ProductCard />
            </div>
            <div className="card_products">
              <ProductCard />
            </div>
            <div className="card_products">
              <ProductCard />
            </div>
            
        </Slider>
      </Container>
    </div>
  );
};

export default MatgersHome;
