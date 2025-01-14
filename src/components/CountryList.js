import Country from "./Country";

const CountryList = ({countries, addCountry}) => {
    
    const mappedCountries = countries.map((country, id) => {
        return <Country country={country} key={id} addCountry={addCountry}/>
    })
    
    return ( 
        <>
        {mappedCountries}
        </>
     );
}
 
export default CountryList;