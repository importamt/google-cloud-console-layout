import styled from "styled-components";
import {Menu, MENU_INFO} from "../../../store/view/console";
import React from "react";
import {Link} from "react-router-dom";
import {Error} from "@styled-icons/boxicons-regular/Error";
import {Icon} from "../../atoms/icon/Icon";

interface IMainMenu {
    menu: Menu | undefined
}

export const MainMenu = ({menu}: IMainMenu) => {
    return (
        <StyledMainMenu to={menu ? menu.url : '/'}>
            <Icon iconId={menu?.iconId}/>
            {menu?.name}
        </StyledMainMenu>
    )
}

const StyledMainMenu = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  //justify-content: center;
  align-items: center;
  background: cornflowerblue;

  & svg {
    width: 20px;
    height: 20px;
  }
`
