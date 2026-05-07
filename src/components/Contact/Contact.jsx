import { useState } from 'react';
import { MessageCircle, Mail, MapPin, CheckCircle } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import styles from './Contact.module.css';

const cargoOptions = [
  'General Cargo',
  'Industrial Machinery',
  'FMCG',
  'Auto Parts',
  'Construction Materials',
  'Hazardous Goods',
  'Oversized',
  'Other',
];

const WHATSAPP_NUMBER = '923239255590';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    origin: '',
    destination: '',
    cargoType: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const leftRef = useReveal();
  const rightRef = useReveal({ threshold: 0.1 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.left} reveal`} ref={leftRef}>
            <span className="section-eyebrow">Get in Touch</span>
            <h2 className={styles.heading}>
              Let's Move Your Cargo — Safely &amp; Efficiently
            </h2>
            <p className={styles.response}>
              Fast response guaranteed. We typically reply within 2 hours.
            </p>

            <div className={styles.contacts}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I%20need%20a%20freight%20quote`}
                className={styles.contactRow}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={`${styles.contactIcon} ${styles.green}`}>
                  <MessageCircle size={18} />
                </div>
                <div>
                  <div className={styles.contactLabel}>WhatsApp</div>
                  <div className={styles.contactValue}>+92 323 9255590</div>
                </div>
              </a>
              <div className={styles.contactRow}>
                <div className={styles.contactIcon}>
                  <Mail size={18} />
                </div>
                <div>
                  <div className={styles.contactLabel}>Email</div>
                  <div className={styles.contactValue}>inquiry@1stlinklogistics.com</div>
                </div>
              </div>
              <div className={styles.contactRow}>
                <div className={styles.contactIcon}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div className={styles.contactLabel}>Office</div>
                  <div className={styles.contactValue}>Karachi, Pakistan</div>
                </div>
              </div>
            </div>

            <div className={styles.ctaLine}>
              Request a Quote Today — Fast Response Guaranteed
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I%20need%20a%20freight%20quote`}
              className={styles.whatsappBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

          <div className={`${styles.right} reveal`} ref={rightRef}>
            <div className={styles.formCard}>
              {submitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>
                    <CheckCircle size={36} />
                  </div>
                  <h3 className={styles.successTitle}>Quote Request Sent!</h3>
                  <p className={styles.successBody}>
                    Thank you for reaching out. Our team will contact you within 2 hours
                    with a tailored freight solution.
                  </p>
                  <button
                    className={styles.resetBtn}
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', origin: '', destination: '', cargoType: '', notes: '' });
                    }}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h3 className={styles.formTitle}>Request a Freight Quote</h3>

                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label className={styles.label}>Full Name *</label>
                      <input
                        className={styles.input}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Email Address *</label>
                      <input
                        className={styles.input}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Phone / WhatsApp *</label>
                    <input
                      className={styles.input}
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 XX XXX XXXX"
                      required
                    />
                  </div>

                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label className={styles.label}>Origin Port *</label>
                      <input
                        className={styles.input}
                        type="text"
                        name="origin"
                        value={formData.origin}
                        onChange={handleChange}
                        placeholder="e.g. Jebel Ali, Dubai"
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Destination Port *</label>
                      <input
                        className={styles.input}
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="e.g. Umm Qasr, Iraq"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Cargo Type *</label>
                    <select
                      className={styles.input}
                      name="cargoType"
                      value={formData.cargoType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select cargo type</option>
                      {cargoOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Additional Notes</label>
                    <textarea
                      className={`${styles.input} ${styles.textarea}`}
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Special requirements, dimensions, timeline, etc."
                      rows={3}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Send Quote Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
