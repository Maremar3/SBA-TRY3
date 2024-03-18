
import React, { useState, useEffect } from 'react'
import axios from 'axios'
 import logo from '../images/search.jpg'
function Home() {
        const [data, setData] = useState({
                celcius: 10,
                name: 'London'
        })
        const [name, setName] = useState('china')
        async function getData() {
                   
                try {
                        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=8d3037940685618cbe1b387e50ecab9e&&unit=matrics`

                        let res = await axios.get(apiUrl);

                        //  setData(res.data);
                        // console.log(res.data)
                        setData({
                                ...data, celcius: res.data.main.temp, name: res.data.name
                        })
                        console.log(res.data)
                } catch (err) {
                        console.error(err);
                }
        }


        const handleClick = () => {

              getData();

        }
        useEffect(() => {
                getData();
        }, []);




        return (

                <div className='container'>
                        <div className='weather'>
                                <div className='search'>
                                        <input type="text" placeholder='Enter City Name' onChange={e => setName(e.target.value)} />
                                        <button><img src={logo} onClick={handleClick} width='10' /></button>
                                        {/* <button><img src={logo} alt="BigCo Inc. logo"/></button> */}
                                   
                                </div>
                                <div className='winfo'><h1>{data.celcius}°C</h1><h2>{data.name}</h2></div>
                        </div>
                </div>



        )
}

export default Home


