"use client";
import React, { useEffect, useState } from "react";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { FiMenu } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "@/app/page.module.css";
import Link from "next/link";
const SearchHesder = (res) => {
  return (
    <div
      className={styles.HomeHeader}
      style={{ width: "100%" }}
      id="HomeHeaderSH"
    >
      <div className={styles.search_section}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="ابحث عن المنتجات و العلامات التجارية و الفئات"
        />
        <button
          type="submit"
          htmlFor="search"
          className={styles.byt}
        >
          <Link href={"/shop"}>
            <BsSearch style={{ color: "#000" }} />
          </Link>
        </button>
        
      </div>
    </div>
  );
};

export default SearchHesder;
