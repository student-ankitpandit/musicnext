import { useState, ChangeEvent, FormEvent } from 'react';

type FormData = {
    name: string;
    email: string;
    message: string;
};

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    };

    return (
        <div className="max-w-3xl mx-auto my-12 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-6">
                If you have any questions just feel free to reach ask.
            </p>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <label htmlFor="name" className="text-gray-800 font-medium">Full Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-md text-gray-800"
                    required
                />

                <label htmlFor="email" className="text-gray-800 font-medium">Email Address:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-md text-gray-800"
                    required
                />

                <label htmlFor="message" className="text-gray-800 font-medium">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-md text-gray-800 resize-y"
                    required
                ></textarea>

                <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
