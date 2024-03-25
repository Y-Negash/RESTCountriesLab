import { useEffect, useState } from "react";
import CountryList from "../components/CountryList";
import VisitedCountryList from "../components/VisitedCountryList";

const CountryContainer = () => {
    
    const [countries, setCountries] = useState([]);
    const [visited, setVisited] = useState(false);

    const loadCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    // const visitedCountries = (countries) => {
    //     setVisited(false);
    // }

    useEffect(
        () => {
            loadCountries();
        }, []
    );

    const handleClick = (country) => {
        setVisited(true);
    }

    // useEffect(
    //     () => {

    //     }
    // )
    
    return ( 
        <>
        <CountryList countries={countries} />
        <VisitedCountryList countries={countries} />
        </>
     );
}
 
export default CountryContainer;