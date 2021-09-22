import {User} from "../../../store/data/user";
import styled from "styled-components";
import {UserList} from "../../organisms/user-list";

interface IUserTemplate {
    users: User[] | null
}

export const UserTemplate = ({users}: IUserTemplate) => {
    return <StyledUserTemplate>
        <UserList users={users}/>
    </StyledUserTemplate>
}

const StyledUserTemplate = styled.main`
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  padding: 30px;
  overflow: auto;
`
