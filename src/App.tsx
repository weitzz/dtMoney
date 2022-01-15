import {GlobalStyle} from './style/global'
import Header from "./components/Header";
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <Header/>
      <Dashboard/>
      <GlobalStyle/>
    </>
  );
}

export default App;
