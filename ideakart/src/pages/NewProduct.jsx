import React, { useState } from 'react'
import { Input, Select, Main } from '../components/Styled'

const NewProduct = () => {
  const [productData,setProductdata]=useState({});


  const postData=async()=>{
    let response= await fetch(`http://localhost:3004/product`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...productData})
    })
    let data= await response.json()
    //check all data
    console.log(data)
   }
const handleSubmit = (e) => {
e.preventDefault();
//console.log(productData);
postData();

}

const handleChange=(e)=>{
  console.log(e.target.name)
  const inputName=e.target.name;
  setProductdata({...productData,[inputName]:e.target.value});
}
  
  return (
    <Main>
      <form onSubmit={handleSubmit}>
      <h1>New Review</h1>
      <div>
      <label>Name</label>
      <br />
      <Input type="text" required name="productname" onChange={handleChange}/>
      </div>

      <div>
      <label>Your Experience</label>
      <br />
      <Input type="text" required name="productex" onChange={handleChange}/>
      </div>

      <div>
      <label>File</label>
      <br />
      <input style={{marginBottom:"20px"}} type="file" required name="image" onChange={handleChange}/>
      </div>

      <div>
      <label>Did you bought it online or offline</label>
      <br />
     <Select name="network" onChange={handleChange} >
       
       <option value="Online">Online</option>
       <option value="Offline">Offline</option>
     </Select>
      </div>

      <div>
      <label>Platform</label>
      <br />
      <Select name="plateform" onChange={handleChange}>
        <option value="">Select Plateform</option>
        <option value="Amazon">Amazon</option>
        <option value="Flipkart">Flipkart</option>
        <option value="SnapDeal">SnapDeal</option>
        <option value="ShopClues">ShopClues</option>
        <option value="RelianceDigital">RelianceDigital</option>
        <option value="Other">Other</option>
      </Select>
      </div>
      <Input int1 type="submit" />
      </form>
    </Main>
  )
}

export default NewProduct