import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import SearchComponent from "./SearchComponent";
//import categories from "../utils/data/Categories";
import useCategories from "../hooks/useCategories";
import { useCart } from "../hooks/useCart";
import { useUser } from "../hooks/useUser";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const { totalQuantity } = useCart();
  const { categories, loading, error } = useCategories();
  const { logout } = useUser();
  const navigate = useNavigate();

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>Error: {error}</div>;

  const navItems = [
    { name: "Service", href: "/service" },
    { name: "Merkzettel", href: "/wishlist" },
  ];

  const accountItems = [
    { name: "Mein Profil", href: "/myprofile" },
    { name: "Bestellungen", href: "/order" },
    {
      name: "Abmelden",
      action: () => {
        logout();
        navigate("/login");
        setIsAccountOpen(false);
      },
    },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main navigation bar */}
        <div className="flex justify-between h-16 items-center">
          {/* Left section - Logo and mobile menu */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-shop-red focus:outline-none"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
            <Link
              to="/"
              className="text-shop-red text-2xl font-bold ml-2 md:ml-0"
            >
              SHOP
            </Link>
          </div>

          {/* Center - Search bar */}
          {/*  <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Wonach suchst du?"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-shop-red"
              />
              <MagnifyingGlassIcon className="h-5 w-5 absolute right-3 top-3 text-gray-400" />{" "}
            </div>
          </div> */}
          <SearchComponent categories={categories} />

          {/* Right section - Navigation items */}
          <div className="flex items-center space-x-4">
            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-3 py-2 rounded-md text-gray-700 hover:text-shop-red hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Account dropdown */}
            <div className="relative z-[1000]">
              <button
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
              >
                <UserIcon className="h-6 w-6 text-gray-600" />
              </button>

              {isAccountOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                  {accountItems.map((item) =>
                    item.href ? (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsAccountOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        key={item.name}
                        onClick={() => {
                          item.action?.();
                          setIsAccountOpen(false);
                        }}
                        className="block w-full text-left px-14 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {item.name}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Shopping cart */}
            <Link
              to="/cart"
              className="p-2 rounded-full hover:bg-gray-100 relative"
            >
              <ShoppingCartIcon className="h-6 w-6 text-gray-600" />
              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 bg-shop-red text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="px-2 pt-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile search */}
              <div className="mt-4 relative">
                <input
                  type="text"
                  placeholder="Wonach suchst du?"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-shop-red"
                />
                <MagnifyingGlassIcon className="h-5 w-5 absolute right-3 top-3 text-gray-400" />{" "}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
