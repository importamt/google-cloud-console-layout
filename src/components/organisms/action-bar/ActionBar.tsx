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
            {menu?.actions?.map(action => <ActionBarItem key={action.id} action={action}/>)}
        </StyledActionBar>
    )
}

const StyledActionBar = styled.aside`
  display: flex;
  //justify-content: center;
  align-items: center;
  color: #000000;
  background: #ffffff;
  font-size: 18px;

  & h1 {
    font-size: 20px;
    font-weight: 300;
    color: black;
    margin: 0 40px;
  }
`
