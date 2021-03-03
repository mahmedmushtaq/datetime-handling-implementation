import { ACTIONS } from "../enums";


export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => async (dispatch: any) => {
  // const res = await axios.post("/login", { email, password });

  // dispatch({
  //   type: ACTIONS.LOGIN,
  //   payload: res.data,
  // });
  // return res.data;
};

export const logout = () => async (dispatch: any) => {
  dispatch({
    type: ACTIONS.LOGOUT,
  });
};

export const registration = ({
  email,
  password,
  full_name,
}: {
  email: string;
  password: string;
  full_name: string;
}) => async (dispatch: any) => {
  // const res = await axios.post("/register", { email, password, full_name });

  // dispatch({
  //   type: ACTIONS.LOGIN,
  //   payload: res.data,
  // });

  // return res.data;
};

export const generateUser = (full_name: string, only_id = false) => async (
  dispatch: any
) => {
  // const res = await axios.post("/register/generate-user", {
  //   full_name,
  //   only_id,
  // });
  // dispatch({
  //   type: ACTIONS.LOGIN,
  //   payload: res.data,
  // });
  // return res.data;
};

export const updateInfo = (data: any) => async (dispatch: any) => {
  // const res = await axios.patch("/registration", data);
  // dispatch({
  //   type: ACTIONS.UPDATE_USER_INFO,
  //   payload: res.data,
  // });

  // return res.data;
};

 
