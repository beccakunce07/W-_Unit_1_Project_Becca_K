import NavBar from './navBar';
import logoWithWords from '../assets/SelfLoveBombwithText.png'
import SlbButton from './slbButton';



function PageHeader () {
    return (
        <>
        <div className = "header">
        <img
        src={logoWithWords}
        alt="An outline of a heart with lit fuses on the ends. The words 'Self Love Bombs' in soft font. Sub text 'Because love only needs a spark.'"/>
        <NavBar></NavBar>
        <SlbButton></SlbButton>
        </div>
        </>

       
        
    )
}

export default PageHeader;

//should have logo