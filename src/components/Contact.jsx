import React, { useState } from "react";

const Contact = ({ mode }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
        alert("Message sent!");

        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <section className={`min-h-screen flex items-center justify-center px-4 transition-all duration-500 ${mode === 'dark' ? 'bg-gray-600 text-white' : 'bg-white text-black'}`}>
            <div className={`max-w-5xl w-full shadow-lg rounded-2xl p-8 grid md:grid-cols-2 gap-8 transition-all duration-500 ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
                <div>
                    <h1 className={`text-3xl font-bold mb-4 ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Get in Touch</h1>
                    <p className={`text-gray-600 mb-6 ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                        Have a question, suggestion, or just want to say hello?
                        Feel free to reach out. I'm always open to discussing new ideas and opportunities.
                    </p>

                    <div className={`space-y-4 ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                        <p><strong>Email:</strong> nasarbutt20@email.com</p>
                        <p><strong>Phone:</strong> +92 340 0476825</p>
                        <p><strong>Location:</strong> Pakistan</p>
                    </div>

                    <p className={`text-gray-500 text-sm mt-6 ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                        I usually respond within 24 hours.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className={`space-y-4 ${mode === 'dark' ? 'text-white' : 'text-black'}`}>

                    <div>
                        <label className={`block mb-1 font-medium ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${mode === 'dark' ? 'placeholder-white' : 'placeholder-gray-500'}`}
                            required
                        />
                    </div>

                    <div>
                        <label className={`block mb-1 font-medium ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${mode === 'dark' ? 'placeholder-white' : 'placeholder-gray-500'}`}
                            required
                        />
                    </div>

                    <div>
                        <label className={`block mb-1 font-medium ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Message</label>
                        <textarea
                            rows="4"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message..."
                            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${mode === 'dark' ? 'placeholder-white' : 'placeholder-gray-500'}`}
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className={`w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition ${mode === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}
                    >
                        Send Message
                    </button>

                </form>
            </div>
        </section>
    );
};

export default Contact;