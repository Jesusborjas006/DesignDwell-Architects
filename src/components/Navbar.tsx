const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 absolute top-0 w-full">
      <h2 className="text-sm sm:text-lg font-semibold">
        DesignDwell Architects
      </h2>
      <ul className="hidden lg:flex gap-5 xl:gap-8 text-sm">
        <li>HOME</li>
        <li>PAGES</li>
        <li>SERVICES</li>
        <li>PORTFOLIO</li>
        <li>BLOG</li>
        <li>CONTACTS</li>
      </ul>
      <div className="flex gap-4 xl:gap-8 text-sm">
        <p>Shop</p>
        <p>Search</p>
        <p>Nav</p>
      </div>
    </nav>
  );
};

export default Navbar;
