import { useForm } from "react-hook-form";

export default function CustomForm({ formName, hasBackground }) {
  const form = useForm();
  const { register, handleSubmit } = form;

  // const onSubmit = (req) => {
  //   const userMessage = {
  //     isBot: false,
  //     message: req.chatbox,
  //   };

  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ message: req.chatbox })
  //   };
  //   fetch("/iris", requestOptions)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setMessages([
  //         ...messages,
  //         userMessage,
  //         {
  //           isBot: true,
  //           message: data.message,
  //         },
  //       ]);
  //     })
  //     .catch((error) => {
  //       setMessages([
  //         ...messages,
  //         userMessage,
  //         {
  //           isBot: true,
  //           message: "Apologies, my neural networks seem to be malfunctioning! Please try again later. Error: " + error.message,
  //         },
  //       ]);
  //     })
  //     .finally(() => setLoading(false));
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={"mx-auto mb-16 " + (hasBackground ? "bg-light-primary rounded-lg max-w-xl p-5 sm:p-10" : "max-w-screen-md")}>
      <div className="flex justify-between gap-5 mb-3 flex-col sm:flex-row">
        <div className="flex-1">
          <label className="block mb-1" for="fname">First Name <span className="text-gray-400">(required)</span></label>
          <input
            type="text" 
            id="fname"
            name="fname"
            {...register("fname", { required: { value: true } })}
            className="w-full p-2 rounded-md border border-black"
          />
        </div>
        <div className="flex-1">
          <label className="block mb-1" for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            {...register("lname", { required: { value: false } })}
            className="w-full p-2 rounded-md border border-black"
          />
        </div>
      </div>
      <label className="block mb-1" for="email">Email <span className="text-gray-400">(required)</span></label>
      <input
        type="email"
        id="email" 
        name="email"
        {...register("email", { required: { value: true } })}
        className="w-full p-2 mb-3 rounded-md border border-black" 
      />
      <label className="block mb-1" for="message">Message <span className="text-gray-400">(required)</span></label>
      <textarea
        id="message"
        name="message"
        cols="30" 
        rows="3"
        {...register("message", { required: { value: true } })}
        className="w-full p-2 mb-3 rounded-md border border-black"
      />
      <button className="block mx-auto px-10 py-4 font-medium text-white text-lg bg-primary rounded-lg cursor-pointer transition-colors hover:bg-dark-primary" type="submit" value="Send" />
    </form>
  );
}