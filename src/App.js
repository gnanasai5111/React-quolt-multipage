import Home from "./pages/home/Home";
import {createContext,useEffect,useState} from "react";
import works from "./works.js";
import Footer from "./compononents/footer/Footer";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./compononents/header/Header";
import SubHeader from "./compononents/subheader/SubHeader";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Process from "./pages/process/Process";
import Works from "./pages/works/Works";
import Services from "./pages/services/Services";
import Loading from "./compononents/loading/Loading";
import Lcr from "./pages/lcr/Lcr";



export const WorkContext=createContext(works);

function App() {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setLoading(false);
  },[])
  
  return (
    
    <WorkContext.Provider value={works}>
    {loading?<Loading />: <Router>
    <Header />
    <SubHeader />
    
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Works />} />
        <Route path="/lcr" element={<Lcr />} />
        <Route path="/process" element={<Process />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>}
   
      

    </WorkContext.Provider>
  );
}

export default App;
