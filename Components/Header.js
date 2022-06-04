import React from 'react'
import styled from 'styled-components';
function Header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg"/>
        {/* Middle section menus */}
        <NavMenu>
               
               <a>
                   <img src="/images/home-icon.svg" alt=""/>
                   <span>Homes</span>
               </a>
               <a>
                   <img src="/images/search-icon.svg" alt=""/>
                   <span>SEARCH</span>
               </a>
               <a>
                   <img src="/images/watchlist-icon.svg" alt=""/>
                   <span>WATCHLIST</span>
               </a>
               <a>
                   <img src="/images/original-icon.svg" alt=""/>
                   <span>ORIGINALS</span>
               </a>
               <a>
                   <img src="/images/movie-icon.svg" alt=""/>
                   <span>MOVIES</span>
               </a>
               <a>
                   <img src="/images/series-icon.svg" alt=""/>
                   <span>SERIES</span>
               </a>
        </NavMenu>
       <UserImg src="https://yt3.ggpht.com/yti/APfAmoEbmt5k7x71ual-vQFD8W6sFAInUrJ7_sXemGZaOA=s88-c-k-c0x00ffffff-no-rj-mo"/>
        
    </Nav>
  );
}

export default Header
const Nav=styled.div`
height: 70px;
background:#090b13;
display: flex;
overflow-x:hidden ;

padding :0 36px;// here 0 means top and bottom padding And 36px means Right and left padding
`
const Logo=styled.img`
width:80px;
`
// making the middle menue of disney
const NavMenu=styled.div`
display: flex;
flex:1;
justify-content: space-evenly;
margin-left:20px;
align-items: center;

a{
    display: flex;
    /* flex:1; */
    
    align-items: center;
    padding:0 12px;
    cursor: pointer;
    img{
        height: 20px ;

    }
    span{
        font-size:13px;
        letter-spacing: 1.42px;
        position: relative;
        //here making the bottom dass line in menu text
        &:after{
          content:" ";
          height: 2px;
          background: white;
          position: absolute;
          left:0;
          right:0;
          bottom:-6px;
          opacity: 0;
          transform-origin:left center;
          transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
          transform: scaleX(0);
          
        }
    }
    &:hover{
        span:after{
            transform: scaleX(1);
            opacity:1;
        }
    }
}
`
const UserImg=styled.img`
width:48px;
height:48px;
border-radius: 50%;
cursor: pointer;
margin-top: 10px;
`
// header is done
