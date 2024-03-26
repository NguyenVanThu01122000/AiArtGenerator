import { useDispatch, useSelector } from "react-redux";
import { saveDialogLogin } from "../reduxToolkit/Slices/AppSlice";
import { RootState } from "../reduxToolkit/Slices/RootReducer";
import { getTokenLocalStorage } from "./handleTokenUtils";

export const useCheckLogin = () => {
  const token =
    useSelector((state: RootState) => state.app.login) ||
    getTokenLocalStorage();
  const dispatch = useDispatch();

  const handleCheckLogin = () => {
    if (!token) {
      dispatch(saveDialogLogin(true));
      return true;
    } else {
      return false;
    }
  };
  return { handleCheckLogin };
};
