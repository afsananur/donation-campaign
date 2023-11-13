import Category from "./Category";

const Categories = ({categories}) => {
    return (
        <div className="pl-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-3 my-8">
                {
                    categories?.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;