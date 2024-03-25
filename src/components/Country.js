const Country = ({country}) => {

    const mappedCities = country.map( () => {
        return <li key={country.name.official}>{country.capital}</li>
    });
    
    return ( 
        <>
            <h2>Country Name: {country.name.official}</h2>
            <p>This country is in the region of {country.region}</p>
        </>
     );
}
 
export default Country;