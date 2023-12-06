import { useState } from "react";

const SearchParams = () => {
    const [location,setLocation] = useState("")
    
    return (
        <div className="search-params">
            <form action="">
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} onInput={(e) => setLocation(e.target.value)} placeholder="Location"/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}


export default SearchParams;