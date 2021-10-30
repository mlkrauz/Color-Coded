import React, { usestate } from 'react';

function Navbar({currentPage, handlePageChange }) {
    return (
      <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className={currentPage === 'Header' ? 'nav-link active' : 'nav-link'} href="#header">
        onClick={() => handlePageChange('Header')}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
               aria-current="page"
                href="#Home" 
                // change color here 
                style={{ color: '#30D5C8', fontWeight: 'bold'  }}
                onClick={() => handlePageChange('Home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className={currentPage === 'Advance Display' ? 'nav-link active' : 'nav-link'} 
              href="#AdvanceDisplay" 
              // chnage color here 
              style={{ color: '#30D5C8', fontWeight: 'bold'  }}
              onClick={() => handlePageChange('Advance Display')}>Advance Display</a>
            </li>
            <li className="nav-item">
              <a className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'} 
              href="#Login" 
              // chnage color here 
              style={{ color: '#30D5C8', fontWeight: 'bold'  }}
              onClick={() => handlePageChange('Login')}>#Login</a>
            </li>
            <li className="nav-item">
              <a className={currentPage === 'Export' ? 'nav-link active' : 'nav-link'}
              href="#Export" 
              style={{ color: '#30D5C8', fontWeight: 'bold'  }}
              onClick={() => handlePageChange('Export')}>Export</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        )
}
export default Navbar;