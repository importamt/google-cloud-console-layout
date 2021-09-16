import React, {lazy, MouseEventHandler, Suspense} from 'react'
import {Error} from '@styled-icons/boxicons-regular/Error'
import {StyledIconProps} from "@styled-icons/styled-icon";

interface IIcon extends StyledIconProps {
    iconId: string,
    handleClick?: MouseEventHandler
}

export const Icon = ({iconId, handleClick, size, title}: IIcon) => {
    console.log(iconId)
    console.log('@styled-icons/evaicons-outline/RefreshOutline')
    const splitId = iconId.split('/')
    const DynamicIcon = lazy(() => import(`@styled-icons/boxicons-regular/Error`).then(module => ({default: module['Error']})))
    // const DynamicIcon = lazy(() => import(iconId).then(module => ({default: module[splitId[splitId.length - 1]]})))

    return (
        // <Error size={size}/>
        <Suspense fallback={<Error/>}>
            <DynamicIcon onClick={handleClick} size={size} title={title}/>
        </Suspense>
    )
}
