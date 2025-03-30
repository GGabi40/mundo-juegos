"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/app.scss";

import "./layout";
import Nav from "./Components/nav/Nav";
import MainTable from "./Components/mainTable/MainTable";
import SmallBlocks from "./Components/smallBlocks/SmallBlocks";
import Footer from "./Components/footer/Footer";

import '../utils/fontAwesome';


export default function Home() {
  return (
    <>
      <Nav />
      <MainTable />

      <SmallBlocks />
      <Footer />
    </>
  );
}
