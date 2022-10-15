import styled from 'styled-components';

export const row = styled.div`
    display:flex;
`;
export const login = styled.div`
    background: #ccc;
    padding: 15px;
    box-shadow: 0px 0px 18px 0px #cccbcb;

    & .submit{
        padding: 6px 42px;
        margin-top: 30px;
    }

    & input{
        border:1px solid #ccc;
        border-radius: 0;

        &:focus{
            box-shadow: none;
            border: 1px solid #ccc;
            border-radius: 0;

        }
    }
    & label{
        font-family: roboto;
        font-weight: 400;
    }

    & h3{
        font-family: roboto;
        font-weight: 500;
        text-align: center;
        text-transform: uppercase;
        color: #064532;
        border-bottom: 3px solid #064532;
    }
`;

export const showDateStayle = styled.div`
    background: #d9e3f3;
    color: #060606;
    display: flex;
    margin-top: 15px;

    & p{
        padding: 6px 11px;
        margin: 0;
        border-right: 1px solid #ccc;
    }
`;
export const Tab1 = styled.div `
    width: 60%;
    background: #ccc;
    margin: 50px auto;
    padding: 15px;
    box-shadow: 0px 0px 18px 0px #cccbcb;
`;
export const NavItem = styled.div`
    width: 50%;
    text-align: center;

    & .nav-link{
        border-radius: 0;
        background: #d9e3f3;
        color: #000;
        font-weight: 500;
    }
    
    
`;
export const NavTab = styled.div`
    display: flex;
    
`;