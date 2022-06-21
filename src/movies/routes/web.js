import React, { lazy, Suspense } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import { Skeleton } from "antd";
import NotFoundPage from '../pages/errors/404'

const PopularPage = lazy(() => import('../pages/popular/index'))
const UpComingPage = lazy(() => import('../pages/coming/index'))
const SearchPage = lazy(() => import('../pages/search/index'))
const DetailPage = lazy(() => import('../pages/detail/index'))
// import SearchPage from '../pages/search/index'
// import DetailPage from '../pages/detail/index'


const RouteMovies = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={
                    <Suspense fallback={<Skeleton active />}>
                        <PopularPage />

                    </Suspense>
                } />
                <Route path="/up-coming" element={
                    <Suspense fallback={<Skeleton active />}>
                        <UpComingPage />

                    </Suspense>
                } />
                <Route path="/search" element={
                    <Suspense fallback={<Skeleton active />}>
                        <SearchPage />

                    </Suspense>
                } />
                {/* detail/phim-abc-qweqw~111 */}
                {/* slug ten phim */}
                <Route path="/:slug~:id" element={
                    <Suspense fallback={<Skeleton active />}>
                        <DetailPage />
                    </Suspense>
                } />
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>

        </BrowserRouter>
    )
}
export default React.memo(RouteMovies)


