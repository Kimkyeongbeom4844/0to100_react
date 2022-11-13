import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Product from "./Product";
import NotFound from "./Notfound";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
              </>
            }
          />
          <Route
            path="/product/"
            element={
              <>
                <Header />
                <Product />
              </>
            }
          >
            <Route
              path=":productId"
              element={
                <>
                  <Header />
                  <Product />
                </>
              }
            />
          </Route>
          <Route path="/wtf/" element={<h1>ㅗ</h1>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
