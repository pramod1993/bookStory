import styled from 'styled-components';
export const Caption = styled.div`
    position: absolute;
    top: 35%;
    left: 15%;
    color: #fff;
    font-family: roboto;
    @media (max-width: 767px) {
        top: 4%;            
        }

    & h2{
        font-size:48px;

        @media (max-width: 767px) {
        font-size:16px;
            
        }
    }
    & p{

        @media (max-width: 767px) {
            font-size: 12px;
            width: 45%;
            
        }
    }    
`;
export const box = styled.div`
    position: relative;
`;
export const row = styled.div`
     position: relative;
     display:flex;
     @media (max-width: 767px) {
        display: inline-block;           
        }
     
`;
export const hed = styled.div`
    text-align: center;
    margin: 30px auto;

    & h1{
        text-transform: uppercase;
        font-weight: 500;
        font-family: roboto;
    }
`;
export const bor = styled.div`
    width: 32%;
    height: 2px;
    background: #064532;
    margin: 0 auto;
`;
export const icon = styled.div`
    position: relative;

    & svg{
        font-size:30px;
        position: absolute;
        top: -17px;
        left: 48%;
        background: #fff;
        padding: 5px;
        width: 40px;
    }
`;
export const Deals = styled.div`
    width:50%;
    margin:5px;
    background:#fff;
    display: flex;
    box-shadow: 0 2px 9px #ccc;
    padding:10px;
`;
export const imgBox = styled.div`
    width:50%;
    position:relative;

    & img{
        width: 100%;
        position:relative;
    }
`;
export const DealsText = styled.div`
    padding:0px 20px;
    width:50%;

   & ul{
        margin:0;
        padding:0;
        display: inline-flex;

        & li{
            list-style: none;
            padding: 0px 6px;
            color: #e1e1e1;

            & span{
                color: #807d7d;
                font-weight: 500;
            }
        }
    }

    & p> span{
        text-decoration: line-through;

        &.dol{
            text-decoration: auto;
            font-size: 22px;
            font-family: roboto;
            color: red;
            font-weight: 500;
            letter-spacing: -1px;
        }
        
    }
    a{
        text-decoration: none; 
        color: #444242;
        font-family: roboto;
    }
    

`;
export const over = styled.div`
    position: absolute;
    top: 3px;
    left: 0;
    background: red;
    color: #fff;
    padding: 0px 8px 0px 12px;
`;
export const over1 = styled.div`
    position: absolute;
    top: 3px;
    right: 9px;
    font-size: 20px;
    color: #d0c9c9;
    background: #fff;
    width: 30px;
    height: 30px;
    line-height: 27px;
    text-align: center;
    border-radius: 100%;

    &:hover{        
    color: #fff;
    background: #064532;
    }
`;
export const over2 = styled.div`
    background: #000000b8;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 5px;
    opacity: 0;
    transition: all ease-out 0.9s;

    &:hover{
        opacity: 1;
        transform: translate(0px, -1px);
        transition: all ease-out 0.9s;
    }

    & ul{
        margin:0;
        padding:0;
        display:inline-flex;

        & li{
            list-style:none;
            padding: 0px 47px;
            color: #fff;
            font-size: 30px;
        }
    }
`;

export const line1 = styled.div`
    width:100%;
    height:6px;
    background:#e1e1e1;
    border-radius: 2px;
`;
export const line2 = styled.div`
    width: 60%;
    height: 6px;
    background: #064532;
    border-radius: 2px;
    position: absolute;
    top: 0;
`;
export const timeLine = styled.div`
    position: relative;
`;
export const Available = styled.div`
    display: flex;
`;
export const Avaitext = styled.div`
    font-family: roboto;
    font-weight: 400;
    & span{
        color:#064532;

    }
`;
export const Avaitext1 = styled.div`
    font-family: roboto;
    font-weight: 400;
    position: relative;
    left: 45%;
    & span{
        color:red;
    }
`;
export const timeteble = styled.div`
    display: flex;
    margin-top: 20px;

    & p{
        border: 2px solid #ccc;
        margin: 5px;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-radius: 100px;
    }

    & #Day{
        font-size: 20px;
        font-family: roboto;
        font-weight: 600;
        color:#f1592b;
    }
    & #Hours{
        font-size: 20px;
        font-family: roboto;
        font-weight: 600;
        color:#f1592b;
    }
    & #Minut{
        font-size: 20px;
        font-family: roboto;
        font-weight: 600;
        color:#f1592b;
    }
    & #Second{
        font-size: 20px;
        font-family: roboto;
        font-weight: 600;
        color:#f1592b;
    }


    & #Days{
        font-size: 20px;
        font-family: roboto;
        font-weight: 600;
        color:#f1592b;
    }
    & #Hourss{
        font-size: 20px;
        font-family: roboto;
        font-weight: 600;
        color:#f1592b;
    }
    & #Minuts{
        font-size: 20px;
        font-family: roboto;
        font-weight: 600;
        color:#f1592b;
    }
    & #Seconds{
        font-size: 20px;
        font-family: roboto;
        font-weight: 600;
        color:#f1592b;
    }
`;
export const timeteble1 = styled.div`
    display: flex;

    & p{
        text-align: center;
        width: 50px;
        margin: 5px;
        font-size: 15px;
        position: relative;
        top: -10px;
        font-family: roboto;
        font-weight: 400;
        color:#064532;
    }
`;

export const Sellers = styled.div`
    flex: 0 0 25%;
    max-width: 25%;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
    @media (max-width: 767px) {
        max-width: 100%;          
        }
`;
export const tabimg = styled.div` 
    position:relative;
    height: 330px;
    overflow: hidden;  
    
    & img{
        width:100%;
    }
    & .first{
        opacity:1;
    }
    & .secend{
        opacity:0;
        position: absolute;
        bottom: 0;
        transition: all ease-out 0.9s;
    }
    & .secend:hover {
        opacity:1;
        bottom: 0;
        transition: all ease-out 0.9s;
    }
`;
export const imgover = styled.div`
    position:absolute;
    bottom: 0;
    background: #000;
    left: 0;
    right: 0;
    & ul{
        margin:0;
        padding:0;
        display:inline-flex;

        & li{
            list-style:none;
            padding:0px 35px;

            & svg{
                padding: 11px 0px;
                color: #fff;
                font-size: 44px;
            }            
            &:hover{
                background:#064532;
            }
        }
    }
`;
export const tabText = styled.div`
    text-align: center;
    margin-top: 20px;
    & ul{
        margin:0;
        padding:0;
        display: inline-flex;

        & li{
            list-style: none;
            padding: 0px 6px;
            color: #e1e1e1;

            & span{
                color: #807d7d;
                font-weight: 500;
            }
        }
    }

    & p> span{
        text-decoration: line-through;

        &.dol{
            text-decoration: auto;
            font-size: 22px;
            font-family: roboto;
            color: red;
            font-weight: 500;
            letter-spacing: -1px;
        }
        
    }
    & a{
        text-decoration: none; 
        color: #444242;
        font-family: roboto;
    }
    & p{
        margin:0;
    }
    & h6 a{
        color:#064532;
    }
`;
export const sellbox = styled.div`
    box-shadow: 0px 2px 9px #ccc;
    padding: 10px;
`;
export const shop = styled.div`
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    margin-top: 30px;
    position: relative;
    ${'' /* width: 100%; */}
    padding-right: 15px;
    padding-left: 15px;
    @media (max-width: 767px) {
        max-width: 100%;          
        }
`;
export const shopimg = styled.div`
    position:relative;

    & img{
        width:100%;
    }
`;
export const shoptext = styled.div`
    position: absolute;
    top: 26px;
    left: 12px;
    color: #fff;
`;
export const shoplink = styled.div`
    margin-top: 30px;

    & .btnshop{
        background:#8f2224;
        border-radius: 0;
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        font-family: roboto;
    }
    & .btnshop1{
        background:#2c8a6b;
        border-radius: 0;
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        font-family: roboto;
    }
    & .btnshop2{
        background:#3076d2;
        border-radius: 0;
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        font-family: roboto;
    }

    & a:hover{
        background:#064532;
    }
`;
export const books = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
    margin-top:30px;
    @media (max-width: 767px) {
        max-width: 100%;          
        }
`;
export const booksimg = styled.div`

    & img{
        width:100%;
    }
`;
export const bookstext = styled.div`
    background:#064532;
    color:#fff;
    text-align: center;
    padding: 50px 0;
`;

export const bookstext1 = styled.div`
    background:#e87712;
    color:#fff;
    text-align: center;
    padding: 50px 0;
`;
export const backimg = styled.div`
    background-size: cover;
    background-position: center;
    width: 100%;
    margin-top: 30px;
`;
export const hed1 = styled.div`
    text-align: center;
    margin: 30px auto;
    & h1{
        text-transform: uppercase;
        font-weight: 500;
        font-family: roboto;
        color:#fff;
    }
`;
export const bor1 = styled.div`
    width: 32%;
    height: 2px;
    background: #fff;
    margin: 0 auto;
`;
export const icon1 = styled.div`
    position: relative;

    & svg {
        font-size: 30px;
        position: absolute;
        top: -17px;
        left: 48%;
        background: #091a38;
        padding: 5px;
        width: 40px;
        color:#fff;
    }
`;

export const coverbox = styled.div`
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    font-family: roboto;
`;
export const coverimg = styled.div`
    width: 210px;
    background: #fff;
    height: 210px;
    line-height: 210px;
    border-radius: 100%;
    overflow: hidden;
    margin: 7px;

    & img{
        position:relative;
        top: 30px;

        &:hover{
            transform: translate(0px, -10px);
            transition: all ease-out 0.6s;
        }
    }
    
`;

export const star = styled.div`
    position:relative;

    & p{
        font-size: 20px;
        font-family: roboto;
        font-weight: 400;
        color:#064532;
    }
    & ul {
        margin: 0;
        padding: 0;
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        & li {
            list-style: none;
            padding: 0px 6px;
            color: #f7a20d;
        }
    }
`;
export const hastag = styled.div`

    & svg{
        position: absolute;
        right: 10px;
        top: 0px;
        font-size: 60px;
    }
`;
export const startext = styled.div`

`;
export const userbox = styled.div`
    display:flex;
`;
export const userimg = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 100%;
    border: 2px dotted #064532;

    & img{
        width:100%;
        border-radius: 100%;
    }
`;
export const usertext = styled.div`
    position: relative;
    left: 14px;
    top: 11px;
    h6{
        margin:0;
        text-transform: uppercase;
    }
`;