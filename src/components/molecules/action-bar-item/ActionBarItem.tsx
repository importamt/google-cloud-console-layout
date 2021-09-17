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

  & svg {
    width: 20px;
    height: 20px;
  }

  &:hover {

  }
`
