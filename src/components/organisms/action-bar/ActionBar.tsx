import styled from "styled-components";
import {Menu} from "../../../store/view/console";
import {ActionBarItem} from "../../molecules";

interface IActionBar {
    menu: Menu | null | undefined
}

export const ActionBar = ({menu}: IActionBar) => {
    return (
        <StyledActionBar>
            <h1>{menu?.name}</h1>
            {menu?.actions?.map(action => <ActionBarItem action={action}/>)}
        </StyledActionBar>
    )
}

const StyledActionBar = styled.aside`
  display: flex;
  //justify-content: center;
  align-items: center;
  background: red;

  & h1 {
    font-size: 20px;
    color: black;
    margin: 0 30px;
  }
`
