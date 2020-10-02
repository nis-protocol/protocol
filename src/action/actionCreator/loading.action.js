import {actionType as type} from '../index';

export const actionLoading = {
    showLoading,
    hideLoading
}

function showLoading(){
    return {
        type: type.LOADING.SHOW_LOADING
    }
}

function hideLoading(){
    return {
        type: type.LOADING.HIDE_LOADING
    }
}