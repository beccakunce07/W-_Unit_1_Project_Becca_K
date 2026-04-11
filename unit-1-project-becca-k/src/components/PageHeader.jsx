import NavBar from './navBar';
import SelfLoveBombWithText from './SelfLoveBombWithText.jsx'
import SlbButton from './slbButton';

function PageHeader () {
    return (
        <>
        <div className = "header-container">
        <img //inserting logo, navbar and SLB button so it is at the top of every page.
        src={SelfLoveBombWithText}
        alt="An outline of a heart with lit fuses on the ends. The words 'Self Love Bombs' in soft font. Sub text 'Because love only needs a spark.'"/>
        <SlbButton></SlbButton>
        </div>
        <NavBar></NavBar> 
        
        </>        
    )
}
export default PageHeader;
