import { Routes, Route} from "react-router-dom";
import './index.css';
import AboutPage from './pages/aboutPage.jsx';
import HomePage from './pages/homePage.jsx';
import TempCheckPage from './pages/TempCheckPage.jsx';
import CreateYourOwnSLBPage from './pages/CreateYourOwnPage.jsx';
import PageFooter from './components/footer.jsx';
import PageHeader from './components/PageHeader.jsx';

function App() {
  
  return (
    <>
    <PageHeader></PageHeader>
    <div className = "routes">
      <Routes>
      <Route path = '/AboutPage' element ={<AboutPage></AboutPage>}></Route>
      <Route path = '/' element ={<HomePage></HomePage>}></Route>
      <Route path = '/TempCheckPage' element ={<TempCheckPage/>}></Route>
      <Route path = '/CreateYourOwnPage' element ={<CreateYourOwnSLBPage></CreateYourOwnSLBPage>}></Route>      
      </Routes>
    </div>
    <PageFooter></PageFooter>
     
    
   
    
    
    </>
  )
}

export default App