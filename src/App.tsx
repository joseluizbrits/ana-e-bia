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
          <Route path="/ana-e-bia" element={<Home />} />
          <Route path="/ana-e-bia/sobre" element={<About />} />
          <Route path="/ana-e-bia/servicos" element={<Services />} />
          <Route path="/ana-e-bia/escola" element={<School />} />
          {productsPage.map((product) => (
            <Route
              key={product.type}
              path={`/ana-e-bia/${product.type}`}
              element={<Product product={product} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
