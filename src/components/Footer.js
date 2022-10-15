import React, { Component } from 'react'
import * as Styled from './FooterStyled';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

import paymet1 from '../img/paymet.png';
export default class Footer extends Component {
  render() {
    return (
      <div>
      
        <Styled.footerbox>
            <Styled.row>
                <div className='container'>
                <Styled.row>
                    <Styled.footerlink>
                        <h5>NEED HELP?</h5>

                        <ul>
                            <li>
                                <a href='#'>Help Center</a>
                            </li>
                            <li>
                                <a href='#'>Shipping FAQs</a>
                            </li>
                            <li>
                                <a href='#'>Pick up in Store</a>
                            </li>
                            <li>
                                <a href='#'>Order Status</a>
                            </li>
                            <li>
                                <a href='#'>Product Recalls</a>
                            </li>
                            <li>
                                <a href='#'>Corrections & Updates</a>
                            </li>
                            <li>
                                <a href='#'>Gift Cards</a>
                            </li>
                        </ul>
                    </Styled.footerlink>

                    <Styled.footerlink>
                        <h5>ABOUT US</h5>
                        
                        <ul>
                            <li>
                                <a href='#'>Contact Us</a>
                            </li>
                            <li>
                                <a href='#'>Track Your Order</a>
                            </li>
                            <li>
                                <a href='#'>Returns Policy</a>
                            </li>
                            <li>
                                <a href='#'>Delivery Information</a>
                            </li>
                            <li>
                                <a href='#'>Loyalty Program</a>
                            </li>
                        </ul>
                    </Styled.footerlink>
                    <Styled.footerlink>
                        <h5>CATEGORIES</h5>
                        
                        <ul>
                            <li>
                                <a href='#'>Coupons</a>
                            </li>
                            <li>
                                <a href='#'>RX Prescription</a>
                            </li>
                            <li>
                                <a href='#'>Scholarship Program</a>
                            </li>
                            <li>
                                <a href='#'>Brand Directory</a>
                            </li>
                            <li>
                                <a href='#'>E-Catalogs/Requests</a>
                            </li>
                            <li>
                                <a href='#'>Order Form</a>
                            </li>
                            <li>
                                <a href='#'>Blog</a>
                            </li>
                        </ul>
                    </Styled.footerlink>
                    <Styled.footerlink>
                        <h5>OUR NEWSLETTER</h5>
                        <p>Sign up for our latest news and offers:</p>
                        <Styled.formbox>
                        <InputGroup className="mb-3">
                        <Form.Control className='fom' placeholder="Your email address..." aria-label="Your email address..."
                        />
                        <Button variant="outline-secondary" className='btn'>
                        <AiOutlineMail/>
                        </Button>
                    </InputGroup>
                        </Styled.formbox>
                    </Styled.footerlink>
                </Styled.row>
                </div>
            </Styled.row>
        </Styled.footerbox>
        <Styled.copyright>
                <Styled.row>
                    <div className='container'>
                        <Styled.row>
                            <Styled.social>
                                <ul>
                                    <li><a href='#'><AiOutlineTwitter/></a></li>
                                    <li><a href='#'><AiOutlineInstagram/></a></li>
                                    <li><a href='#'><FaFacebookF/></a></li>
                                    <li><a href='#'><AiOutlineYoutube/></a></li>
                                </ul>
                            </Styled.social>
                            <Styled.medialink>
                                <img src={paymet1}/>
                            </Styled.medialink>
                        </Styled.row>
                    </div>
                </Styled.row>
            </Styled.copyright>
      </div>
    )
  }
}
