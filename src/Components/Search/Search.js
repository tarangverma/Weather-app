import { useState } from "react"
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoApiOptions, geo_API_URL } from "../Api/Api";

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const handelOnchange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };
    const LoadOptions = (inputValue) => {
        return fetch(
            `${geo_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            geoApiOptions)
            .then(response => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                        value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name} , ${city.countryCode}`,
                      };
                 }),
              };
            })
        .catch (err => console.error(err));
    };

return (
    <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handelOnchange}
        loadOptions={LoadOptions}
    />
)
}
export default Search;