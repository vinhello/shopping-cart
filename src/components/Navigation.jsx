import { NavLink } from "react-router-dom";
// import { useCart } from "../hooks/useCart";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop Page" },
  { to: "/cart", label: "Cart Page" },
];

export default function Navigation() {
  return (
    <nav className="navbar">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
