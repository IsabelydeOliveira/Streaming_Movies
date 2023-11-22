import { IoMdHome } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import "./Sidebar.css";

const Sidebar = () => {
  return (
  <div className="sidbar">
       <di className= "bb">
          <button>
             <a href="/">
             <span className="icon"><IoMdHome/></span>
             </a>
         </button>
          <button>
           <a href="Minha lista">
              <span className="icon"><FiPlus/></span>
           </a>
          </button>
      </di>              
      
  </div>
      
  )
}

export default Sidebar