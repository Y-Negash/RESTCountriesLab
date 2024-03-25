const Country = ({country, addCountry}) => {

    
    const mappedCapitals = () => {
        if(country.capital){
            return country.capital.map((capital, id) => <li key={id}>{capital}</li>);
        }
        
    }
      
    const handleClick = () => {
        addCountry(country);
    }

    return ( 
        <>
            <h2>{country.name.official}</h2>
            <p>This country is in the region of {country.region}</p>
            <ul>
                {mappedCapitals}
            </ul>
            <button onClick={handleClick}>Visited!</button>
        </>
     );
}
 
export default Country;