"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/app.scss";

import "./layout";
import Nav from "./Components/Nav";
import MainTable from "./Components/MainTable";
import SmallBlocks from "./Components/SmallBlocks";
import Footer from "./Components/Footer";

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
