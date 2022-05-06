import axios from "axios"
import React,{useState , useEffect} from "react"
import styles from './Search.module.css';

const InpSearch = () => {
    const [loading , setLoading] =useState(false)
    const [posts,setPosts] = useState([])
    const [searchTitle,setSearchTitle] = useState('')
  
    useEffect(()=>{
      const loadPosts = async () => {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8000/data"
        )
        setPosts(response.data)
        setLoading(false)
      }
      loadPosts();
    }, [])
  
    return (
     <>
      
      <div>
        <div className={styles.searchText_input}>
         <label> Search </label>
         <input type="text"
         placeholder="search"
         onChange={(e) => setSearchTitle(e.target.value)}
         />
         </div>
         <div className={styles.main_div}>
         {loading ? (
           <h4>Loading...</h4>
         ):(
           
         posts
         .filter((value) => {
           if (searchTitle === ""){
             return value
           }
           else if (value.title.toLowerCase().includes(searchTitle.toLowerCase())
           ){
             return value
           }
          })
          
          .map((item) =>  <div >
          <div className="">
              <img className={styles.image} src={item.imgUrl} alt="" />
              <div className="">
                  <h5>
                        {item.title}
                  </h5>
                  <p>
                        {item.price}
                  </p>
              </div>
          </div>
      </div>)
         )}
  
      </div>
      </div>
     
     </>
    )
}

export default InpSearch