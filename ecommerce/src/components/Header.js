import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import {Container, Dropdown,Badge}  from "react-bootstrap";
import { BsCartCheckFill } from 'react-icons/bs'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="navbar  bg-dark" style ={{height:70}}>
        <Container>
        <Link to="/" className='navbar-brand' style={{color:'white'}}>Shopping</Link>
        <form className="navbar-form navbar-left">
       <div className="input-group">
        <input type="text" className="form-control m-auto" style={{width:500,height:35}} placeholder="Search a product" name="search" />
        {/* <div className="input-group-btn">
          <button className ="btn btn-default" type="submit">
            < AiOutlineSearch color="white" fontsize="25px" />
          </button> */}
        {/* </div> */}
        
  
      </div>
    </form>
    <div>
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
     <BsCartCheckFill color="white" fontSize="25px" />
     <Badge className ="badge bg-success" >10</Badge>
    </Dropdown.Toggle>

    <Dropdown.Menu style={{minWidth:370}}>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    </div>
    </Container>
      </nav>
    </div>
  );
}

export default Header;
