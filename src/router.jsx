import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import ItemsLayout from "./pages/items/ItemsLayout";
import ListItems from "./pages/items/ListItems";
import ViewItem from "./pages/items/ViewItem";
import NewItem from "./pages/items/NewItem";
import EditItem from "./pages/items/EditItem";
import ItemBoundary from "./error-boundaries/ItemBoundary";

const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  errorElement: <ItemBoundary />,
  children: [{
    index: true,
    element: <Home />,
  }, {
    path: "/items",
    element: <ItemsLayout />,
    children: [{
      index: true,
      element: <ListItems />,
    }, {
      path: ":itemId/:itemName",
      element: <ViewItem />,
    }, {
      path: "add",
      element: <NewItem />,
    }, {
      path: "edit/:itemId/:itemName",
      element: <EditItem />,
    }]
  }]
}]);

export default router;
