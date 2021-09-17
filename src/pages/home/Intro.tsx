import {Console} from "../../components/templates";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

export const Intro = () => {
    const selectedMenuId = useSelector((state: RootState) => state.view.console.selectedMenuId)
    const menus = useSelector((state: RootState) => state.view.console.menus)

    return <Console selectedMenuId={selectedMenuId} menus={menus}/>
}
