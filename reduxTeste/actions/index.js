export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

export const SEND_REGISTER_DATA = "SEND_REGISTER_DATA";
export const RECEIVE_REGISTER_DATA = "RECEIVE_REGISTER_DATA";


export const requestApiData = (userId) => ({ type: REQUEST_API_DATA, userId });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });

export const sendRegisterData = (userId) => ({ type: SEND_REGISTER_DATA, userId });
export const receiveRegisterData = data => ({ type: RECEIVE_REGISTER_DATA, data });



export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';