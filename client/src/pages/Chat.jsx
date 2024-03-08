import { useState, useEffect } from "react";
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

  const onSubmit = (req) => {
    const userMessage = {
      isBot: false,
      message: req.chatbox,
    };

    setMessages([
      ...messages,
      userMessage,
    ]); 

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
      });
  };

  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  return (
    <>
      <Header />
      <Banner title="IntelliFuel Chat Bot" />
      {messages.map((message) => (
        <div>{message.message}</div>
      ))}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="chatbox">Chatbox</label>
        <input
          type="text"
          id="chatbox"
          name="chatbox"
          placeholder="Ask IRIS..."
          {...register("chatbox", {
              required: {
                value: true,
                message: "Required!",
              },
              validate: (value) => {
                return value !== "no" || "error: no";
              },
          })}
        />
        <p>{errors.chatbox?.message}</p>
        <button>Send</button>
      </form>
      <Footer />
    </>
  );
}