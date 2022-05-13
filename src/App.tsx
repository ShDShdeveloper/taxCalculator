import {BrowserRouter} from 'react-router-dom'
import './App.scss'
import Header from "./components/Header/Header";
import {Routes, Route} from "react-router-dom";
import TaxCalculators from "./components/TaxCalculators/TaxCalculators";
import JShYS from "./components/JShYS/JShYS";
import Help from "./components/Help/Help";
import Footer from "./Footer/Footer";

function App(){
    return <BrowserRouter>
       <div className={"App"}>
           <Header/>
           <main>
               <Routes>
                   <Route path={"/taxCalculators"} element={<TaxCalculators/>}/>
                   <Route path={"/taxCalculators/JShYS"} element={<JShYS/>}/>
               </Routes>
               <Help/>
           </main>
           <Footer/>
       </div>
    </BrowserRouter>
}
export default App