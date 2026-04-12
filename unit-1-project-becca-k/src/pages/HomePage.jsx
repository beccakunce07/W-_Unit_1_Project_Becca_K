//header
//about
//nav bar
//slb button
// import ContactUsForm from "../components/ContactUsForm";
import DisplayBank from "../components/DisplayBank";
import PageHeader from '../components/PageHeader.jsx';



function HomePage () {
    
    return (
        <>
        <PageHeader title = "You're Home"/>
        <div className = "page-container">
        <h1>Welcome Home</h1>
        <p>Welcome to Self Love Bombs</p>
        </div>
        <div className = "page-container-left">
        <DisplayBank></DisplayBank>
        </div>
    
    


        
        </>

    )
}

export default HomePage