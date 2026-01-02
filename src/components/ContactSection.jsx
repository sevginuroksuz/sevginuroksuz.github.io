import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Send } from "lucide-react";
import { FaMedium } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { showToast } from "./ui/Toast";
import { sendContactEmail } from "../lib/email";
export const ContactSection = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await sendContactEmail(form);
            setForm({ name: "", email: "", message: "" });
            showToast("Your message has been sent!", { type: "success" });
        } catch (err) {
            
            console.error("EmailJS error:", err);
            showToast("Failed to send message. Please try again.", { type: "error" });
        } finally {
            setLoading(false);
        }
        };

    return (
        <section 
        id="contact"
        className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.

            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4 ">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/> 
                            </div>
                            <div >
                                <h4 className="font-medium"> Email</h4>
                                <a href="mailto:sevginuroksuz@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    sevginuroksuz@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 ">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary"/> 
                            </div>
                            <div >
                                <h4 className="font-medium"> Phone</h4>
                                <a href="tel:+90508850392" className="text-muted-foreground hover:text-primary transition-colors">
                                    +90 507 885 03 92
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 ">
                            <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary"/> 
                            </div>
                            <div >
                                <h4 className="font-medium"> Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    İstanbul, Türkiye
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 ">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/sevgi-nur-oksuz-8b91a5219" target="_blank">
                                <Linkedin/>

                            </a>
                            <a href="https://x.com/sevginuroksz?t=g6kcbQa4nXXnbpA4kZqWHQ&s=09" target="_blank">
                                <Twitter/>

                            </a>
                            <a href="https://medium.com/@sevginuroksuz" target="_blank">
                                <FaMedium size={24}/>
                            </a>
                            <a href="https://www.youtube.com/@sevgisjourney" target="_blank">
                                <Youtube/>

                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                                        <form className="space-y-6" onSubmit={handleSubmit}>
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                                    Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                                    placeholder="Sevgi Nur Öksüz..."
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                                    Your Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                                    placeholder="ahmet@gmail.com"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                                    Your Message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    required
                                                    value={form.message}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                                    placeholder="Hello, I'd like to talk about... "
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className={cn(
                                                    "cosmic button w-full flex items-center justify-center gap-2"
                                                )}
                                                disabled={loading}
                                            >
                                                {loading ? "Sending..." : "Send Message"}
                                                <Send size={16} />
                                            </button>
                                        </form>
                </div>

            </div>
            </div>
        </section>
        
    );
}