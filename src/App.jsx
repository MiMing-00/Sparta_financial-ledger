import store from "./redux/config/configStore";
import Router from "./shard/Router";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
