"use client";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "@/app/page.module.css";

import image_1 from "../../../../../public/hero.png";
import Image from "next/image";

const HomeHeader = () => {
  return (
    <div className="HomeHero">
      <Container fluid>
        <div class="slides">
          <div class="slide slide-1">
            <Image
              src={image_1}
              alt={"name"}
              loading="lazy"
              width={1400}
              height={460}
              className="imgHero w-100"
            />
          </div>
          <div class="slide slide-2">
            <Image
              src={image_1}
              alt={"name"}
              loading="lazy"
              width={1400}
              height={460}
              className="imgHero w-100"
            />
          </div>
          <div class="slide slide-3">
            <Image
              src={image_1}
              alt={"name"}
              loading="lazy"
              width={1400}
              height={460}
              className="imgHero w-100"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeHeader;
