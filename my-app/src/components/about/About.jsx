import "./about.css";
import Award from "../../img/award.png";
import { USERS } from "../../redux/constance/constance";
import CV from "../../img/delower-web.pdf";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {getUserAction,Register} from '../../redux/action/authAction'

const About = () => {
  const dispatch = useDispatch()
  const user = useSelector((state)=>state.getUsers);
  const allUsers = user.data;
  const { register, handleSubmit } = useForm();
  console.log(allUsers)

  

  const getUserHandler = ()=>{
    dispatch(getUserAction)
  }


  const formSubmit = (formData)=>{
    dispatch(Register(formData));
  }
  
  return (
    <div className="a">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6">
          <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
          </div>
          <div className="col-12 col-sm-6">
          <div className="a-right">
        <h1 className="a-title btn btn-primary" onClick={getUserHandler} >About Me</h1>
        <p className="a-sub">
          <ul>
          
            {
              allUsers ?
                allUsers.map((item) => (
                  <li key={item.id}>{item.username}</li>
                )) : 
                <h5>username </h5>
            }
            
            
          
          
          
          
           
          </ul>
        </p>
        <p className="a-desc">

        <form onSubmit={handleSubmit(formSubmit)} >
        <div class="form-group">
        <label >UserName</label>
        <input type="text" {...register("username",{required: true})} name='username' class="form-control" placeholder="Enter Username"/>
        </div>

        <div class="form-group">
          <label >Email address</label>
          <input type="email" {...register("email",{required: true})} name='email' class="form-control" placeholder="Enter email"/>
        </div>

        <div class="form-group">
          <label >Password</label>
          <input type="password" {...register("password",{required: true})} name='password' class="form-control" placeholder="Password"/>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
        

        <div className="download-button">
            <a href={CV} download className="btn">Download CV</a>
            <a href="#hire-me" className="btn hireme">Hire Me</a>
        </div>
          </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default About;
