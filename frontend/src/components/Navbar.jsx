import { useState } from "react";
import {
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [cartItems] = useState(3);

  const navItems = [
    { name: "Service", href: "/service" },
    { name: "Merkzettel", href: "/wishlist" },
  ];

  const accountItems = [
    { name: "Mein Profil", href: "/myprofile" },
    { name: "Bestellungen", href: "/order" },
    { name: "Abmelden", href: "#" },
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
            <a
              href="/"
              className="text-shop-red text-2xl font-bold ml-2 md:ml-0"
            >
              SHOP
            </a>
          </div>

          {/* Center - Search bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Wonach suchst du?"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-shop-red"
              />
              <MagnifyingGlassIcon className="h-5 w-5 absolute right-3 top-3 text-gray-400" />{" "}
            </div>
          </div>

          {/* Right section - Navigation items */}
          <div className="flex items-center space-x-4">
            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-gray-700 hover:text-shop-red hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Account dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
              >
                <UserIcon className="h-6 w-6 text-gray-600" />
              </button>

              {isAccountOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                  {accountItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Shopping cart */}
            <a
              href="/cart"
              className="p-2 rounded-full hover:bg-gray-100 relative"
            >
              <ShoppingCartIcon className="h-6 w-6 text-gray-600" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-shop-red text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="px-2 pt-2 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  {item.name}
                </a>
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
