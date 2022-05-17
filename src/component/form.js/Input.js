import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


const Input = () => {

const [values, setvalues] = useState({

    name: "",
    email: "",
    password: "",

  });

  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  function handleClick() {
    if (!values) {
      setErrorMessage("Please fill all the details first!")
    }
    else {
      navigate("/Created")
    }

  }
  

//    const handleChange =(event) =>{
//      setvalues({values, [event.target.name]:event.target.value,
// });
//    };


 
  
  // const handleformsubmit = (event) => {
  //   event.preventDefault();
  
  // };

  return (
    
    <div className='container' >
          <div className='error'> {errorMessage}</div>

      <div className='app-wrapper'>
        <div>
          <h4 className='title'>Create Account</h4>
        </div>

        <form action=''>

          <div className='name'>
            <label className='label' htmlFor='username'>Name</label><br />
            <input className='input'
              type="text"
              autoComplete='off'
              name="name"
              id="name"
              placeholder='Enter your full name'
              value={values.name}
              onChange={(e) => { setvalues(e.target.value)(setErrorMessage("")) }} />
            

          </div>

          <div className='email'>
            <label className='label' htmlFor='email'>Email</label><br />
            <input className='input'
              type="text"
              autoComplete='off'
              name="email"
              id="email"
              placeholder='Enter email id'
              value={values.email}
              onChange={(e) => { setvalues(e.target.value)(setErrorMessage("")) }} />
            

          </div>

          <div className='password'>
            <label className='label' htmlFor='password'>Password</label><br />
            <input className='input'
              type="password"
              autoComplete='off'
              name="password"
              id="password"
              placeholder='Enter password'
              value={values.password}
              onChange={(e) => { setvalues(e.target.value)(setErrorMessage("")) }} />
              

          </div>

          <br />

          <button className='submit' onclick={handleClick}>Sign up</button>
          
        </form>
      </div>
    </div>
  )
}

export default Input