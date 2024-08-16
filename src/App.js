import { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import myTheme from "./styles/myTheme.jsx";
import Stack from '@mui/material/Stack';
import { Box, Divider } from "@mui/material";
import Appbar from './components/Appbar.jsx';
import MyList from "components/MyList.jsx";
import Posts from "components/Posts.jsx";
import RightBar from "components/RightBar.jsx";
import AddPost from "components/AddPost.jsx";

function App() {

  const [mode, setMode] = useState(localStorage.getItem("currentMode") === null ? "dark" : localStorage.getItem("currentMode") === "light" ? "light" : "dark");

  const theme = useMemo(() => createTheme(myTheme(mode)), [mode]);

  const [showList, setShowList] = useState("none");

  return (

    <ThemeProvider theme={theme}>

      <CssBaseline />

      <Box className={theme.palette.mode}>

        {/* Appbar Component */}
        <Appbar showList={showList} setShowList={setShowList}/>

        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}>

          {/* Sidebar */}

          <MyList setMode={setMode} theme={theme} showList={showList} setShowList={setShowList}/>

          {/* Section two */}

          <Posts />

          {/* Section three */}

          <RightBar theme={theme}/>

        </Stack>

        <AddPost/>

      </Box>

    </ThemeProvider >
  );
}

export default App;