import styled from 'styled-components';
export const row = styled.div`
     position: relative;
     display:flex;
     @media (max-width: 767px) {
        display: inline-block;           
        }
`;

export const abouthed = styled.div`
        padding: 50px 0px;
        margin-bottom: 40px;        
`;
export const hedding = styled.div`
    & ul{
            margin:0;
            padding:0;
            display:flex;
        }
        & li{
            list-style:none;
            padding: 0 16px 0px 0px;
        }
        & a{
            text-decoration: none;
            color:red;
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
export const sellbox = styled.div`
    box-shadow: 0px 2px 9px #ccc;
    padding: 10px;
`;