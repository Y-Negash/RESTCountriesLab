import { useState } from "react";

const Country = ({country, addCountry}) => {

    // const [hasVisited, setHasVisited] = useState(true)
    const mappedCapitals = () => {
        if(country.capital){
            return country.capital.map((capital, id) => <li key={id}>{capital}</li>);
        }
        
    }
      
    const handleClick = () => {
        addCountry(country);
    }

    // const handleClick = (e) => {
    //     if(hasVisited){
    //         addCountry(country);
    //         return <button onClick={handleClick}>Visited!</button>
    //     }
    // };

    return ( 
        <>
            <h2>{country.name.official}</h2>
            <p>This country is in the region of {country.region}</p>
            <ul>
                {mappedCapitals()}
            </ul>
            <button onClick={handleClick}>Visited!</button>
            {/* <p>{handleClick()}</p> */}
        </>
     );
}
 
export default Country;