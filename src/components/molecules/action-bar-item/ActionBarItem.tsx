import {Action} from "../../../store/view/console";
import styled from "styled-components";
import {Icon} from "../../atoms/icon/Icon";
import React from "react";
import {useDispatch} from "react-redux";

interface IActionBarItem {
    action: Action
}

export const ActionBarItem = ({action}: IActionBarItem) => {
    const dispatch = useDispatch()
    return <StyledActionBarItem onClick={action.handleClick(dispatch)}>
        <Icon iconId={action?.iconId}/>
        {action.name}
    </StyledActionBarItem>
}


const StyledActionBarItem = styled.li`
  cursor: pointer;
  color: rgb(51, 103, 214);
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 300ms;

  & svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    color: rgb(51, 103, 214);

  }

  &:hover {
    color: rgb(21, 73, 184);
    background-color: rgba(0, 0, 0, 0.2);
  }
`
