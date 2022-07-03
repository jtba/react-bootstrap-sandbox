import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Tables from "./components/Tables";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cards" element={<Cards />} />
        <Route path="tables" element={<Tables />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
