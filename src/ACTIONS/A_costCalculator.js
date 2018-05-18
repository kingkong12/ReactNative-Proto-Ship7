import { COST_CALCULATOR } from './types'; 

const ActionCostCalculator = ({...data}) => {
     
    return {
        type: COST_CALCULATOR,
        payload: data
    };
};
export { ActionCostCalculator };
