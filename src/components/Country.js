const Country = ({country, handleClick}) => {

    // const mappedCapitals = country.capital.map(country => {
    //     return <li>{country.capital}</li>
    // });
    
    return ( 
        <>
            <h2>{country.name.official}</h2>
            <p>This country is in the region of {country.region}</p>
            <ul>
                {/* {mappedCapitals} */}
            </ul>
            <button onClick={handleClick}>Visited!</button>
        </>
     );
}
 
export default Country;