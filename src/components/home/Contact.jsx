'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus('success');
      setFormData({ name: '', email: '', project: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-10">



        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          
          <div className="md:col-span-1">
            
            <div className="rounded-2xl border border-current/10 p-6 flex flex-col gap-2">
              <div>
                <h4 className="text-sm ">Email</h4>
                <p className="text-base font-semibold break-all mt-0.5">nuradnanchowdhury015@gmail.com</p>
                <a href="mailto:nuradnanchowdhury015@gmail.com" className="inline-flex items-center text-sm font-medium hover:underline mt-3">
                  Write me 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </a>
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
                className="w-full h-10 text-sm border border-current/20 bg-transparent font-semibold rounded-md flex items-center justify-center cursor-pointer"
              >
                {status === 'submitting' && (
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
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