interface CategoryProps {
    params: {
        category: string[];
    };
}

export default function Category(props: CategoryProps) {
    // Extracting the category from the params
    const { category } = props.params;
    console.log(category);
    return (
        <div>
            <h1>Category Page: {category}</h1>
            <p>Welcome to the category!</p>
        </div>
    );
}