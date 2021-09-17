import {ActionBar, Contents, Gnb, HamburgerMenu, MainMenu, SubMenu} from "../../organisms";
import styled from "styled-components";
import {useState} from "react";
import {Menu} from "../../../store/view/console";

export interface IConsole {
    selectedMenuId: string,
    menus: Menu[]
}


export const Console = ({selectedMenuId, menus}: IConsole) => {

    console.log("SEL", selectedMenuId)
    console.log("MENUS", menus)

    const [isHamburgerMenuShow, setHamburgerMenuShow] = useState<boolean>(false)
    const selectedMenu = menus.find(menu => menu.id === selectedMenuId)

    return (
        <StyledConsoleWrap>
            <StyledConsoleHeader>
                <Gnb handleHamburgerButtonClick={() => setHamburgerMenuShow(true)}
                     title={'Google cloud console layout cloning'}/>
            </StyledConsoleHeader>
            <StyledConsoleMain>
                <MainMenu menu={selectedMenu}/>
                <SubMenu/>
                <ActionBar/>
                <Contents/>
            </StyledConsoleMain>
            <HamburgerMenu isShow={isHamburgerMenuShow}/>
        </StyledConsoleWrap>
    )
}

const StyledConsoleHeader = styled.header`
  width: 100%;
  height: 50px;
`

const StyledConsoleMain = styled.main`
  width: 100%;
  height: calc(100% - 50px);

  gap: 5px;

  display: grid;
  grid-template-rows: 50px calc(100vh - 50px);
  grid-template-columns: 500px calc(100vw - 500px);
`

const StyledConsoleWrap = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
