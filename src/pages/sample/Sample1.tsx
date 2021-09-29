import {Console} from "../../components/templates";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {useMount} from "../../hooks/useMount";
import {MENU_INFO, setSelectedMenuId} from "../../store/view/console";

export const Sample1 = () => {
    const dispatch = useDispatch()

    useMount(() => {
        dispatch(setSelectedMenuId(MENU_INFO.SAMPLE1.id))
    })

    const selectedMenuId = useSelector((state: RootState) => state.view.console.selectedMenuId)
    const menus = useSelector((state: RootState) => state.view.console.menus)

    return <Console selectedMenuId={selectedMenuId} menus={menus}>
        <>Sample1</>
    </Console>
}
