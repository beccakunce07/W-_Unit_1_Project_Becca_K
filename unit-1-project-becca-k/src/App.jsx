import { Routes, Route} from "react-router-dom";
import './index.css';
import AboutPage from './pages/AboutPage.jsx';
import HomePage from './pages/HomePage.jsx';
import TempCheckPage from './pages/TempCheckPage.jsx';
import CreateYourOwnSLBPage from './pages/CreateYourOwnPage.jsx';
import PageFooter from './components/footer.jsx';
import PageHeader from './components/PageHeader.jsx';
import FetchAnimalPage from "./pages/FetchAnimalPage.jsx";

function App() {
  
  return (
    <>
     <div>
      <PageHeader></PageHeader>
      <Routes>
      <Route path = '/AboutPage' element ={<AboutPage></AboutPage>}></Route>
      <Route path = '/' element ={<HomePage></HomePage>}></Route>
      <Route path = '/TempCheckPage' element ={<TempCheckPage/>}></Route>
      <Route path = '/CreateYourOwnPage' element ={<CreateYourOwnSLBPage></CreateYourOwnSLBPage>}></Route>
      <Route path = '/FetchAnimalPage' element ={<FetchAnimalPage></FetchAnimalPage>}></Route>            
      </Routes>
      <PageFooter></PageFooter>
    </div>
    
    </>
  )
}

export default App