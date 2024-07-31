"use client";

import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Password } from "primereact/password";
 
import React, { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Tooltip } from "primereact/tooltip";
import { Tag } from "primereact/tag";
 

export default function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const toast = useRef(null);
  const [totalSize, setTotalSize] = useState(0);
  const fileUploadRef = useRef(null);

  const onTemplateSelect = (e) => {
    let _totalSize = totalSize;
    let files = e.files;

    Object.keys(files).forEach((key) => {
      _totalSize += files[key].size || 0;
    });

    setTotalSize(_totalSize);
  };

  const onTemplateUpload = (e) => {
    let _totalSize = 0;

    e.files.forEach((file) => {
      _totalSize += file.size || 0;
    });

    setTotalSize(_totalSize);
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };

  const onTemplateRemove = (file, callback) => {
    setTotalSize(totalSize - file.size);
    callback();
  };

  const onTemplateClear = () => {
    setTotalSize(0);
  };

  const headerTemplate = (options) => {
    const { className, chooseButton, uploadButton, cancelButton } = options;
    const value = totalSize / 10000;
    const formatedValue =
      fileUploadRef && fileUploadRef.current
        ? fileUploadRef.current.formatSize(totalSize)
        : "0 B";

    return (
      <div
        className={className}
        style={{
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
        }}
      >
        {chooseButton}
        {uploadButton}
        {cancelButton}
        <div className="flex align-items-center gap-3 ml-auto">
          <span>{formatedValue} / 1 MB</span>
          <ProgressBar
            value={value}
            showValue={false}
            style={{ width: "10rem", height: "12px" }}
          ></ProgressBar>
        </div>
      </div>
    );
  };

  const itemTemplate = (file, props) => {
    return (
      <div className="flex align-items-center flex-wrap">
        <div className="flex align-items-center" style={{ width: "40%" }}>
          <img
            alt={file.name}
            role="presentation"
            src={file.objectURL}
            width={100}
          />
          <span className="flex flex-column text-left ml-3">
            {file.name}
            <small>{new Date().toLocaleDateString()}</small>
          </span>
        </div>
        <Tag
          value={props.formatSize}
          severity="warning"
          className="px-3 py-2"
        />
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-outlined p-button-rounded p-button-danger ml-auto"
          onClick={() => onTemplateRemove(file, props.onRemove)}
        />
      </div>
    );
  };

  const emptyTemplate = () => {
    return (
      <div className="flex align-items-center flex-column">
        <i
          className="pi pi-image  p-5"
          style={{
            fontSize: "5em",
            borderRadius: "50%",
            backgroundColor: "var(--surface-b)",
            color: "var(--surface-d)",
          }}
        ></i>
        <span
          style={{ fontSize: "1.2em", color: "var(--text-color-secondary)" }}
          className="my-2"
        >
          Drag and Drop Image Here
        </span>
      </div>
    );
  };

  const chooseOptions = {
    icon: "pi pi-fw pi-images",
    iconOnly: true,
    className: "custom-choose-btn p-button-rounded p-button-outlined",
  };
  const uploadOptions = {
    icon: "pi pi-fw pi-cloud-upload",
    iconOnly: true,
    className:
      "custom-upload-btn p-button-success p-button-rounded p-button-outlined",
  };
  const cancelOptions = {
    icon: "pi pi-fw pi-times",
    iconOnly: true,
    className:
      "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined",
  };

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
                <h3>اضافة عميل</h3>
                <FaAngleLeft />
              </div>

              <form>
                <Row>
                  <Col md={12}>
                    <div className="flex flex-column gap-2 div_input">
                      <label htmlFor="username">رقم الهاتف</label>
                      <input placeholder="رقم الهاتف" type="number" className="input" id="username" required />

                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="flex flex-column gap-2 div_input">
                      <label htmlFor="username">الرقم السرى</label>
                      <input placeholder="******" type="password" className="input" id="username" required />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="flex flex-column gap-2 div_input">
                      <label htmlFor="username">تاكيد الرقم السرى</label>
                      <input placeholder="******" type="password" className="input" id="username" required />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="flex flex-column gap-2 div_input">
                      <label htmlFor="username">اسم المحل</label>
                      <input placeholder="اسم المحل" type="text" className="input" id="username" required />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="flex flex-column gap-2 div_input">
                      <label htmlFor="username">اسم العميل</label>
                       <input placeholder="اسم العميل" type="text" className="input" id="username" required />
                      </div>
                  </Col>
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
                  <Col md={12}>
                    <div className="flex flex-column gap-2 div_input">
                      <label htmlFor="username"> </label>
                       <input placeholder="  العنوان" type="text" className="input" id="username" required />
                       </div>
                  </Col>
                  <Col md={12}>
                    <div className="flex flex-column gap-2 div_input">
                      <label htmlFor="username">نطاق التغطيه </label>
                       <input placeholder="  نطاق التغطيه" type="text" className="input" id="username" required />
                       </div>
                  </Col>
                  <Col md={12}>
                    <div className="upload_img">
                      <Toast ref={toast}></Toast>

                      <Tooltip
                        target=".custom-choose-btn"
                        content="Choose"
                        position="bottom"
                      />
                      <Tooltip
                        target=".custom-upload-btn"
                        content="Upload"
                        position="bottom"
                      />
                      <Tooltip
                        target=".custom-cancel-btn"
                        content="Clear"
                        position="bottom"
                      />

                      <FileUpload
                        ref={fileUploadRef}
                        name="demo[]"
                        url="/api/upload"
                        multiple
                        accept="image/*"
                        maxFileSize={1000000}
                        onUpload={onTemplateUpload}
                        onSelect={onTemplateSelect}
                        onError={onTemplateClear}
                        onClear={onTemplateClear}
                        headerTemplate={headerTemplate}
                        itemTemplate={itemTemplate}
                        emptyTemplate={emptyTemplate}
                        chooseOptions={chooseOptions}
                        uploadOptions={uploadOptions}
                        cancelOptions={cancelOptions}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="flex flex-column gap-2 div_input">
                      <label htmlFor="username">كود العميل </label>
                        <input placeholder="كود العميل" type="text" className="input" id="username" required />
                       </div>
                  </Col>
                  <Col md={6}>
                    <div className="flex flex-column gap-2 div_input">
                      <label htmlFor="username"> الحد الادنى </label>
                         <input placeholder="الحد الادنى" type="text" className="input" id="username" required />
                        </div>
                  </Col>
                  <button type="submit" className="btn_b mt-4 mb-4">
                    اضافة عميل
                  </button>
                </Row>
              </form>

              <div className="div_market">
                <Row>
                  <Col md={8}>
                    <h4>ماركت ابو ياسين</h4>
                  </Col>
                  <Col md={4}>
                    <div className="d-flex align-items-center gap-3">
                      <button type="submit" className="btn_b  ">
                        تعديل
                      </button>
                      <button type="submit" className="btn_red ">
                        حذف
                      </button>
                    </div>
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
 