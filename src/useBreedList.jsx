import { useState, useEffect } from 'react'

const localCahe = {}

export default function(animal){

    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");

    useEffect(() => {
        if(!animal){
            setBreedList([])
        }else if(localCahe([animal])){
            setBreedList(localCahe(animal))
        }else{
            requestBreedList()
        }

        async function requestBreedList(){
            setBreedList([])
            setStatus("loading")

            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            )

            const json = await res.json;
            localCahe[animal] = json.breeds || []
            setBreedList(localCahe[animal])
            setStatus("loaded")
        }
    }, [animal])

    return [breedList, status]
}
 