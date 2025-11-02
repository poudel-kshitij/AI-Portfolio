export default function Contact() {
  const handleSchedule = () => {
    window.open(
      "https://outlook.office.com/calendar/view/week", // replace with your actual link
      "_blank"
    );
  };

  return (
    <section className="pt-0 pb-0 min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-6xl w-full space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h2 className="text-4xl font-bold text-indigo-700 dark:text-indigo-400 text-center md:text-left">
            Contact
          </h2>
          <button
            onClick={handleSchedule}
            className="mt-4 md:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition text-sm md:text-base shadow"
          >
            📅 Schedule a Meeting
          </button>
        </div>

        <p className="text-center text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          I’m always open to collaborations, research discussions, or new
          opportunities.
        </p>

        {/* Equal Box Layout */}
        <div className="grid md:grid-cols-2 gap-10 mt-6 justify-center items-center">
          {/* Left Box — Map */}
          <div className="flex justify-center">
            <div className="w-full md:w-[90%] bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <iframe
                title="Frankfort Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.4989313923654!2d-84.87902868468453!3d38.20090537967847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88426b35f6d2f9a5%3A0x1cb5bbd4cb7b651f!2sFrankfort%2C%20KY!5e0!3m2!1sen!2sus!4v1702056789012"
                width="100%"
                height="340"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="filter dark:brightness-75 rounded-xl"
              ></iframe>
            </div>
          </div>

          {/* Right Box — Form */}
          <div className="flex justify-center">
            <div className="w-full md:w-[90%] bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
              <form
                action="https://formspree.io/f/mwkzwdzp"
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Write your message..."
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium shadow transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
