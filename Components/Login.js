import React from 'react'
import styled from 'styled-components'

const Login = () => {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg"/>
               <Signup>
                   GET ALL THERE
               </Signup>
               <Description>
               Disney+ Hotstar is an online video streaming platform owned by Novi Digital Entertainment Private Limited, 
               a wholly owned subsidiary of Star India Private Limited. Disney+ Hotstar currently offers over 100,000 hours of TV content and movies across 9 languages, and every major sport covered live.
               </Description>
               <CTALogoTwo src="/images/cta-logo-two.png"/>
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
position:relative;
height:calc(100vh - 70px);
display:flex;
align-items: top;
justify-content:center;
&:before{
    background-position: top;
    background-size:cover;//these will cover the whole size
    background-repeat: no-repeat;
    background:url("images/login-background.jpg");//center center/ cover  no-repeat fixed;
   
   content:"";
   position: absolute;
   top:0;
   left:0;
   right:0;
   bottom:0;
   opacity:0.7;
   z-index: -1;//these makes the containent behind the image if value is greater than -1

}
`
const CTA=styled.div`
max-width:650px;
padding: 80px 40px;//these give the distance from (top,bottom= 80px and left, right=40px)
width:90%;
display:flex;
flex-direction: column;
margin-top:40px;
align-items:center;

`
const CTALogoOne=styled.img`

`
const Signup=styled.a`
width:100%;
background-color: #0063e5;
padding:17px 0;
color:#f9f9f9;
border-radius: 4px;
text-align:center;
font-size:18px;
cursor:pointer;
transition:all 250ms;
letter-spacing:1.5px;
margin-top:8px;
margin-bottom:3%;
&:hover{
    background: #0483ee;
}



`
const Description=styled.p`
font-size:11px;
letter-spacing: 1.5px;
text-align: center;
line-height:1.5;

`
const CTALogoTwo=styled.img`
/* width:100%; */
`
