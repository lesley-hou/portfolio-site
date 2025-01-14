import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_jx4nflo",
          "template_zi3pazn",
          form.current,
          "G-PajkmtGMOzKIcFR"
        )
        .then(
          (result) => {
            console.log(result.text);
            setShowPopup(true);
          },
          (error) => {
            console.log(error.text);
          }
        );

      form.current.reset();
    }
  };

  return (
    <div className=" text-porcelain w-[400px]">
        <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col gap-4 mt-6">
                <div className="flex flex-col gap-2">
                <label htmlFor="name">name</label>
                <input
                type="text"
                name="name"
                id="name"
                required
                className="input"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email">subject</label>
                <input
                type="email"
                name="email"
                id="email"
                required
                className="input"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="message">message</label>
                <textarea
                name="message"
                id="message"
                required
                className="input"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email">email</label>
                <input
                type="email"
                name="email"
                id="email"
                required
                className="input"
                />
            </div>
            <button type="submit" className="btn">
                send
            </button>
            </div>
        </form>

    </div>

  );
};

export default ContactForm;
