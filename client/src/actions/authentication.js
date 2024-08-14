import * as api from "../api"
import { AUTHENTICATION, LOGOUT } from "../constants/actionTypes";

const signup = (formValues, navigate) => async dispatch => {
  try {

    const { data } = await api.signup(formValues);

    dispatch({
      type: AUTHENTICATION,
      payload: data,
    });

    // Redirect based on role
     // Ensure that the `isEmployer` field exists and is a boolean
     if (data.result?.isEmployer === true) {
      navigate("/employerBoard");
    } else if (data.result?.isEmployer === false) {
      navigate("/candidateBoard");
    } else {
      console.error("Unexpected role data:", data.result);
    }
  } catch (error) {
    console.log("Signup failed:", error.response ? error.response.data : error.message);
    throw error;
  }
};

const login = (formValues, navigate) => async dispatch => {
  try {
    const { data } = await api.login(formValues);

    dispatch({
      type: AUTHENTICATION,
      payload: data,
    });
    // Ensure that the `isEmployer` field exists and is a boolean
    if (data.result?.isEmployer === true) {
      navigate("/employerBoard");
    } else if (data.result?.isEmployer === false) {
      navigate("/candidateBoard");
    } else {
      console.error("Unexpected role data:", data.result);
    }
  } catch (error) {
    console.log("Login failed:", error.response.data.message);
    throw error;
  }
};


const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT})
};

export {login, signup, logout};