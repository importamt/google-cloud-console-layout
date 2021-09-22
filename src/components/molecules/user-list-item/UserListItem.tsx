import {User} from "../../../store/data/user";
import styled from "styled-components";

interface IUserListItem {
    user: User | null
}

export const UserListItem = ({user}: IUserListItem) => {

    return <StyledUserListItem>
        <img title={user?.name.first} src={user?.picture.thumbnail} alt={`auto created user: ${user?.name.first}`}/>
        <strong>Name: {user?.name.title}, {user?.name.first} {user?.name.last}</strong>
        <small>Email: {user?.email}</small>
    </StyledUserListItem>
}

const StyledUserListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  
  & img {
    width: 60px;
    height: 60px;
  }
`
