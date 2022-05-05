import styled ,{css}from "styled-components"

//App
export const Control=styled.div`

display:grid;
grid-template-columns: 20% 80%;

width:80%;
margin:auto;
margin-top:40px;
`

//Home page
export const Cover=styled.div`


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

`}

${(props)=>props.box3 && css`
background-color: #e68787;

`}

`
//credit page
export const Credit=styled.div`
font-size:20px;

`