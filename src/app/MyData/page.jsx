"use client";

import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";
 
import React  from "react";
 

export default function App() {
  
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
                <h3>  بياناتى</h3>
                <FaAngleLeft />
              </div>

              <div className="fatora">
                <Row className="p-0 m-0">
                  <Col md={6} className="p-0">
                    <ul className="right">
                      <li>الصفة
                      </li>
                      <li>اسم العميل
                      </li>
                      <li>رقم التليفون
                      </li>
                      <li>اسم المحل
                      </li>
                      <li>المحافظة </li>
                      <li>المدينة
                      </li>
                      <li>العنوان
                      </li>
                      <li>التصنيف </li>
                      <li>نطاق التغطية
                      </li>
                      <li>الكود
                      </li>
                      <li>الحد الأدنى</li>

                    </ul>
                  </Col>
                  <Col md={6} className="p-0">
                    <ul className="left">
                      <li> الصفة
                      </li>
                      <li>ahmed rady  </li>
                      <li>01123034573 </li>
                      <li>ahmed </li>
                      <li>الغربيه </li>
                      <li>المحله </li>
                      <li>شارع الترعه
                      </li>
                      <li>1 </li>
                      <li>0</li>
                      <li>0</li>
                      <li>0</li>
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

 