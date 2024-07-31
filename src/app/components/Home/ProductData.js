import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import LazyLoad from "react-lazyload";
import Link from "next/link";
import styles from "@/app/page.module.css";
import ProductCard from "../ProductCard/ProductCard";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={`${styles.Arrow} ${styles.NextArrow}`} onClick={onClick}>
      <MdKeyboardArrowRight />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={`${styles.Arrow} ${styles.PrevArrow}`} onClick={onClick}>
      <MdKeyboardArrowLeft />
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  speed: 200,
  centerPadding: "60px",
  swipeToSlide: true,
  initialSlide: 0,
  slidesToShow: 6,
  rtl: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const ProductDataComponent = ({ catId }) => {
  const [productData, setProductData] = useState([]);
  const [catData, setCatData] = useState(null);

  useEffect(() => {
    const fetchProductsForCategory = async () => {
      const res = await fetch(`${baseUrl}/rest/rest.matgar/getCategoryDetailsLite`, {
        method: "POST",
        body: JSON.stringify({
          catId: catId,
          userId: 0,
          pageId: 0,
        }),
        cache: "no-store",
        headers: {
          "Access-Control-Allow-Headers": "X-Custom-Header, Upgrade-Insecure-Requests",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setProductData(data.products);
      setCatData(data);
    };

    fetchProductsForCategory();
  }, [catId]);

  if (!catData) return null;

  return (
    <div className="row d-flex align-items-center text-center">
      <div className="col-md-12 col-12">
        <div
          style={{
            backgroundColor: "#f9f9f9",
            padding: "20px",
            margin: "50px 0px",
            display: "flex",
            justifyContent: "space-between",
          }}
          className="mb-3"
        >
          <div>
            <Link href={`/category/${catData.id}/${catData.name}`} style={{ padding: "0px 10px" }}>
              {catData.name}
            </Link>
          </div>
        </div>
        <div className="cat_data_cats">
          {catData.cats.length > 0 &&
            catData.cats.map((cat) => (
              <div key={cat.id} style={{ margin: "0px 20px" }}>
                <Link href={`/category/${cat.id}/${cat.name.replace(/\s/g, "-")}`}>
                  {cat.name}
                </Link>
              </div>
            ))}
        </div>
        <LazyLoad height={"400px"} once>
          <Slider {...settings}>
            {productData.map((item, id) => (
              <Link href={`/product/${item.id}/${item.name.replace(/\s/g, "-")}`} key={id}>
                <ProductCard
                  key={id}
                  CatName={item.catName}
                  ProductName={item.name}
                  image={item && item.images[0]}
                  Rate={5}
                  id={item.id}
                  matgarId={item.matgarId}
                  pathName={item.name.replace(/\s/g, "-")}
                  MarketImage={item && item.matgarLogo}
                  matgarName={item.matgarName}
                  Goto={"product"}
                  className={styles.Slick_Product}
                />
              </Link>
            ))}
          </Slider>
        </LazyLoad>
      </div>
    </div>
  );
};

export default ProductDataComponent;
