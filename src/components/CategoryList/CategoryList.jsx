export default function CategoryList({
  categories,
  setActiveCategory,
  activeCategory,
}) {
  const allCategories = categories.map((category) => (
    <div
      key={category}
      className={category === activeCategory ? "active" : ""}
      onClick={() => setActiveCategory(category)}
    >
      {category.toUpperCase()}
    </div>
  ));

  return (
    <div className="categories">
      <span onClick={() => setActiveCategory(null)}>ALL</span>

      {allCategories}
    </div>
  );
}
