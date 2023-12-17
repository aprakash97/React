import { useState } from "react";
// import Pet from "./Pet";
import { useQuery } from "@tanstack/react-query";
import useBreedList from "./useBreedList";
import Results from "./Results";
import fetchSearch from "./fetchSearch";

const SearchParams = () => {
    const [requestParams, setRequestParams] = useState({
        location:"",
        animal:"",
        breed:""
    })
    // const [location, setLocation] = useState("")
    const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
    const [animal, setAnimal] = useState("");
    // const [BREEDS] = [];
    const [BREEDS] = useBreedList(animal)
    // const [pets, setPets] = useState([])
    // const [breed, setBreed] = useState("");

    const results = useQuery(["search", requestParams], fetchSearch);
    const pets = results?.data?.pets ?? [];

    // useEffect(() => {
    //     requestPets()
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[])

    // async function requestPets(){
    //     const res = await fetch(`https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)
    //     const json = await res.json();

    //     setPets(json.pets)
    // }

    return (
        <div className="search-params">
            <form onSubmit={(e) => {
                e.preventDefault();
                // requestPets();
                const formData = new FormData(e.target);
                const obj = {
                    animal : formData.get("animal") ?? "",
                    location : formData.get("location") ?? "",
                    breed : formData.get("breed") ?? "",
                }
                setRequestParams(obj)
                }
            }>
                <label htmlFor="location">
                    Location
                    <input id="location"
                        //  value={location} 
                        //  onInput={(e) => setLocation(e.target.value)} 
                        name="location"
                         placeholder="Location" />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select id="animal" value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value);
                            // setBreed("")
                        }}
                        // onBlur={(e) => {
                        //     setAnimal(e.target.value);
                        //     setBreed("")
                        // }}
                        >
                        <option/>
                        {ANIMALS.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select 
                        id="breed" 
                        // value={breed} 
                        name="breed"
                        disabled={BREEDS.length === 0} 
                        // onChange={(e) => setBreed(e.target.value)}
                        >
                        <option></option>
                        {BREEDS.map((breed) => (
                            <option key={breed} value={breed}>{breed}</option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            <Results pets={pets}/>
        </div>
    )
}


export default SearchParams;