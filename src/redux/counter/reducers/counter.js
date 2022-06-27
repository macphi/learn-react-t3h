// noi tiep nhan cac action ( dc store day vao reducer ) va de cap nhat state
import * as typeActions from '../actions/type'

// khai bao state defaul
const initialDefaultState = {
    count: 0
}

// Khai bao reducer
// Reducer thi chinh la mot pure function
// pure function nay nhan vao 2 tham so
// tham so thu nhat la state ban dau truoc khi action duoc dispatching vao store
// tham so thu 2: action duoc dispatching vao store
// can cu vao yeu cau cua action de cap nhat thay doi state
// nguyen tac cap nhat thay do state: khong duoc phep thay doi truc tiep state cu ma nen tao ra 1 state so voi state cu ban dau
// immutable state ( state read only )

// thong thuong co bao nhieu action thi tuong ung ngan do reducer ( nhung trong truong hop nay co 2 action khac nhau nhung deu muon tac dong vao chung 1 state ( count khai bao ben tren ) - nen gop lai thanh 1 reducer)

export const counterReducer = (state = initialDefaultState, action) => {
    // reducer can biet action nao duoc dispatching vao store de xu ly
    switch (action.type) {
        // biet duoc action can xu ly
        case typeActions.INCREMENT_COUNTER:
            return { ...state, count: action.payload.value + 1 }
        case typeActions.DECREMENT_COUNTER:
            return { ...state, count: action.payload.value - 1 }
        default:
            return state
    }
}