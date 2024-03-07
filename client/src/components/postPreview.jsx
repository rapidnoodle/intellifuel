export default function PostPreview({ title, message, date, image, path, flipped }) {
  const flexDirection = flipped ? "md:flex-row-reverse" : "md:flex-row";
  return (
    <div class={"max-w-screen-md w-11/12 mx-auto my-20 flex justify-between items-center gap-10 flex-col " + flexDirection}>
      <div class={"w-full max-w-md aspect-[4/3] bg-cover bg-no-repeat bg-center " + (image || "bg-hero")}></div>
      <div>
        <p class="mb-4">{date}</p>
        <h2 class="text-4xl font-medium mb-8">{title}</h2>
        <p class="font-thin mb-6">{message}</p>
        <p><a class="underline text-gray-400 transition-colors hover:text-gray-500" href={path || "#"}>Read More</a></p>
      </div>
    </div>
  );
}