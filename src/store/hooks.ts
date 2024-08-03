import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { AppDispatch } from "./store";

type DispatchFunc = () => AppDispatch;
export const useCartDispatch: DispatchFunc = useDispatch;

export const useCartSelector: TypedUseSelectorHook = useSelector;
