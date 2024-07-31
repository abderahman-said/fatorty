"use client";
import React, { useState } from "react";
import styles from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import product from "../../../../public/product.png";
import { MdAdd } from "react-icons/md";
import { InputNumber } from "primereact/inputnumber";

const ProductCard = () => {
  const [value2, setValue2] = useState(1);

  return (
    <>
      <div className="ProductCard">
        <Link href={`/product`} className="IMG_CARD_CATEGORY">
          <Image
            src={product}
            alt={"ProductName"}
            width={500}
            height={500}
            className={styles.logo}
          />
        </Link>
        <h3>دوف غسول اليدين، مرطب، 500 مل -</h3>
        <div className="d-flex align-items-center justify-content-between">
          <h5 className=" ">25.00جنية</h5>
          <p className="price">40.00جنية</p>
        </div>
        <div className="icon_add">
          <span>اضافة</span>
          <InputNumber
            inputId="horizontal-buttons"
            value={value2}
            onValueChange={(e) => setValue2(e.value)}
            showButtons
            buttonLayout="horizontal"
            step={1}
            decrementButtonClassName="p-button-danger"
            incrementButtonClassName="p-button-success"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
          />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
