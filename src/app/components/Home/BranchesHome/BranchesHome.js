"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Slider from "react-slick";
import styles from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import product from "../../../../../public/Gaming-Computer-PNG-Image.png";
const BranchesHome = () => {
  return (
    <div className="mt-5" >
      <Container className="mt-5">
        <Row>
        <Col md={3}>
          <div className="card_cat">
            <Link href={`/product/`} className="IMG_CARD_CATEGORY">
              <Image
                src={product}
                alt={"ProductName"}
                width={200}
                height={200}
                className={styles.logo}
              />
            </Link>
            <h3> مفروشات</h3>
          </div>
        </Col>
        <Col md={3}>
          <div className="card_cat">
            <Link href={`/product/`} className="IMG_CARD_CATEGORY">
              <Image
                src={product}
                alt={"ProductName"}
                width={200}
                height={200}
                className={styles.logo}
              />
            </Link>
            <h3> مفروشات</h3>
          </div>
        </Col>
        <Col md={3}>
          <div className="card_cat">
            <Link href={`/product/`} className="IMG_CARD_CATEGORY">
              <Image
                src={product}
                alt={"ProductName"}
                width={200}
                height={200}
                className={styles.logo}
              />
            </Link>
            <h3> مفروشات</h3>
          </div>
        </Col>
        <Col md={3}>
          <div className="card_cat">
            <Link href={`/product/`} className="IMG_CARD_CATEGORY">
              <Image
                src={product}
                alt={"ProductName"}
                width={200}
                height={200}
                className={styles.logo}
              />
            </Link>
            <h3> مفروشات</h3>
          </div>
        </Col>
        <Col md={3}>
          <div className="card_cat">
            <Link href={`/product/`} className="IMG_CARD_CATEGORY">
              <Image
                src={product}
                alt={"ProductName"}
                width={200}
                height={200}
                className={styles.logo}
              />
            </Link>
            <h3> مفروشات</h3>
          </div>
        </Col>
        <Col md={3}>
          <div className="card_cat">
            <Link href={`/product/`} className="IMG_CARD_CATEGORY">
              <Image
                src={product}
                alt={"ProductName"}
                width={200}
                height={200}
                className={styles.logo}
              />
            </Link>
            <h3> مفروشات</h3>
          </div>
        </Col>
        <Col md={3}>
          <div className="card_cat">
            <Link href={`/product/`} className="IMG_CARD_CATEGORY">
              <Image
                src={product}
                alt={"ProductName"}
                width={200}
                height={200}
                className={styles.logo}
              />
            </Link>
            <h3> مفروشات</h3>
          </div>
        </Col>
        <Col md={3}>
          <div className="card_cat">
            <Link href={`/product/`} className="IMG_CARD_CATEGORY">
              <Image
                src={product}
                alt={"ProductName"}
                width={200}
                height={200}
                className={styles.logo}
              />
            </Link>
            <h3> مفروشات</h3>
          </div>
        </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BranchesHome;
