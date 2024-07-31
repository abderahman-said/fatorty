import "./globals.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "bootstrap/dist/css/bootstrap.min.css";
import localFont from "next/font/local";
import dynamic from "next/dynamic";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Footer = dynamic(() => import("./components/Fotter/Fotter"), {
  ssr: false,
});
const NavBar = dynamic(() => import("./components/NavBar/NavBar"), {
  ssr: false,
});

const myFont = localFont({ src: "./Samim.ttf" });

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={myFont.className}>
        <nav className="nav_bar">
          <NavBar />
        </nav>
        <main style={{ minHeight: "100vh" }}>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
