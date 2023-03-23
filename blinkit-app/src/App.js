import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

//components
import HomePage from "./pages/homePage";
import CheckoutPage from "./pages/checkoutPage";

//helpers
import { fetchVegetablesData } from "./redux/helpers/redux.general";

function App() {
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchVegetablesData), []);
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="CheckoutPage" element={<CheckoutPage />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
