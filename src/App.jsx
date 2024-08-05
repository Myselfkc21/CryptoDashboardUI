import DashBoard from "./Pages/DashBoard/DashBoard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Transaction from "./Pages/Transaction/Transaction"
import Support from './Pages/Support/Support'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<DashBoard />,
    },
    {
      path: "/Transaction",
      element:<Transaction />,
    },
    {
      path: "/support",
      element:<Support />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
