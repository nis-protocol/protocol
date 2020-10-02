import {actionType as type} from '../index';

export const actionUser = {
    getDataMetamask
}

function getDataMetamask(dataMetamask){
    return {
        type: type.USER.METAMASK.GET_DATA,
        dataMetamask
    }
}