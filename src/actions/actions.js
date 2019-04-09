import axios from 'axios';

export function fetchMatch() {
    return dispatch => {
        axios.get('-')
    }
}