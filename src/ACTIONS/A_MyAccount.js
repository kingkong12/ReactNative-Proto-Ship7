
import { 
    ChangePersonalInfo,
    ChangeEmail,
    ChangePassword,
    ChangeAddress 
} from './types.js';


const ActionPersonalInfo = ({ ...data }) => {
    
    return {
        type: ChangePersonalInfo, 
        payload: data
    };
};

const ChangeEmailSecurity = (email) => {
    
    return {
        type: ChangeEmail,
        payload: email 
    };
};

const ChangePasswordSecurity = (password) => {   
    
    return {
        type: ChangePassword,
        payload: password 
    };
};

const ChangeMyAddress = ({ ...addressData }) => {
    console.log(addressData);
    return {
        type: ChangeAddress, 
        payload: addressData
    };
};

export { ActionPersonalInfo, ChangeEmailSecurity, ChangePasswordSecurity, ChangeMyAddress };
