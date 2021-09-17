import {StyledIcon} from "@styled-icons/styled-icon";

export * from './console-action'
export {ConsoleReducer} from './console-reducer'

export interface Menu {
    id: string,
    parentId?: string,
    name: string,
    url: string,
    icon: StyledIcon,
}
