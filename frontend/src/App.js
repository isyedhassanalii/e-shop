import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FileUploadPage from "./Pages/FileUploadPage/FileUploadPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FileUploadPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
