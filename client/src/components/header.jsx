import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [atTop, setAtTop] = useState(true);

  const { pathname } = useLocation();

  useEffect(() => {
    setAtTop(window.scrollY === 0);
    window.onscroll = () => setAtTop(window.scrollY === 0);
    return () => (window.onscroll = null);
  });

  return (
    <header className={"w-full fixed p-5 " + (atTop ? "text-white" : "text-black bg-white border-b-2 border-dark-primary drop-shadow-xl")}>
      <div className="max-w-screen-xl mx-auto flex justify-start items-center gap-5 flex-col sm:gap-10 sm:flex-row">
        <h1 className="text-3xl font-medium hover:bg-dark-primary hover:bg-opacity-50 px-2 rounded-md transition-colors"><Link to="/">IntelliFuel</Link></h1>
        <ul className="flex items-center gap-2 text-center [&>*:hover]:bg-dark-primary [&>*:hover]:bg-opacity-50 [&>*]:px-2 [&>*]:py-1 [&>*]:rounded-md [&>*]:transition-colors sm:gap-10">
          <li className={pathname === "/chat" && "bg-dark-primary bg-opacity-50"}><Link to="/chat">Chatbot</Link></li>
          <li className={pathname === "/about" && "bg-dark-primary bg-opacity-50"}><Link to="/about">Our Team</Link></li>
          <li className={pathname === "/blog" && "bg-dark-primary bg-opacity-50"}><Link to="/blog">Blog</Link></li>
          <li className={pathname === "/contacts" && "bg-dark-primary bg-opacity-50"}><Link to="/contacts">Contacts</Link></li>
        </ul>
      </div>
    </header>
  );
}
