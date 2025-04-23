import { Link } from "react-router-dom";
import {
  UserCircleIcon,
  DocumentTextIcon,
  CreditCardIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

const AccountSidebar = () => {
  const activeLink = "Meine Bestellungen"; // Replace with your active route logic

  return (
    <div className="w-72 bg-white shadow-lg rounded-xl p-6 space-y-8">
      {/* User Profile Section */}
      <div className="flex items-center gap-4 pb-6 border-b">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <UserCircleIcon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Angemeldet als</p>
          <p className="font-medium text-gray-900">Md.Manir Uddin</p>
        </div>
      </div>

      {/* Account Navigation */}
      <nav className="space-y-2">
        {[
          { name: "Meine Bestellungen", icon: DocumentTextIcon },
          { name: "Meine Rechnungen", icon: CreditCardIcon },
          { name: "Mein Profil", icon: UserCircleIcon },
        ].map((item) => (
          <Link
            key={item.name}
            href="#"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeLink === item.name
                ? "bg-blue-50 text-blue-600 font-semibold"
                : "hover:bg-gray-50 text-gray-700"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Logout Section */}
      <div className="pt-6 border-t">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors">
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          <span>Abmelden</span>
        </button>
      </div>
    </div>
  );
};

export default AccountSidebar;
