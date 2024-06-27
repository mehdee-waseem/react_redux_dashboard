import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Product from "./components/Product.js"; // Corrected the file name to lowercase 'product.js'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./components/Dasboard";
import Cart from "./components/Cart";
import RootLayout from "./components/RootLayout";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
