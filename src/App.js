import logo from './logo.svg';
import './App.css';

import Dashboard from './Components/Dashboard'

import {useState, useEffect} from 'react'

import {Button, Toolbar} from '@mui/material'

import {TextField} from '@mui/material'

import {Typography} from '@mui/material';

import {AppBar} from '@mui/material';

import {Box} from '@mui/material';

function App(){

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const isLoggedInHandler = () =>{
    let status = isLoggedIn === true ? false : true;
    setIsLoggedIn(status);
  }


  if(isLoggedIn){
   return(
    <div className="App">
      <Box sx={{flexGrow : 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Music App
          </Typography>
        </Toolbar>
      </AppBar>
      </Box>
    
    <Dashboard/>
    
  </div>
 
   )
    
}

else{

  return (
   <div className="App">
     <Box sx={{flexGrow : 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Music App
          </Typography>
        </Toolbar>
      </AppBar>
      </Box>

      <header className="App-header">
        <h2>Login</h2>
        <TextField autoComplete="off" id="username" label="Username" variant="filled" />
        <br></br>
        <TextField  autoComplete="off" id="pass" label ="Password" variant='filled'/>
        <br></br>
        <Button variant="contained" onClick={isLoggedInHandler}>Submit</Button>
      </header>
    </div>
  );

}
  
}

export default App;
