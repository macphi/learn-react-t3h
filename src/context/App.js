import React from "react";
import LayoutComponent from './components/Layout'
import HeaderComponent from './components/partials/Header'
import ContentComponent from './components/partials/Content'
import FooterComponent from './components/partials/Footer'
import MenuHeaderProvider from "./provider/MenuHeaderProvider";
import BreadcrumbProvider from "./provider/BreadcrumbProvider";

import './app.css'

const AppContext = () => {
    return (
        <LayoutComponent>
            {/* chi co trong component header nhan data tu provider */}
            <MenuHeaderProvider>
                <HeaderComponent />
            </MenuHeaderProvider>
            <BreadcrumbProvider>
                <ContentComponent>
                    <p>2 Content</p>
                </ContentComponent>
            </BreadcrumbProvider>4

            <FooterComponent />

        </LayoutComponent>
    )
}
export default React.memo(AppContext)