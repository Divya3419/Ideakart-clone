import React from 'react'

const Products = () => {

  const postData=async()=>{
    try{
      let response= await fetch(`http://localhost:3004/product`)
      let data= await response.json()
      //check all data
      console.log(data)
    }
    catch(err){
      console.log(err);
    }
   }

   
  return (
    <div>
      <h1>Products</h1>
      <table style={{borderBottom: '1px solid black',textAlign:"left",borderCollapse:"collapse"}}>
        <thead>
          <tr>
<th style={{padding:"30px"}}>Name</th>
<th style={{padding:"30px"}}>Media</th>
<th style={{padding:"30px"}}>How to use</th>
<th style={{padding:"30px"}}>Approval Status</th>
</tr>
        </thead>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tbody>

        </tbody>
      </table>
    </div>
  )
}

export default Products