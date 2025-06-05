import useScrollAnimation from '../../hooks/useScrollAnimation';

function Contact() {
  useScrollAnimation();
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8 slide-in-right reveal-on-scroll">Contact Us</h2>
      <div className="max-w-xl mx-auto px-4">
        <form className="bg-white p-6 rounded-lg shadow-lg slide-in-right reveal-on-scroll">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-2 px-4 rounded hover:bg-sky-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact; 