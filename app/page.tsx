import Main from "@/components/main";
import Client from "@/components/client";
import About from "@/components/about";
import Goal from "@/components/visimisi";
import Services from "@/components/services";
import CertPage from "@/components/certPage";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Head from "next/head";
import Footer from "@/components/footer";
import Price from "@/components/price";

export default function Home() {
  return (
    <>
      <Head>
        <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
      </Head>
   <main className=" min-h-screen flex-col">
    <Main/>
    <Client/>
    <About/>
    {/* <Goal/> */}
    <Services/>
    <CertPage/>
    <Blog/>
    <Price/>
    <Contact/>
    <Footer/>
   </main>
    </>
    
  );
}
