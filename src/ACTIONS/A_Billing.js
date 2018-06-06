import { BillingId } from './types.js' ; 

const ActionBillingId = (selectedBillingId) => {

    return {
        type: BillingId, 
        payload: selectedBillingId 
    }; 
};

export { ActionBillingId }; 
