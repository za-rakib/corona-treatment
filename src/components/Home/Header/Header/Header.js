import React from 'react'
import { BusinessInfo } from '../BusinessInfo/BusinessInfo'
import { HeaderMain } from '../HeaderMain/HeaderMain'

import './Header.css' 

export const Header = () => {
    return (
        <div className='header-container mb-5' style={{marginTop: '-48px'}}>
            <HeaderMain/>
            <BusinessInfo/>
        </div>
    )
}
