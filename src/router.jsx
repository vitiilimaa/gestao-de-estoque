import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import ItemsNavbar from "./components/ItemsNavbar";
import Items from "./pages/Items/Items";
import ViewItem from "./pages/ViewItem";
import AddOrEditItem from "./pages/AddOrEditItem";
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
    element: <ItemsNavbar />,
    loader: loadItems,
    children: [{
      index: true,
      element: <Items />,
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
