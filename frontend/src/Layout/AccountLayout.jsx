import { Outlet } from "react-router-dom";
import AccountSidebar from "./AccountSidebar";

const AccountLayout = () => {
  return (
    <div className="flex gap-8">
      <AccountSidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default AccountLayout;
