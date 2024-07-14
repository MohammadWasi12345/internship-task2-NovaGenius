import Image from "next/image";
import Hero from "./components/Hero";
import App from "./components/App";
import Brands from "./components/Brands";
import Carcard from "./components/Carcard";
import Experience from "./components/Experience"
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Testimonals from "./components/Testimonals";
export default function Home() {
  return (
  <div>
    <Hero/>
    <App/>
    <Brands/>
    <Carcard/>
    <Experience/>
    <Testimonals/>
    <Blog/>
    <Footer/>

  </div>
  );
}
