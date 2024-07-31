"use client";

import Link from "next/link";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";
import styles from "../page.module.css"
import React, { useRef, useState } from "react";
import { Slider } from "primereact/slider";

import ProductCard from "../components/ProductCard/ProductCard";

function Store() {
   const [value, setValue] = useState([20,80]);

 

  return (
    <>
      <Container fluid>
        <div class="BreadCrumb">
          <a class="home_a" href="/">
            الرئيسية
          </a>
          <div class="FaAngleLeft home_a"><FaAngleLeft />
          </div>
          <span class="">موارد غذائية</span>
        </div>
        <div class="radio-inputs">
          <label class="radio">
            <input type="radio" name="mortgageType" value="property" required />
            <span class="name">منتجات البان</span>
          </label>
          <label class="radio">
            <input type="radio" name="mortgageType" value="Existing" required />
            <span class="name"> لحوم وفراخ </span>
          </label>
          <label class="radio">
            <input type="radio" name="mortgageType" value="Existing" required />
            <span class="name"> منتجات غذائية </span>
          </label>
        </div>
        <Row className="pt-5">
          <Col md={3}>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header ><h3>السعر</h3></Accordion.Header>
                <Accordion.Body>


                <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" range />
                  
                  <div className="flex-range-price mt-3">

                    <div className="div">
                      {value[0]}
                    </div>

                    <div className="div">
                      {value[1]}
                    </div>


                  </div>


                </Accordion.Body>
              </Accordion.Item>

            </Accordion>


            <Accordion defaultActiveKey={['0']}  >
              <Accordion.Item >
                <Accordion.Header > <h3>التصنيفات</h3></Accordion.Header>
                <Accordion.Body>

                  <div className='Specs-flex'>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column"
                      }}
                    >

                      <div className={styles.tas}>
                        <label class="cyberpunk-checkbox-label">
                          <input type="checkbox" class="cyberpunk-checkbox" />
                          <span> منتجات البان</span>
                        </label>

                        <p> (131)</p>
                      </div>
                    </div>
                  </div>

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col md={9}>
            <Row>
              <Col md={3}>
                <ProductCard />
              </Col>
              <Col md={3}>
                <ProductCard />
              </Col>
              <Col md={3}>
                <ProductCard />
              </Col>
              <Col md={3}>
                <ProductCard />
              </Col>
 
              
            </Row>

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Store;
