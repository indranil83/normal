import React, { useState, useEffect } from 'react';

const URL = "https://jsonplaceholder.typicode.com/todos";

function Demo() {
  const [product, setProduct] = useState([]);
  const [data,setData]=useState([])

  useEffect(() => {
    const getFacts = async () => {
      try {
        let res = await fetch(URL);
        const fetchdata = await res.json();
        setData(fetchdata);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getFacts();
  }, []); 


  const handelsubmit=()=>{
    setProduct(data);
  }
  return (
    <div>
      <h1>Product List</h1>
      {product.length > 0 ? (
        <ul>
          {product.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))
          }
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={handelsubmit}>Load data</button>
    </div>
  );
}

export default Demo;
