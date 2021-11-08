import {USERS,REGISTER} from '../constance/constance.js'
import axios from 'axios'
export const getUserAction = async(dispatch)=>{
      await axios.get("http://localhost:5000/auth/users")
        .then(res=>{

          dispatch({
            type:'USERS',
            payload: res.data
        });
        })
      
        
      
  }

  export const Register = ({username,email,password})=>async(dispatch)=>{
    const config = {
        headers: {
          'Content-Type': 'Application/json',
        },
      }
      await axios.post("http://localhost:5000/auth/register",{username,email,password},config)
              .then(res=>{
                dispatch({
                  type:REGISTER,
                  payload: res.data
              })
              })

      
  }