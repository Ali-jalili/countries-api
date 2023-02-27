import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



const CountryDetalist = () => {

    const { name } = useParams()

    const [deta, setdeata] = useState(null)

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)

            .then(res => res.json())

            .then(res => setdeata(res))
    }, [name])





    return (

        <>
            {deta && (
                <main className='main'>

                    <section className='country-data container'>

                        <Link to='/'><button className="btn-back"><i class="bi bi-arrow-left-circle"></i>  Go Back</button></Link>

                        <div className='country-data-body'>

                            <div className='img-container'>
                                <img src={deta[0].flags.png} alt=''></img>
                            </div>

                            <div className='data-info'>

                                <h2>{deta[0]?.name.common}</h2>

                                <div className='info-container'>

                                    <div className='info-left'>

                                        <p>Native Name: {' '}  <span className="values">{deta[0].nativeName}</span></p>
                                        <p>Population: {' '}  <span className="values">{deta[0].population}</span></p>
                                        <p>Region: {' '}  <span className="values">{deta[0].region}</span></p>
                                        <p>Sub Region: {' '}  <span className="values">{deta[0].subregion}</span></p>
                                        <p>Capital: {' '}  <span className="values">{deta[0].capital}</span></p>

                                    </div>

                                    <div className='info-right'>

                                        <p>Top Level Domain: {' '}  <span className="values">{deta[0].tld}</span></p>
                                        <p>Currencies: {' '}  <span className="values"></span></p>
                                        <p>languages: {' '}  <span className="values"></span></p>


                                    </div>

                                </div>

                                <div className='border-country'>
                                    <span>Border Countries:</span>

                                    <div>

                                        <div className='border-cant'><span>Test</span></div>
                                        <div className='border-cant'><span>Test</span></div>
                                        <div className='border-cant'><span>Test</span></div>

                                    </div>



                                </div>



                            </div>


                        </div>




                    </section>
                </main>
            )}
        </>


    )
}

export default CountryDetalist;