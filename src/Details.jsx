import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";

const Details = () => {
  // const x = useParams();
  const {id} = useParams()
  const results = useQuery(["details", id], fetchPet)

  if(results.isLoading){
    return(
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    )
  }

  const pet = results.data.pets[0];

  console.log("CHECKING", pet)
  return (
    <div className="details">
      {/* <p>Here it is{x.id}</p> */}
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        {/* <h2>id {id}</h2> */}
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  )
}

export default Details