import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const List = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState(null); 

useEffect(() => {
   axios.get('http://localhost:3000/user/list')
    .then((res) => {
        setUser(res.data.data);
    }).catch((err) => {
        setError("No Data Found" || err.message);
    });
}, [])
 

    if (error) return <div style={{ color: 'red'}}>{error}</div>
   
    return (
        <div>
         <Link to="/insert">Add New</Link>
            <table border={2}>  
                 <thead>
               <tr>
                    <th>Id</th>
                    <th>Name</th>
             
            </tr>
               </thead>
          <tbody>
            {user.map(user => (
               <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
               </tr>
            ))}
         </tbody>
            </table>
        </div>
    )
}
export default List;