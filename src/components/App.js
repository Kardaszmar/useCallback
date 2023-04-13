import React, {useState, useEffect} from "react";
import CountButton from './CountButton/CountButton.js'
import SearchBar from "./SearchBar/SearchBar.js";






const App = () => {
  
  const [productsState2, setProductsState2] = useState([]) 
  /* Tu '' pusty string tez moze byc zamiast []*/

  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((productArray) => {
              const newProductsState2 = productArray.map((product) => {
                return product.title
              })
              setTimeout(()=> {setProductsState2(newProductsState2)
              }, 3000)
       
            })

    /*setTimeout(() => {
      setProductsState2([
        "kot",
        "pies",
        "krolik",
        "rys"
      ])

    }, 2000)*/
  } , [])

  const hasProduct = productsState2.length > 0

    return (
     <div>
      <CountButton incrementBy={1} buttonColor={"blue"} textColor={"red"} />
      <CountButton incrementBy={5}  buttonColor={"yellow"} />
      <CountButton incrementBy={10} buttonColor={"green"} />

      <hr style={{marginTop:"50px"}}/>

      <SearchBar products ={ [
       "tooth paste",
      "tooth brush",
      "mouth wash",
      "dental floss",
      "mouth guard"
      ]} />
      
      <hr style={{marginTop:"50px"}}/>

      {/*To jest drugi Searchbar z tego gornego UseEffect*/}
  	{hasProduct? <SearchBar products={productsState2}/> : "Loading..." }

      <hr style={{marginTop:"50px"}}/>
    
     </div>
 )
}

  export default App


 
