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
export const maps = styled.div`
    width:100%;

    & iframe{
        width:100%;
        height:500px;
    }
`;

export const details = styled.div`
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    margin-top: 30px;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
    @media (max-width: 767px) {
        max-width: 100%;          
        }
`;
export const messeg = styled.div`
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
    margin-top: 30px;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
    @media (max-width: 767px) {
        max-width: 100%;          
        }

        & h1{
            font-family: roboto;
        }
`;
export const conticon = styled.div`

    margin-bottom: 14px;

    & span{
        width: 50px;
        height: 50px;
        text-align: center;
        position: relative;
        float: left;
        border: 2px solid #000;
        line-height: 35px;
        font-size: 25px;
    }
    & p{
        padding:0;
        margin:0px;
        position: relative;
        left: 10px;
        font-size: 14px;
        font-family: roboto;
    }
`;

export const contbor = styled.div`
    border-bottom: 1px solid #ccc;
    margin-bottom: 6px;
`;
export const Mesbor = styled.div`
    width: 100%;
    height: 1px;
    background: #ccc;
`;
export const Mestopbor = styled.div`
    width: 60%;
    height: 3px;
    background: #064532;
    position: relative;
    top: -2px;
`;
export const fombox = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    margin-top: 30px;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
    @media (max-width: 767px) {
        max-width: 100%;          
        }

        & .fom{
            border-radius: 0;
            height: 41px;
            margin-bottom: 20px;

        }
        & .fom:focus {
                color: #212529;
                background-color: #fff;
                border-bottom: 1px solid #ccc;
                outline: 0;
                box-shadow: none;
        }
            
`;
export const texta = styled.div`
    flex: 0 0 100%;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    & .fom1{
            border-radius: 0;
            margin-bottom: 20px;

        }
        & .fom1:focus {
                color: #212529;
                background-color: #fff;
                border-bottom: 1px solid #ccc;
                outline: 0;
                box-shadow: none;
        }
        & .subm {
                background: #000;
                padding: 10px 20px;
                color: #fff;
                text-transform: uppercase;
                font-family: roboto;
                font-weight: 500;
                border-radius: 0;
                &:hover{
                    background: #064532;
                }
        }
`;