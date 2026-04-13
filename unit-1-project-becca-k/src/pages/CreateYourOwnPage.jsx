import CYOForm from "../components/CYOForm";
import PageHeader from "../components/PageHeader";
import LoveBombGrid from "../components/LoveBombGrid";

function  CreateYourOwnPage () {
    return (
        <>
        <PageHeader title = "Create A Love Bomb"></PageHeader>
        <div className = "content-card">
            <div className="hero-text">
            Here at Self Love Bombs we believe you are the author of your own narration. You get to decide how you talk to yourself. Here is an opportunity to practice speaking kindly to yourself.</div>
            <CYOForm />
            <LoveBombGrid />
        </div>
        </>
    )

}


export default CreateYourOwnPage