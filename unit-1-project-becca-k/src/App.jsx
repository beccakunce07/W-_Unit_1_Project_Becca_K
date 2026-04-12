import { Routes, Route} from "react-router-dom";
import './index.css';
import AboutPage from './pages/AboutPage.jsx';
import HomePage from './pages/HomePage.jsx';
import CheckInPage from './pages/CheckInPage.jsx';
import CreateYourOwnSLBPage from './pages/CreateYourOwnPage.jsx';
import PageFooter from './components/PageFooter.jsx';
import PetLoveBombPage from "./pages/PetLoveBombPage.jsx";

function App() {
  
  return (
    <>
     <div className = "app-wrapper">
      <Routes>
      <Route path = '/AboutPage' element ={<AboutPage></AboutPage>}></Route>
      <Route path = '/' element ={<HomePage></HomePage>}></Route>
      <Route path = '/CheckInPage' element ={<CheckInPage></CheckInPage>}></Route>
      <Route path = '/CreateYourOwnPage' element ={<CreateYourOwnSLBPage></CreateYourOwnSLBPage>}></Route>
      <Route path = '/PetLoveBombPage' element ={<PetLoveBombPage></PetLoveBombPage>}></Route>            
      </Routes>
      <PageFooter></PageFooter>
    </div>
    
    </>
  )
}

export default App