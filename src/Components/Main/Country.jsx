import React from 'react';
import { Link } from 'react-router-dom';


const Country = ({ name, capital, population, region, flags }) => {


    return (

        <div className='country'>

            <div className='box-card'>

                <Link to={`/CountryDetalist/${name.common}`}><img src={flags.png} alt='imag'></img></Link>

                <div className='info'>

                    <h3 className='name-country'>{name.common}</h3>

                    <div className='box-info'>
                        <p>Population: <span className='values'> {population}</span></p>
                        <p>Region: <span className='values'> {region}</span></p>
                        <p>Capital: <span className='values'> {capital}</span></p>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Country;
