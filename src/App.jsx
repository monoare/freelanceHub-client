import { Outlet } from "react-router-dom";
import MainLayout from "./Components/Layout/MainLayout";
import Footer from "./Components/Layout/Footer";

const App = () => {
  return (
    <MainLayout>
      <Outlet></Outlet>
      <Footer></Footer>
    </MainLayout>
  );
};

export default App;
