
const checkboxReducer = (state, action) => {

    switch (action.type) {
        case "DO_CHECKMARK":{
            return updateCheckbox(true);
        }
        case "UNDO_CHECKMARK":{
            return updateCheckbox(false);
        }
        default:
            return state;
    }


    function updateCheckbox(checkboxValue){
        return state.map((checkmark) => {
                if(checkmark.id === action.id) {
                    return {...checkmark, complete:checkboxValue};
                }
                return checkmark;
            } );
    }
};

export default checkboxReducer;