import { useState } from "react";
import { Button } from "../components/ui/button";
import { Phone, MapPin, Mail, ArrowRight, Check, Menu, X, Facebook } from "lucide-react";
import logo from "../assets/logo.jpeg";
import hero from "../assets/hero-kitchen.jpg";
import sink from "../assets/product-sink.jpg";
import doors from "../assets/product-doors.jpg";
import boards from "../assets/product-boards.jpg";
import tables from "../assets/product-tables.jpg";

import extra1 from "../assets/product-extra1.jpg";
import extra2 from "../assets/product-extra2.jpg";
import extra3 from "../assets/product-extra3.jpg";
import extra4 from "../assets/product-extra4.jpg";
import extra5 from "../assets/product-extra5.jpg";
import extra6 from "../assets/product-extra6.jpg";
import extra7 from "../assets/product-extra7.jpg";
import extra8 from "../assets/product-extra8.jpg";
import extra9 from "../assets/product-extra9.jpg";
import extra10 from "../assets/product-extra10.jpg";

const products = [
  { title: "Dining Tables", img: sink, desc: "Elegant tables tailored to your space." },
  { title: "Office Desks", img: doors, desc: "Hand-crafted hardwood and labbing desks." },
  { title: "Wardrobes", img: boards, desc: "Durable hardwood wardrobes for storage." },
  { title: "Kitchen Boards", img: extra6, desc: "Premium melamine and hardwood boards finished for kitchens." },

  { title: "Project Showcase", img: extra1, desc: "Inspirational kitchen projects and completed installations." },
  { title: "Cabinet Door Samples", img: extra2, desc: "A wide selection of door designs and finish options." },
  { title: "Premium Door Panels", img: extra3, desc: "Stylish door fronts in modern and classic styles." },
  { title: "Edging Tape", img: extra4, desc: "Durable edge banding for seamless kitchen finishes." },
  { title: "Cabinet Hardware", img: extra5, desc: "Quality handles, pulls, and fittings for every cabinet." },
  { title: "Aluminum Profiles", img: extra7, desc: "Strong aluminum sections for frames and partitions." },
  { title: "Silicone Sealant", img: extra8, desc: "Trusted sealant for kitchens, bathrooms, and joinery." },
  { title: "Fast Delivery", img: extra9, desc: "Secure packing and logistics for on-time delivery." },
  { title: "Installation Team", img: extra10, desc: "Experienced crews ready to install your project." },
];

const Index = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = formData;
    const whatsappMessage = `Hi, I'd like to request a quote.\n\nName: ${name}\nPhone: ${phone}\nWhat I need: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.location.href = `https://wa.me/265882553923?text=${encodedMessage}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3 font-display text-lg font-bold text-primary tracking-tight">
            <img src={logo} alt="By Grace logo" className="h-10 w-auto rounded-md border border-border bg-background p-1" />
            <span>By Grace</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#products" className="hover:text-accent transition-colors">Products</a>
            <a href="#why" className="hover:text-accent transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </nav>
          <a href="tel:+265882553923" className="hidden md:inline-flex">
            <Button variant="default" className="bg-primary hover:bg-primary/90 rounded-full">
              <Phone className="w-4 h-4 mr-2" /> 0882 553 923
            </Button>
          </a>
          <button className="md:hidden text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="container py-4 flex flex-col gap-4 text-sm font-medium">
              <a href="#about" onClick={() => setOpen(false)}>About</a>
              <a href="#products" onClick={() => setOpen(false)}>Products</a>
              <a href="#why" onClick={() => setOpen(false)}>Why Us</a>
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
              <a href="tel:+265882553923" className="text-accent">Call: 0882 553 923</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <img src={hero} alt="Modern luxury kitchen" width={1600} height={1024} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
        <div className="container relative z-10 py-24">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur text-primary-foreground text-xs uppercase tracking-[0.2em] mb-6 border border-primary-foreground/20">
              Established 2019 · Lilongwe, Malawi
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[0.95] text-balance mb-8">
              Crafted kitchens. <span className="italic text-accent">Quality</span> that endures.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 max-w-xl mb-10 leading-relaxed">
              By Grace Kitchen & Accessories supplies premium kitchen units, doors, sinks, boards, tables and office partitioning across Malawi.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#products">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-12">
                  Explore Products <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-12 bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Get a Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent text-xs uppercase tracking-[0.25em] mb-4">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
              Building Malawi's finest kitchens since 2019.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              By Grace Kitchen & Accessories was founded in 2019 with a simple promise: deliver exceptional kitchen unit accessories and office partitioning solutions across Lilongwe and beyond.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Under the leadership of CEO <span className="font-semibold text-primary">Misheck Langiton</span>, we've grown into a trusted name for homeowners, contractors and businesses who refuse to compromise on quality.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="font-display text-3xl font-bold text-accent">6+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Years</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-accent">500+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Projects</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-accent">100%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Quality</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={tables} alt="Elegant dining setup" loading="lazy" width={800} height={800} className="rounded-sm shadow-[var(--shadow-elegant)]" />
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-sm max-w-xs shadow-[var(--shadow-card)] hidden md:block">
              <p className="font-display italic text-lg leading-snug">"Quality craftsmanship, delivered with grace."</p>
              <p className="text-xs uppercase tracking-wider mt-3 opacity-80">— Misheck Langiton, CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-24 md:py-32 bg-secondary/40">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-accent text-xs uppercase tracking-[0.25em] mb-4">What We Offer</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary text-balance max-w-2xl">
                A complete range of <span className="italic">kitchen & office</span> solutions.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              From bespoke cabinetry to office partitioning — every piece is selected and finished for lasting performance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.title} className="group bg-card rounded-sm overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={p.img} alt={p.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-primary mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="text-accent text-xs uppercase tracking-[0.25em] mb-4">Why By Grace</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-balance">
              Grounded in quality. Built on trust.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Premium Materials", d: "We source only durable, finely-finished materials for every product we deliver." },
              { t: "Expert Craftsmanship", d: "Years of hands-on experience fitting kitchens and partitioning offices across Lilongwe." },
              { t: "End-to-End Service", d: "From consultation and design to installation — we handle the full journey." },
            ].map((f) => (
              <div key={f.t} className="border-t border-primary-foreground/20 pt-8">
                <Check className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-display text-2xl font-semibold mb-3">{f.t}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-accent text-xs uppercase tracking-[0.25em] mb-4">Get In Touch</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
                Let's design your dream kitchen.
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Visit our showroom or reach out — we'd love to discuss your project.
              </p>
              <div className="space-y-6">
                <a href="tel:+265882553923" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Call us</div>
                    <div className="font-display text-xl text-primary">0882 553 923</div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Visit us</div>
                    <div className="font-display text-xl text-primary">Area 3, behind NBS Bank</div>
                    <div className="text-muted-foreground">Lilongwe, Malawi</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Leadership</div>
                    <div className="font-display text-xl text-primary">Misheck Langiton</div>
                    <div className="text-muted-foreground">Founder & CEO</div>
                  </div>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleFormSubmit}
              className="bg-card border border-border p-8 md:p-10 rounded-sm shadow-[var(--shadow-card)] space-y-5"
            >
              <h3 className="font-display text-2xl font-semibold text-primary">Request a quote</h3>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
                <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="mt-2 w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Phone</label>
                <input required type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="mt-2 w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">What do you need?</label>
                <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="mt-2 w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors resize-none" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 rounded-full h-12">
                Send Enquiry <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground/80 py-10 border-t border-primary-foreground/10">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="font-display text-primary-foreground">By Grace Kitchen & Accessories</div>
          <div>© {new Date().getFullYear()} All rights reserved · Lilongwe, Malawi</div>
          <div className="flex gap-4">
            <a href="https://wa.me/265882553923" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="WhatsApp">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.418 0-2.769.356-3.95 1.028l-.285.155-.294-.047c-1.01-.161-1.966-.425-2.85-.786l.56.892c.243.384.645 1.291.91 2.769.193 1.041.477 2.627.703 3.54 1.114.738 2.367 1.141 3.582 1.141 1.487 0 2.854-.505 3.954-1.514.077 1.013.077 1.9-.096 2.695-.12.547-.272 1.054-.425 1.499-1.135.827-2.505 1.318-3.989 1.318-4.814 0-8.727-3.895-8.727-8.677 0-4.784 3.913-8.677 8.727-8.677 4.814 0 8.727 3.893 8.727 8.677 0 1.849-.578 3.565-1.565 4.990" fill="#25D366"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Facebook">
              <Facebook className="w-10 h-10" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
