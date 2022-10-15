import React, { Component } from 'react'
import * as Styled from './ContactStyled';
import Form from 'react-bootstrap/Form';
import contact1 from '../img/contact.jpg';
import { FaHome } from "react-icons/fa";
import { FaFax } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Styled.abouthed style={{background: `url(${contact1})`, color: '#fff',backgroundSize: 'cover',
    backgroundPosition: 'center',}}>
          <Styled.row>
            <div className='container'>
              <Styled.hedding>
              <h1>Contact us</h1>
                <ul>
                  <li><a href='/'>Home</a></li>
                  <li>/</li>
                  <li>Contact Us</li>
                </ul>
              </Styled.hedding>
            </div>
          </Styled.row>
        </Styled.abouthed>

        
        <Styled.row>
          <div className='container mt-5'>
            <Styled.maps>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224.63055680801682!2d85.36470308872318!3d25.734573233797963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed65a420570e15%3A0xa2d2622b0a33e4ae!2sPramod%20Singh%20(Bihari)!5e0!3m2!1sen!2sin!4v1665751595930!5m2!1sen!2sin"></iframe>
            </Styled.maps>
          </div>
        </Styled.row>


        <Styled.row>
          <div className='container mt-5'>
            <Styled.row>
              <Styled.details>
                <Styled.conticon>
                  <span><FaHome/></span>
                  <p><strong>STORE LOCATION</strong></p>
                  <p>9204 Glen Ridge Court Beverly, MA 01915</p>
                </Styled.conticon>

                  <Styled.contbor/>

                <Styled.conticon>
                  <span><IoCall/></span>
                  <p><strong>CALL US</strong></p>
                  <p>(+91) 1234567809</p>
                </Styled.conticon>

                  <Styled.contbor/>

                <Styled.conticon>
                  <span><AiOutlineMail/></span>
                  <p><strong>CARRED</strong></p>
                  <p>pramod.info@book.com</p>
                </Styled.conticon>

                  <Styled.contbor/>

                <Styled.conticon>
                  <span><FaFax/></span>
                  <p><strong>FAX</strong></p>
                  <p>400-5174-888</p>
                </Styled.conticon>

                  <Styled.contbor/>

                <Styled.conticon>
                  <span><AiOutlineClockCircle/></span>
                  <p><strong>OPEN HOURS</strong></p>
                  <p>Mon-Fre : 10.00 - 18.00</p>
                </Styled.conticon>
              </Styled.details>
              <Styled.messeg>

                <h1>Leave us a Message</h1>
                <Styled.Mesbor></Styled.Mesbor>
                <Styled.Mestopbor></Styled.Mestopbor>

                <form>
                  <Styled.row>
                  <Styled.fombox>
                  <Form.Control type="Name" placeholder="Your Name* ........" className='fom' />
                  </Styled.fombox>
                  <Styled.fombox>
                  <Form.Control type="Email" placeholder="Your Email* ........" className='fom' />
                  </Styled.fombox>
                  </Styled.row>
                  <Styled.texta>
                  <Form.Control as="textarea" rows={6}  className='fom1'/>
                  </Styled.texta>
                  <Styled.texta>
                    <input type='submit' value='Send Message' className='btn subm'/>
                  </Styled.texta>
                </form>

              </Styled.messeg>
            </Styled.row>
          </div>
          </Styled.row>
      </div>
    )
  }
}
