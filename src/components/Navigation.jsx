// src/components/Navigation.jsx
import { NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
];

export default function Navigation() {
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo">
        <span className="navbar__logo-text">AfterMart</span>
      </NavLink>

      <div className="navbar__links">
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
      </div>

      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive ? "nav-link cart-link active" : "nav-link cart-link"
        }
      >
        <span className="cart-link__text">Cart</span>
        {cartItemCount > 0 && (
          <span className="cart-badge">{cartItemCount}</span>
        )}
      </NavLink>
    </nav>
  );
}
