import React from 'react'
import styled from 'styled-components'

function Dtail() {
  return (
    <Container>
        <Background>
        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6385/656385-h" />
        </Background>
        <ImageTitle>
            <img src="https://pbs.twimg.com/media/EJNgi7cXYAExhC1.png"/>
        </ImageTitle>
        <Controls>
            <PlayButton>
                <img src="/images/play-icon-black.png"/>
                <span>PLAY</span>
            </PlayButton>
          <TrailerButton>
              <img src="/images/play-icon-black.png"/>
              <span>Trailer</span>
          </TrailerButton>
         <AddButton>
             <span>+</span>
         </AddButton>
         <GroupButton>
             <img src="/images/group-icon.png"/>
         </GroupButton>
        </Controls>
        <SubTitle>
         <p>2018 . 7m . Family, Fantasy, kids, Animation</p>
        </SubTitle>
        <Description>
           Disney+ Hotstar is an Indian brand of subscription video on-demand over-the-top 
           streaming service owned by Novi Digital Entertainment of Disney Star and operated by Disney Media and Entertainment Distribution, both divisions of The Walt Disney
        </Description>

    </Container>
  )
}

export default Dtail
const Container=styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
`
const Background=styled.div`
/* these whole code set the background-image in proper fixed whole page */
position: fixed;
top:0;
left: 0;
bottom: 0;
right: 0%;
z-index:-1;
img{
    width: 100%;
    height: 100%;
    object-fit:cover;
}
`
const ImageTitle=styled.div`
height: 30vh;
min-height: 170px;
width: 35px;
min-width: 200px;
 img{
     width: 100%;
     height: 100%;
     object-fit: contain;
 }
`
const Controls=styled.button`
display: flex;
align-items:center;
background:none;
border:none;

`
const PlayButton=styled.button`
border-radius: 4px;
font-size:15px;
padding:0px 24px;
margin-right: 22px;
display: flex;
align-items: center;
height:45px;
background: rgb(249,249,249);
cursor:pointer;
&:hover{
    background: rgb(198,198,198);
}
`



const TrailerButton=styled(PlayButton)`
  background:rgba(0,0,0,0.3);
  border:1px solid rgb(249,249,249);
  color:rgb(249,249,249);
  text-transform:uppercase;
  
  
`
const AddButton=styled.button`
margin-right:16px;
   width:44px;
   height:44px;
   display:flex;
   align-items:center;
   justify-content:center;
   border-radius:50%;
   border:2px solid white;
   background-color:rgba(0,0,0,0.6);
   cursor:pointer;
   span{
       font-size:30;
       color:white;
   }


`
const GroupButton=styled(AddButton)`


`  
const SubTitle=styled.div`
color:rgb(549,249,249);
font-size:15px;
min-height:20px;
margin-top:26px;
align-items:left;

`
const Description=styled.div`
line-height:1.4;
font-size:20px;
margin-top:16px;
color:rgb(249,249,249);
max-width:60%;
`
