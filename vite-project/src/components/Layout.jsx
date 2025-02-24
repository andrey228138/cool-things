import { Outlet, NavLink } from "react-router-dom";

function getNavLinkClass({ isActive }) {
  return isActive ? "active-link" : "";
}
const navLinkObjects = [
  {
    to: "/",
    content: "Easy",
  },
  {
    to: "/normal",
    content: "Normal",
  },
  {
    to: "hard",
    content: "Hard",
  },
];
export default function Layout() {
  return (
    <>
      <header>
        {navLinkObjects.map((navLinkObject) => (
          <NavLink to={navLinkObject.to} className={getNavLinkClass}>
            {navLinkObject.content}
          </NavLink>
        ))}
      </header>
      <Outlet />
    </>
  );
}
