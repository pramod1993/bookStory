import styled from 'styled-components';
export const row = styled.div`
     position: relative;
     display:flex;
     @media (max-width: 767px) {
        display: inline-block;           
        }     
`;

export const footerlink = styled.div`
    flex: 0 0 25%;
    max-width: 25%;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;

    @media (max-width: 767px) {
        max-width: 100%;          
    }

    & ul{
        margin:0;
        padding:0;
    }
    & li{
            list-style:none
        }
    & a{
            text-decoration:none;
            color:#fff;
            width:100%;
            font-family: roboto;
            font-size: 15px;
        }

        & li:hover a{
                color:red;
            }
`;

export const footerbox = styled.div`
    background:#1f427c;
    margin-top: 30px;
    padding: 30px 0;
    color: #fff;
`;

export const formbox = styled.div`

        & .fom{
            border-radius:0;
            &:focus {
                color: #212529;
                background-color: #fff;
                outline: 0;
                border: none;
                box-shadow: none;
            }
        }
        & .btn{
            border-radius:0;
            background: #064532;
            padding: 0 20px;
            text-align: center;
            display: inline-block;
            color:#fff;
            font-size: 24px;

            &:hover{
                background:#f1592b;
            }
        }
`;
export const social = styled.div`

    & ul{
        margin:0;
        padding:0;
        display: flex;
    }
    & li{
        list-style:none;
        width: 40px;
        height: 40px;
        line-height: 31px;
        border-radius: 100%;
        border: 2px solid #ccc;
        text-align: center;
        margin: 10px;
    }
    & a{
            text-decoration:none;
            color:#fff;
            font-family: roboto;
        
        & svg{
            font-size: 23px;
        }
            
        }
`;

export const medialink = styled.div`
        text-align: right;
        width: 31%;
        line-height: 60px;
        position: absolute;
        right: 0;
        @media (max-width: 767px) {
            width: 100%;  
            position: relative;        
        } 

        & img{
            width:100%;
        }
`;

export const copyright = styled.div`
    background:#0c2857;
    position:receive;
`;