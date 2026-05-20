import { useState } from 'react';
import { SquareCheckBig, LayoutDashboard, FileText, ChartLine, UserPen, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (



    <div className={`sticky top-0 left-0
    min-h-screen
    bg-cyan-900
    z-50
    transition-all duration-300

    flex flex-col

    ${menuOpen ? 'w-48' : 'w-20'}

    md:w-[23%]
    lg:w-[15%]}`}>
       <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline ml-2 mt-2 size-6 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-green transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60 md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={20} className='text-green-700' /> : <Menu size={20} className='text-green-700' />}
        </button>
      <div className="flex items-center justify-between px-4 py-3 md:flex-col md:items-start md:justify-start md:px-5 md:py-4">
        <div className="-ml-4 w-auto flex items-center gap-2 rounded-2xl p-2 md:w-full md:p-2">
          <SquareCheckBig className=" text-green-500 md:size-10" />
          <h1 className={`text-base text-white font-medium md:text-sm lg:text-lg whitespace-nowrap md:inline md:whitespace-nowrap ${menuOpen ? 'inline' : 'hidden'}`}>JobTracker Pro</h1>
        </div>
      </div>

      <ul className={`flex flex-col gap-2 px-4 pb-4 text-white opacity-90 md:px-5 md:pb-0 md:mt-5 md:block`}>
        <Link to="/" className="outline-0 w-full px-2 py-6 lg:mb-2">
          <li className={`flex items-center gap-2 p-1 text-sm ${menuOpen ? "gap-3": ""} transition hover:bg-gray-600/80 cursor-pointer md:ml-0 sm:gap-2 md:gap-2`}>
            <LayoutDashboard className='size-5' />
            <span className={`text-base sm:block md:block lg:block ${menuOpen ? 'inline' : 'hidden'}`}>Dashboard</span>
          </li>
        </Link>

        <Link to="/applications" className="outline-0 w-full px-2 py-6 mb-2">
          <li className="flex items-center gap-2 p-1 text-sm transition hover:bg-gray-600/80 cursor-pointer md:ml-0">
            <FileText className='size-5' />
            <span className={`text-base sm:block md:block lg:block ${menuOpen ? 'inline' : 'hidden'}`}>MyApplications</span>
          </li>
        </Link>

        <Link to="/analytics" className="outline-0 w-full px-2 py-6 mb-2">
          <li className="flex items-center gap-2 p-1 text-sm transition hover:bg-gray-600/80 cursor-pointer md:ml-0">
            <ChartLine className='size-5' />
            <span className={`text-base sm:block md:block lg:block ${menuOpen ? 'inline' : 'hidden'}`}>Analytics</span>
          </li>
        </Link>

        <Link to="/profile" className="outline-0 w-full px-2 py-6 mb-2">
          <li className="flex items-center gap-2 p-1 text-sm transition hover:bg-gray-600/80 cursor-pointer md:ml-0">
            <UserPen className='size-5' />
            <span className={`text-base sm:block md:block lg:block ${menuOpen ? 'inline' : 'hidden'}`}>Profile</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
