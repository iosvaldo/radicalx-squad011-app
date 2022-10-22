import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import "./btn.css" 

function MainTitle() {
  return (
   
      <div className="main-title">
        <div className="title-container">
            <h4>
              Internship
            </h4>
        </div>
        <div className="add-button-container">
            <button className="home-title-btn">
              + Create New Internship
            </button>
        </div>
        
      </div>



  )
}

export default MainTitle