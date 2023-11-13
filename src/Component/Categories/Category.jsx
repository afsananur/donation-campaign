import { Link } from "react-router-dom";

const Category = ({category}) => {
    const {id, img,titleColor, categoryType, categoryTypeBgColor,categoryButtonBgColor,title,categoryTypeColor }= category || {}
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
       

       <Link to={`/categories/${id}`}>
       <img className="w-full" src={img} alt="cover-image" />

         <div style={{ backgroundColor: categoryTypeBgColor }} className="card-body">
          <p className="" style={{ backgroundColor: categoryButtonBgColor, color:categoryTypeColor }}>{categoryType}</p>
             <h2 style={{ color: titleColor }}  className="card-title">{title}</h2>
              </div>
       </Link>
         
       
       
      </div>
    );
};

export default Category;