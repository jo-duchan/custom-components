import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PATH from "Path";
import { GlobalStyle } from "styles/common";

// Pages
import Home from "pages/Home";
import Test from "pages/Test";
import Error from "pages/Error";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path={PATH.Root} element={<Home />} />
        <Route path={PATH.Test} element={<Test />} />
        <Route path={PATH.Error} element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
