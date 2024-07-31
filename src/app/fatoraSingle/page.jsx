"use client";

import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";


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
              <h4 className="text-center h4 pt-5 pb-5">
                {" "}
                فاتوره رقم 3244 بتاريج 03-43-2022 وقيمه 4342.44 جنيه
                تنفيذ5643.00{" "}
              </h4>

              <div class="querieContainer">
                <div class="invoice-lines-container">
                  <table>
                    <thead>
                      <tr>
                        <th class="TableIndexNumber" scope="col">
                          المنتج 
                        </th>
                        <th class="TableArticleNumber" scope="col">
                          البائع
                        </th>
                        <th class="TableDescription" scope="col">
                          الكميه
                        </th>
                        <th class="TableQuantity" scope="col">
                          السعر
                        </th>
                        <th class="TableUnitPrice" scope="col">
                         الاجمالى
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="TableIndexNumber" data-label="Count">
                          <span>سكر كبير</span>
                        </td>
                        <td class="TableArticleNumber" data-label="item 1">
                          <p>ابو محمد</p>
                        </td>
                        <td class="TableDescription" data-label="item 2">
                          <p>3</p>
                        </td>
                        <td class="TableQuantity" data-label="item 3">
                          <p>500</p>
                        </td>
                        <td class="TableUnitPric" data-label="item 4">
                          <p>32132</p>
                        </td>
                      </tr>
                      <tr>
                        <td class="TableIndexNumber" data-label="Count">
                          <span>سكر كبير</span>
                        </td>
                        <td class="TableArticleNumber" data-label="item 1">
                          <p>ابو محمد</p>
                        </td>
                        <td class="TableDescription" data-label="item 2">
                          <p>3</p>
                        </td>
                        <td class="TableQuantity" data-label="item 3">
                          <p>500</p>
                        </td>
                        <td class="TableUnitPric" data-label="item 4">
                          <p>32132</p>
                        </td>
                      </tr>
                      <tr>
                        <td class="TableIndexNumber" data-label="Count">
                          <span>سكر كبير</span>
                        </td>
                        <td class="TableArticleNumber" data-label="item 1">
                          <p>ابو محمد</p>
                        </td>
                        <td class="TableDescription" data-label="item 2">
                          <p>3</p>
                        </td>
                        <td class="TableQuantity" data-label="item 3">
                          <p>500</p>
                        </td>
                        <td class="TableUnitPric" data-label="item 4">
                          <p>32132</p>
                        </td>
                      </tr>
                      <tr>
                        <td class="TableIndexNumber" data-label="Count">
                          <span>سكر كبير</span>
                        </td>
                        <td class="TableArticleNumber" data-label="item 1">
                          <p>ابو محمد</p>
                        </td>
                        <td class="TableDescription" data-label="item 2">
                          <p>3</p>
                        </td>
                        <td class="TableQuantity" data-label="item 3">
                          <p>500</p>
                        </td>
                        <td class="TableUnitPric" data-label="item 4">
                          <p>32132</p>
                        </td>
                      </tr>

                      <tr>
                        <td class="TableIndexNumber" data-label="Count">
                          <span>سكر كبير</span>
                        </td>
                        <td class="TableArticleNumber" data-label="item 1">
                          <p>ابو محمد</p>
                        </td>
                        <td class="TableDescription" data-label="item 2">
                          <p>3</p>
                        </td>
                        <td class="TableQuantity" data-label="item 3">
                          <p>500</p>
                        </td>
                        <td class="TableUnitPric" data-label="item 4">
                          <p>32132</p>
                        </td>
                      </tr>
                    </tbody>
                   
                  </table>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
