import { NavLink } from "react-router-dom";


const Header = () => {
    const links =<>
       
       <li><NavLink  to="/" className={({isActive , isPending}) => isPending ? 'pending' : isActive ? 'text-red-700 underline' : ''}> Home</NavLink></li>
       <li><NavLink to="/Donation" className={({isActive , isPending}) => isPending ? 'pending' : isActive ? 'text-red-700 underline' : ''}> Donation</NavLink></li>
       <li><NavLink to="/Statistics" className={({isActive , isPending}) => isPending ? 'pending' : isActive ? 'text-red-700 underline' : ''}> Statistics</NavLink></li>
    
    </>
    return (

     <div >
      <nav className="flex justify-between px-6 py-3">
      <div>
        <img src="https://i.ibb.co/gVdqJ1B/Logo.png" /></div>
       <div className="flex">
                <ul className="flex py-3 gap-4  ">
                       {links}
     
      
                 </ul>
        </div>
      </nav>
     </div>

    );
};

export default Header;