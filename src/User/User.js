import React from 'react'
import  {useState, useEffect} from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'


export const User= (movieId) => {
    const [state, setState]= useState('');

    const fetchData= async () =>{
      const {data}= await axios.get('https://breakingbadapi.com/api/characters/movieId');
  
      console.log(data);
      setState(data);
     
    }
  
    useEffect(()=>{
      fetchData()
    }, [movieId]); 
    return (
        state
    )
}

