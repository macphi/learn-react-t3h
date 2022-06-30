import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import { AuthProvider } from "../hooks/useAuth";
import loadable from '@loadable/component' // dung loadable Components Thay Lazy
import NotFoundPage from '../pages/errors/404'
import { ProtectedLayout } from "../components/ProtectedLayout";

const PopularPage = loadable(() => import('../pages/popular/index'))
const UpComingPage = loadable(() => import('../pages/coming/index'))
const SearchPage = loadable(() => import('../pages/search/index'))
const DetailPage = loadable(() => import('../pages/detail/index'))
const LoginPage = loadable(() => import('../pages/login/index'))
// import SearchPage from '../pages/search/index'
// import DetailPage from '../pages/detail/index'

const RouteMovies = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<PopularPage />} />
                    {/* <Route path="/up-coming" element={
                                                        <ProtectedLayout>
                                                            <UpComingPage />
                                                        </ProtectedLayout>
                                                    } /> */}
                    <Route path="/search" element={<SearchPage />} />
                    {/* detail/phim-abc-qweqw~111 */}
                    {/* slug ten phim */}
                    {/* <Route path="/:slug~:id" element={<DetailPage />} /> */}
                    {/* <Route path="/login" element={<LoginPage />} /> */}
                    {/* not found page */}
                    {/* <Route path="*" element={<NotFoundPage />} /> */}
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}
export default React.memo(RouteMovies)


