import React, { useState, useEffect } from 'react'
import axios from 'axios'
import logo from '../images/search.jpg'
import cloud from '../images/cloud.png'
import windd from '../images/windd.png'
// import humid from '../images/humid.jpg'
function Humidity() {
  const [data, setData] = useState({
    celcius: 10,
    name: 'London',
    humidity: 10,
    speed:2
  })
  const [name, setName] = useState('china')
  async function getData() {

    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=8d3037940685618cbe1b387e50ecab9e&&unit=matrics`

      let res = await axios.get(apiUrl);

      //  setData(res.data);
      // console.log(res.data)
      setData({
        ...data, celcius: res.data.main.temp, name: res.data.name,
        humidity: res.data.main.humidity, speed:res.data.wind.speed 

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
                <h5>ENTER YOUR CITY THEN PRESS SEARCH BUTTON   </h5>

          <div><input type="text" placeholder='Enter City Name' onChange={e => setName(e.target.value)} />
            <button><img src={logo} onClick={handleClick} width='10' /></button>
          </div>

        </div>
        <div className='winfo'>
        <img src={cloud} width='80' />
          <h1>{data.celcius}°C</h1><h2>{data.name}</h2>
          <div className='details'>
            <div className='col'>
              {/* <img src={humid} alt="" /> */}
              <div className='humidity'>
                <h1>{Math.round(data.humidity)}%</h1>
                <p><h2>Humidity</h2></p>
              </div>
            </div>
            <div className='col'>
            <img src={windd} alt="" width='99'/>
            <div className='wind'></div>
            </div>
            <p><h1>{data.speed} km/h</h1></p>
            <p><h2>WIND</h2></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Humidity
