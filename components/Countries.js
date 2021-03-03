import { useState } from 'react';
import styled from 'styled-components';
import { useGetCountries } from '../lib/hooks';
import CountryData from './CountryData';


const Countries = () => {
    const [country, setCountry] = useState('');
    const [countrySelected, setCountrySelected] = useState('');
    const [countryOptions, setCountryOptions] = useState([]);
    const { data: countries } = useGetCountries();
    
    const handleClick = (name) => {
        setCountry(name);
        setCountryOptions([]);
        setCountrySelected(name);
    }

    const handleInput = (e) => {
        if (e.target.value) {
            setCountry(e.target.value);
            const options = countries.filter(res => {
                const regex = new RegExp(e.target.value, 'gi');
                return res.name.match(regex);
            });
            setCountryOptions(options);
        } else {
            setCountry('');
            setCountryOptions([]);
        }
    }

    const renderCountry = (flagUrl, name, id) => {
        return flagUrl ? (
            <div className='option' key={id} onClick={() => handleClick(name)}>
                <img src={flagUrl} alt={name}/>
                <span>{name}</span>
            </div>
        ) : null;
    }

    return (
        <Container>
            <div className='form'>
                <h2>Countries</h2>
                <input type='text' value={country} onChange={handleInput}/>
                {!!countryOptions.length && (
                    <div>
                        {countryOptions
                            .map(res => renderCountry(res.media.flag, res.name, res.id))
                            .slice(0, 10)}
                    </div>
                )}
            </div>
            {countrySelected && <CountryData country={countrySelected}/>}
        </Container>
    );
}

export default Countries;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 610px;
    margin: 50px auto 0;
    .form {
        width: 210px;
        min-height: 26px;
        border: 1px solid #ccc;
        padding: 5px;
        font-size: 16px;
    }
    .option {
        border-bottom: 1px solid #eee;
        padding: 5px;
        cursor: pointer;
        img {
            max-width:30px;
            margin-right: 10px;
        }
    }
`;