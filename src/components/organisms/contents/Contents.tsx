import styled from "styled-components";
import {ReactElement} from "react";

interface IContents {
    children: ReactElement
}

export const Contents = ({children}: IContents) => {
    return (
        <StyledContents>
            {children}
        </StyledContents>
    )
}

const StyledContents = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  background: #ffffff;
`
