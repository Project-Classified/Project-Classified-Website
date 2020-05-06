import React, { useEffect } from 'react'

export default function ClientsShopPage(props) {
    useEffect(() => {
        props.IsInHomePageHandlerFalse();
    })

    return (
        <div>
            ClientsShopPage
        </div>
    )
}
