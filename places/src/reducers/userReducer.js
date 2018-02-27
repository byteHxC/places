export default function userReducer(state = {}, action){
    switch(action.type){
        case 'LOG_IN':
            return {...state, jwt: action.jwt};
        case 'LOAD_USER':
            return {...state, 
                name: action.user.name,
                _id: action.user._id,
                email: action.user.email
            };
        case 'LOG_OUT':
            return {};
        default: 
            return state;
    }
}