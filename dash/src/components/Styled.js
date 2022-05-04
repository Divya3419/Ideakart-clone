import styled ,{css}from "styled-components"

export const Cover=styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);

width:80%;
margin:auto;
margin-top:40px;
`

export const Dash=styled.div`

`
export const Wel=styled.div`

margin:auto;

`
export const Btn=styled.button`
color:white;

font-size:20px;
border-radius:7px;
height:50px;
width:250px;
margin-bottom:40px;
background-color: #337ab7;
border-color: #2e6da4;
`

export const Three=styled.div`
display:flex;

height:180px;

margin:auto;


`
export const Box=styled.div`
background-color: green;
color:white;
margin-right:20px;
font-size:30px;
text-align:center;
padding-top:50px;
width:300px;



${(props)=>props.box2 && css`
background-color:orange;
color:white;
`}

${(props)=>props.box3 && css`
background-color: #e68787;
color:white;
`}

`