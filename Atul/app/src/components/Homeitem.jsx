import styled from 'styled-components'



const Title=styled.div`
text-align:left;
padding-left:10px;
`

const Price=styled.div`
text-align:left;
padding-left:10px;
color:;
`

const Homeitem = ({item}) => {
    const {imgUrl,price,title}=item
    return (
  <div className="homepage">
    <div className="upper">
      <img src={imgUrl} alt="" />
      
  
    </div>
    <Title>

    <p>{title}</p>
    </Title>
    <Price className="price-div">
      <p>{price}</p>
  
    </Price>
  </div>
  
    )
  
  };
  export default Homeitem;