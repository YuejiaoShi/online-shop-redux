import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";

type DispatchFunc = () => AppDispatch;
export const useCartDispatch: DispatchFunc = useDispatch;
