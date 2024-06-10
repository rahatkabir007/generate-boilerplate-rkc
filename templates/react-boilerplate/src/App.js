import MainRoutes from "./components/Routes/MainRoutes";
import { BrowserRouter as Router } from 'react-router-dom';
import DemoHeader from "./components/DemoHeader/DemoHeader";
import { useEffect, useState } from "react";
import Loader from './components/Loader/index';


function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [loading])

  if (loading) return <Loader />;
  return (
    <>
      <Router>
        {/* Your Navigation Bar  */}

        <DemoHeader />
        <MainRoutes />
      </Router>
    </>
  );
}

export default App;
