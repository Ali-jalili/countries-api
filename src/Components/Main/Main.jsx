import React from 'react';
import { useState, useEffect } from 'react';
import SearchCountry from './SearchCountry';
import Country from './Country';


const Main = () => {


    const [country, setConuntries] = useState([]);

    const [conuntrydeta, setConuntrydeta] = useState([]);

    useEffect(() => {

        const fetcData = async () => {
            const res = await fetch('https://restcountries.com/v3.1/all');
            const data = await res.json();

            setConuntries(data);
            setConuntrydeta(data);
        }
        try {
            fetcData();
        }
        catch (error) {
            console.log(error);
        }

    }, [])


    // const copyCountry = [...country]

    // function searchInput(e) {


    //     const filter = mycountry.filter((searchCountry) => {


    //         // console.log(searchCountry)
    //         const b = searchCountry.name.common.includes(e.target.value);

    //         return b;

    //     })

    //     filter.length ? setConuntries(filter) : setConuntries(mycountry);



    // }






    return (
        <main className='main'>

            <SearchCountry country={country} setConuntrydeta={setConuntrydeta} />

            <section className='countries container'>

                {
                    conuntrydeta.map(country => (

                        <Country

                            key={country.alpha3Code}
                            code={country.alpha3Code}
                            name={country.name}
                            capital={country.capital}
                            population={country.population}
                            region={country.region}
                            flags={country.flags}
                        />
                    ))
                }


            </section>


        </main>
    )
}

export default Main;