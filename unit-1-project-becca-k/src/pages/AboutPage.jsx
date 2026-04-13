import PageHeader from "../components/PageHeader";
import SelfLoveBombImage from "../components/SelfLoveBombImage";

function AboutPage() {
  return (
    <>
    <PageHeader title = "About Self Love Bombs"></PageHeader>
      <div className="page-wrapper">
          
        <div className="content-card">
          <div className="hero-logo-container">
            <img src={SelfLoveBombImage} alt="" className="hero-logo" />
          </div>
          
          <h1 className="hero-text">
            COPY HERE 
          </h1>
  
          {/* <button className="start-button" onClick={handleClick}>
            Bombs Away
          </button> */}
        </div>
      </div>
      </>
    );

}

export default AboutPage;