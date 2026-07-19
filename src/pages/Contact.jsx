import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, ArrowUpRight, Send, MapPin, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import InstagramIcon from '../components/InstagramIcon';
import PeakMark from '../components/PeakMark';
import './Contact.css';


const EMAILJS_SERVICE_ID  = 'service_la385ni';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_gwh9inz';  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY  = 'DdgJ_B3EemAOoGyTp';   // e.g. 'abcDEFghiJKL...'

// ─── WhatsApp Config ─────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = '917695948634'; // 91 = India country code + your number

const SERVICE_OPTIONS = [
  'Website Design',
  'E-Commerce Store',
  'Branding & Growth',
  'Not sure yet',
];

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm]     = useState({ name: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    // Build WhatsApp message
    const waText = encodeURIComponent(
      `🔔 *New Enquiry - Trippy Web House*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📧 *Email:* ${form.email}\n` +
      `🛠️ *Service:* ${form.service || 'Not selected'}\n` +
      `💬 *Message:* ${form.message}`
    );
    const waURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

    try {
      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          service:    form.service || 'Not selected',
          message:    form.message,
          to_email:   'trippywebhouse@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setForm({ name: '', email: '', service: '', message: '' });

      // Open WhatsApp notification in new tab
      window.open(waURL, '_blank');
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  }

  function reset() {
    setStatus('idle');
    setForm({ name: '', email: '', service: '', message: '' });
  }

  return (
    <div className="contact-page">
      <section className="section contact-hero">
        <div className="container">
          <div className="eyebrow">Contact</div>
          <h1 className="h-display contact-hero-title">
            Let's start <span className="text-grad">building your brand.</span>
          </h1>
          <p className="contact-hero-sub">
            Tell us a little about your business and what you need. We typically reply within a day.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container contact-grid">
          <div className="panel contact-form-card">

            {status === 'success' ? (
              <div className="contact-success">
                <CheckCircle size={48} color="#2563eb" />
                <h3>Message sent! 🎉</h3>
                <p>Thanks for reaching out — you'll hear from us within a day. We've also sent you a WhatsApp notification.</p>
                <button className="btn btn-primary" onClick={reset}>Send another message</button>
              </div>
            ) : status === 'error' ? (
              <div className="contact-success">
                <AlertCircle size={48} color="#dc2626" />
                <h3>Oops, something went wrong</h3>
                <p>Please try again or contact us directly at trippywebhouse@gmail.com</p>
                <button className="btn btn-primary" onClick={reset}>Try again</button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-header">
                  <h2 className="contact-form-title">Send us a message</h2>
                  <p className="contact-form-sub">We'll reply via email + WhatsApp</p>
                </div>

                <div className="form-row">
                  <label>
                    <span>Full name *</span>
                    <input type="text" required value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Your name" />
                  </label>
                  <label>
                    <span>Email *</span>
                    <input type="email" required value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="you@email.com" />
                  </label>
                </div>

                <label>
                  <span>What do you need?</span>
                  <div className="service-chips">
                    {SERVICE_OPTIONS.map((s) => (
                      <button type="button" key={s}
                        className={`service-chip ${form.service === s ? 'service-chip-active' : ''}`}
                        onClick={() => update('service', s)}>
                        {s}
                      </button>
                    ))}
                  </div>
                </label>

                <label>
                  <span>Tell us about your project *</span>
                  <textarea required rows={5} value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="What are you building? Any timeline or budget in mind?" />
                </label>

                <div className="contact-submit-row">
                  <button type="submit" className="btn btn-primary contact-submit"
                    disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : <>Send message <Send size={15} /></>}
                  </button>
                  <div className="contact-notify-badges">
                    <span className="notify-badge"><Mail size={13} /> Gmail</span>
                    <span className="notify-badge notify-badge-wa"><MessageCircle size={13} /> WhatsApp</span>
                  </div>
                </div>
              </form>
            )}
          </div>

          <div className="contact-side">
            <div className="panel contact-info-card">
              {[
                { icon: Phone, label: 'Call us', val: '+91 76959 48634', href: 'tel:+917695948634' },
                { icon: Mail, label: 'Email us', val: 'trippywebhouse@gmail.com', href: 'mailto:trippywebhouse@gmail.com' },
              ].map((item) => (
                <div className="contact-info-row" key={item.label}>
                  <div className="contact-info-icon"><item.icon size={17} /></div>
                  <div>
                    <div className="contact-info-label">{item.label}</div>
                    <a href={item.href} className="contact-info-value">{item.val}</a>
                  </div>
                </div>
              ))}
              <div className="contact-info-row">
                <div className="contact-info-icon"><InstagramIcon size={17} /></div>
                <div>
                  <div className="contact-info-label">Follow us</div>
                  <a href="https://instagram.com/trippy_web.house" target="_blank" rel="noreferrer" className="contact-info-value">@trippy_web.house</a>
                </div>
              </div>
              <div className="contact-info-row">
                <div className="contact-info-icon"><MapPin size={17} /></div>
                <div>
                  <div className="contact-info-label">Based in</div>
                  <div className="contact-info-value">Tamil Nadu, India</div>
                </div>
              </div>
            </div>

            {/* WhatsApp direct card */}
            <div className="panel contact-wa-card">
              <div className="wa-icon">💬</div>
              <h3>WhatsApp us directly</h3>
              <p>Quick response guaranteed. Send us your requirements on WhatsApp.</p>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Trippy Web House! I want to discuss a project.')}`}
                target="_blank" rel="noreferrer" className="btn btn-wa">
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>

            <div className="panel contact-cta-card">
              <PeakMark size={30} />
              <h3>Prefer Instagram?</h3>
              <p>DM us your requirements and we'll set up a quick call.</p>
              <a href="https://instagram.com/trippy_web.house" target="_blank" rel="noreferrer" className="btn btn-ghost">
                Message on Instagram <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
