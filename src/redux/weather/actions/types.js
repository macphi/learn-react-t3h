export const REQUEST_SEARCH_WEATHER = Symbol('REQUEST_SEARCH_WEATHER') // action xuat phat tu nguoi dung

// middleware redux saga se nhan action ben tren va tra ve cac action khac de dispacth vao store
// action REQUEST_SEARCH_WEATHER: Call api backend de lay data ==> viec xu ly sideEffect ben ngoai ung dung (thong thuong la cac cong viec xu ly bat dong bo)
// REDUX SAGA no se giup minh kiem soat duoc cong viec sideEffect do va ho tro cho cac cong viec xu ly du lieu sau nay

export const START_SEARCH_WEATHER = Symbol('START_SEARCH_WEATHER') // action cua saga bat dau enter
export const SEARCH_WEATHER_SUCCESS = Symbol('SEARCH_WEATHER_SUCCESS') // action cua saga tim kiem duoc
export const SEARCH_WEATHER_FAIL = Symbol('SEARCH_WEATHER_FAIL') // action cua  saga khong tim duoc fail
export const FINISH_SEARCH_WEATHER = Symbol('FINISH_SEARCH_WEATHER') //action cua saga ket thuc

