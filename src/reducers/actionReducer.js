import { CLICKED_BUTTON } from '../constants';

const initialState = {
   timesClicked : 0 
}

export default (state=initialState, action) => {
    let updated = Object.assign({}, state);
    switch (action.type) {
        case CLICKED_BUTTON:

            updated.timesClicked++;
            return updated;

        default: 
            return state;
    }
   
}