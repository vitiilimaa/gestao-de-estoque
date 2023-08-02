import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import ItemsLayout from "./pages/items/ItemsLayout";
import ListItems from "./pages/items/ListItems";
import ViewItem from "./pages/items/ViewItem";
import AddOrEditItem from "./pages/items/AddOrEditItem";
import ItemBoundary from "./error-boundaries/ItemBoundary";
import { loadItems, loadItem } from "./loaders/items";

const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  errorElement: <ItemBoundary />,
  children: [{
    index: true,
    element: <Home />,
    loader: loadItems,
  }, {
    path: "/items",
    element: <ItemsLayout />,
    loader: loadItems,
    children: [{
      index: true,
      element: <ListItems />,
      loader: loadItems,
    }, {
      path: ":itemId/:itemName",
      element: <ViewItem />,
      loader: loadItem,
    }, {
      path: "add",
      element: <AddOrEditItem />,
    }, {
      path: "edit/:itemId/:itemName",
      element: <AddOrEditItem isEditItem />,
      loader: loadItem,
    }]
  }]
}]);

export default router;
