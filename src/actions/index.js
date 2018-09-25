import { CLICKED_BUTTON } from '../constants';

export const clickMeNow = () => dispatch => {
    dispatch({
        type: CLICKED_BUTTON
    })

}