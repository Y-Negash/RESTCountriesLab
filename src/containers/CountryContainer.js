import { useEffect, useState } from "react";
import CountryList from "../components/CountryList";
import "./country.css";


const CountryContainer = () => {
    
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);


    const loadCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
        
    }


    useEffect(
        () => {
            loadCountries();
        }, []
    );

    useEffect( () => {
        const updatedCountry =[];
        for(const country of countries){
            if(!visitedCountries.includes(country)){
                updatedCountry.push(country);
            }
        }
        setCountries(updatedCountry);
        }, [visitedCountries]);

    const addCountry = (country) => {
        setVisitedCountries([...visitedCountries,country])
    }
        

    
    return ( 
        <>
        <div className="countries">
        <div>
        <h2>Countries</h2>
        <CountryList countries={countries} setVisitedCountries={setVisitedCountries} addCountry={addCountry}/></div>
        <div>
        <h2>Visited Countries</h2>
        <CountryList countries={visitedCountries}/></div>
        </div>
        </>
     );
}

 
export default CountryContainer;