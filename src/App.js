import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SharedLayout } from "./components";
import { Login, Signup, Main, MusicLibrary, Landing } from "./pages";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./App.css";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgba(13, 14, 18, 0.90)",
      },
      secondary: {
        main: "rgb(144, 230, 5)",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Main />} />
            <Route path="landing" element={<Landing />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            {/* <Route path="signup" element={<QuotesLibrary/>}/>*/}
            <Route path="music-library" element={<MusicLibrary />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
