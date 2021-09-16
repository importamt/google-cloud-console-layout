import {ActionBar, Contents, Gnb, HamburgerMenu, SubMenu} from "../../ui/organisms";
import styled from "styled-components";
import {useState} from "react";

export const ConsoleLayout = () => {

    const [isHamburgerMenuShow, setHamburgerMenuShow] = useState<boolean>(false)

    return (
        <StyledConsoleLayout>
            <Gnb handleHamburgerButtonClick={() => setHamburgerMenuShow(true)} title={'Google cloud console layout cloning'}/>
            <SubMenu/>
            <ActionBar/>
            <Contents/>
            <HamburgerMenu isShow={isHamburgerMenuShow}/>
        </StyledConsoleLayout>
    )
}

const StyledConsoleLayout = styled.section`
  width: 100vw;
  height: 100vh;
  
  gap: 5px;
  
  display: grid;
  grid-template-rows: 50px 50px calc(100vh - 100px);
  grid-template-columns: 500px calc(100vw - 500px);
  
  & > *:nth-child(1) {
    grid-column: span 2;
  }
  
  & > *:nth-child(2) {
    grid-row: span 2;
  }
`
