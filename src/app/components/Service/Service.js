"use client"
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoMdSettings } from "react-icons/io";
import { RiVisaLine } from "react-icons/ri";
import { MdLocalGroceryStore, MdOutlinePayment, MdOutlineRestore } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import styles from "@/app/page.module.css"
import { FaPhone, FaPhoneVolume } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
const Service = () => {
  return (
    <div  className={styles.service}>
      <Container>
        <Row className={styles.service_row}>
          <Col>
            
          </Col>
         
          <Col>
            <div className="column_content">
            <MdLocalGroceryStore />
              <div className={styles.info}>
                <p>سلة
                طلبات</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="column_content">
            <MdOutlinePayment />

              <div className={styles.info}>
                <p>فواتير</p>
              </div>
            </div>
          </Col>
          <Col>
           
           </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
