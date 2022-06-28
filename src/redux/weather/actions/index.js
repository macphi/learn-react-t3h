// dinh cac action duoc dispatch vao store va dispatch vao middleware saga
import * as typeActions from './types'

// 1- Action dispatch vao middleware saga
export const requestSearchWeather = (city = '') => {
    return {
        type: typeActions.REQUEST_SEARCH_WEATHER,
        payload: { city }
    }
}

// 2- Cac action duoc dispatch vao store { saga }
// 2- Cac action duoc dispatch vao store { saga }

