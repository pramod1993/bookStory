import React, { Component, useState } from 'react'
import * as Styled from './HomeStyled';
import Carousel from 'react-bootstrap/Carousel';
import bg from '../img/bg.jpg';
import bg1 from '../img/bg1.jpg';
import homeimg from '../img/Image.jpg';
import homeimg1 from '../img/Image1.jpg';
import homeimg13 from '../img/Image1-1.jpg';
import homeimg2 from '../img/Image2.jpg';
import homeimg23 from '../img/Image2-1.jpg';
import homeimg3 from '../img/Image3.jpg';
import homeimg4 from '../img/Image4.jpg';
import homeimg43 from '../img/Image4-1.jpg';
import homeimg8 from '../img/Image8.jpg';
import homeimg9 from '../img/Image9.jpg';
import homeimg10 from '../img/Image10.jpg';
import homeimg5 from '../img/Image5.jpg';
import homeimg15 from '../img/Image5-1.jpg';
import homeimg6 from '../img/Image6.jpg';
import homeimg16 from '../img/Image6-1.jpg';
import homeimg7 from '../img/Image7.jpg';
import homeimg17 from '../img/Image7-1.jpg';
import homeimg11 from '../img/Image11.jpg';
import homeimg12 from '../img/Image12.jpg';
import bgimg from '../img/img5-7.jpg';
import homecover from '../img/cover.jpg';
import homecover1 from '../img/cover1.jpg';
import homecover2 from '../img/cover2.jpg';
import homecover3 from '../img/cover3.jpg';
import homecover4 from '../img/cover4.jpg';
import homeuser from '../img/user.jpg';
import homeuser1 from '../img/user1.jpg';
import homeuser2 from '../img/user2.jpg';


import { FaGraduationCap } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { BsSuitHeart } from "react-icons/bs";
import { BsFillBagFill } from "react-icons/bs";
import { ImEye } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";

export default class Home extends Component {
  render() {
    
    const dest = new Date('Dece 3, 2022 10: 00: 00').getTime();
    const x = setInterval(function() {
    const now = new Date().getTime();
    const dift = dest - now;
    const Day = Math.floor(dift / (1000* 60* 60* 24));
    const Hours = Math.floor((dift % (1000* 60* 60* 24)) / (1000* 60* 60));
    const Minut = Math.floor((dift % (1000* 60* 60)) / (1000* 60));
    const Second = Math.floor((dift % (1000* 60)) / 1000 ); 
    document.getElementById('Day').innerHTML = Day + ''
    document.getElementById('Hours').innerHTML = Hours + ''
    document.getElementById('Minut').innerHTML = Minut + ''
    document.getElementById('Second').innerHTML = Second + ''

    document.getElementById('Days').innerHTML = Day + ''
    document.getElementById('Hourss').innerHTML = Hours + ''
    document.getElementById('Minuts').innerHTML = Minut + ''
    document.getElementById('Seconds').innerHTML = Second + ''
    },1000 );
    return (
      <>
    <Styled.box>
        <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={bg} alt="First slide" />
        <Styled.Caption>
          <h2>Bestselling <br/>Non-Fiction Books</h2>
          <p>We deliver books all over the world 10,000+ books in stock </p>
        </Styled.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100"  src={bg1} alt="Second slide" />

        <Styled.Caption>
          <h2>Shop Online <br/>with Bookio</h2>
          <p>We deliver books all over the world 10,000+ books in stock </p>
        </Styled.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100"  src={bg}  alt="Third slide" />

        <Styled.Caption>
          <h2>Books to <br/>(Tik)Tok About </h2>
          <p>We deliver books all over the world 10,000+ books in stock</p>
        </Styled.Caption>
      </Carousel.Item>
    </Carousel>
      </Styled.box>

        <Styled.row>
            <div className='container'>
                <Styled.hed>
                    <h1>Deals of the days.</h1>
                    <Styled.bor/>
                    <Styled.icon><FaGraduationCap/></Styled.icon>
                </Styled.hed>
                <Styled.row>
                    <Styled.Deals>
                        <Styled.imgBox>
                        <img src={homeimg}/>
                        <Styled.over>5%</Styled.over>
                        <Styled.over1><BsSuitHeart/></Styled.over1>
                        <Styled.over2>
                            <ul>
                                <li><BsFillBagFill/></li>
                                <li><ImEye/></li>
                            </ul>
                        </Styled.over2>
                        </Styled.imgBox>
                        <Styled.DealsText>
                            <ul>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><span>(0)</span></li>
                            </ul>
                            <p>By : <a href='#'>Glenna Berge</a></p>
                            <h5><a href='#'>Surf Odyssey</a></h5>
                            <p><span>$200.00</span> <span className='dol'>$190.00</span></p>
                            <Styled.timeLine>
                                <Styled.line1></Styled.line1>
                                <Styled.line2></Styled.line2>
                            </Styled.timeLine>
                            <Styled.Available>
                                <Styled.Avaitext>Available: <span>5</span></Styled.Avaitext>
                                <Styled.Avaitext1>Sold:<span>9</span></Styled.Avaitext1>
                            </Styled.Available>
                            <Styled.timeteble>
                            <p id='Day'></p>
                            <p id='Hours'></p>
                            <p id='Minut'></p>
                            <p id='Second'></p>
                            </Styled.timeteble>
                            <Styled.timeteble1>
                            <p>Days</p>
                            <p>Hours</p>
                            <p>Mins</p>
                            <p>Secs</p>
                            </Styled.timeteble1>
                        </Styled.DealsText>
                    </Styled.Deals>
                    <Styled.Deals>
                        <Styled.imgBox>
                        <img src={homeimg1}/>
                        <Styled.over>6%</Styled.over>
                        <Styled.over1><BsSuitHeart/></Styled.over1>
                        <Styled.over2>
                            <ul>
                                <li><BsFillBagFill/></li>
                                <li><ImEye/></li>
                            </ul>
                        </Styled.over2>
                        </Styled.imgBox>
                        <Styled.DealsText>
                            <ul>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><span>(0)</span></li>
                            </ul>
                            <p>By : <a href='#'>Glenna Berge</a></p>
                            <h5><a href='#'>Surf Odyssey</a></h5>
                            <p><span>$200.00</span> <span className='dol'>$190.00</span></p>
                            <Styled.timeLine>
                                <Styled.line1></Styled.line1>
                                <Styled.line2></Styled.line2>
                            </Styled.timeLine>
                            <Styled.Available>
                                <Styled.Avaitext>Available: <span>7</span></Styled.Avaitext>
                                <Styled.Avaitext1>Sold:<span>8</span></Styled.Avaitext1>
                            </Styled.Available>
                            <Styled.timeteble>
                            <p id='Days'></p>
                            <p id='Hourss'></p>
                            <p id='Minuts'></p>
                            <p id='Seconds'></p>
                            </Styled.timeteble>
                            <Styled.timeteble1>
                            <p>Days</p>
                            <p>Hours</p>
                            <p>Mins</p>
                            <p>Secs</p>
                            </Styled.timeteble1>
                        </Styled.DealsText>
                    </Styled.Deals>
                </Styled.row>
            </div>
        </Styled.row>



        <Styled.row>
            <div className='container'>
                <Styled.hed>
                    <h1>Today's Top Sellers</h1>
                    <Styled.bor/>
                    <Styled.icon><FaGraduationCap/></Styled.icon>
                </Styled.hed>
                <Styled.row>
                    <Styled.Sellers>
                    <Styled.sellbox>
                        <Styled.tabimg>                        
                        <div className='secend'>
                            <img src={homeimg1}/>
                            <Styled.imgover>
                            <ul>
                                <li><BsFillBagFill/></li>
                                <li><ImEye/></li>
                            </ul>
                            </Styled.imgover>
                        </div>
                        <div className='first'>
                            <img src={homeimg13}/>
                        </div>
                        <Styled.over>-7%</Styled.over>
                        <Styled.over1><BsSuitHeart/></Styled.over1>
                        </Styled.tabimg>
                        <Styled.tabText>
                            <ul>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><span>(0)</span></li>
                            </ul>
                            <p>By : <a href='#'>Glenna Berge</a></p>
                            <h6><a href='#'>Castle In The Sky</a></h6>
                            <p><span>$300.00</span> <span className='dol'>$280.00</span></p>
                            
                        </Styled.tabText>
                        </Styled.sellbox>
                    </Styled.Sellers>

                    <Styled.Sellers>
                    <Styled.sellbox>
                        <Styled.tabimg>
                        <div className='secend'>
                            <img src={homeimg23}/>
                            <Styled.imgover>
                            <ul>
                                <li><BsFillBagFill/></li>
                                <li><ImEye/></li>
                            </ul>
                            </Styled.imgover>
                        </div>
                        <div className='first'>
                            <img src={homeimg2}/>
                        </div>
                        <Styled.over>-7%</Styled.over>
                        <Styled.over1><BsSuitHeart/></Styled.over1>
                            
                        </Styled.tabimg>
                        <Styled.tabText>
                        <ul>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><span>(0)</span></li>
                            </ul>
                            <p>By : <a href='#'>Glenna Berge</a></p>
                            <h6><a href='#'>Castle In The Sky</a></h6>
                            <p><span>$300.00</span> <span className='dol'>$280.00</span></p>
                        </Styled.tabText>
                        </Styled.sellbox>
                    </Styled.Sellers>

                    <Styled.Sellers>                        
                    <Styled.sellbox>
                        <Styled.tabimg>
                        <div className='secend'>
                            <img src={homeimg1}/>
                            <Styled.imgover>
                            <ul>
                                <li><BsFillBagFill/></li>
                                <li><ImEye/></li>
                            </ul>
                            </Styled.imgover>
                        </div>
                        <div className='first'>
                            <img src={homeimg13}/>
                        </div>
                        <Styled.over>-7%</Styled.over>
                        <Styled.over1><BsSuitHeart/></Styled.over1>
                            
                        </Styled.tabimg>
                        <Styled.tabText>
                        <ul>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><span>(0)</span></li>
                            </ul>
                            <p>By : <a href='#'>Glenna Berge</a></p>
                            <h6><a href='#'>Castle In The Sky</a></h6>
                            <p><span>$300.00</span> <span className='dol'>$280.00</span></p>
                        </Styled.tabText>
                        </Styled.sellbox>
                    </Styled.Sellers>

                    <Styled.Sellers>
                    <Styled.sellbox>
                        <Styled.tabimg>
                        <div className='secend'>
                            <img src={homeimg43}/>
                            <Styled.imgover>
                            <ul>
                                <li><BsFillBagFill/></li>
                                <li><ImEye/></li>
                            </ul>
                            </Styled.imgover>
                        </div>
                        <div className='first'>
                            <img src={homeimg4}/>
                        </div>
                        <Styled.over>-7%</Styled.over>
                        <Styled.over1><BsSuitHeart/></Styled.over1>
                            
                        </Styled.tabimg>
                        <Styled.tabText>
                        <ul>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><span>(0)</span></li>
                            </ul>
                            <p>By : <a href='#'>Glenna Berge</a></p>
                            <h6><a href='#'>Castle In The Sky</a></h6>
                            <p><span>$300.00</span> <span className='dol'>$280.00</span></p>
                        </Styled.tabText>
                        </Styled.sellbox>
                    </Styled.Sellers>
                </Styled.row>
            </div>
        </Styled.row>

        <Styled.row>
            <div className='container'>
            <Styled.row>
                <Styled.shop>
                    <Styled.sellbox>
                        <Styled.shopimg>
                            <img src={homeimg8}/>
                            <Styled.shoptext>
                            <h1>Now <br/>Realease.</h1>
                            <Styled.shoplink>
                                <a href='#' className='btn btnshop'>Shop Naw</a>
                            </Styled.shoplink>
                        </Styled.shoptext>
                        </Styled.shopimg>                        
                    </Styled.sellbox>
                </Styled.shop>

                <Styled.shop>
                    <Styled.sellbox>
                        <Styled.shopimg>
                            <img src={homeimg9}/>
                            <Styled.shoptext>
                            <h1>Pre Order<br/>Now</h1>
                            <Styled.shoplink>
                                <a href='#' className='btn btnshop1'>Shop Naw</a>
                            </Styled.shoplink>
                        </Styled.shoptext>
                        </Styled.shopimg>                        
                    </Styled.sellbox>
                </Styled.shop>

                <Styled.shop>
                    <Styled.sellbox>
                        <Styled.shopimg>
                            <img src={homeimg10}/>
                            <Styled.shoptext>
                            <h1>Top<br/>Rated.</h1>
                            <Styled.shoplink>
                                <a href='#' className='btn btnshop2'>Shop Naw</a>
                            </Styled.shoplink>
                        </Styled.shoptext>
                        </Styled.shopimg>                        
                    </Styled.sellbox>
                </Styled.shop>
            </Styled.row>
            </div>
        </Styled.row>


        <Styled.row>
            <div className='container'>
                <Styled.hed>
                    <h1>Bestselling Books</h1>
                    <Styled.bor/>
                    <Styled.icon><FaGraduationCap/></Styled.icon>
                </Styled.hed>
                <Styled.row>
                <Styled.Sellers>
                    <Styled.sellbox>
                        <Styled.tabimg>                        
                        <div className='secend'>
                            <img src={homeimg15}/>
                            <Styled.imgover>
                            <ul>
                                <li><BsFillBagFill/></li>
                                <li><ImEye/></li>
                            </ul>
                            </Styled.imgover>
                        </div>
                        <div className='first'>
                            <img src={homeimg5}/>
                        </div>
                        <Styled.over>-7%</Styled.over>
                        <Styled.over1><BsSuitHeart/></Styled.over1>
                        </Styled.tabimg>
                        <Styled.tabText>
                            <ul>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><span>(0)</span></li>
                            </ul>
                            <p>By : <a href='#'>Alyce Kris</a></p>
                            <h6><a href='#'>Frank Enstein</a></h6>
                            <p><span>$300.00</span> <span className='dol'>$280.00</span></p>
                            
                        </Styled.tabText>
                        </Styled.sellbox>
                    </Styled.Sellers>

                    <Styled.Sellers>
                    <Styled.sellbox>
                        <Styled.tabimg>
                        <div className='secend'>
                            <img src={homeimg16}/>
                            <Styled.imgover>
                            <ul>
                                <li><BsFillBagFill/></li>
                                <li><ImEye/></li>
                            </ul>
                            </Styled.imgover>
                        </div>
                        <div className='first'>
                            <img src={homeimg6}/>
                        </div>
                        <Styled.over>-7%</Styled.over>
                        <Styled.over1><BsSuitHeart/></Styled.over1>
                            
                        </Styled.tabimg>
                        <Styled.tabText>
                        <ul>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><span>(0)</span></li>
                            </ul>
                            <p>By : <a href='#'>Alyce Kris</a></p>
                            <h6><a href='#'>Frank Enstein</a></h6>
                            <p><span>$300.00</span> <span className='dol'>$280.00</span></p>
                        </Styled.tabText>
                        </Styled.sellbox>
                    </Styled.Sellers>

                    <Styled.Sellers>                        
                    <Styled.sellbox>
                        <Styled.tabimg>
                        <div className='secend'>
                            <img src={homeimg17}/>
                            <Styled.imgover>
                            <ul>
                                <li><BsFillBagFill/></li>
                                <li><ImEye/></li>
                            </ul>
                            </Styled.imgover>
                        </div>
                        <div className='first'>
                            <img src={homeimg7}/>
                        </div>
                        <Styled.over>-7%</Styled.over>
                        <Styled.over1><BsSuitHeart/></Styled.over1>
                            
                        </Styled.tabimg>
                        <Styled.tabText>
                        <ul>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><span>(0)</span></li>
                            </ul>
                            <p>By : <a href='#'>Alyce Kris</a></p>
                            <h6><a href='#'>Frank Enstein</a></h6>
                            <p><span>$300.00</span> <span className='dol'>$280.00</span></p>
                        </Styled.tabText>
                        </Styled.sellbox>
                    </Styled.Sellers>

                    <Styled.Sellers>
                    <Styled.sellbox>
                        <Styled.tabimg>
                        <div className='secend'>
                            <img src={homeimg3}/>
                            <Styled.imgover>
                            <ul>
                                <li><BsFillBagFill/></li>
                                <li><ImEye/></li>
                            </ul>
                            </Styled.imgover>
                        </div>
                        <div className='first'>
                            <img src={homeimg1}/>
                        </div>
                        <Styled.over>-7%</Styled.over>
                        <Styled.over1><BsSuitHeart/></Styled.over1>
                            
                        </Styled.tabimg>
                        <Styled.tabText>
                        <ul>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><span>(0)</span></li>
                            </ul>
                            <p>By : <a href='#'>Alyce Kris</a></p>
                            <h6><a href='#'>Frank Enstein</a></h6>
                            <p><span>$300.00</span> <span className='dol'>$280.00</span></p>
                        </Styled.tabText>
                        </Styled.sellbox>
                    </Styled.Sellers>
                </Styled.row>
            </div>
        </Styled.row>


        <Styled.row>
            <div className='container'>
                <Styled.row>
                    <Styled.books>
                        <Styled.sellbox>
                            <Styled.booksimg>
                                <img src={homeimg11}/>
                            </Styled.booksimg>
                            <Styled.bookstext>
                                <h1>Book Your Own<br/>Adventures</h1>
                                <h5>MORE BANG FOR YOUR BOOK</h5>
                                <Styled.shoplink>
                                <a href='#' className='btn btnshop2'>Shop Naw</a>
                            </Styled.shoplink>
                            </Styled.bookstext>
                        </Styled.sellbox>
                    </Styled.books>
                    <Styled.books>
                        <Styled.sellbox>
                            <Styled.booksimg>
                                <img src={homeimg12}/>
                            </Styled.booksimg>
                            <Styled.bookstext1>
                                <h1>The Top Kids<br/>Books</h1>
                                <h5>MORE BANG FOR YOUR BOOK</h5>
                                <Styled.shoplink>
                                <a href='#' className='btn btnshop2'>Shop Naw</a>
                            </Styled.shoplink>
                            </Styled.bookstext1>
                        </Styled.sellbox>
                    </Styled.books>
                </Styled.row>
            </div>
        </Styled.row>


        <Styled.row>
            <div className='container'>
                <Styled.hed>
                    <h1>Today's Top Sellers</h1>
                    <Styled.bor/>
                    <Styled.icon><FaGraduationCap/></Styled.icon>
                </Styled.hed>
                <Styled.row>
                    <Styled.Sellers>
                    <Styled.sellbox>
                        <Styled.tabimg>                        
                        <div className='secend'>
                            <img src={homeimg1}/>
                            <Styled.imgover>
                            <ul>
                                <li><BsFillBagFill/></li>
                                <li><ImEye/></li>
                            </ul>
                            </Styled.imgover>
                        </div>
                        <div className='first'>
                            <img src={homeimg13}/>
                        </div>
                        <Styled.over>-7%</Styled.over>
                        <Styled.over1><BsSuitHeart/></Styled.over1>
                        </Styled.tabimg>
                        <Styled.tabText>
                            <ul>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><span>(0)</span></li>
                            </ul>
                            <p>By : <a href='#'>Glenna Berge</a></p>
                            <h6><a href='#'>Castle In The Sky</a></h6>
                            <p><span>$300.00</span> <span className='dol'>$280.00</span></p>
                            
                        </Styled.tabText>
                        </Styled.sellbox>
                    </Styled.Sellers>

                    <Styled.Sellers>
                    <Styled.sellbox>
                        <Styled.tabimg>
                        <div className='secend'>
                            <img src={homeimg23}/>
                            <Styled.imgover>
                            <ul>
                                <li><BsFillBagFill/></li>
                                <li><ImEye/></li>
                            </ul>
                            </Styled.imgover>
                        </div>
                        <div className='first'>
                            <img src={homeimg2}/>
                        </div>
                        <Styled.over>-7%</Styled.over>
                        <Styled.over1><BsSuitHeart/></Styled.over1>
                            
                        </Styled.tabimg>
                        <Styled.tabText>
                        <ul>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><span>(0)</span></li>
                            </ul>
                            <p>By : <a href='#'>Glenna Berge</a></p>
                            <h6><a href='#'>Castle In The Sky</a></h6>
                            <p><span>$300.00</span> <span className='dol'>$280.00</span></p>
                        </Styled.tabText>
                        </Styled.sellbox>
                    </Styled.Sellers>

                    <Styled.Sellers>                        
                    <Styled.sellbox>
                        <Styled.tabimg>
                        <div className='secend'>
                            <img src={homeimg13}/>
                            <Styled.imgover>
                            <ul>
                                <li><BsFillBagFill/></li>
                                <li><ImEye/></li>
                            </ul>
                            </Styled.imgover>
                        </div>
                        <div className='first'>
                            <img src={homeimg1}/>
                        </div>
                        <Styled.over>-7%</Styled.over>
                        <Styled.over1><BsSuitHeart/></Styled.over1>
                            
                        </Styled.tabimg>
                        <Styled.tabText>
                        <ul>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><span>(0)</span></li>
                            </ul>
                            <p>By : <a href='#'>Glenna Berge</a></p>
                            <h6><a href='#'>Castle In The Sky</a></h6>
                            <p><span>$300.00</span> <span className='dol'>$280.00</span></p>
                        </Styled.tabText>
                        </Styled.sellbox>
                    </Styled.Sellers>

                    <Styled.Sellers>
                    <Styled.sellbox>
                        <Styled.tabimg>
                        <div className='secend'>
                            <img src={homeimg43}/>
                            <Styled.imgover>
                            <ul>
                                <li><BsFillBagFill/></li>
                                <li><ImEye/></li>
                            </ul>
                            </Styled.imgover>
                        </div>
                        <div className='first'>
                            <img src={homeimg4}/>
                        </div>
                        <Styled.over>-7%</Styled.over>
                        <Styled.over1><BsSuitHeart/></Styled.over1>
                            
                        </Styled.tabimg>
                        <Styled.tabText>
                        <ul>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><span>(0)</span></li>
                            </ul>
                            <p>By : <a href='#'>Glenna Berge</a></p>
                            <h6><a href='#'>Castle In The Sky</a></h6>
                            <p><span>$300.00</span> <span className='dol'>$280.00</span></p>
                        </Styled.tabText>
                        </Styled.sellbox>
                    </Styled.Sellers>
                </Styled.row>
            </div>
        </Styled.row>


        <Styled.row>
            <Styled.backimg style={{backgroundImage:`url(${bgimg})`,}}>
                <div className='container'>
                    <Styled.hed1>
                        <h1>Top Categories</h1>
                        <Styled.bor1/>
                        <Styled.icon1><FaGraduationCap/></Styled.icon1>
                    </Styled.hed1>
                    <Styled.row>
                        <Styled.coverbox>
                            <Styled.coverimg>
                                <img src={homecover}/>
                            </Styled.coverimg>
                            <p>Adventure</p>
                        </Styled.coverbox>
                        <Styled.coverbox>
                            <Styled.coverimg>
                                <img src={homecover1}/>
                            </Styled.coverimg>
                            <p>Adventure</p>
                        </Styled.coverbox>
                        <Styled.coverbox>
                            <Styled.coverimg>
                                <img src={homecover2}/>
                            </Styled.coverimg>
                            <p>Adventure</p>
                        </Styled.coverbox>
                        <Styled.coverbox>
                            <Styled.coverimg>
                                <img src={homecover3}/>
                            </Styled.coverimg>
                            <p>Adventure</p>
                        </Styled.coverbox>
                        <Styled.coverbox>
                            <Styled.coverimg>
                                <img src={homecover4}/>
                            </Styled.coverimg>
                            <p>Adventure</p>
                        </Styled.coverbox>
                    </Styled.row>
                </div>
            </Styled.backimg>
        </Styled.row>


        <Styled.row>
            <div className='container'>
            <Styled.hed>
                <h1>Happy Client Say !</h1>
                <Styled.bor/>
                <Styled.icon><FaGraduationCap/></Styled.icon>
            </Styled.hed>
            <Styled.row>
                <Styled.shop>
                    <Styled.sellbox>
                    <Styled.star>
                            <ul>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                            </ul>
                            <p>Great quality!</p>
                            <Styled.hastag><FaQuoteRight/></Styled.hastag>
                        </Styled.star> 
                        <Styled.startext>
                            <p>Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep screen violence joints symptoms x-ray... </p>
                        </Styled.startext> 
                        <Styled.userbox>
                            <Styled.userimg>
                                <img src={homeuser}/>
                            </Styled.userimg>
                            <Styled.usertext>
                                <h6>Ann Smith</h6>
                                <p>Photographer</p>
                            </Styled.usertext>
                        </Styled.userbox>                    
                    </Styled.sellbox>
                </Styled.shop>

                <Styled.shop>
                    <Styled.sellbox>
                    <Styled.star>
                            <ul>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                            </ul>
                            <p>Great quality!</p>
                            <Styled.hastag><FaQuoteRight/></Styled.hastag>
                        </Styled.star> 
                        <Styled.startext>
                            <p>Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep screen violence joints symptoms x-ray... </p>
                        </Styled.startext> 
                        <Styled.userbox>
                            <Styled.userimg>
                                <img src={homeuser1}/>
                            </Styled.userimg>
                            <Styled.usertext>
                                <h6>Sara Colinton</h6>
                                <p>Nutricionist</p>
                            </Styled.usertext>
                        </Styled.userbox>                 
                    </Styled.sellbox>
                </Styled.shop>

                <Styled.shop>
                    <Styled.sellbox>
                        <Styled.star>
                            <ul>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                            </ul>
                            <p>Great quality!</p>
                            <Styled.hastag><FaQuoteRight/></Styled.hastag>
                        </Styled.star> 
                        <Styled.startext>
                            <p>Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep screen violence joints symptoms x-ray... </p>
                        </Styled.startext> 
                        <Styled.userbox>
                            <Styled.userimg>
                                <img src={homeuser2}/>
                            </Styled.userimg>
                            <Styled.usertext>
                                <h6>Saitama One</h6>
                                <p>Photographer</p>
                            </Styled.usertext>
                        </Styled.userbox>                      
                    </Styled.sellbox>
                </Styled.shop>
            </Styled.row>
            </div>
        </Styled.row>
      </>
    )
  }
}
