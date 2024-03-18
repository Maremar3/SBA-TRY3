
import React, { useState,useEffect } from 'react'
import axios from 'axios'

function Home() {
        const [data, setData]=useState({
                celcius:10,
                name:'London'
        })
        const [name,setName]=useState('')
        const apiUrl='https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=8d3037940685618cbe1b387e50ecab9e&&unit=matrics'
               
        async function getData(){
                try {
                        let res = await axios.get(apiUrl);
                  
                      //  setData(res.data);
                     // console.log(res.data)
                      setData({...data,celcius:res.data.main.temp,name:res.data.name
                      })
                       console.log(res.data)
                      } catch (err) {
                        console.error(err);
                      }
                }
                        
                      useEffect(()=>{
                        getData();
                }, []);


        
        
               
             
               
               
        //         axios.get('apiUrl')
        //          .then(res =>console.log(res))
        //         // .then(res => {
        //         //         setData({...data,celcius:res.data.main.temp,name:res.data.name
        //         //         })
        //         // })
        //         .catch(err => console.log(err))
        // },[])





   return (
    
    <div className='container'>
            <div className='weather'>
            <div className='search'>
                <input type="text" placeholder='Enter' />
                    <button>SEARCH</button>
            </div>
            <div className='winfo'><h1>{data.celcius}°C</h1><h2>{data.name}</h2></div>
            </div>
    </div>
        
       
    
  )
}

export default Home 


