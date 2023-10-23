import React from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components'
import Nav from './Nav';

const Header = () => {
  return (
    <MainHeader className='header'>
      <NavLink className="logo" to="/">
         <span className='text1'>War</span><span className='text2'>Tech</span>
      </NavLink>
      <Nav/>
    </MainHeader>
  )
}

const MainHeader = styled.header`
background-color:${({theme}) => theme.colors.bg};
display:flex;
align-items:center;
justify-content: space-between;
position:relative;
width: 100vw;


.logo{
    display: flex;
    border: 2px solid black;
    font-size: 2rem;
    margin: 2rem;
    width: min(100%,10rem);
    text-align: center;
    text-decoration: none;
    .text1,.text2{
        display: inline-block;
        width: min(100%,5rem);
       font-weight: bold;
       background-color: #fff;
    }
    .text1{
        color: #fff;
        background-color: purple;
    }
}
@media only screen and (max-width:${({theme}) => theme.media.sm}) {
   justify-content: space-around;
   .logo{
    margin-left: 0;
   }
}

@media only screen and (max-width:${({theme}) => theme.media.mobile}){
  justify-content: space-around;
   .logo{
    margin-left: 0;
   }
}
`;

export default Header
