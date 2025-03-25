import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SkyFi from "@/pages/SkyFi";

const router = createBrowserRouter([
  {
    path: '/',
    element: <SkyFi />,
  },
], { basename: "/api/plugins/ots_skyfi_plugin" });

export function Router() {
  return <RouterProvider router={router} />;
}
