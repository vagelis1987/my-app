import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";

const Header = () =>{
return (
  <div className="ui fixed menu">
  <div className="ui container center">
    <h2>
      My - APP Header
    </h2>
    
  </div>
  <Stack direction="row" >
  <Link to="/">
     <Button size="small">
      Home
     </Button>
 </Link>  
  <Link to="/product">
     <Button size="small">
      Product List Example
     </Button>
 </Link>  
 <Link to="/university">
      <Button size="small">
        Universities List Example
      </Button>
  </Link>   
    </Stack>
  </div>

)
};

export default Header;