import React from 'react'

const NewProduct = () => {


  
  return (
    <div>
      <form >
      <h1>New Review</h1>
      <div>
      <label>Name</label>
      <br />
      <input type="text" required />
      </div>

      <div>
      <label>Your Experience</label>
      <br />
      <input type="text" required/>
      </div>

      <div>
      <label>File</label>
      <br />
      <input type="file" required />
      </div>

      <div>
      <label>Did you bought it online or offline</label>
      <br />
      <input type="text" required />
      </div>

      <div>
      <label>Platform</label>
      <br />
      <input type="text" required />
      </div>
      <input type="submit" />
      </form>
    </div>
  )
}

export default NewProduct