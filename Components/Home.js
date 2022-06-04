import React,{useEffect} from 'react'
import styled from 'styled-components'
import ImgSliderr from './ImgSliderr'
import Viewers from './Viewers'
import Movies from './Movies'
import db from '../firebas'
function Home() {
useEffect(()=>{
    // console.log("hello");
    db.collection("movies").onSnapshot((snapshot)=>{
       console.log(snapshot);
       let tempMovies=snapshot.docs.map((doc)=>{
         console.log(doc.data());
         return{id:doc.id,...doc.data()}
       })
    })
},[])


  return (
    <Container>
        <ImgSliderr/>
        <Viewers/>
        <Movies/>
    </Container>

  )
}

export default Home
const Container=styled.main`// here main define that any brower will read this component as main component 
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw  + 5px);
/* background: blue; */
position: relative;
overflow-x:hidden;
&:before{
    background:url("images/home-background.png") center center/ cover  no-repeat fixed;
   
    /* content:""; */
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: -1;//these makes the containent behind the image if value is greater than -1
}
`
