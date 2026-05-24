'use client';

import React, { useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import toast, { Toaster } from 'react-hot-toast';
import Heading from '../ui/Heading';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  });
  const [status, setStatus] = useState('idle'); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulated local delay instead of an EmailJS / Network request
    const mockSendPromise = () => 
      new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      // Handles the loading state, then fires the success toast after 2 seconds
      await toast.promise(mockSendPromise(), {
        loading: 'Sending your message...',
        success: 'Message sent successfully! 🚀',
        error: 'Failed to send message. Please try again.',
      }, {
        style: {
          borderRadius: '6px',
          background: '#333',
          color: '#fff',
          fontSize: '14px',
        },
      });

      // Clear the form fields upon success
      setFormData({ name: '', email: '', project: '' });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setStatus('idle');
    }
  };

  return (
    <section className="py-10">
      {/* Container for notifications to render inside */}
      <Toaster position="bottom-right" reverseOrder={false} />
      
      <Heading title="Contact Me" subtitle="Get in Touch"/>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          <div className="md:col-span-1 space-y-2">
            <div className="rounded-md border border-current/10 p-5 flex flex-col gap-2">
              <div>
               <MdEmail className='text-2xl'/>
                <p className="text-base font-semibold break-all mt-0.5">jahidhasan.webdev01@gmail.com</p>
              </div>
            </div>
            <div className="rounded-md border border-current/10 p-5 flex flex-col gap-2">
              <div>
               <IoMdCall className='text-2xl'/>
                <p className="text-base font-semibold break-all mt-0.5">+880 1774 266 484</p>
              </div>
            </div>
            <div className="rounded-md border border-current/10 p-5 flex flex-col gap-2">
              <div>
               <FaLinkedinIn className='text-2xl'/>
                <p className="text-base font-semibold break-all mt-0.5">https://www.linkedin.com/in/jahid-hasan-webdev01</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 rounded-md border p-5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Write your name"
                  className="w-full h-12 px-4 rounded-md border border-current/20 bg-transparent placeholder-current/40 outline-none focus:border-current transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Add your email"
                 className="w-full h-12 px-4 rounded-md border border-current/20 bg-transparent placeholder-current/40 outline-none focus:border-current transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="project" className="text-sm font-medium">Project</label>
                <textarea
                  id="project"
                  name="project"
                  required
                  rows={5}
                  value={formData.project}
                  onChange={handleChange}
                  placeholder="Write your project details"
                  className="w-full p-4 rounded-md border border-current/20 bg-transparent placeholder-current/40 outline-none focus:border-current transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full h-10 text-sm border border-current/20 bg-transparent font-semibold rounded-md flex items-center justify-center cursor-pointer transition-all disabled:opacity-50"
              >
                {status === 'submitting' && (
                  <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                )}
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
    </section>
  );
}