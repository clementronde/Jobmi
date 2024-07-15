"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/sendEmail', formData);
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage('Error sending message');
    }
  };

  return (
    <div className="mt-[120px] mb-[50px] font-sans">
      <div className="my-10 mx-auto max-w-[700px] text-center">
        <h1 className="font-sans text-5xl font-bold">
          Contactez-nous !
        </h1>
        <img src="/media/home-temoignage-soulignage-titre.svg" alt="Trait soulignant le titre de l'article" className="mx-auto mt-2" />
      </div>

      <div className="max-w-lg mx-auto bg-[#F3F3F3] p-8 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={handleChange}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Envoyer
            </button>
          </div>
        </form>

        {responseMessage && (
          <div className="mt-6 text-center text-sm text-gray-500">
            {responseMessage}
          </div>
        )}
      </div>
    </div>
  );
}
