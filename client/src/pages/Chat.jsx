import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      isBot: true,
      message: "Hello! My name is IRIS, the latest version of the IntelliFuel chat bot! How may I assist you today?",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const form = useForm();
  const { register, handleSubmit, reset } = form;

  const onSubmit = (req) => {
    reset();

    if (req.chatbox === "clear") {
      setMessages([]);
      return;
    }

    const userMessage = {
      isBot: false,
      message: req.chatbox,
    };
    setMessages([
      ...messages,
      userMessage,
    ]);
    setLoading(true);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: req.chatbox })
    };
    fetch("/iris", requestOptions)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMessages([
          ...messages,
          userMessage,
          {
            isBot: true,
            message: data.message,
          },
        ]);
      })
      .catch((error) => {
        setMessages([
          ...messages,
          userMessage,
          {
            isBot: true,
            message: "Apologies, my neural networks seem to be malfunctioning! Please try again later. Error: " + error.message,
          },
        ]);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Header />

      <Banner title="IntelliFuel Chat Bot" />

      <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col mx-auto bg-white max-w-screen-lg">
        <div className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
          {messages.map((message) => (
            <div>
              <div className={"flex items-end" + (message.isBot ? "" : " justify-end")}>
                <div className={"flex flex-col space-y-2 text-md leading-tight max-w-lg mx-2 " + (message.isBot ? "order-2 items-start" : "order-1 items-end")}>
                  <div>
                    <span className={"px-4 py-3 rounded-xl inline-block " + (message.isBot ? "rounded-bl-none bg-gray-100 text-gray-600" : "rounded-br-none bg-blue-500 text-white")}>{message.message}</span>
                  </div>
                </div>
                <div className={"w-6 h-6 rounded-full bg-hero bg-cover bg-no-repeat bg-center " + (message.isBot ? "order-1" : "order-2")} />
              </div>
            </div>
          ))}
          <div className={loading ? "block" : "hidden"}>
            <div className="flex items-end">
              <div className="flex flex-col space-y-2 text-md leading-tight mx-2 order-2 items-start">
                <div><img src="https://support.signal.org/hc/article_attachments/360016877511/typing-animation-3x.gif" className="w-16 ml-6" /></div>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="px-4 pt-4 mb-2 sm:mb-0">
            <div className="relative flex">
              <input
                type="text"
                id="chatbox"
                name="chatbox"
                placeholder="Ask IRIS..."
                autoComplete="off"
                autoFocus
                {...register("chatbox", { required: { value: true } })}
                className="text-md w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-5 pr-16 bg-gray-100 border-2 border-gray-200 focus:border-blue-500 rounded-full py-2"
              />
              <div className="absolute right-2 items-center inset-y-0 hidden sm:flex">
                <button type="button" className="inline-flex px-3 py-1 items-center justify-center rounded-full transition duration-200 ease-in-out text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      
      <Footer />
    </>
  );
}
