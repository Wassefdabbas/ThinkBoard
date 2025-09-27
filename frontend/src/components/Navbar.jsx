import { PlusIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="bg-base-200 border-b-2 border-primary shadow-lg">
      <div className="mx-auto max-w-7xl p-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-primary font-mono tracking-tight hover:opacity-80 transition-opacity">
            Think Board
          </Link>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className='size-5' />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;