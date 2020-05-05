import Axios from "axios";

export const getData = () => async dispatch => {
  try {
    const res = await Axios({
      method: "get",
      url: "http://localhost:3001/todos"
    });
    if (res.status === 200) {
      dispatch({
        type: "GET_LIST_TODO",
        payload: res.data
      });
    }
  } catch (e) {
    console.log(e);
  }
};
