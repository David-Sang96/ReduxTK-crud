import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import Login from "./components/Login";
import Menu from "./components/Menu";
import MenuCategory from "./components/MenuCategory";
import Register from "./components/Register";
import Layout from "./layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <AuthRoute>
          <Layout />
        </AuthRoute>
      ),
      children: [
        {
          path: "/menu",
          element: (
            <AuthRoute>
              <Menu />
            </AuthRoute>
          ),
        },
        {
          path: "/menuCategory",
          element: (
            <AuthRoute>
              <MenuCategory />
            </AuthRoute>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
