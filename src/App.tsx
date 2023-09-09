import { MainLayout } from "./shared/ui/layouts";
import { MainPage } from "./pages/MainPage/ui/MainPage/MainPage.tsx";
import { Navbar } from "@/widgets/Navbar";
import { Hero } from "@/pages/MainPage/ui/HeroSection/Hero.tsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <div className={"bg-hero-pattern bg-cover bg-no-repeat bg-center"}>
          <Navbar />
          <Hero />
        </div>
        <MainPage />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
