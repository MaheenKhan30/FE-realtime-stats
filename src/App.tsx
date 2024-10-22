import MainPage from './components/MainPage';
import useSocket from './customHooks/useSocket';

function App() {
  useSocket()
  return (
    <>Socket Connection</>
  );
}

export default App;
