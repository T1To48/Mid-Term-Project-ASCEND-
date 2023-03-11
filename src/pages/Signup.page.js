import React,{useState} from 'react'
import { usersDataApi } from '../api\'s';
const Signup= () => {
const [signupResults,setSignupResults]=useState(null)
const [signupDetails, setSignupDetails] = useState({
   name:"",
   email:"",
   password:"",
   library:{
      quotes:[],
      songs:[],
      recipes:[]
   }
});

const handleChange=(e)=>{
   setSignupDetails({
      ...signupDetails,
     [e.target.name]:e.target.value
   });
   
}
//orng\ useEffect(() => {
//orng\    console.log(signupDetails)
//orng\ }, [signupDetails])

const handleSignup=async (e)=>{
   e.preventDefault()
   try {
      //orng\ const response = 
      await usersDataApi.post(
        "",
        signupDetails
      );
      //orng\ setSignupResults(response.data);
      //orng\ console.log(signupResults);
    } catch (error) {
      console.log(error);
    }
  
}

  return (
    <div >
      <form onSubmit={handleSignup} >
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" onChange={handleChange}  required/><br/><br/>
      <label htmlFor="email">Email:</label>
      <input type="email"  name="email" onChange={handleChange} required/><br/><br/>
      <label htmlFor="password">Password:</label>
      <input type="password" value={signupDetails.password} name="password" onChange={handleChange} required  /><br/><br/>
      <button type="submit" value="Submit">Signup</button>
    </form>
    </div>
  )
}

export default Signup