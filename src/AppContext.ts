import { createContext, Dispatch, SetStateAction } from "react";

export type State = {
  text?: string;
};

export type AppContext = {
  state: State;
  setState: Dispatch<SetStateAction<State>>;
};

export const AppContext = createContext<AppContext>({
  state: {},
  setState: (value) => value,
});
