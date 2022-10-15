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

export const blogimg = styled.div`

    & img{
        width:100%;
    }
`;
export const blogtext = styled.div`
    margin-top:30px;
    & p span{
        font-size: 30px;
        font-family: roboto;
        font-weight: 500;
        border: 3px solid #ccc;
        width: 50px;
        height: 50px;
        line-height: 50px;
        display: inline-block;
        text-align: center;
        margin-right: 5px;
        position: relative;
        top: 11px;
        float: left;
    }
`;