import styled from "styled-components";
import {Menu} from "../../../store/view/console";
import {SubMenuItem} from "../../molecules";

interface ISubMenu {
    menus: Menu[] | null,
    selectedMenuId: string
}

export const SubMenu = ({menus, selectedMenuId}: ISubMenu) => {
    return (
        <StyledSubMenu>
            {menus?.map(menu => <SubMenuItem key={menu.id} menu={menu} isSelected={menu.id === selectedMenuId}/>)}
        </StyledSubMenu>
    )
}

const StyledSubMenu = styled.ul`
  display: flex;
  //justify-content: center;
  //align-items: center;
  flex-direction: column;
  color: #000000;
  background: #ffffff;
`
