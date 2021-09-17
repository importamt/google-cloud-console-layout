import {Console} from "../../components/templates";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {useMount} from "../../hooks/useMount";
import {MENU_INFO, setSelectedMenuId} from "../../store/view/console";
import {UserTemplate} from "../../components/templates/user";
import {retrieveUsersRequest} from "../../store/data/user";

export const RandomUser = () => {
    const dispatch = useDispatch()

    useMount(() => {
        dispatch(setSelectedMenuId(MENU_INFO.USER_RANDOM_USER.id))
        dispatch(retrieveUsersRequest())
    })

    const selectedMenuId = useSelector((state: RootState) => state.view.console.selectedMenuId)
    const menus = useSelector((state: RootState) => state.view.console.menus)
    const users = useSelector((state: RootState) => state.data.user.users)

    return <Console selectedMenuId={selectedMenuId} menus={menus}>
        <UserTemplate users={users}/>
    </Console>
}
