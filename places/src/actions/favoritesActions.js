import * as requests from '../request/favs';


export function addSuccess(place){
    return { type: 'ADD_FAVORITE', place}
}

export function add(placeId){
    return (dispatch, getState) => {
        let user = getState().userReducer;
        if(!user) return Promise.reject();

        requests.add(user.jwt, placeId)
            .then(res => {
                dispatch(addSuccess(res))
            }).catch(console.log);
    }
}