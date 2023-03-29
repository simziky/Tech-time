import { Routes, Route } from "react-router-dom";
import Home from "../pages/homePage/home";

function Router() {
    return (
      
      <div className="Router">
      
      <Routes>
          <Route path="/" element={<Home/>} />
      </Routes>
  
      </div>
    );
  }
  
  export default Router;