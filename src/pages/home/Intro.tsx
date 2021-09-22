import {Console} from "../../components/templates";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {useMount} from "../../hooks/useMount";
import {MENU_INFO, setSelectedMenuId} from "../../store/view/console";
import styled from "styled-components";
import introImage from './intro.png'

export const Intro = () => {
    const dispatch = useDispatch()

    useMount(() => {
        dispatch(setSelectedMenuId(MENU_INFO.HOME_INTRO.id))
    })

    const selectedMenuId = useSelector((state: RootState) => state.view.console.selectedMenuId)
    const menus = useSelector((state: RootState) => state.view.console.menus)

    return <Console selectedMenuId={selectedMenuId} menus={menus}>
        <StyledIntro/>
    </Console>
}

const StyledIntro = styled.figure`
  width: calc(100% - 100px);
  height: calc(100% - 100px);
  margin: 50px;
  
  background: url(${introImage}) no-repeat;
  background-size: 100% 100%;
`