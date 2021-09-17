import styled from "styled-components";
import {MouseEventHandler} from "react";
import {Menu} from '@styled-icons/entypo/Menu'

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

const StyledHamburger = styled(Menu)`
  color: white;
  width: 30px;
  height: 30px;
  padding: 10px;
  cursor: pointer;
`

const StyledGnb = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background: orange;

  & h1 {
    color: white;
  }
`
