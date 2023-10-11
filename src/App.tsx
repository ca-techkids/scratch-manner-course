import "./App.css";
import { Header } from "./Component/Header";
import Footer from "./Component/Footer";
import { UpperContent } from "./Component/UpperContent";
import { LowerContent } from "./Component/LowerContent";
import { SplashContent } from "./Component/SplashContent";

function App() {
  return (
    <div className="App">
      <SplashContent />
      <Header />
      <div>
        <UpperContent />
        <LowerContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
