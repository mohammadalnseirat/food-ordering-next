import { Routes } from "@/constant/enum";
import React from "react";
import MainHeading from "../main-heading";

function Contact() {
  return (
    <section className="section-page  p-4 sm:p-6" id={Routes.CONTACT}>
      <div className="text-center">
        <MainHeading title="Contact Us" subtitle="Get in Touch" />
      </div>
      <div className="container max-w-2xl mx-auto mt-5 bg-white border border-gray-200 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl sm:text-3xl text-center text-primary font-medium">
          Get In Touch
        </h2>
        <p className="text-center text-gray-500 text-xs sm:text-sm md:text-base my-4">
          Have questions or need support? Fill out the form below, and we'll get
          back to you!
        </p>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-500 text-sm font-medium mb-2 cursor-pointer"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-500 text-sm font-medium mb-2 cursor-pointer"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-500 text-sm font-medium mb-2 cursor-pointer"
            >
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              className="w-full px-4 py-2 resize-none border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
