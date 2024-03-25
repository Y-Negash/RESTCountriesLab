import Country from "./Country";
const CountryList = ({countries}) => {
    
    const mappedCountries = countries.map((country, id) => {
        console.log(countries);
        return <Country country={country} key={id} />
    });
    return (
        <>
            {mappedCountries}
        </>
      );
}
 
export default CountryList;


// filter - conditional rendering 