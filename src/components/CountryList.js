import Country from "./Country";
const CountryList = ({countries}) => {

    const mappedCountries = countries.map((country, id) => (
        <Country country={country} key={id} />
    ))

    return(
        <>
        {mappedCountries}
        </>
    )
};

 
export default CountryList;
