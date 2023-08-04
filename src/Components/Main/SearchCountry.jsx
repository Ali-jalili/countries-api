import React, { useEffect, useState } from 'react';
// import { useRef, useState } from 'react';


const Search = ({ country, setConuntrydeta }) => {

    const [inputValue, setInputValue] = useState('');
    const [selectValue, setselectValue] = useState('');
    useEffect(() => {

        const temp = country.filter((item) => {
            if (!selectValue) {
                return true
            }
            else {
                return item.region.includes(selectValue)
            }
        }).filter((item) => {
            return item.name.common.toLowerCase().includes(inputValue.toLowerCase());
        })
        setConuntrydeta(temp)

    }, [selectValue, inputValue])

    return (

        <section className='input-select container'>

            <div className='search-input'>
                <i class="bi bi-search"></i><input type='text' placeholder='Search for a Country...' value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
            </div>

            <div className='select-region '>

                <select value={selectValue} onChange={(e) => setselectValue(e.target.value)}>

                    <option value='' className='item'> Filter by Region </option>
                    <option value='Africa' className='item'>Africa</option>
                    <option value='Oceania' className='item'>Oceania</option>
                    <option value='America' className='item'>America</option>
                    <option value='Asia' className='item'>Asia</option>
                    <option value='Europe' className='item'>Europe</option>


                </select>

            </div>

        </section>

    )
}

export default Search;