import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import vectorImg from "../../assets/about-me.jpg"; // your vector or portrait image

export default function About() {
  return (
    <section
      id="about"
      className=" flex flex-col lg:flex-row min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300"
    >
      {/* LEFT SIDE: Full-height background image covering 30% */}
      <div className="relative hidden lg:block lg:w-[30%] h-screen overflow-hidden">
        <img
          src={vectorImg}
          alt="Kshitij Poudel"
          className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-90"
        />
      </div>

      {/* RIGHT SIDE: About content */}
      <div className="lg:w-[70%] w-full flex flex-col justify-center px-8 md:px-16 lg:px-20 pt-28 pb-16">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-indigo-700 dark:text-indigo-400">
            About Me
          </h1>

          <p className="text-lg leading-relaxed">
            Hello! I’m{" "}
            <span className="font-semibold">Kshitij Poudel</span> — a Computer Science
            student passionate about Artificial Intelligence, Secure Additive Manufacturing,
            and Sustainable Algorithmic Design. I aim to build bridges between traditional
            engineering and modern AI to create ethical, data-driven, and efficient solutions.
          </p>

          <p className="text-lg leading-relaxed">
            My recent work focuses on anomaly detection in 3D printing systems using Bi-LSTM
            and DBSCAN, as well as optimizing G-code for performance and sustainability.
            I’m constantly exploring how AI can make engineering processes smarter and safer.
          </p>

          {/* Contact & Links */}
          <div className="pt-8">
            <h2 className="text-4xl font-bold text-indigo-700 dark:text-indigo-400 mb-8">Connect with Me</h2>
            <div className="flex gap-8 text-3xl">
              <a
                href="https://github.com/poudel-kshitij"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/poudel-kshitij"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:kshitij.poudel@kysu.edu"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
