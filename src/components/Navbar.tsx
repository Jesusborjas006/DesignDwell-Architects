const Navbar = () => {
  return (
    <nav className="flex justify-between p-6 absolute top-0 w-full">
      <h2>DesignDwell Architects</h2>
      <ul className="flex gap-8">
        <li>HOME</li>
        <li>PAGES</li>
        <li>SERVICES</li>
        <li>PORTFOLIO</li>
        <li>BLOG</li>
        <li>CONTACTS</li>
      </ul>
      <div className="flex gap-8">
        <p>Shop</p>
        <p>Search</p>
        <p>Nav</p>
      </div>
    </nav>
  );
};

export default Navbar;
