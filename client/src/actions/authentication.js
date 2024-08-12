import * as api from "../api"
import { AUTHENTICATION, LOGOUT } from "../constants/actionTypes";

const signup = (formValues, navigate) => async dispatch => {
  try {
    const {data} = await api.signup(formValues)
    dispatch({
      type: AUTHENTICATION,
      payload: data
    });
    navigate("/");
  } catch (error) {
    console.log("Signup failed:", error.response ? error.response.data :error.message)
    throw error;
  }
}
const login = (formValues, navigate) => async dispatch => {
  try {
    const {data} = await api.login(formValues)
    dispatch({
      type: AUTHENTICATION,
      payload: data
    });
    navigate("/");
  } catch (error) {
    console.log(error.response.data.message)
    throw error;
  }
}
const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT})
};

export {login, signup, logout};