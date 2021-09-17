import {ActionBar, Contents, Gnb, HamburgerMenu, MainMenu, SubMenu} from "../../organisms";
import styled from "styled-components";
import {ReactElement, useState} from "react";
import {Menu} from "../../../store/view/console";

export interface IConsole {
    selectedMenuId: string,
    menus: Menu[],
    children: ReactElement
}


export const Console = ({selectedMenuId, menus, children}: IConsole) => {
    const [isHamburgerMenuShow, setHamburgerMenuShow] = useState<boolean>(false)
    const selectedMenu = menus.find(menu => menu.id === selectedMenuId)
    const mainMenu = menus.find(menu => menu.id === selectedMenu!.parentId)

    return (
        <StyledConsoleWrap>
            <StyledConsoleHeader>
                <Gnb handleHamburgerButtonClick={() => setHamburgerMenuShow(!isHamburgerMenuShow)}
                     title={'Google cloud console layout clone coding'}/>
            </StyledConsoleHeader>
            <StyledConsoleMain>
                <MainMenu menu={mainMenu}/>
                <ActionBar menu={selectedMenu}/>
                <SubMenu menus={menus.filter(menu => menu.parentId === mainMenu!.id)}/>
                <Contents>
                    {children}
                </Contents>
            </StyledConsoleMain>
            <HamburgerMenu isShow={isHamburgerMenuShow} menus={menus.filter(menu => !menu.parentId)}/>
        </StyledConsoleWrap>
    )
}

const StyledConsoleHeader = styled.header`
  width: 100%;
  height: 50px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1000;

  box-shadow: 0 3px 4px 0 rgb(0 0 0 / 20%), 0 3px 3px -2px rgb(0 0 0 / 14%), 0 1px 8px 0 rgb(0 0 0 / 12%);
`

const StyledConsoleMain = styled.main`
  width: 100%;
  margin-top: 50px;
  height: calc(100% - 52px);

  gap: 2px;

  display: grid;
  grid-template-rows: 50px calc(100vh - 102px);
  grid-template-columns: calc(100vw - 2px);

  & > *:nth-child(1), & > *:nth-child(3) {
    display: none;
  }

  @media (min-width: 768px) {
    grid-template-rows: 50px calc(100vh - 102px);
    grid-template-columns: 250px calc(100vw - 252px);

    & > *:nth-child(1), & > *:nth-child(3) {
      display: initial;
    }
  }

`

const StyledConsoleWrap = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
