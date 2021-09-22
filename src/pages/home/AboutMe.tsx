import {Console} from "../../components/templates";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {useMount} from "../../hooks/useMount";
import {MENU_INFO, setSelectedMenuId} from "../../store/view/console";
import styled from "styled-components";

export const AboutMe = () => {
    const dispatch = useDispatch()

    useMount(() => {
        dispatch(setSelectedMenuId(MENU_INFO.HOME_ABOUT_ME.id))
    })

    const selectedMenuId = useSelector((state: RootState) => state.view.console.selectedMenuId)
    const menus = useSelector((state: RootState) => state.view.console.menus)

    return <Console selectedMenuId={selectedMenuId} menus={menus}>
        <StyledAboutMe>
            <p>
                안녕하세요.
            </p>

            <p>
                프론트엔드 개발자 <b>임보탬</b>입니다.
            </p>

            <p>
                성별은 남자입니다.
            </p>

            <p>
                나이는 1993년생입니다.
            </p>

            <p>
                항상 이유있는 코드를 작성하며 프로답게 일하고 싶습니다.
            </p>

            <p>
                감사합니다.
            </p>
        </StyledAboutMe>
    </Console>
}

const StyledAboutMe = styled.article`
  width: calc(100% - 100px);
  height: calc(100% - 100px);
  padding: 50px;
  
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  
  & b {
    font-weight: 500;
  }
  
  & p {
    line-height: 30px;
  }
`