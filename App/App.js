import React from "react";
import ApiParsingWithRedux from "./src/ApiParsingWithRedux";
import { Provider } from "react-redux";
import { store } from "../App/redux/store/store";

const App = props => {
  return (
    <Provider store={store}>
      <ApiParsingWithRedux />
    </Provider>
  );
};

export default App;
