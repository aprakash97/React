import { useState, useEffect } from "react";
import Pet from "./Pet";


const SearchParams = () => {
    const [location, setLocation] = useState("")
    const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
    const [animal, setAnimal] = useState("");
    const BREEDS = [];
    const [pets, setPets] = useState([])
    const [breed, setBreed] = useState("");

    useEffect(() => {
        requestPets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    async function requestPets(){
        const res = await fetch(`https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)
        const json = await res.json();

        setPets(json.pets)
    }

    return (
        <div className="search-params">
            <form onSubmit={(e) => {
                e.preventDefault();
                requestPets();
                }
            }>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} onInput={(e) => setLocation(e.target.value)} placeholder="Location" />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select id="animal" value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value);
                            setBreed("")
                        }
                        }>
                        <option/>
                        {ANIMALS.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select id="breed" value={breed} disabled={BREEDS.length === 0} onChange={(e) => setBreed(e.target.value)}>
                        <option></option>
                        {BREEDS.map((breed) => (
                            <option key={breed}>{breed}</option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            {pets.map((pet) => (
                <Pet key={pet.id} name={pet.name} animal={pet.animal} breed={pet.breed} />
            ))}
        </div>
    )
}


export default SearchParams;