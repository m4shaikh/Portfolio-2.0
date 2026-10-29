import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

// Fix Leaflet's default marker icon issue in Vite / TypeScript builds
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const POSITION: [number, number] = [23.023484, 72.62773];

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const fullName = (formData.get('name') as string)?.trim() || '';
    const email = (formData.get('email') as string)?.trim() || '';
    const subject = (formData.get('subject') as string)?.trim() || '';
    const message = (formData.get('message') as string)?.trim() || '';

    if (!EMAIL_REGEX.test(email)) {
      toast.error('Please enter a valid email address', {
        position: 'bottom-center',
        autoClose: 3500,
        theme: 'dark',
      });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error('Email service is not configured. Check your .env file.', {
        position: 'bottom-center',
        autoClose: 4000,
        theme: 'dark',
      });
      console.error('Missing VITE_EMAIL_* environment variables');
      return;
    }

    setLoading(true);

    const rawFirst = fullName.split(' ')[0] || fullName;
    const firstName =
      rawFirst.charAt(0).toUpperCase() + rawFirst.slice(1).toLowerCase();

    const templateParams = {
      firstname: firstName,
      name: fullName,
      subject,
      message,
      email,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast.success('Message successfully sent!', {
        position: 'bottom-center',
        autoClose: 3500,
        theme: 'dark',
      });
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send the message, please try again.', {
        position: 'bottom-center',
        autoClose: 3500,
        theme: 'dark',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen lg:h-screen w-full lg:overflow-hidden bg-[#1a1a1a] text-white grid grid-cols-1 lg:grid-cols-2">
      
      {/* LEFT HALF: Decorative Tags & Contact Form (Fitted to 100vh) */}
      <div className="flex flex-col justify-center lg:h-screen px-6 py-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-xl mx-auto">
          <span className="font-tag text-neutral-500 text-sm select-none block">
            &lt;section&gt;
          </span>
          <div className="pl-3 my-0.5">
            <span className="font-tag text-neutral-500 text-sm select-none block">
              &lt;h1&gt;
            </span>
            <h1 className="font-label text-4xl sm:text-5xl font-bold text-primary-500 tracking-wide my-0.5">
              Contact Me
            </h1>
            <span className="font-tag text-neutral-500 text-sm select-none block">
              &lt;/h1&gt;
            </span>
          </div>
          <span className="font-tag text-neutral-500 text-sm select-none block">
            &lt;/section&gt;
          </span>

          <p className="font-rg text-neutral-300 mt-2 mb-5 text-sm sm:text-base leading-relaxed">
            I’m open to new opportunities and collaborations! Feel free to
            send a message using the form below or reach out directly.
          </p>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={sendEmail} className="space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full bg-[#141414] border border-neutral-800 focus:border-primary-500 rounded-sm px-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full bg-[#141414] border border-neutral-800 focus:border-primary-500 rounded-sm px-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
              />
            </div>

            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full bg-[#141414] border border-neutral-800 focus:border-primary-500 rounded-sm px-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
              />
            </div>

            <div>
              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                required
                className="w-full bg-[#141414] border border-neutral-800 focus:border-primary-500 rounded-sm px-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-colors resize-none"
              />
            </div>

            <div className="flex justify-end pt-1">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-500/90 disabled:opacity-60 text-black font-semibold px-6 py-2.5 rounded-sm text-sm tracking-wider uppercase transition-all cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* RIGHT HALF: Full-Bleed Map with Top Contact & Bottom Location Overlay */}
      <div className="relative w-full h-[380px] lg:h-screen bg-[#1e1e1e] border-t lg:border-t-0 lg:border-l border-neutral-800">
        
        {/* TOP OVERLAY: Phone Number & Email Address */}
        <div className="absolute top-4 left-4 right-4 z-[10] grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
          <a
            href="tel:+919173887484"
            className="flex items-center gap-3 p-3 rounded-sm bg-[#141414]/90 backdrop-blur-md border border-neutral-800 hover:border-primary-500/60 shadow-lg transition-colors group"
          >
            <div className="p-2 rounded-sm bg-primary-500/10 text-primary-500 group-hover:bg-primary-500 group-hover:text-black transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[11px] text-neutral-400">
                Phone
              </span>
              <span className="text-sm font-medium text-neutral-200 group-hover:text-primary-500 transition-colors">
                +91 91738 87484
              </span>
            </div>
          </a>

          <a
            href="mailto:m4shaikh@outlook.com"
            className="flex items-center gap-3 p-3 rounded-sm bg-[#141414]/90 backdrop-blur-md border border-neutral-800 hover:border-primary-500/60 shadow-lg transition-colors group"
          >
            <div className="p-2 rounded-sm bg-primary-500/10 text-primary-500 group-hover:bg-primary-500 group-hover:text-black transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="block text-[11px] text-neutral-400">
                Email
              </span>
              <span className="block text-sm font-medium text-neutral-200 group-hover:text-primary-500 transition-colors truncate">
                m4shaikh@outlook.com
              </span>
            </div>
          </a>
        </div>

        {/* BOTTOM OVERLAY: Name & Location Badge */}
        <div className="absolute bottom-6 left-4 z-[1000] bg-[#141414]/90 backdrop-blur-md border border-neutral-800 rounded-sm p-3.5 shadow-lg max-w-xs">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-white text-sm leading-tight">
                Moin Shaikh
              </h3>
              <p className="text-xs text-neutral-300 mt-0.5">
                Ahmedabad, Gujarat, India
              </p>
            </div>
          </div>
        </div>

        <MapContainer
          center={POSITION}
          zoom={13}
          zoomControl={false}
          scrollWheelZoom={false}
          className="w-full h-full z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={POSITION}>
            <Popup>
              Shaikh Moinuddin lives here, come over for a cup of coffee ☕
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact; 