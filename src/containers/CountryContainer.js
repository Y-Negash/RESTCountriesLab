import { useEffect, useState } from "react";
import CountryList from "../components/CountryList";
import VisitedCountryList from "../components/VisitedCountryList";

const CountryContainer = () => {
    
    const [countries, setCountries] = useState([]);
    let [visitedCountries, setVisitedCountries] = useState([]);


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


     visitedCountries = (visitedCountry) => {
        setVisitedCountries([...countries, visitedCountry])
    }
    const handleClick = () => {
        


    // useEffect(
    //     () => {

    //     }
    // )
    
    return ( 
        <>
        <CountryList countries={countries} setVisitedCountries={setVisitedCountries}/>
        <CountryList visitedCountries={visitedCountries} />

        </>
     );
}
}
 
export default CountryContainer;