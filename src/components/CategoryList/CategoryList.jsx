export default function CategoryList({categories, setActiveCategory}) {

const allCategories = categories.map(category =>
    <div 
    key = {category}
    onClick={() => setActiveCategory(category)}
    >
        {category.toUpperCase()}
    </div>
    )

    return (
        <div className="categories">
            <span onClick={() => setActiveCategory(null)}>ALL</span>
            
            {allCategories}

        </div>
    )
}