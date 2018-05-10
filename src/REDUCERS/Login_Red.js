import {
    REGISTER_FNAME,
    REGISTER_LNAME,
    REGISTER_EMAIL,
    REGISTER_PASSWORD,
    REGISTER_USER,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../ACTIONS/types.js';

const InitialLoginState = {
        registerfname: '',
        registerlname: '',        
        registerEmail: '',
        registerPassword: '',
        error: ''
};

export default (state = InitialLoginState, action) => {       
    switch (action.type) {
        case REGISTER_FNAME:             
            return { ...state, registerfname: action.payload };
        case REGISTER_LNAME:        
            return { ...state, registerlname: action.payload };
        case REGISTER_EMAIL:            
            return { ...state, registerEmail: action.payload }; 
        case REGISTER_PASSWORD:                 
            return { ...state, registerPassword: action.payload };  

        case REGISTER_USER: 
            return state;     

        case REGISTER_SUCCESS:
            return { 
                ...state, 
                registerfname: '', 
                registerlname: '', 
                registerEmail: '', 
                registerPassword: '',
                error: ''
            };

        case REGISTER_FAIL:            
            return { ...state, error: 'FAILED TO CREATE ACCOUNT' };    

        default: 
            return state;     
    }
};

//return { ...state, [action.payload.property]: action.payload.value }; 
