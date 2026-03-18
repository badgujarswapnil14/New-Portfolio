import emailjs from '@emailjs/browser'
import { Mail, Phone, Send, Share2 } from 'lucide-react'
import { useState } from 'react'
import SectionHeading from './SectionHeading'
import { profile, socialPlaceholders } from '../data/portfolio'

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setMessage('Please complete your name, email, and message before sending.')
      return
    }

    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      setMessage('EmailJS is not configured yet. Add your service ID, template ID, and public key in the environment file to enable sending.')
      return
    }

    setIsSending(true)
    setMessage('')

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          to_name: profile.name,
          to_email: profile.email,
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          subject: `Portfolio enquiry from ${formData.name}`,
          message: formData.message,
        },
        {
          publicKey: emailJsConfig.publicKey,
        },
      )

      setMessage('Message sent successfully. It should arrive in your email inbox shortly.')
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      setMessage('Message sending failed. Check your EmailJS configuration and template variable names, then try again.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="section-shell pb-16" data-animate-section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Contact"
              title="Open to conversations that value technical reliability and strong execution."
              description="If you are hiring for Linux support, cloud-focused operations, or frontend work with polished presentation, feel free to reach out directly."
            />

            <div className="space-y-8" data-animate-item>
              <div className="flex items-start gap-4 border-l border-white/10 pl-5">
                <div className="mt-1 text-cyan-100">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Phone</p>
                  <a
                    href={`tel:${profile.phone}`}
                    className="mt-2 block text-lg font-semibold text-white"
                    data-cursor-target="button"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 border-l border-white/10 pl-5">
                <div className="mt-1 text-orange-100">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Email</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="mt-2 block text-lg font-semibold text-white break-all"
                    data-cursor-target="button"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="space-y-4 border-l border-white/10 pl-5">
                <div className="flex items-center gap-4">
                  <div className="text-slate-100">
                    <Share2 size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Profiles and Resume</p>
                    <p className="mt-2 text-sm text-slate-300">Direct links to your GitHub, LinkedIn, and resume.</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {socialPlaceholders.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300 transition duration-300 hover:border-cyan-300/25 hover:text-white"
                      data-cursor-target="button"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 border-t border-white/10 pt-6" data-animate-item>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/75">Message Form</p>
              <h3 className="mt-3 font-display text-3xl font-bold text-white">Send a quick introduction</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                This form is connected for EmailJS delivery and can send straight to your inbox once your EmailJS keys are added.
              </p>
            </div>

            <form className="grid gap-4" onSubmit={handleSubmit}>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-200">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Swapnil recruiter contact"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-slate-950/65"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-200">Email Address</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-slate-950/65"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-200">Message</span>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share the role, team, or opportunity details..."
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-slate-950/65"
                />
              </label>

              <button
                type="submit"
                disabled={isSending}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-orange-300 to-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition duration-300 hover:translate-y-[-2px] hover:shadow-[0_18px_40px_rgba(249,115,22,0.25)]"
                data-cursor-target="button"
              >
                {isSending ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>

            {message ? <p className="text-sm leading-7 text-cyan-100/80">{message}</p> : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection