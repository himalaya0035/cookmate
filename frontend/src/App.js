import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipePage from './Pages/RecipePage/RecipePage';
import Layout from './Layout'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={
           <Layout>
            <Homepage/>
          </Layout>
        }/>
         <Route path="/recipe/:id" element={
           <Layout isHeader={false}>
            <RecipePage/>
          </Layout>
        }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
