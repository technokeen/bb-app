import React from 'react'
import  {useState, useEffect} from 'react'
import axios from 'axios'
import CardComponent  from '../Card/cardComponent.js'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'
import Pagination1 from '../Pagination/Pagination1'
import {Link } from 'react-router-dom';
import './home.css'

function Home() {
 
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage]= useState(1)
    const [cardsPerPage, setCardsPerPage]= useState(10);
    const [search1, setSearch1] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    
  const fetchData= async () =>{
    setLoading(true);
    const {data}= await axios.get('https://breakingbadapi.com/api/characters');
    console.log(data)
    setCards(data);
    setLoading(false); 
     
  }

  useEffect(()=>{
    fetchData()
  }, []); 

  //Loading condition
  if(loading)
  {
    return <h2>Loading ....</h2>
  }
 
  //Current card
  const indexOfLastCard= currentPage * cardsPerPage;
  const indexOfFirstCard=indexOfLastCard - cardsPerPage;
  const CurrentCards= cards.slice(indexOfFirstCard, indexOfLastCard);
  console.log(CurrentCards)

  //Change page
  const paginate = (pageNumber) =>setCurrentPage(pageNumber)

  const filterItem= (categItem) =>{
      const updatedItems=cards.filter((ele) =>{
          return ele.category === categItem;
          
      })
      setCards(updatedItems)
  }

    // Searching function 
    const updateCard=  (event)=>{
      const dataItem=event.target.value
      setSearch1(dataItem);
      //console.log(dataItem)
     const filteredData= cards.filter((p) =>{ 
       //return  Object.values(p).join(" ").toLowerCase().includes(search1.toLowerCase())
       return p.name.toLowerCase().includes(search1.toLowerCase())
       })
       
       if(dataItem === ""){
        setFilteredData([]);
       }else{
        setFilteredData(filteredData);
       }
       
   }

    return (
        <div className="App">
          <div className="navbar">
            <Navbar bg="dark" expand="lg">
                  <Link to='/'><h2>Breaking Bad App</h2></Link>
                
                      <input
                          type="search"
                          value={search1}
                          onChange={updateCard}
                          placeholder="search your favourite characters"
                      />
                 
              </Navbar>
          </div>
          

            <div className="main-content">
            <Row>

                { ( filteredData.length!=0 && filteredData.map((c, index) =>
     
                
                    <Col sm="4">
                      <CardComponent key={c.char_id} id={c.char_id} name={c.name} 
                        occupation={c.occupation} status={c.status} img={c.img} 
                        />
                    </Col>
                ))}
            </Row>
       

            <h4 >Total Breaking bad characters:{cards.length}</h4>
            <div className="buttonGroup">
              <button  onClick={()=>filterItem('Breaking Bad')}>Breaking Bad</button>
              <button  onClick={()=>filterItem('Better Call Saul')}>Better Call Saul</button>
              <Link to='/'><button>All</button></Link>
            </div>
            
       
            <Row>
                { (CurrentCards.length > 0 && CurrentCards.map((c, index) =>
     
                    <Col sm="4">
                       <CardComponent key={c.char_id} id={c.char_id} name={c.name} 
                        occupation={c.occupation} status={c.status} img={c.img}  />
                        
                    </Col>
                ))}
            </Row>


            <Pagination1 cardsPerPage={cardsPerPage} totalCards={cards.length} paginate={paginate}/>
        </div>

      
      </div>
  
    )
}

export default Home


