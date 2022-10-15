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
export const Aboutbody = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
    margin-top:30px;
    @media (max-width: 767px) {
        max-width: 100%;          
        }
    padding: 10px;
    font-family: roboto;

`;
export const sellbox = styled.div`
    box-shadow: 0px 2px 9px #ccc;
    padding: 10px;
`;
