// hooks/redux.ts

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../redux';

// Typed `useDispatch` hook
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Typed `useSelector` hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
