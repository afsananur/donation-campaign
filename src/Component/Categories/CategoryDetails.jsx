import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";


const CategoryDetails = () => {
    const categories = useLoaderData();
    const {id}= useParams();
    const categoryInt =parseInt(id);
    const category = categories.find( category => category.id ===categoryInt);


    console.log(id, category)

    const handlAddToDonation =()=> {

        const addedDonationArray =[];

        const donationItem =JSON.parse(localStorage.getItem('donation'))

        if(!donationItem){
            addedDonationArray.push(category)
            localStorage.setItem('donation', JSON.stringify(addedDonationArray))
            swal({
                icon: "success",
              });
        }
        // console.log(category,'add');
        // localStorage.setItem('test', "education")

        else{
            const isExits= donationItem.find(category=> category.id ===categoryInt)
             console.log(isExits)
             
             if(!isExits){
                addedDonationArray.push(...donationItem,category)
            localStorage.setItem('donation', JSON.stringify(addedDonationArray))
            swal({
                icon: "success",
              });
             }
             else{
                swal({
                    icon: "error",
                  });
             }


            
        }
    }
    




    return (
        <div className="ml-16">
       <figure>
       <img className="w-11/12 h-96 " src={category.img} alt="" />
      <button onClick={handlAddToDonation} className="bg-red-600 py-3 px-8 rounded-md text-white ">Donate${category.price}</button>
       </figure>
      
        <div className="card-body p-8">
          <h2 className="card-title text-3xl">{category.title}</h2>
          <p>{category.description}</p>
         
        </div>
      </div>
    );
};

export default CategoryDetails;