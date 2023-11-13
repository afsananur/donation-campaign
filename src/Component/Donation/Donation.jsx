import { useEffect, useState } from "react";

import DonationDetails from "./DonationDetails";



const Donation = () => {

    const [donation, setDonation] = useState([]);

    const [noFound, setNoFound] =useState(false);

    const [isShow,setIsShow] = useState(false)

    useEffect(()=>{
        const donationItem = JSON.parse(localStorage.getItem('donation'));
        if(donationItem){
            setDonation(donationItem)
        }
        else{
           setNoFound('No Data Found');
        }
    },[])
    console.log(donation);


    const handleRemove = () => {
        localStorage.clear();
        setDonation([]);
        setNoFound("No Data Found");
      };
    
    
      console.log(isShow);
    
    return (
        <div>
        {noFound ? (
          <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
        ) : (
          <div>
             <button
                onClick={handleRemove}
                className="px-5 bg-green-200 block mx-auto"
              >
                Deleted All favorites
              </button>
            
  
            <div className="grid grid-cols-2 gap-5 px-8">
              {
                  isShow ? donation.map((category) => (
                      <DonationDetails key={category.id} category={category}></DonationDetails>
                    )) 
                    
                    : donation.slice(0,2).map((category) => (
                      <DonationDetails key={category.id} category={category}></DonationDetails>
                    ))
              }
               <div>
                 
  
             
              </div>
            </div>
  
            {donation.length > 2 && <button onClick={()=>setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto">
              {isShow ? "See less" : "See more"}
            </button>}
          </div>
        )}
      </div>
    );
};

export default Donation;