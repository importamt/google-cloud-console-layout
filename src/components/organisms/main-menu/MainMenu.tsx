import styled from "styled-components";
import {Menu} from "../../../store/view/console";

interface IMainMenu {
    menu: Menu | undefined
}

export const MainMenu = ({menu}: IMainMenu) => {

    return (
        <StyledMainMenu>
            {menu?.name}
        </StyledMainMenu>
    )
}

const StyledMainMenu = styled.aside`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: cornflowerblue;
`
