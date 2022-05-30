import React, { useState } from "react";
import LayoutMovie from './components/Layout'
import SearchMovie from './components/Search'
import ListDataMovies from './components/List'
import PaginationMovie from "./components/Pagination";
import { api } from "./services/api";

const AppMovie = () => {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [movies, setDataMovies] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [totalItems, setTotalItems] = useState(0)


    const searchData = async (keyword = '', p = 1) => {
        // cap nhat lai state loading
        // bat dau tim kiem
        setLoading(true)
        if (keyword !== '') {
            // cap nhat state keyword (sau nay con phan trang)
            if (keyword !== name) {
                // co the thay doi tu khoa tim kiem
                setName(keyword)
            }
            //call api
            const data = await api.searchDataMovieByKeyword(keyword,p)
            if (data.hasOwnProperty('results')) {
                // cap nhat state data moviess
                setDataMovies(data.results)
            }
            if (data.hasOwnProperty('total_pages')) {
                setTotalPage(data.total_pages)
            }
            if (data.hasOwnProperty('total_results')) {
                setTotalItems(data.total_results)
            }

        }
        // ngung tim kiem
        setLoading(false)
    }
    const changePage = p => {
        // cap nhat lai state page
        // goi lai ham searchData theo page moi
        if (p >= 1 && p <= totalPage) {
            // kiem soat page nguoi dung truyen
            setPage(p)
            // search lai data
            searchData(name, p)
        }
    }
    return (
        <LayoutMovie>
            <SearchMovie
                loading={loading}
                search={searchData} />
            {movies.length > 0 && (
                <>
                    <ListDataMovies movies={movies} />
                    <PaginationMovie
                        current={page}
                        total={totalItems}
                        changePage={changePage}
                    />
                </>
            )}

        </LayoutMovie>
    )
}
export default AppMovie