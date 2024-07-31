"use client";

import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";
 
import React, {   useState } from "react";
 

export default function App() {
 
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

           

              <div className="fatora">
                <Row className="p-0 m-0">
                  <Col md={6} className="p-0">
                    <ul className="right">
                      <li>عدد الفوتير المطلوبه </li>
                      <li>عدد الفوتير المطلوبه </li>
                      <li>عدد الفوتير المطلوبه </li>
                      <li>عدد الفوتير المطلوبه </li>
                      <li>عدد الفوتير المطلوبه </li>
                      <li>عدد الفوتير المطلوبه </li>
                      <li>عدد الفوتير المطلوبه </li>
                      <li>عدد الفوتير المطلوبه </li>
                    </ul>
                  </Col>
                  <Col md={6} className="p-0">
                    <ul className="left">
                      <li>عدد الفوتير المطلوبه </li>
                      <li>عدد الفوتير المطلوبه </li>
                      <li>عدد الفوتير المطلوبه </li>
                      <li>عدد الفوتير المطلوبه </li>
                      <li>عدد الفوتير المطلوبه </li>
                      <li>عدد الفوتير المطلوبه </li>
                      <li>عدد الفوتير المطلوبه </li>
                      <li>عدد الفوتير المطلوبه </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
