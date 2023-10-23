interface State {
  user: any;
  token: string;
  login: boolean;
  closeMenu: boolean;
}

const initalState: State = {
  user: null,
  token: localStorage.getItem("token") || "",
  login: localStorage.getItem("token") ? true : false,
  closeMenu: false,
};

export const handleReducer = (
  state = initalState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SAVE_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "SAVE_LOGIN":
      return {
        ...state,
        login: action.payload,
      };

    case "SAVE_CLOSE_MENU":
      return {
        ...state,
        closeMenu: action.payload,
      };
    default:
      return state;
  }
};
