import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import BasicExample from '../components/prducts';


function App(){
 const [products, setProducts] = useState(null)

  
useEffect(() => {
  
  getData()
}, [])
  async function getData() {
    try {
        
      const data = await fetch('https://fakestoreapi.com/products');
      const res = await data.json()
      setProducts(res)
      // setProducts(response)
      console.log(res);
      
    } catch (error) {
      console.log(error);
    }
  }
  return(
    <>
    <h1 className='text-center'>Products</h1>
      {
        products && products.map((item) =>{
         return <div className="container">  
         <BasicExample  key={item.id} title={item.name} description={item.description} src={item.image}/>
         </div>

          
        })
      }
    </>
  )
}
export default App;




























