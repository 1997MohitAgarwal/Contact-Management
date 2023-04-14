import React from "react"
import {Link} from "react-router-dom";
export default function Navbar(){
  return(
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
  <Link className="navbar-brand" to="#">Contact Management</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon bg-info"></span>
  </button>
  <div className="collapse navbar-collapse"  id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/Contacts">Contacts <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/Charts">Charts & Graph</Link>
      </li>
     </ul>
  </div>
 </nav>
</>
  )
}