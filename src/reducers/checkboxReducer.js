
const checkboxReducer = (state, action) => {

    switch (action.type) {
        case "check":{
            return updateCheckbox(true);
        }
        case "uncheck":{
            return updateCheckbox(false);
        }
        default:
            return state;
    }


    function updateCheckbox(checkboxValue){
        return state.map(
            (item,index) => {
                if(item.id === action.sessionId) {
                    item.favorite = checkboxValue;
                    return item;
                }
                return item;
            } );
    }
};

export default checkboxReducer;