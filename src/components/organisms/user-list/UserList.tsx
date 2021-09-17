import styled from "styled-components";
import {User} from "../../../store/data/user";
import {UserListItem} from "../../molecules";

interface IUserList {
    users: User[] | null
}

export const UserList = ({users}: IUserList) => {

    return <StyledUserList>
        {users?.map((user, index) => <UserListItem key={user?.name.first + index} user={user}/>)}
    </StyledUserList>
}

const StyledUserList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  
  overflow: hidden;
`
