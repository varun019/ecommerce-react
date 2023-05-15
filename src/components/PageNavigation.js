import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({title})=>{
    return(
    <Wrapper>
        <NavLink to='/'>Home</NavLink>/{title}
    </Wrapper>
    )
}

const Wrapper = styled.section`
  height: 10rem;
  background-color: #f2f2f2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 3.2rem;
  a {
    font-size: 3rem;
  }
`;

export default PageNavigation;