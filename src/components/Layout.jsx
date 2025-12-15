import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

export default function Layout() {
  return (
    <div className="layout">
      <Navigation />
      <main className="layout__content">
        <Outlet />
      </main>
    </div>
  );
}
