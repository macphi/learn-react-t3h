import React from "react";
import loadable from '@loadable/component'
import { Layout } from "antd";

const HeaderComponent = loadable(() => import('./partials/Header'))
const ContentComponent = loadable(() => import('./partials/Content'))
const FooterComponent = loadable(() => import('./partials/Footer'))



const LayoutComponent = (props) => {
    return (
        <Layout className="layout">
            <HeaderComponent />
            <ContentComponent>
                {props.children}
            </ContentComponent>
            <FooterComponent />
        </Layout>
    )
}
export default React.memo(LayoutComponent)


