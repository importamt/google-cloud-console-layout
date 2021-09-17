import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Menu} from "../../../store/view/console";
import React from "react";
import {Icon} from "../../atoms/icon/Icon";

interface ISubMenuItem {
    menu: Menu | null
}

export const SubMenuItem = ({menu}: ISubMenuItem) => {
    return <StyledSubMenuItem>
        <NavLink to={menu ? menu.url : '/'}>
            <Icon iconId={menu?.iconId}/>
            {menu?.name}
        </NavLink>
    </StyledSubMenuItem>
}

const StyledSubMenuItem = styled.li`
  cursor: pointer;

  & svg {
    width: 20px;
    height: 20px;
  }

  &:hover {

  }
`
