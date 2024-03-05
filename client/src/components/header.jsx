import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation()
  return (
    <header className="w-full fixed p-5 text-white" id="header">
      <div className="max-w-screen-xl mx-auto flex justify-start items-center gap-5 flex-col sm:gap-10 sm:flex-row">
        <h1 className="text-3xl font-medium hover:bg-dark-primary hover:bg-opacity-50 px-2 rounded-md transition-colors"><Link to="/">IntelliFuel</Link></h1>
        <ul className="flex items-center gap-2 text-center [&>*:hover]:bg-dark-primary [&>*:hover]:bg-opacity-50 [&>*]:px-2 [&>*]:py-1 [&>*]:rounded-md [&>*]:transition-colors sm:gap-10">
          <li className={pathname === "/about" && "bg-dark-primary bg-opacity-50"}><Link to="/about">Our Team</Link></li>
          <li className={pathname === "/partners" && "bg-dark-primary bg-opacity-50"}><Link to="/partners">Partners</Link></li>
          <li className={pathname === "/blog" && "bg-dark-primary bg-opacity-50"}><Link to="/blog">Blog</Link></li>
          <li className={pathname === "/contacts" && "bg-dark-primary bg-opacity-50"}><Link to="/contacts">Contacts</Link></li>
        </ul>
      </div>
    </header>
  );
}
