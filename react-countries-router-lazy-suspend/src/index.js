import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const CountryTable = React.lazy(() =>
  import("./components/CountryTable/CountryTable").then((module) => ({
    default: module.CountryTable,
  }))
);
const CountryDetails = React.lazy(() =>
  import("./components/CountryDetails/CountryDetails").then((module) => ({
    default: module.CountryDetails,
  }))
);
const NotFound = React.lazy(() =>
  import("./components/NotFound/NotFound").then((module) => ({
    default: module.NotFound,
  }))
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<CountryTable />} />
          <Route exact path="/countries/:cca2" element={<CountryDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
