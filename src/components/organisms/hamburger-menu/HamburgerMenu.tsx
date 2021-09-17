import styled from "styled-components";
import {Menu} from "../../../store/view/console";
import {SubMenuItem} from "../../molecules";

interface IHamburgerMenu {
    isShow: boolean,
    menus: Menu[] | null
}

export const HamburgerMenu = ({isShow, menus}: IHamburgerMenu) => {
    return (
        <StyledHamburgerMenuWrap isShow={isShow}>
            <StyledHamburgerMenu isShow={isShow}>
                {menus?.map(menu => <SubMenuItem key={menu.id} menu={menu}/>)}
            </StyledHamburgerMenu>
            <StyledHamburgerMenuDim isShow={isShow}/>
        </StyledHamburgerMenuWrap>
    )
}

const StyledHamburgerMenuDim = styled.aside<{ isShow: boolean }>`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background: #00000080;
  opacity: ${({isShow}) => isShow ? 1 : 0};
  z-index: 99;
  transition: opacity 500ms;
`

const StyledHamburgerMenu = styled.ul<{ isShow: boolean }>`
  pointer-events: auto;

  position: absolute;
  width: 275px;
  height: calc(100% - 100px);
  padding: 50px 0;

  left: ${({isShow}) => isShow ? 0 : '-350px'};
  top: 0;

  display: flex;
  flex-direction: column;
  background: palegreen;

  transition: left 500ms;

  z-index: 100;
`

const StyledHamburgerMenuWrap = styled.section<{ isShow: boolean }>`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

    //z-index: ${({isShow}) => isShow ? 0 : -1};
`
