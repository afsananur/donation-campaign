

const DonationDetails = ({category}) => {
    const { id, title,titleColor,categoryButtonBgColor,categoryTypeColor,categoryType, price, img } = category || {};

    return (
        <div style={{ backgroundColor: categoryButtonBgColor}} className=" w-96 bg-base-100 shadow-xl flex-row gap-2 card my-4">
             <figure><img className="w-96 h-80' ml-6" src={img}  /></figure>
        <div className="card-body pr-6 ">

        <p style={{ backgroundColor: categoryButtonBgColor, color:categoryTypeColor }}className="font-bold text-sm">{categoryType}</p>
          <h2  className="text-xl  font-bold card-title">{title}</h2>
         <h3 style={{ color: titleColor }}  className="font-bold">${price}</h3>
         
        </div>
       
      </div>
    );
};

export default DonationDetails;