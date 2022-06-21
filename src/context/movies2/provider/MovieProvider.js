import React, { useState, useEffect } from "react";
import GlobalContext from "../context/index";
import { api } from "../services/api";


const MovieProvider = (props) => {

    const [loading, setLoading] = useState(true)
    const [dataMovies, setDataMovies] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    const [clickPage, setClickPage] = useState(false)


    // call data - giong nhu componentDidMount trong class
    useEffect(() => {
        // call api
        const getDataFromApi = async () => {
            // cap nhat state loading
            const data = await api.getDataPopularityMovies(page)
            // cap nhat state dataMovies
            if (data.hasOwnProperty('results')) {
                setDataMovies(data.results)
            }
            // chi cap nhat totalPage va total Results
            // o lan goi api dau tien - load page
            // khi click phan trang khong cap nhat lai ( du lieu khong thay doi)
            if (clickPage === false) {
                // cap nhat  state total page
                if (data.hasOwnProperty('total_pages')) {
                    setTotalPage(data.total_pages)
                }
                // cap nhat state total results
                if (data.hasOwnProperty('total_results')) {
                    setTotalItems(data.total_results)
                }
            }
            // dung lay data
            setLoading(false)
        }
        getDataFromApi()// running function call api
    }, [page, loading,clickPage]) // [] dieu kien de chay useEffect

    // test xem lay duoc data chua
    // console.log('data movies',dataMovies)

    const changePage = p => {
        // can chay lai useEffect ( khong the goi ham getDataFromApi trong useEffect ra duoc)
        if (p >= 1 && p <= totalPage) {
            // kiem soat viec nguoi dung chon trang
            setLoading(true)
            setPage(p)
            if (clickPage === false) {
                setClickPage(true)
            }
        }
    }

    return (
        <GlobalContext.Provider value={{ dataMovies, loading, page, totalItems, changePage }}>
            {props.children}
        </GlobalContext.Provider>
    )

}
export default React.memo(MovieProvider)

