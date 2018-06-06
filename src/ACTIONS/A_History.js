import { HistoryId } from './types.js'; 

const ActionHistoryId = (selectedId) => {
    
    return {
        type: HistoryId, 
        payload: selectedId 
    }; 
};

export { ActionHistoryId }; 
