import Navbar from "./atoms/Navbar";
import Footer from "./atoms/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
