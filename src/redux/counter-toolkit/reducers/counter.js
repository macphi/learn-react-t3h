import { createReducer } from "@reduxjs/toolkit";
import { increment } from '../actions/counter'

const initialState = { value: 1 }

export const counterReducer = createReducer(initialState, (builder) => {
    // can convert action cua redux toolkit ve string
    // builder: doi tuong dai dien cho action se duoc reducer tiep nhan xu ly
    // addCase: phuong thuc cua redux toolkit ho tro san
    builder.addCase(increment, (state, action) => {
        // CHo phep thay doi truc tiep state ban dau
        // Vi` ban chat reduxtoolkit  co san thu vien immer
        state.value += action.payload;
    })
})