import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import PaymentScreen from "./pages/PaymentScreen";
import Received from "./pages/Received";
import Processing from "./pages/Processing";
import ProductScreen from "./pages/ProductScreen";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/-payment-screen":
        title = "";
        metaDescription = "";
        break;
      case "/received":
        title = "";
        metaDescription = "";
        break;
      case "/processing":
        title = "";
        metaDescription = "";
        break;
      case "/product-screen":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/-payment-screen" element={<PaymentScreen />} />
      <Route path="/received" element={<Received />} />
      <Route path="/processing" element={<Processing />} />
      <Route path="/product-screen" element={<ProductScreen />} />
    </Routes>
  );
}
export default App;
