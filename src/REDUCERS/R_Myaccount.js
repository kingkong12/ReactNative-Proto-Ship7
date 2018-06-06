import { 
    ChangePersonalInfo,
    ChangeEmail,
    ChangePassword,
    ChangeAddress 
 } from '../ACTIONS/types'; 

const InitialState = {
    company: 'You Parcel', 
    firstName: 'Mithil',
    lastName: 'Vasani',
    alterateName: 'Abc', 
    email: 'test@gmail.com',
    password: '1234567', 
    contactPerson: 'PQR',
    phone: '2012121212',
    addressLine1: '201 dert hitom wiks',
    addressLine2: '',
    addressLine3: '',
    districtTown: 'jersey',
    city: 'jerseycity', 
    postalCode: '0970' 
};

export default (state = InitialState, action) => {    
    switch (action.type) {
               
        case ChangePersonalInfo: 
                return { 
                    ...state, 
                    company: action.payload.company,
                    firstName: action.payload.firstName, 
                    lastName: action.payload.lastName, 
                    alterateName: action.payload.alterateName
                }; 

        case ChangeEmail:                 
                return {
                    ...state, email: action.payload 
                };     
                
        case ChangePassword:                              
                return {
                    ...state, password: action.payload 
                };              
        case ChangeAddress: 
                console.log('indside reducer = ', action.payload);                             
                return {
                    ...state, 
                    contactPerson: action.payload.contactPerson,
                    phone: action.payload.phone,
                    addressLine1: action.payload.addressLine1,
                    addressLine2: action.payload.addressLine2,
                    addressLine3: action.payload.addressLine3,
                    districtTown: action.payload.districtTown,
                    city: action.payload.city, 
                    postalCode: action.payload.postalCode
                };                        
        default: 
        return state; 
    }
};

