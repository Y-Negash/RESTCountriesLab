import { useEffect, useState } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = () => {
    
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const loadCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
        setVisitedCountries(jsonData);
    }

    useEffect(
        () => {
            loadCountries();
        }, []
    );

    const handleClick = () => {

    }
    
    return ( 
        <>
        <CountryList countries={countries} />
        </>
     );
   
    }
 
export default CountryContainer;