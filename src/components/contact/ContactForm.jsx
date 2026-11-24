
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form submission will be connected to the backend later.
    alert('Thank you for your enquiry! Form submission is not connected yet.');
  };

  const inputStyles =
    'w-full border border-border bg-white px-4 py-3 text-sm text-text-primary outline-none transition placeholder:text-text-secondary/70 focus:border-brand-blue';

  return (
    <section className="bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* Introduction */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
              Send an Enquiry
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue md:text-4xl">
              How can we help your business?
            </h2>

            <p className="mt-6 leading-8 text-text-secondary">
              Tell us a little about what you're looking for
              and our team will be happy to assist.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 md:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-brand-blue">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputStyles}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-brand-blue">
                  Company / Organization
                </label>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  className={inputStyles}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-brand-blue">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputStyles}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-brand-blue">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 876 ..."
                  className={inputStyles}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-brand-blue">
                  Enquiry Type *
                </label>

                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputStyles}
                >
                  <option value="">Select an enquiry type</option>
                  <option value="Product Enquiry">Product Enquiry</option>
                  <option value="Wholesale Enquiry">Wholesale Enquiry</option>
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-brand-blue">
                  Your Message *
                </label>

                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  className={`${inputStyles} resize-y`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex items-center gap-3 bg-brand-blue px-7 py-4 text-sm font-bold text-white transition hover:bg-brand-red"
            >
              Send Enquiry
              <Send size={17} />
            </button>

            <p className="mt-4 text-xs text-text-secondary">
              * Required fields
            </p>
          </form>

        </div>
      </div>
    </section>
  );
}
