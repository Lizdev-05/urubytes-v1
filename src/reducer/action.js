export const UPDATE_REGISTRATION_DATA = "UPDATE_REGISTRATION_DATA";

export const updateRegistrationData = (data) => ({
  type: "UPDATE_REGISTRATION_DATA",
  payload: data,
});

export const UPDATE_LOGIN_DATA = "UPDATE_LOGIN_DATA";

export const updateLoginData = (data) => ({
  type: UPDATE_LOGIN_DATA,
  payload: data,
});
