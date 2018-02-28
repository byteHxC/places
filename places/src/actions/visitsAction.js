import * as requests from '../request/visits';

export function addVisitSuccess(visit){
    return { type: 'ADD_VISIT', visit}
}
export function loadAllSuccess(visits){
    return { type: 'LOAD_VISITS', visits}
}

export function loadAllForPlace(slug){
    return (dispatch,getState) =>{
      requests.getAllForPlace(slug).then(result=>{
        dispatch(loadAllSuccess(result));
      })
    }
  }
  

export function addVisit(place, observation, reaction){
    // console.log('oplace', place);
    // console.log('observ', observation);
    return (dispatch, getState) => {
        let user = getState().userReducer;
        // console.log('User)>', user);
        if(!user) return null;
        requests.add(user.jwt, place, observation, reaction)
            .then(result => {
                dispatch(addVisitSuccess(result));
            })
    }
}