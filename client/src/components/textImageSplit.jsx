import { Link } from "react-router-dom";

export default function TextImageSplit({ title, message, buttonContent, buttonLink, flipped }) {
  const flexDirection = flipped ? "md:flex-row-reverse" : "md:flex-row";
  return (
    <div class={"max-w-screen-lg w-11/12 mx-auto my-16 flex justify-between items-center gap-10 flex-col " + flexDirection}>
      <div class="w-full max-w-lg aspect-[4/3] bg-hero bg-cover bg-no-repeat bg-center rounded-lg"></div>
      <div>
        <h2 class="text-3xl font-medium text-center mb-8">{title}</h2>
        <p class="font-thin text-center mb-6">{message}</p>
        <Link to={buttonLink || "/"}>
          <button class="block mx-auto px-12 py-4 font-medium text-white text-lg bg-primary rounded-lg cursor-pointer transition-colors hover:bg-dark-primary">
              {buttonContent}
          </button>
        </Link>
      </div>
    </div>
  );
}
