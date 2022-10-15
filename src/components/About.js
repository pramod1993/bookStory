import React, { Component } from 'react'
import * as Styled from './AboutStyled';
import abouthed from '../img/about-banner.jpg';

export default class About extends Component {
  render() {
    return (
      <div>
        <Styled.abouthed style={{background: `url(${abouthed})`, color: '#fff',backgroundSize: 'cover',
    backgroundPosition: 'center',}}>
          <Styled.row>
            <div className='container'>
              <Styled.hedding>
              <h1>About Us</h1>
                <ul>
                  <li><a href='/'>Home</a></li>
                  <li>/</li>
                  <li>About Us</li>
                </ul>
              </Styled.hedding>
            </div>
          </Styled.row>
        </Styled.abouthed>

        <Styled.row>
            <div className='container'>
              <Styled.row>
                <Styled.Aboutbody>
                  <Styled.sellbox>
                    <h1>01. The order</h1>
                    <h5><strong>When do I receive my order?</strong></h5>
                    <p>When placing the order, a day of shipment is indicated. After the order has been placed, the same delivery time will also be stated on the order confirmation. It is therefore never possible that during the order, the shipping day on the website, is different than on the order confirmation.</p>
                    <h6><strong>I now see the longer delivery time of (a part of) my order. How can I cancel it?</strong></h6>
                    <p>If the order has a longer delivery time than you had previously seen, it is of course possible to cancel (a part of) the order. For this you can contact our customer service. They will cancel the order for you. The purchase amount will be back on your bank account within two working days. When an order has already been shipped, it can no longer be cancelled.</p>
                    <h6><strong>When will I receive the invoice for my order?</strong></h6>
                    <p>When you have paid for the order, you will not automatically receive an invoice for your order. If you wish to receive an invoice, this can be done in two ways.The first way is through your account at our store. When you log in to your account you can see your orders and download the invoice.</p>
                  </Styled.sellbox>
                </Styled.Aboutbody>


                <Styled.Aboutbody>
                  <Styled.sellbox>
                    <h1>02. Shipment</h1>
                    <h5><strong>When do I receive my order?</strong></h5>
                    <p>When placing the order, a day of shipment is indicated. After the order has been placed, the same delivery time will also be stated on the order confirmation. It is therefore never possible that during the order, the shipping day on the website, is different than on the order confirmation.</p>
                    <h6><strong>I now see the longer delivery time of (a part of) my order. How can I cancel it?</strong></h6>
                    <p>If the order has a longer delivery time than you had previously seen, it is of course possible to cancel (a part of) the order. For this you can contact our customer service. They will cancel the order for you. The purchase amount will be back on your bank account within two working days. When an order has already been shipped, it can no longer be cancelled.</p>
                    <h6><strong>When will I receive the invoice for my order?</strong></h6>
                    <p>When you have paid for the order, you will not automatically receive an invoice for your order. If you wish to receive an invoice, this can be done in two ways.The first way is through your account at our store. When you log in to your account you can see your orders and download the invoice.</p>
                  </Styled.sellbox>
                </Styled.Aboutbody>
              </Styled.row>
            </div>
        </Styled.row>


        <Styled.row>
            <div className='container'>
              <Styled.row>
                <Styled.Aboutbody>
                  <Styled.sellbox>
                    <h1>03. The order</h1>
                    <h5><strong>When do I receive my order?</strong></h5>
                    <p>When placing the order, a day of shipment is indicated. After the order has been placed, the same delivery time will also be stated on the order confirmation. It is therefore never possible that during the order, the shipping day on the website, is different than on the order confirmation.</p>
                    <h6><strong>I now see the longer delivery time of (a part of) my order. How can I cancel it?</strong></h6>
                    <p>If the order has a longer delivery time than you had previously seen, it is of course possible to cancel (a part of) the order. For this you can contact our customer service. They will cancel the order for you. The purchase amount will be back on your bank account within two working days. When an order has already been shipped, it can no longer be cancelled.</p>
                    <h6><strong>When will I receive the invoice for my order?</strong></h6>
                    <p>When you have paid for the order, you will not automatically receive an invoice for your order. If you wish to receive an invoice, this can be done in two ways.The first way is through your account at our store. When you log in to your account you can see your orders and download the invoice.</p>
                  </Styled.sellbox>
                </Styled.Aboutbody>


                <Styled.Aboutbody>
                  <Styled.sellbox>
                    <h1>04. Returns, exchanges and complaints</h1>
                    <h5><strong>When do I receive my order?</strong></h5>
                    <p>When placing the order, a day of shipment is indicated. After the order has been placed, the same delivery time will also be stated on the order confirmation. It is therefore never possible that during the order, the shipping day on the website, is different than on the order confirmation.</p>
                    <h6><strong>I now see the longer delivery time of (a part of) my order. How can I cancel it?</strong></h6>
                    <p>If the order has a longer delivery time than you had previously seen, it is of course possible to cancel (a part of) the order. For this you can contact our customer service. They will cancel the order for you. The purchase amount will be back on your bank account within two working days. When an order has already been shipped, it can no longer be cancelled.</p>
                    <h6><strong>When will I receive the invoice for my order?</strong></h6>
                    <p>When you have paid for the order, you will not automatically receive an invoice for your order. If you wish to receive an invoice, this can be done in two ways.The first way is through your account at our store. When you log in to your account you can see your orders and download the invoice.</p>
                  </Styled.sellbox>
                </Styled.Aboutbody>
              </Styled.row>
            </div>
        </Styled.row>
      </div>
    )
  }
}
