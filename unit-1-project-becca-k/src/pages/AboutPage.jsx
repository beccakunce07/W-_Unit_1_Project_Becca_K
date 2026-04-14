import PageHeader from "../components/PageHeader";
import SlbButton from "../components/SlbButton";
import EmotionsWheelImage from "../components/EmotionsWheelImage"

function AboutPage() {
  return (
    <div>
    <PageHeader title = "About Self Love Bombs"></PageHeader>
    <div className="page-wrapper">
        <div className="content-card">
          <h2>
            Thanks for visiting Self Love Bombs!
          </h2>
          <h3>We are so glad you're here.</h3>
          <p>Self Love Bombs is here for one reason: to stand up to your inner bully mid-rant.
            <br></br>
            You know the voice - the one that's a little too critical, a little too loud, and not nearly as helpful as it thinks it is. Instead of going ten rounds with it, you can get lovebombed! No no no, not in the chaotic, situationship kind of way—but in the intentional, supportive, actually-helpful-to-you kind. Lovebomb yourself by just clicking a button....this button right here actually! <br></br>
            </p>
            <h1>👇</h1>
            <SlbButton />
            <img 
            src={EmotionsWheelImage} 
            alt="A list of emotions superimposed onto the color wheel" 
            style={{ maxHeight: '200px', maxWidth: '100%', borderRadius: '50%' }} 
            />
            <p></p>
            <h1>Meet the Founder</h1> 
            </div>
        </div>
      </div>
    );
  };
export default AboutPage;