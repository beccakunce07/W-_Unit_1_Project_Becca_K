import PageHeader from "../components/PageHeader";
import SelfLoveBombImage from "../components/SelfLoveBombImage";
import SlbButton from "../components/SlbButton";

function AboutPage() {
  return (
    <>
    <PageHeader title = "About Self Love Bombs"></PageHeader>
      <div className="page-wrapper">
          
        <div className="content-card">
          <div className="hero-text">
            Thanks for visiting Self Love Bombs! We are so glad you're here.
          </div>
          <p>Self Love Bombs is here for one reason:
            <br></br>
            to interrupt your inner bully mid-rant.
            <br></br>
            You know the voice - the one that's a little too critical, a little too loud, and not nearly as helpful as it thinks it is. Instead of going ten rounds with it, you can just…click a button.
            </p>
            <SlbButton />
            <h3>And get love bombed!</h3>
            
            <br></br>
            <p>Not in the chaotic, situationship kind of way—but in the intentional, supportive, actually-helpful-to-you kind.</p>

          {/* <button className="start-button" onClick={handleClick}>
            Bombs Away
          </button> */}
        </div>
      </div>
      </>
    );

}

export default AboutPage;