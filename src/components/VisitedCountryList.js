import Country from "./Country";
const VisitedCountryList = () => {
   
    const mappedVisitedCountries = countries.map(country => {
        return <Country country={country} key={country.name.official} />
    });
    return (
        <>
            {mappedVisitedCountries}
        </>
      );
}
 
export default VisitedCountryList;