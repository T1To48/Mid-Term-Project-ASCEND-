import {BrowserRouter,Routes,Route} from "react-router-dom"

// import Navbar from"./components/Navbar.component"
import { SharedLayout } from "./components";
import { Login,Signup,Main,MusicLibrary } from './pages';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Main/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="login" element={<Login/>}/>
        {/* <Route path="signup" element={<QuotesLibrary/>}/>*/}
        <Route path="music-library" element={<MusicLibrary/>}/> 
      </Route>
      

      </Routes>
    </BrowserRouter>
  );
}

export default App;
// [
//   {
//    "id": "1",
//    "name": "pickle rick",
//    "email": "test@test.com",
//    "password": "test123",
//    "library": {
//     "quotes": [],
//     "songs": [],
//     "recipes": []
//    }
//   },
//   {
//    "id": "2",
//    "name": "Tawfiq Zayyad",
//    "email": "tofek.98@gmail.com",
//    "password": "123456",
//    "library": {
//     "quotes": [],
//     "songs": [],
//     "recipes": []
//    }
//   },
//   {
//    "id": "3",
//    "name": "pickle rick",
//    "email": "pickle@rick.com",
//    "password": "123456",
//    "library": {
//     "quotes": [],
//     "songs": [],
//     "recipes": []
//    }
//   },
//   {
//    "id": "4",
//    "name": "pickle rick",
//    "email": "test@test.com",
//    "password": "test123",
//    "library": {
//     "quotes": [],
//     "songs": [],
//     "recipes": []
//    }
//   }
//  ]