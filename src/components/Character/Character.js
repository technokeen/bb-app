import React from 'react'
//import {User} from '../User/User'
import {useParams} from 'react-router-dom'
import  {useState, useEffect} from 'react'
import axios from 'axios'
import './character.css'

const  Character= () => {
    const {characterId}= useParams();
    const [state, setState]= useState([]);
    

    const fetchData= async () =>{
      const {data}= await axios.get(`https://breakingbadapi.com/api/characters/${characterId}`);
  
      console.log({...data});
      setState(data);
     
    }
  
    useEffect(()=>{
      fetchData()
    }, [characterId]); 
    
    return (
        <>
             {
            state.map((c)=>{
               return( 
                   <div className="Character" key={c.char_id}>
                       <div className="Center">
                            <h3>Name : <span className="dataItem" style={{color:"pink"}}>{c.name}</span></h3> 
                            <img src= {c.img} className="imageItem"></img>
                            <p className="heading">Date of Birth : <span className="dataItem">{c.birthday}</span></p>
                            <p className="heading">Occupation : <span className="dataItem">{c.occupation}</span></p>
                            
                            <p className="heading">Status : <span className="dataItem">{c.status}</span></p> 
                            <p className="heading">Nicknames (if any) :<span className="dataItem">{c.nickname}</span></p> 
                            <p className="heading">Actor who portrays the character : <span className="dataItem">{c.portrayed}</span></p>
                            <p className="heading">Seasons in which the character appears : <span className="dataItem">{c.appearance}</span></p>
                            <p className="heading">All quotes by the character : </p>
                       </div>
                
                   </div>
           ) 
            })

        }
      

        </>

       
    )
}

export default Character
