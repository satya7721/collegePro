
import { Button , Paper, Grid ,TextField,Select,MenuItem} from '@material-ui/core';
import {React,useState} from 'react'
import { useHistory } from "react-router-dom";
import Logo from '../assets/clg.png';

import '../App.css';


function Login() {
    const history = useHistory();
    
    const [subject, setSubject] = useState('');

    // subject handle
    const sub = (event) => {
        setSubject(event.target.value);
      };


    // file Upload
    const fileSub= (event)=>{

        console.log(event.target.files[0])
    }

    const submit= event =>{
        history.push("/done");
    }
    return (
      <div className="App">

        
    
        <Grid container>

                <div className="Box">
                <Paper style={{width:"100%",margin:"auto",padding:"10px",alignContent:"center"}}>
                    <img src={Logo} className="Logo"  />
                <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Name" fullWidth variant="outlined" style={{marginTop:"12px"}} />
                <br/>
                <TextField id="outlined-basic" label="Mail" fullWidth variant="outlined"  style={{marginTop:"12px"}}  />
                <br/>
                <TextField id="outlined-basic" label="Roll NO." fullWidth variant="outlined"  style={{marginTop:"12px"}}  />
                <br/>
                <Select
                labelId="sub"
                id="sub"
                value={subject}
                onChange={sub}
                
                style={{marginTop:"12px",width:"60%",marginLeft:"5%"}} 
                >
                <MenuItem value={"MDS"}>MDS</MenuItem>
                <MenuItem value={"PYTHON"}>Python</MenuItem>
                <MenuItem value={"DIS"}>DIS</MenuItem>
                </Select>
                <br/>
                <Button
                variant="outlined"
                component="label"
                style={{
                    marginLeft:"7px",
                    marginTop:"20px",
                    border:"solid 1px #c382ff" 
                }}
                >
                Upload File
                <input
                    type="file"
                    hidden
                    onChange={fileSub}
                />
                </Button>
                <br/>
                <Button
                variant="contained"
                component="label"
                style={{
                    marginLeft:"60%",
                    marginTop:"20px",
                  
                }}
                onClick={submit}
                >
                Submit
                </Button>
                </form>

               </Paper>
                
                </div>
        
        </Grid>       
           
        
       
      </div>
    );
  }
  
  export default Login;
  
   