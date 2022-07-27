import React, { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Btn from './components/Btn.jsx'
import Head from './components/Head'
import Body from './components/Body'
import Error from './components/Error'
import Switch from '@mui/material/Switch';
export default function App() {

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [product, setProduct] = useState([]);
  const [key,setKey]=useState(false);

  function toggle(){
    setKey(!key)
  }
  console.log(key);

  function AddProduct() {
    const newProduct = {
      id: Math.random(),
      name: name,
      cost: cost
    }
    setProduct([...product, newProduct])

    setName("")
    setCost("")
  }

function DeleteProduct(data){
  setProduct(product.filter(item=>item.id != data.id))
}  
  return (
    <div className={key ? 'darkWrapper wrapper pt-5':'wrapper pt-5'}>
      <div className={key? 'darkMode card mx-auto px-2' : "card mx-auto px-2"}>
      <span className={key?"text-light":"text-dark"}>Night mode</span>

      <Switch onClick={()=>toggle()}/>

        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className='form-control w-75 mx-auto mt-4 form-control-lg' placeholder='New product name...' />
        <input value={cost} onChange={(e) => setCost(e.target.value)} type="text" className='form-control w-75 mx-auto mt-2 form-control-lg' placeholder='New product cost...' />

        <Btn onClick={() => AddProduct()} className='btn btn-success w-75 mx-auto my-3 btn-lg' />


        {product.length ?
          <table className='table table-bordered border-success text-center mt-2'>
            <Head/>
            <tbody style={key ? {color:"#fff"} : {color:"dark"}}>
              {product.map((item, index) => <Body data={item} number={index} delete={DeleteProduct}/>)}
            </tbody>
          </table>
          : <Error/>
        }

      </div>
    </div>
  )
}
