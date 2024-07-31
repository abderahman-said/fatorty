"use client";

import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";
 import { Calendar } from "primereact/calendar";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";

import React, {   useState } from "react";
 
export default function App() {
  const [date, setDate] = useState(null);

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
                <h3> فواتير منفذه      </h3>
                <FaAngleLeft />
              </div>

              <form>
                <Row>
                  <Col md={6}>
                    <div className="flex flex-column gap-2 div_input">
                      <label
                        htmlFor="buttondisplay"
                        className="font-bold block mb-2"
                      >
                        الفواتير من
                      </label>
                      <Calendar
                        id="buttondisplay"
                        value={date}
                        onChange={(e) => setDate(e.value)}
                        showIcon
                      />
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="flex flex-column gap-2 div_input">
                      <label
                        htmlFor="buttondisplay"
                        className="font-bold block mb-2"
                      >
                        الى
                      </label>

                      <Calendar
                        value={date}
                        onChange={(e) => setDate(e.value)}
                        showIcon
                      />
                    </div>
                  </Col>

                  <Col md={12}>
                    <div className="flex flex-column gap-2 div_input">
                      <label htmlFor="username">البحث حسب التاجر </label>
                <input placeholder="البحث حسب التاجر  " type="text" className="input" id="username" required />

                    </div>
                  </Col>

                  <button type="submit" className="btn_b mt-4 mb-4">
                  بحث
                  </button>
                </Row>
              </form>

              <h4 className="text-center h4 pt-5 pb-5">اسم العميل : عبدالله  حسن </h4>

              <div className="fatora w_fit">
                <Row className="p-0 m-0">
                  <Col md={12} className="p-0">
                  <ul className="right">
                      <li className="text-center">فاتوره رقم 3244 بتاريج 03-43-2022 وقيمه 4342.44 جنيه تنفيذ5643.00  </li>
                      <li className="text-center">فاتوره رقم 3244 بتاريج 03-43-2022 وقيمه 4342.44 جنيه تنفيذ5643.00  </li>
                      <li className="text-center">فاتوره رقم 3244 بتاريج 03-43-2022 وقيمه 4342.44 جنيه تنفيذ5643.00  </li>
                      <li className="text-center">فاتوره رقم 3244 بتاريج 03-43-2022 وقيمه 4342.44 جنيه تنفيذ5643.00  </li>
                      <li className="text-center">فاتوره رقم 3244 بتاريج 03-43-2022 وقيمه 4342.44 جنيه تنفيذ5643.00  </li>
                      <li className="text-center">فاتوره رقم 3244 بتاريج 03-43-2022 وقيمه 4342.44 جنيه تنفيذ5643.00  </li>

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

 
