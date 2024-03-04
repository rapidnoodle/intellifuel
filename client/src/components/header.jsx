export default function Header({ currentPage }) {
  return (
    <header className="w-full fixed p-5 text-white" id="header">
      <div className="max-w-screen-xl mx-auto flex justify-start items-center gap-5 flex-col sm:gap-10 sm:flex-row">
        <h1><a className="text-3xl font-medium hover:bg-dark-primary hover:bg-opacity-50 px-2 py-1 rounded-md transition-colors" href="index.html">IntelliFuel</a></h1>
        <ul className="flex items-center gap-2 text-center [&>*:hover]:bg-dark-primary [&>*:hover]:bg-opacity-50 [&>*]:px-2 [&>*]:py-1 [&>*]:rounded-md [&>*]:transition-colors sm:gap-10">
          <li className={currentPage == "our team" && "bg-dark-primary bg-opacity-50"}><a href="about.html">Our Team</a></li>
          <li className="bg-dark-primary bg-opacity-50"><a href="partners.html">Partners</a></li>
          <li className="bg-dark-primary bg-opacity-50"><a href="blog.html">Blog</a></li>
          <li className="bg-dark-primary bg-opacity-50"><a href="contact.html">Contacts</a></li>
        </ul>
      </div>
    </header>
  );
}
