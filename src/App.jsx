import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainContextProvider from "./contexts/MainContext";
import Home from "./routes/Home";

const App = () => {
  return (
    <MainContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MainContextProvider>
  )
}

export default App