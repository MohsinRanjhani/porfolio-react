// src/components/ContactForm.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_hm92fyf",    // Replace with your EmailJS Service ID
        "template_esagkjr",   // Replace with your EmailJS Template ID
        form.current,
        "Io3JDWjyEUdduwEV2"        // Your EmailJS public key
    )
    .then(
      (result) => {
        console.log(result.text);
        setStatus("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        setStatus("Failed to send message. Try again.");
      }
    );
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-slate-950 rounded-3xl p-8 shadow-xl space-y-6"
      >
        <div>
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3
                       text-white focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3
                       text-white focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message..."
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3
                       text-white focus:outline-none focus:border-indigo-500 resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-full bg-indigo-600 text-white font-semibold
                     hover:bg-indigo-700 transition-all duration-300
                     hover:shadow-indigo-500/40 hover:shadow-lg"
        >
          Send Message
        </button>

        {status && (
          <p className="mt-4 text-center text-white font-medium">{status}</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
