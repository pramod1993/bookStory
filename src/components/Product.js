import React, { Component } from 'react'
import * as Styled from './ProductStyled';
import Product1 from '../img/Product.jpg';
import homeimg1 from '../img/Image1.jpg';
import homeimg13 from '../img/Image1-1.jpg';
import homeimg2 from '../img/Image2.jpg';
import homeimg23 from '../img/Image2-1.jpg';
import homeimg3 from '../img/Image3.jpg';
import homeimg4 from '../img/Image4.jpg';
import homeimg43 from '../img/Image4-1.jpg';
import homeimg5 from '../img/Image5.jpg';
import homeimg15 from '../img/Image5-1.jpg';
import homeimg6 from '../img/Image6.jpg';
import homeimg16 from '../img/Image6-1.jpg';
import homeimg7 from '../img/Image7.jpg';
import homeimg17 from '../img/Image7-1.jpg';

import { BsSuitHeart } from "react-icons/bs";
import { BsFillBagFill } from "react-icons/bs";
import { ImEye } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";

export default class Product extends Component {
  render() {
    return (
      <div>
        <Styled.abouthed style={{background: `url(${Product1})`, color: '#fff',backgroundSize: 'cover',
    backgroundPosition: 'center',}}>
          <Styled.row>
            <div className='container'>
              <Styled.hedding>
              <h1>Product Author</h1>
                <ul>
                  <li><a href='/'>Home</a></li>
                  <li>/</li>
                  <li>Product Author</li>
                </ul>
              </Styled.hedding>
            </div>
          </Styled.row>
        </Styled.abouthed>

        <Styled.row>
          <div className='container'>
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
          <div className='container  mt-5'>
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
      </div>
    )
  }
}
