import { useEffect, useState } from "react"
import Nav_bar from "../../components/Nav_bar/Nav_bar"
import axios from "axios"
import "./Home.css"

function Home() {
  let[a,setA]= useState([])

  let database = async()=>{
    try {
      let response = await axios.get(`https://demo-client-5p11.onrender.com/get?searchTerm=${searchTerm}`)
      setA(response.data);
    } catch (error) {
      console.log(error)
    } 
  }

  useEffect(()=>{
    database()
  },[])

  const [searchTerm, setSearchTerm] = useState('');

  // Function that will run when the button is clicked
  const handleSearchClick = () => {
    database()
    // Yahan aap apna custom function add kar sakte hain
  };

  return (
    <div>
      <Nav_bar />
      <div className="container">
        <div className="search-box">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <button onClick={handleSearchClick}>Search</button>
        </div>
    </div>
      <div>
        <table className="style">
          <tr>
            <th className="style">S No.</th>
            <th className="style">Name</th>
            <th className="style">Email</th>
            <th className="style">Message</th>
          </tr>
          {
            a.map((value,index)=>{
              return (
              <tr>
                <td className="style">{index + 1}</td>
                <td className="style">{value.name}</td>
                <td className="style">{value.email}</td>
                <td className="style">{value.message}</td>
              </tr>
              )
            })
          }
        </table>
      </div>
    </div>
  )
}

export default Home