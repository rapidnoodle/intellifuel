export default function TitleText({ title, message }) {
  return (
    <div className="max-w-screen-md w-11/12 mx-auto my-16">
      <h2 className="text-3xl font-medium text-center mb-4">{title}</h2>
      <p className="font-thin text-center">{message}</p>
    </div>
  );
}