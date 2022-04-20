import styled from 'styled-components'

 const Login = () =>{
     return(
     <Container>
        <Content>
             <Cta>
                <CtalogoOne src='/images/cta-logo-one.vg' alt=""/>
                <SignUp> Create an account</SignUp>
                <Description>Here you can watch all latest movies &  trailer and Series  </Description>
                <Ctalogotwo src='/images/cta-logo-two.png' alt="" /> 
            </Cta>
            <Bgimage />
        </Content>
     </Container>);
 };
//  main container
 const Container = styled.section`
 overflow: hidden;
 display: flex;
 flex-direction: column;
 text-align: center;
 height: 100vh;

`;
// content
const Content =styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 220px 100px;
height: 100%;
`;
 

const Bgimage = styled.div`
height: 100%;  
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url("/images/login-background.jpg");
// background-image: url("/images/unsplash.jpg");
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: -1;  
`;
const Cta =styled.div`
max-width:650px;
width:100%;
display:flex;
flex-direction:column;

margin-bottom:2vw;
flex-wrap:wrap;
justify-content:center;
margin-top:0;
align-items:center;
text-align:center;
margin-right:auto;
margin-left:auto;
transition-timing-function: ease-out;
transition: opacity 0.2s;
`;
const CtalogoOne =styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display:block;
width:100%
`;
const SignUp = styled.a`
font-weight:bold;
color:#f9f9f9;
background-color:#0063e5;
margin-bottom:12px;
width:100%;
letter-spacing:1.5px;
font-size:18px;
padding:16.5px;
border:1px solid transparent;
border-radius:4px;
&:hover {
    background-color:#0483ee;
}
`;
const Description = styled.h2`
color: hsla(0,0%,95.3%,1);
font0size:11px; 
margin:0 0;
line-height:1.5em;
letter-spacing:1.5px;

`;
const Ctalogotwo =styled.img`
padding-top:5px;
max-width: 600px;
margin-bottom:20px;
display: inline-block;
vertical-align:bottom;
width:100%;

`; 
 export default Login;