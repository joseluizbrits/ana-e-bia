import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import School from "./pages/School";
import Product from "./pages/Product";

import { productsPage } from "./utils/products";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/escola" element={<School />} />
          {productsPage.map((product) => (
            <Route
              key={product.type}
              path={`/${product.type}`}
              element={<Product product={product} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
