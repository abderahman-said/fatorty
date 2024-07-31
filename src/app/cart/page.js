"use client";
import React from "react";

import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import pro from "../../../public/Gaming-Computer-PNG-Image.png";
 
import style from "@/app/page.module.css";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";

function Card() {
  const TotalPrice = (
    <div className="TotlaPrice">
      <h3>تفاصيل الطلب</h3>
      <div>
        <p> سعر المنتجات
        </p>
        <p>50.00 جنية
        </p>
      </div>
      <div>
        <p>سعر الشحن
        </p>
        <p>15 ج</p>
      </div>
      <div >
        <p style={{fontWeight:"bold"}}>الاجمالي</p>
        <p>0</p>
      </div>
      <button className="btn_b mx-auto mt-4">حفظ</button>

    </div>
  );

  return (
    <Container className="cardSala">
      <Row>
        <Col md={8}>
          <div className="item_info_gap">
            <div>
            <h2 className="pb-2 h2">عربة التسوق</h2>
            <p class="p">لديك ١ منتج في عربة التسوق الخاصة بك</p>
            </div>
            <div className="item_product">
              <div className="item_info_container">
                <div className="Card_image">
                  <Image src={pro} alt={"img"} width={150} height={150} />
                </div>
                <div className="item_info">
                  <h3>المراعي لبن كامل الدسم</h3>
                  <p> - 1 لتر</p>
                </div>
              </div>

              <div className="leftTotalPrice">
                <div className="delete_product">
                  <RiDeleteBin6Line />
                </div>
                <h2 className="price">50.00 جنيه</h2>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4}>
          {TotalPrice}
        </Col>
      </Row>
    </Container>
  );
}

export default Card;
