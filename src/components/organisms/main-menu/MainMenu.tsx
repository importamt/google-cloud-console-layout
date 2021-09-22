import styled from "styled-components";
import {Menu} from "../../../store/view/console";
import React from "react";
import {Link} from "react-router-dom";
import {Icon} from "../../atoms/icon/Icon";

interface IMainMenu {
    menu: Menu | undefined
}

export const MainMenu = ({menu}: IMainMenu) => {
    return (
        <StyledMainMenu>
            <Link to={menu ? menu.url : '/'}>
                <Icon iconId={menu?.iconId}/>
                {menu?.name}
            </Link>
        </StyledMainMenu>
    )
}

const StyledMainMenu = styled.aside`
  cursor: pointer;
  text-decoration: none;

  color: #000000;
  background: #ffffff;

  & svg {
    width: 30px;
    height: 30px;
    margin-right: 15px;
    color: rgba(0, 0, 0, 0.7);
  }

  & a {
    display: flex;
    justify-content: start;
    align-items: center;

    padding-left: 50px;

    width: calc(100% - 50px);
    height: 100%;

    font-size: 18px;
  }
`
