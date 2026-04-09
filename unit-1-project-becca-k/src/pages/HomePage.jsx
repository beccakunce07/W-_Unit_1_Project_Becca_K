//header
//about
//nav bar
//slb button
import SlbButton from "../components/slbButton";
import logoWithWords from '../assets/SelfLoveBombwithText.png';
import PageHeader from "../components/PageHeader";


function HomePage () {
    // const logo1 = document.getElementById('logo1');
    // logo1.style.width = '200px';
    // logo1.style.height = 'auto';

    return (
        <>
        <div>
        <img 
        src={logoWithWords} 
        alt="An outline of a heart with lit fuses on the ends. The words 'Self Love Bombs' in soft font. Sub text 'Because love only needs a spark.'"
        style = {{width:'300px', height: 'auto'}} />
            
        <PageHeader></PageHeader>
        <h1>Home</h1>
        <p>Welcome to Self Love Bombs</p>
        <SlbButton></SlbButton>
        </div>
        </>

    )
}

export default HomePage