"use client";

import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";
import { Dropdown } from "primereact/dropdown";
 
 
 
 
  
import React, { useRef, useState } from "react";
 
export default function App() {

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const [totalSize, setTotalSize] = useState(0);
  

 
 

  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
          <div className="cpRight">
              <Link href={"/addAd"}>اضافه اعلان</Link>
              <Link href={"/productsNotShow"}>المنتجات غير المعروضه</Link>{" "}
              <Link href={"/products"}>المنتجات المعروضه</Link>
              <Link href={"/Confirm-pending-invoices"}>تاكيد الفواتير المعلقه</Link>
              <Link href={"/addProducts"}>اضافه منتجات</Link>
              <Link href={"/addClint"}>اضافه عملاء</Link>
              <Link href={"/Bills-executed"}>فواتير منفذه او قيد التنفيذ</Link>
              <Link href={"/Rejected-invoices"}>فواتير مرفوضه</Link>
              <Link href={"/Cancelled-invoices"}>فواتير ملغاه</Link>
              <Link href={"/rports"}>تقارير</Link>
              <Link href={"/addcity"}>اضافه مدينه</Link>
              <Link href={"/MyData"}>بياناتى</Link>
              <Link href={"/"}>تسجيل الخروج</Link>
            </div>
          </Col>
          <Col md={9}>
            <div className="cpLeft">
              <div className="d-flex div pb-4 justify-content-between align-items-center">
                <h3>اضافة مدينه</h3>
                <FaAngleLeft />
              </div>

              <form>
                <Row>
                   
                  <Col md={6}>
                    <div className="flex flex-column gap-2 div_input">
                      <label htmlFor="username">المحافظه </label>
                      <Dropdown
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.value)}
                        options={cities}
                        optionLabel="name"
                        placeholder=" "
                        className="w-full md:w-14rem"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="flex flex-column gap-2 div_input">
                      <label htmlFor="username">المدينه </label>
                      <Dropdown
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.value)}
                        options={cities}
                        optionLabel="name"
                        placeholder=" "
                        className="w-full md:w-14rem"
                      />
                    </div>
                  </Col>
                   
                  
                  <button type="submit" className="btn_b mt-5 ">
                    اضافة  
                  </button>
                </Row>
              </form>
 



            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

 
