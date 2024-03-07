import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/404/PageNotFound";
import Load from "./pages/Load/Load";
import Space from "./pages/Space/Space";
import LoadsSearchList from "./pages/Load/LoadsSearchList/LoadsSearchList";
import SpaceSearchList from "./pages/Space/SpaceSearchList/SpaceSearchList";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/loads/:searchQuery" element={<LoadsSearchList />} />
        <Route path="/spaces/:searchQuery" element={<SpaceSearchList />} />
        <Route path="/add-load" element={<Load />} />
        <Route path="/add-space" element={<Space />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
