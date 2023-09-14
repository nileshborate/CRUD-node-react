
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Home from "./pages/Home"
import AddEdit from "./pages/AddEdit"
import View from "./pages/View"
import About from "./pages/About"
import Header from './components/Header';

function App() {
  return (
   <BrowserRouter>
      <div className='App'>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/add" element={<AddEdit/>}></Route>
          <Route path="/update/:id" element={<AddEdit/>}></Route>
          <Route path="/view/:id" element={<View/>}></Route>          
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </div>
   </BrowserRouter>
  );
}

export default App;
