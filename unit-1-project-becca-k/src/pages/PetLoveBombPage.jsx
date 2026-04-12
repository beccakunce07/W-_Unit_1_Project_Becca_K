import CatPic from '../components/FetchCat.jsx';
import DogPic from '../components/FetchDog.jsx';
import PageHeader from '../components/PageHeader.jsx';


function PetLoveBombPage () {
    
    return (
        <>
        <div>
        <PageHeader title = "Pet Love Bombs"></PageHeader>
        <h1>Sometimes we just need pets to lift our spirits</h1>
    
        </div>
        <DogPic />
        <CatPic />


        
        </>

    )
}

export default PetLoveBombPage