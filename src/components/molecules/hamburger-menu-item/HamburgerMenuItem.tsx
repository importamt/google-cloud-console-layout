import {Menu} from "../../../store/view/console";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import {Icon} from "../../atoms/icon/Icon";


interface IHamburgerMenuItem {
    menu: Menu | null
}

export const HamburgerMenuItem = ({menu}: IHamburgerMenuItem) => {
    return <StyledHamburgerMenuItem>
        <NavLink to={menu ? menu.url : '/'}>
            <Icon iconId={menu?.iconId}/>
            {menu?.name}
        </NavLink>
    </StyledHamburgerMenuItem>
}

const StyledHamburgerMenuItem = styled.li`
  cursor: pointer;

  & svg {
    width: 20px;
    height: 20px;
  }
`
