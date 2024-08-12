import React from 'react'
import './footer.css'
import {Form, Input, Button} from "antd"

const Footer = () => {


  const handleSubmit = (formValues) =>{

    //formValues.preventDefault();

  
  }
  return (
    <div>
      <footer className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="firstComment">
                  <h2>Follow Us</h2>
                  <p>Stay connected with us and be part of a global movement empowering individuals through financial inclusion. By following us on social media, you'll receive the latest updates on our projects, success stories, and opportunities to get involved. Join our community and see how microfinance is transforming lives every day.</p>
                </div>
                <div className="social-d-flex flex-row py-5">
                  <a href="#"><i class="fa-brands fa-twitter p-2 m-2"></i></a>
                  <a href="#"><i class="fa-brands fa-facebook p-2"></i></a> 
                  <a href="#"><i class="fa-brands fa-instagram p-2"></i></a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="firstInquiry">
                  <h2>General Inquiries</h2>
                  <p>Monday to Friday</p>
                  <p>8.00am - 5:00pm</p>
                  <p>Call: 0720328587 or 0103228576</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="firstComment">
                  <h2>FIND US</h2>
                  <p>BRIGHTER WORLD LTD</p>
                  <p>P.O BOX 6332-00300</p>
                  <p>NAIROBI/KENYA</p>
                  <p>Email: brighterworld22@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer;