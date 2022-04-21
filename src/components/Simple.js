import styled from "styled-components";
import { Link } from "react-router-dom";

const Simple = (props) => {

  return (
    <Container>
      <h4>welcome</h4>
      <Content>
         
            <Wrap >
      
              <Link to='/'>
              <img src="/images/unsplash.jpg" alt="" />
              </Link>
            </Wrap>
            <Wrap >
      
            <Link to='/'>
            <img src="/images/unsplash.jpg" alt="" />
            </Link>
          </Wrap>
          <Wrap >
      
          <Link to='/'>
          <img src="/images/unsplash.jpg" alt="" />
          </Link>
        </Wrap>
        <Wrap >
      
        <Link to='/'>
        <img src="/images/unsplash.jpg" alt="" />
        </Link>
      </Wrap>
     
          
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

 
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
 
  cursor: pointer;
  overflow: hidden;
  position: relative;
 
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
   
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
   
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Simple;
