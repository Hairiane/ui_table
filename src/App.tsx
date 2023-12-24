import React from "react";
import "./App.css";
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import {Sort} from "./components/Sort";
import {Header} from "./components/Header";
import {Group} from "./components/Group";
import {Empty} from "./components/Empty";
import {Tree} from "./components/Tree";
import {Custom} from "./components/Custom";
import {Edit} from "./components/Edit";
import {ChoiceRow} from "./components/ChoiceRow";

const router = createBrowserRouter([
  {
    path: "/ui_table",
    element: <Empty />,
  },
  {
    path: "/sort",
    element: <Sort />,
  },
  {
    path: "/group",
    element: <Group />,
  },
  {
    path: "/tree",
    element: <Tree />,
  },
  {
    path: "/custom",
    element: <Custom />,
  },
  {
    path: "/edit",
    element: <Edit />,
  },
  {
    path: "/choice_row",
    element: <ChoiceRow />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
