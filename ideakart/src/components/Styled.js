import styled ,{css} from "styled-components"

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
margin-left:40px;

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

//new product page

export const Input=styled.input`

width:70%;
height:40px;
border-radius:5px;
margin-bottom:20px;

${(props)=>props.int1 && css`

border:none;
width:10%;
height:40px;

`}
`
export const Select=styled.select`
width:70%;
height:30px;
border-radius:5px;
margin-bottom:20px;

`
//credit page
export const Credit=styled.div`
font-size:20px;
margin-left:40px;
margin-bottom:250px;
`

export const Main = styled.div`
margin-left:70px;
`