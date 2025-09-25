import React, { use, useState } from 'react';
import Country from '../Country/country';
import './countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountry, setVisitedCountry] = useState([])
    const handleVisitedCountries = (country) =>{
        console.log('visited country', country);
        const newVisitedCountries = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountries);
    }


    const countriesData = use(countriesPromise);
    const countries = countriesData.countries

    return (
        <div>
            <h1>In the React World: {countries.length}</h1>
            <h3>Total Visited Country: {visitedCountry.length}</h3>
            <ol>
                {
                    visitedCountry.map(country => <li
                    key={country.cca3.cca3}
                    >{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;