import {BrowserRouter,Routes,Route} from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Navbar from"./components/Navbar.component"
import { SharedLayout } from "./components";
import { Login,Signup,Main,MusicLibrary,Landing } from './pages';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import BodyColor from "./styles/styled/BodyColor";
import './App.css';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#39033B",
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#39033B',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>

    <BrowserRouter>
    <Routes>

      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Main/>}/>
        <Route path="landing" element={<Landing />}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="login" element={<Login/>}/>
        {/* <Route path="signup" element={<QuotesLibrary/>}/>*/}
        <Route path="music-library" element={<MusicLibrary/>}/> 
        
      </Route>
      

      </Routes>
    </BrowserRouter>
    </ThemeProvider>
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