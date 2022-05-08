import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Prod = styled.div`
  display: flex;
  // border: 1px solid black;
  // gap: 10px;
  margin-top:20px;
  justify-content:space-around;
`;
const D1 = styled.div`
width:400px;
  
  // border: 1px solid red;
`;
const D2 = styled.div`
width:800px;
  // border: 1px solid green;
  heigth:200px;
  margin-top:20px;
  // padding-right:30px;
  margin-right:200px;

`;

const Pri=styled.div`
display: flex;
justify-content: space-around;
padding-left:50px;
margin-top:10px;


>p{
  font-size:25px;
}
>button{
  font-size:30px;
  background-color:yellow;
  width:150px;
  height:50px;
  margin-top:20px;
  border-radius:5px;

}

`
const H=styled.div`
text-align:left;
font-weight:bold;
padding-left:70px;
margin-top:10px;
font-size:20px;
`
const D3 = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom:-2px;
`;

const Title=styled.div`
font-weight:bold;
font-size:50px;
margin-bottom:10px;
`
const P1=styled.div`
font-weight:bold;
font-size:30px;
`
const Des=styled.div`
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
// height:200px;
`

const Productdetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const getData = async () => {
    let res = await fetch(`http://localhost:8080/data/${id}`);
    let resdata = await res.json();

    console.log(resdata);
    setData(resdata);
  };

  console.log(data);
  useEffect(() => {
    getData();
  }, []);



const handleChange =()=>{
navigate("/accountinfo")
}


  return (
    <Prod>
      <D1>
        <div>
          <img src={data.imgUrl}></img>
        </div>

        <Pri>
          <p>Rs. {data.price}</p>
          
          <button onClick={handleChange} >Buy</button>
        </Pri>
        <H>
          {data.h1}
          </H>
          <D3>
            <p>Binding</p>
            <p>{data.Binding}</p>
          </D3>
          <D3>
            <p>Language</p>
            <p>{data.Language}</p>
            
          </D3>
          <D3>
            <p>Number of Pages</p>
            <p>{data.Numbarofpages}</p>
           
          </D3>
          <D3>
            <p>Author</p>
            <p>{data.Author}</p>
            
          </D3>
          <D3>
            <p>Publisher</p>
            <p>{data.Publisher}</p>
            
          </D3>
          <D3>
            <p>Isbn-10</p>
            <p>{data.Isbn10}</p>
            
          </D3>
          <D3>
            <p>Isbn-13</p>
            <p>{data.Isbn13}</p>
            
          </D3>
          <D3>
            <p>Dimension</p>
            <p>{data.Dimension}</p>
            
          </D3>
       
      </D1>
      <D2>
       
       <Title>
       {data.title}
       </Title>
      <Des>
      <P1>
       {data.p1}
       </P1>
       <div>
       {data.p2}
       </div>
      </Des>
      </D2>
    </Prod>
  );
};

export default Productdetail;
