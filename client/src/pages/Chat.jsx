import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      sender: "Bot",
      message: "Hello! My name is Iris, the latest version of the IntelliFuel chat bot! How may I assist you today?",
    },
  ]);

  const onSubmit = (data) => {
    console.log("Submitted", data);
  };

  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  return (
    <>
      <Header />
      <Banner title="IntelliFuel Chat Bot" />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          {...register("username", {
              required: {
                value: true,
                message: "Required!",
              },
              validate: (value) => {
                return value !== "no" || "error: no";
              },
          })}
        />
        <p>{errors.username?.message}</p>
        <button>Submit</button>
      </form>
      <Footer />
    </>
  );
}