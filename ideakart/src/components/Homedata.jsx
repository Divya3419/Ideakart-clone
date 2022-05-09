import React from "react"
import Homeitem from "./Homeitem"
import Detail from "./Details";
import data from "../db.json"
import styled from 'styled-components'


const Head=styled.div`
text-align:left;
margin-left:210px;
`

const H1=styled.p`
font-size:30px;
margin:auto;
margin-left:-45px;
margin-top:30px;
margin-bottom:20px;
`

const Container=styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
gap:  10px;
margin:auto;
width:75%;

 img{
     width:100%;
     height:341px;

 }

>div{
    border:1px solid black;
   


}

`
const Homedata = ()=>{
console.log(data)
console.log(data.imgUrl)
    return(
        <>
        <Head id="h1">

        <H1>Top Reads</H1>
        </Head>
        <Container className="container">
           
           {data.map((item)=>(
          <div>
              {/* <Homeitem item={item}/> */}
              <Homeitem  key ={item.id} item={item}/>
             <Detail {...item}/>

          </div>
           ))}
               
        </Container>
        </>
    )
}
export default Homedata