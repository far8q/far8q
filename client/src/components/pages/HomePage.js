import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
export default function HomePage() {
  
  
    return (
      <>
    <div className="btn-text-right ">
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div className="container-fluid">
       <a className="navbar-brand " href="/">Home</a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="/About">About</a>
           </li>  
         </ul>
         
       </div>
     </div>
   </nav>
   </div>
   <div className='text-center'>
   <h2 className="main-title home-page-title">Public Buses</h2>
   </div>
   <div div className="text-center ">
     <form>
           <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
          <div className="btn btn-outline-success mx-2 my-1">
          <Dropdown>
         <Dropdown.Toggle variant="success" id="dropdown-basic">
           Select
        </Dropdown.Toggle>

         <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Entered Bus Name</Dropdown.Item>
             <Dropdown.Item href="#/action-2">entered Location</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
             </div> 
             <div className="btn btn-outline-success mx-2 my-1">
           <button className="button" type="submit">Search</button>
           </div>
           </form>
            </div>
            <div className='text-center'>
              
            <Link to="/">
                <button className="primary-button " id="reg_btn"><span>Logout </span></button>
            </Link>
            </div>
            </>
   
    
    )
}
