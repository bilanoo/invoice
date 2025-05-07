"use client";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppdDispatch, RootState } from "./store";

export const useAppDispatch: () => AppdDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
