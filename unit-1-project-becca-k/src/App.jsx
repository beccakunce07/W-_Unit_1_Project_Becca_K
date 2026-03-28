import './App.css'
import { Routes, Route, Link} from "react-router-dom";
import Navbar from './components/navBar';
// // import pages
// import './'
// import 'pages/CreateYourOwnPage.jsx'
// import 'pages/HomePage.jsx'
// import 'pages/TempCheckPage.jsx'

// //import components
// import 'components/footer.jsx'
// import 'components/header.jsx'
// import 'components/navBar.jsx'
// import 'components/slb_button.jsx'

function App() {
  
  return (
    <>
    <div>
   <Routes>
      <Route path = 'AboutPage' element ={<h1>About Page</h1>}></Route>
      <Route path = 'HomePage' element ={<h1>Home Page</h1>}></Route>
      <Route path = 'TempCheckPage' element ={<h1>Temp Check Page</h1>}></Route>
      <Route path = 'CreateYourOwnPage' element ={<h1>Create Your Own SLB Page</h1>}></Route>      
    </Routes>
    </div>
    <h1>Hello I am here</h1>
   
      
    </>
  )
}

export default App
