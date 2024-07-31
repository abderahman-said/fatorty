"use client";

import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";
import img from "../../../public/Gaming-Computer-PNG-Image.png";
import React, { useRef, useState } from "react";

import Image from "next/image";
import { Dialog } from "primereact/dialog";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(7);
  const [value3, setValue3] = useState(54);
  const [value4, setValue4] = useState(90);


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
                <h3>المنتجات المعروضه</h3>
                <FaAngleLeft />
              </div>




              <div className="div_market div_market_products">
                <Row>
                  <Col md={3}>
                    <Image src={img} alt="" />
                  </Col>
                  <Col md={6}>
                    <div className="titlePro">
                      <h4>المراعى لبن كامل الدسم</h4>
                      <p>كيلو x 4 علبه</p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <button type="submit" className="btn_b  " onClick={() => setVisible(true)}>
                      اضافة منتج
                    </button>
                  </Col>
                </Row>
              </div>

              <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                <form>
                  <Row>

                    <Col md={12}>
                      <div className="flex flex-column gap-2 div_input">
                        <label htmlFor="value1">السعر</label>
                        <input placeholder="" type="number" value={value1} onValueChange={(e) => setValue1(e.value)} className="input" id="value1" required />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="flex flex-column gap-2 div_input">
                        <label htmlFor="value2">العرض</label>
                        <input placeholder="" type="number" value={value2} onValueChange={(e) => setValue2(e.value)} className="input" id="value2" required />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="flex flex-column gap-2 div_input">
                        <label htmlFor="value3">الكميه المتاحة</label>
                        <input placeholder="" type="number" value={value3} onValueChange={(e) => setValue3(e.value)} className="input" id="value3" required />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="flex flex-column gap-2 div_input">
                        <label htmlFor="value4">الحد الأقصى للشراء</label>
                        <input placeholder="" type="number" value={value4} onValueChange={(e) => setValue4(e.value)} className="input" id="value4" required />
                      </div>
                    </Col>
                    <div className="btn_flex">

                      <button type="button" className="btn_b  mt-0 ">
                        تأكيد
                      </button>
                      <button type="button" className="btn_red mt-0  ">
                        اغلاق
                      </button>
                    </div>
                  </Row>
                </form>
              </Dialog>

            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
