import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetailsModal from "./components/ProductDetailsModal";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
          style: {
            background: "#333",
            color: "#fff",
          },
          success: {
            duration: 2000,
            theme: {
              primary: "#4aed88",
            },
          },
        }}
      />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <ProductDetailsModal />
      </div>
    </>
  );
}

export default App;
