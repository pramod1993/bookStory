import React, { Component } from 'react'
import * as Styled from './BlogStyled';
import blog1 from '../img/blog.jpg';
import bloghe from '../img/bloghed.jpg';

export default class Blog extends Component {
  render() {
    return (
      <>
        <Styled.abouthed style={{background: `url(${blog1})`, color: '#fff',backgroundSize: 'cover',
    backgroundPosition: 'center',}}>
          <Styled.row>
            <div className='container'>
              <Styled.hedding>
              <h1>Blog</h1>
                <ul>
                  <li><a href='/'>Home</a></li>
                  <li>/</li>
                  <li>Blog</li>
                </ul>
              </Styled.hedding>
            </div>
          </Styled.row>
        </Styled.abouthed>


        <Styled.row>
          <div className='container mt-5'>
            <Styled.blogimg>
            <img src={bloghe}  />
            </Styled.blogimg>

            <Styled.blogtext>
              <p><span className='bold'>S</span>ed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisiVivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit.Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p>
              <p>Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p>
              <p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p>
              <p>Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p>
            </Styled.blogtext>
          </div>
        </Styled.row>
      </>
    )
  }
}
