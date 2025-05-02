import { TbBrandMeta } from "react-icons/tb";
import { FaInstagram ,FaTwitterSquare} from "react-icons/fa";


export default function Topbar() {
  return (
    <div className='bg-rabbit-red text-white'>
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="hidden md:flex items-center space-x-4">
        <a href="#" className='hover:text-gray-300'><TbBrandMeta /></a>
        <a href="#" className='hover:text-gray-300'><FaInstagram /></a>
        <a href="#" className='hover:text-gray-300'> <FaTwitterSquare /></a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>we Ship world wide - Fast and reliable shipping</span>
        </div>
        <div className="text-sm hidden md:block">
          <a href="tel:+1234567890">+1234567890</a>
        </div>
        </div>
    </div>
  )
}
