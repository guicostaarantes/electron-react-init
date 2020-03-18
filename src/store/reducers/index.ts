import { combineReducers } from "redux";

import preferences from "./preferences";

const rootReducer = combineReducers({
  preferences
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
