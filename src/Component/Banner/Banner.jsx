
import '../Banner/Banner.css'
const Banner = ({categories}) => {
    
    return (
        <section id="banner">
            <div className="banner-overlay">
                
                <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 text-center 2xl:py-40 xl:py-40 lg:py-36 md:py-36 py-32 ">
                    <h1 className="text-3xl md:text-[45px] font-semibold 
                    ">I Grow By Helping People In Need</h1>
                    <div className="mt-7">
                        <input onChange="" type="text" placeholder="Search here...." className="input input-bordered" />
                        <button onClick={() => categories(searchQuery)} className="btn bg-[#FF444A] hover:bg-[#FF444A] normal-case text-white">Search</button>
                    </div>
                </div>
            </div>
       </section>
    );
};

export default Banner;