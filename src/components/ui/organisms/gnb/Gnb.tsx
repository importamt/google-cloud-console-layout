import styled from "styled-components";
import {Hamburger, Icon} from "../../atoms";
import {MouseEventHandler} from "react";

interface IGnb {
    title: string,
    handleHamburgerButtonClick: MouseEventHandler
}

export const Gnb = ({title, handleHamburgerButtonClick}: IGnb) => {

    return <StyledGnb>
        <StyledHamburger onClick={handleHamburgerButtonClick}/>
        <h1>{title}</h1>
    </StyledGnb>

}

const StyledHamburger = styled(Hamburger)`
  color: white;
  width: 30px; 
  height: 30px;
  cursor: pointer;
`

const StyledGnb = styled.header`
  display: flex;
  align-items: center;
  background: orange;

  & h1 {
    color: white;
  }
`
