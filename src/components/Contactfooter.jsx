import { useState } from "react";
import emailjs from "emailjs-com";

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S9 17.44 9 18v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ContactFooter() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(""); // For feedback

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setForm({ name: "", email: "", subject: "", message: "" }); // Reset form
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("Failed to send message. Please try again.");
        }
      );
  }; // 👈 Closing brace was missing

  const inputClass =
    "w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm outline-none focus:border-orange-500/60 focus:bg-[#141414] transition-all duration-200";

  return (
    <footer className="w-full bg-[#0a0a0a]">
      <section className="w-full px-8 py-16 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* LEFT side (contact info + socials) stays the same */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-5xl md:text-6xl font-black leading-tight text-white">
                LET'S WORK
              </h2>
              <h2 className="text-5xl md:text-6xl font-black leading-tight text-orange-400">
                TOGETHER
              </h2>
              <p className="mt-6 text-white/50 text-sm leading-relaxed max-w-sm">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact info */}
            <div className="mt-10 flex flex-col gap-4">
              {[
                { icon: <MailIcon />, label: "Email", value: "youssefkhafif35@gmail.com" },
                { icon: <PhoneIcon />, label: "Phone", value: "+212 659 311 360" },
                { icon: <MapPinIcon />, label: "Location", value: "CasaBlonca, Morocco" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl border border-orange-500/30 bg-orange-500/5 flex items-center justify-center text-orange-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs">{item.label}</p>
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-10">
              <p className="text-orange-400/80 text-sm mb-3">Find me on</p>
              <div className="flex gap-3">
                {[
                  { icon: <GithubIcon />, href: "https://github.com/youssefelkhafif" },
                  { icon: <LinkedinIcon />, href: "https://www.linkedin.com/in/youssef-el-khafif-55b75b400/?skipRedirect=true" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-orange-400 hover:border-orange-500/40 hover:bg-orange-500/5 transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="flex-1 border border-white/10 rounded-2xl p-6 bg-white/[0.02] backdrop-blur-sm">
            <form onSubmit={handleSubmit}>
              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <label className="text-white/60 text-xs mb-1.5 block">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={inputClass}
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="text-white/60 text-xs mb-1.5 block">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-white/60 text-xs mb-1.5 block">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className={inputClass}
                  required
                />
              </div>

              <div className="mb-6">
                <label className="text-white/60 text-xs mb-1.5 block">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className={`${inputClass} resize-none`}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-300 text-white font-semibold text-sm shadow-[0_4px_20px_rgba(249,115,22,0.35)] hover:shadow-[0_4px_28px_rgba(249,115,22,0.5)] active:scale-[0.98] transition-all duration-200"
              >
                <SendIcon />
                Send Message
              </button>
            </form>

            {/* Status message */}
            {status && <p className="mt-4 text-sm text-orange-400">{status}</p>}
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-8 py-6 text-center text-xs text-white/40">
        <p>© 2026 Youssef El Khafif. All rights reserved.</p>
        <p className="mt-1">Built with React & TailwindCSS & Three.js</p>
      </div>
    </footer>
  );
}



