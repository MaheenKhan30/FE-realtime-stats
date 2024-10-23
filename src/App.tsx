import MainPage from "./components/MainPage";
import useSocket from "./customHooks/useSocket";

function App() {
  useSocket();
  return <MainPage />;
}

export default App;
