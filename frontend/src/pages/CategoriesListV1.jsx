import useFetch from "../hooks/useFetch";

function CategoriesList() {
  const {
    data: categories,
    loading,
    error,
  } = useFetch("http://localhost:8000/api/categories");

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories?.map((category, index) => (
          <li key={index}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesList;
