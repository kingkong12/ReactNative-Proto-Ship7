import { 
        EMAIL_CHANGED,
        PASSWORD_CHANGED,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_FAIL, 
             
} from '../ACTIONS/types.js';
// isloggedin (app_mainn file)

const InitialState = { email: '',
                       password: '',
                       user: null,
                       error: '',
                       spinnerLogin: false,
                       verifyemail: '',
                       forgotPassword: '' 
                    };

export default (state = InitialState, action) => {    
    switch (action.type) {
        //1.
        case EMAIL_CHANGED:
            return { ...state, 
                email: action.payload,
                error: '',
            }; 
        //2. 
        case PASSWORD_CHANGED:
            return { ...state, 
                password: action.payload,
                error: ''
            }; 
        //3.
        case LOGIN_USER_SUCCESS:
            
            return { ...state, 
                user: action.payload, 
                error: '',
                email: '',
                password: '',            
                };
        //4.     
        case LOGIN_USER_FAIL:
            return { ...state, 
                error: 'FAILED TO SIGN IN CHECK EMAIL OR PASS',     
                };
        
        default: 
        return state; 
    }
};
