import { useState } from 'react'
import './App.css'
import {useForm} from 'react-hook-form'

function App() {
  
  const {register, handleSubmit, formState: {errors}} = useForm();
  const[submitted,setSumbit]=useState(false);
  const [field,setField]=useState();

  const submitData=(data)=>{
    setField(data);
    setSumbit(true)
  }

  console.log(errors)

  return (
    <div className='box'>
      <form action="" onSubmit={handleSubmit(submitData)}>

        {submitted==true?<h3>Registration Successfull</h3>:null}

        <input id='first-name' type="text" className="field" placeholder='Enter your first name'
        {...register("firstName", {required:"Enter your first name"})}/>
        <p>{errors.firstName?.message}</p>

        <input id='second-name' type="text" className="field" placeholder='Enter your last name'
        {...register("lastName", {required:{value:true, message:"Enter your last name"}})}/>
        <p>{errors.lastName?.message}</p>

        <input id='emial' type="text" className="field" placeholder='Enter your email'
        {...register("email", {required:"Enter your email", pattern:{value:/^\S+@\S+$/i,message:"Invalid email"}})}/>
        <p>{errors.email?.message}</p>

        <input id='phoneNo' type="password" className="field" placeholder='Enter your password' 
         {...register("password", {required:"Enter your password", 
         minLength:{value:4,message:"Password must be more than 4 characters."}, 
         maxLength:{value:20,message:"Password can't be more than 20 characters."}})}/>
         <p>{errors.password?.message}</p>

        <input type="submit" value="Register" ></input>
       
      </form>
    </div>
  )
}

export default App
