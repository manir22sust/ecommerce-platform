import React from "react";
import { Link } from "react-router-dom";

const NotFound = ({
  title = "Page Not Found",
  description = "The page you're looking for doesn't exist or has been moved.",
  linkText = "Return to Homepage",
  linkTo = "/",
}) => {
  return (
    <div className="max-w-2xl mx-auto text-center py-16 px-4">
      <div className="bg-red-50 p-8 rounded-lg border border-red-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link
          to={linkTo}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-shop-red hover:bg-shop-red-dark transition-colors"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
