const Sidebar = () => {
  const categories = [
    "Damen-Mode",
    "Haushalt",
    "Küche",
    "Herren-Mode",
    "Heimtextilien",
    "Baby & Kind",
    "Möbel",
    "Sport",
    "Baumarkt",
    "Beauty & Drogerie",
    "Marken",
  ];

  return (
    <div className="hidden md:block w-64 bg-gray-50 p-4">
      <h2 className="text-lg font-semibold mb-4">Kategorien</h2>
      <nav className="space-y-2">
        {categories.map((category) => (
          <a
            key={category}
            href="#"
            className="block text-gray-700 hover:text-otto-red hover:bg-gray-100 p-2 rounded"
          >
            {category}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;