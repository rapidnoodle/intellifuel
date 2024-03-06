export default function Banner({ title, hasButton }) {
  const button = (
    <button className="block mx-auto px-10 py-4 text-lg bg-primary rounded-lg cursor-pointer transition-colors hover:bg-dark-primary sm:px-20">
      Get Started
    </button>
  );
  return (
    <div className="bg-hero bg-cover bg-no-repeat bg-center">
      <div className="text-white font-medium mx-auto p-10 pt-28 sm:p-20 ">
        <h1 className="text-center my-8 leading-snug text-5xl sm:text-6xl">{title}</h1>
        {hasButton && button}
      </div>
    </div>
  );
}