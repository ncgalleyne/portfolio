import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // TODO: implement send logic
    setSending(false);
  };

  return (
    <section id="contact" className="px-margin-mobile md:px-margin-desktop py-stack-xl">
      <div className="max-w-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Get In Touch
        </h2>
        <p className="text-sm text-outline mb-8">
          Have a question or want to work together? Drop me a message.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm text-outline font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="px-4 py-2.5 bg-container-high border border-container-highest rounded focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm text-outline font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="px-4 py-2.5 bg-container-high border border-container-highest rounded focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm text-outline font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="px-4 py-2.5 bg-container-high border border-container-highest rounded focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="px-6 py-2.5 bg-accent text-primary font-semibold rounded shadow-lg shadow-accent/20
            hover:bg-accent/90 hover:shadow-accent/30 transition-all duration-200 text-sm"
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}