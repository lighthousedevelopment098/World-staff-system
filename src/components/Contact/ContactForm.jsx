// import React from 'react';
// import { useForm } from 'react-hook-form';

// const ContactForm = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();

//     const onSubmit = (data) => {
//         console.log(data);
//         // Handle form submission
//     };

//     return (
//         <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg">
//             <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Name</label>
//                     <input
//                         type="text"
//                         className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
//                         {...register('name', { required: 'Name is required' })}
//                     />
//                     {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Email</label>
//                     <input
//                         type="email"
//                         className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
//                         {...register('email', { required: 'Email is required' })}
//                     />
//                     {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Phone No</label>
//                     <input
//                         type="tel"
//                         className={`w-full p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
//                         {...register('phone', { required: 'Phone number is required' })}
//                     />
//                     {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Message</label>
//                     <textarea
//                         className={`w-full p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
//                         {...register('message', { required: 'Message is required' })}
//                     />
//                     {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-24 bg-custom text-white p-2 rounded hover:bg-blue-400 transition duration-200"
//                 >
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default ContactForm;

import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission and send email using EmailJS
  const onSubmit = (data) => {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID; // Your EmailJS service ID
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_FORM_2;

    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY; // Your EmailJS public key

    // Define the email parameters to be sent
    const emailParams = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };

    // Send email via EmailJS
    emailjs
      .send(serviceId, templateId, emailParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent successfully!");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("There was an error sending your message. Please try again.");
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className={`w-full p-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded mt-1`}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className={`w-full p-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded mt-1`}
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone No</label>
          <input
            type="tel"
            className={`w-full p-2 border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded mt-1`}
            {...register("phone", { required: "Phone number is required" })}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            className={`w-full p-2 border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded mt-1`}
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="w-24 bg-custom text-white p-2 rounded hover:bg-blue-400 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
