import React from 'react'
import { Input, Select } from '../components/Styled'

const NewProduct = () => {

const handleSubmit = (e) => {
  alert("hii")

}
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>New Review</h1>
      <div>
      <label>Name</label>
      <br />
      <Input type="text" required />
      </div>

      <div>
      <label>Your Experience</label>
      <br />
      <Input type="text" required/>
      </div>

      <div>
      <label>File</label>
      <br />
      <input style={{marginBottom:"20px"}} type="file" required />
      </div>

      <div>
      <label>Did you bought it online or offline</label>
      <br />
     <Select >
       <option value="Online">Online</option>
       <option value="Offline">Offline</option>
     </Select>
      </div>

      <div>
      <label>Platform</label>
      <br />
      <Select>
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
    </div>
  )
}

export default NewProduct