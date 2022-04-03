import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import store from "../AppRedux";

export type RootDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () : Dispatch<AnyAction> => useDispatch<RootDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
