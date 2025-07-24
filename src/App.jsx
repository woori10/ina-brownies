import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import DetailProduk from "./pages/DetailProduk";
import Home from "./pages/Home";
import Keranjang from "./pages/Keranjang";
import Kontak from "./pages/Kontak";
import LoginAdmin from "./pages/LoginAdmin";
import Produk from "./pages/Produk";
import Riwayat from "./pages/Riwayat";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produk" element={<Produk />} />
            <Route path="/produk/:produkNama" element={<DetailProduk />} />
            <Route path="/keranjang" element={<Keranjang />} />
            <Route path="/riwayat" element={<Riwayat />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/admin" element={<LoginAdmin />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
