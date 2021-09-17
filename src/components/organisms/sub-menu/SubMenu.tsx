import styled from "styled-components";
import {Menu} from "../../../store/view/console";
import {SubMenuItem} from "../../molecules";

interface ISubMenu {
    menus: Menu[] | null
}

export const SubMenu = ({menus}: ISubMenu) => {
    return (
        <StyledSubMenu>
            {menus?.map(menu => <SubMenuItem key={menu.id} menu={menu}/>)}
        </StyledSubMenu>
    )
}

const StyledSubMenu = styled.ul`
  display: flex;
  //justify-content: center;
  //align-items: center;
  flex-direction: column;
  background: pink;
`
