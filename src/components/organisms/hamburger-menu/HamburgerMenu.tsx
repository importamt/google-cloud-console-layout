import styled from "styled-components";

interface IHamburgerMenu {
    isShow: boolean
}

export const HamburgerMenu = ({isShow}: IHamburgerMenu) => {
    return (
        <StyledHamburgerMenu isShow={isShow}>
            abc
        </StyledHamburgerMenu>
    )
}

const StyledHamburgerMenu = styled.aside<IHamburgerMenu>`
  position: absolute;
  width: 350px;
  height: 100%;
  left: ${({isShow}) => isShow?0:'-350px'};
  top: 0;
  
  display: flex;
  justify-content: center;
  align-items: center;
  background: palegreen;
  
  transition: left 500ms;
`
