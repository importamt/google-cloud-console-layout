import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Menu} from "../../../store/view/console";
import React from "react";
import {Icon} from "../../atoms/icon/Icon";

interface ISubMenuItem {
    menu: Menu | null,
    isSelected: boolean
}

export const SubMenuItem = ({menu, isSelected}: ISubMenuItem) => {
    return <StyledSubMenuItem isSelected={isSelected}>
        <NavLink to={menu ? menu.url : '/'}>
            <Icon iconId={menu?.iconId}/>
            {menu?.name}
        </NavLink>
    </StyledSubMenuItem>
}

const StyledSubMenuItem = styled.li<{
    isSelected: boolean
}>`
  cursor: pointer;
  height: 40px;
  background-color: ${({isSelected}) => isSelected?'rgba(161, 194, 250, 0.16)':'transparent'};

  & svg {
    width: 20px;
    height: 20px;
    margin-right: 20px;
    color: ${({isSelected}) => isSelected?'rgb(51, 103, 214)':'rgba(0, 0, 0, 0.7)'};
  }
  
  & a {
    font-weight: 300;
    padding-left: 50px;
    
    display: flex;
    justify-content: start;
    align-items: center;
    
    width: calc(100% - 50px);
    height: 100%;
    color: ${({isSelected}) => isSelected?'rgb(51, 103, 214)':'#000000'};
  }

  &:hover {
    background-color: ${({isSelected}) => isSelected?'rgba(100, 134, 190, 0.25)':'rgba(0, 0, 0, 0.2)'};
    transition: background-color 300ms;
  }
`
