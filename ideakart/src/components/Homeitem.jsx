import styled from 'styled-components'

// import styles from './Search.module.css';


const Title=styled.div`
    text-align:left;
    padding-left:10px;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top:10px;
    height:40px;

`

const Price=styled.div`
text-align:left;
padding-left:10px;
color:#75c3e3;
margin-top:10px;
margin-bottom: 14px;

`

const Homeitem = ({item}) => {
    const {imgUrl,price,title}=item
    return (
  <div className="homepage">
    <div className="upper">
      <img src={imgUrl} alt="" />
      
  
    </div>

    {/* <div className ={styles.Homedata_all_mapping_page_main_div}> */}

    
    <Title>

    <p>{title}</p>
    </Title>
      <Price className="price-div">
      <p>{price}</p>
  
      </Price>
    </div>
  // </div>
  
    )
  
  };
  export default Homeitem;