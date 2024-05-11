import React from "react";
import "./App.css";
import { setupStore } from "../../Shared";
import { Provider } from "react-redux";
import { MainPage } from "../../Page/Main";

function App() {
  const store = setupStore();
  return (
    <Provider store={store}>
      <div className="App">
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
