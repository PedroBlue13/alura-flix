// src/routes.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewVideo from "./pages/NewVideo";
import Player from "./pages/Player";
import NotFound from "./pages/NotFound";
import BasePage from "./pages/BasePage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<HomePage />} />
          <Route path="newvideo" element={<NewVideo />} />
          <Route path="video/:id" element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
