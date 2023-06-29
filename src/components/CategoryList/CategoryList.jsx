export default function CategoryList({categories}) {

const activeCategories = categories.map(category =>
    <div 
    key = {category}
    >
        {category.toUpperCase()}
    </div>
    )

    return (
        <div className="categories">
            {activeCategories}

        </div>
    )
}