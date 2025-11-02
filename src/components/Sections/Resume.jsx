import { FaDownload, FaGraduationCap, FaBriefcase, FaTools } from "react-icons/fa";

export default function Resume() {
  return (
    <section className="pt-0 pb-0 min-h-[calc(100vh-8rem)] bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header with download button */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold text-center text-indigo-700 dark:text-indigo-400 mb-8">
            Resume
          </h2>
          <a
            href="/resume.pdf"
            download="Poudel_resume_025.pdf"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium transition"
          >
            <FaDownload />
            Download
          </a>
        </div>

        {/* --- Education Timeline --- */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FaGraduationCap className="text-indigo-500" /> Education
          </h3>

          <div className="relative border-l-4 border-indigo-400 pl-6 space-y-8">
            <div>
              <div className="absolute -left-[10px] top-1.5 w-4 h-4 rounded-full bg-indigo-600"></div>
              <h4 className="text-xl font-semibold">Master of Science in Computer Science</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Kentucky State University — 2024-Present
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Focus on Artificial Intelligence, Cybersecurity, Bioinformatics, and Additive Manufacturing.
              </p>
            </div>

            <div>
              <div className="absolute -left-[10px] top-[120px] w-4 h-4 rounded-full bg-indigo-600"></div>
              <h4 className="text-xl font-semibold">Bachelor's Degree in Computer Engineering</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Tribhuvan University — 2022 Graduated
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Specialized in Computational Science, AI/ML, Simulation and Modeling, Computer Security, Embedded Systems.
              </p>
            </div>
          </div>
        </div>

        {/* --- Experience Timeline --- */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FaBriefcase className="text-indigo-500" /> Experience
          </h3>

          <div className="relative border-l-4 border-indigo-400 pl-6 space-y-10">
            {/* GRA */}
            <div>
              <div className="absolute -left-[10px] top-1.5 w-4 h-4 rounded-full bg-indigo-600"></div>
              <h4 className="text-xl font-semibold">Graduate Research Assistant</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Kentucky State University, Frankfort KY 40601 — 2024–Present
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                School of Mathematics and Computer Science, University Dr, Frankfort, KY <br/>
                  • Collaborated with thesis committee to curate and preprocess network traffic, sensor telemetry, and logger data from additive manufacturing systems, enabling datasets for training threat intelligence and optimization models.<br/>
                  • Designed and deployed ML models for threat detection and 3D-printing parameters optimization, leveraging hyperparameter tuning, adversary simulations, and algorithmic approaches to minimize print time and material waste.<br/>
                  • Developed and tested secure methods for protecting 3D printing workflows, including cyberattack simulations, firmware debugging, and defensive AI strategies to ensure resilience in networked manufacturing environments.<br/>
                  • Applied expertise in G-code, M-code, and letter codes as printing parameters to optimize additive manufacturing processes using multiple statistical approaches, balancing efficiency, sustainability, and product integrity.<br/>
                <br/><br/>
                Aquaculture Research Center, 103 Athletic Dr, Frankfort, KY<br/>
                  • Engineered scalable NGS pipelines by integrating bio-informatic tools (Qiime2, Mothur) with computational and statistical approach, reducing processing runtime for terabyte-scale microbial datasets.<br/>
                  • Applied GATK-based variant calling and Monte Carlo methods to reveal rare microbial variants driving amplicon sequencing and metagenome ecosystem resilience in aquaponics systems.<br/>
                  • Conducted diversity and functional profiling against RNA-seq and DNA-seq datasets, achieving 91% accuracy in microbial abundance, diversity and variation estimates.<br/>
                  • Developed predictive microbial models with Naive Bayes and Random Forests algorithms, improving functional pathway classification accuracy.<br/>
                  • Produced reproducible, FAIR-compliant workflows with python and Linux shell scripting on HPC clusters, ensuring robust data integration and visualization.<br/>
              </p>
            </div>

            {/* DataEngineer */}
            <div>
              <div className="absolute -left-[10px] top-[180px] w-4 h-4 rounded-full bg-indigo-600"></div>
              <h4 className="text-xl font-semibold">Data Engineer</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Alpha Design and Development Inc. — 2023–2024
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                  • Built scalable ETL pipelines using PySpark, SQL, and AWS Glue, optimizing ingestion of multi-source traffic and urban time-series datasets.<br/>
                  • Engineered real-time data lakes on AWS S3 with Parquet format, ensuring high-throughput storage, retrieval, and compliance governance.<br/>
                  • Designed relational schemas in PostgreSQL and schema-flexible key-value model in MongoDB, enabling robust spatio-temporal queries for urban mobility insights.<br/>
                  • Implemented Trino query optimization and partitioning, reducing latency of large-scale transportation analytics and Ad-hoc queries for reporting.<br/>
                  • Applied ML models especially Bi-LSTM method on urban and traffic time-series raw data, improving peak congestion forecasting accuracy.<br/>
                  • Automated monitoring with Grafana, Prometheus, and custom Bash scripts, enabling proactive anomaly detection aggregating into system’s key metrics for alerting.<br/>
                  • Containerized analytics workflows using Docker and Kubernetes, supporting elastic deployment across distributed traffic management system.<br/>
              </p>
            </div>

            {/* Additional Example */}
            <div>
              <div className="absolute -left-[10px] top-[340px] w-4 h-4 rounded-full bg-indigo-600"></div>
              <h4 className="text-xl font-semibold">UX Developer</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Wiseyak Inc — 2022
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                • Designed and developed the front-end of Sajilo Doctor, a patient-doctor centered AI-enabled telehealth web application supporting live video consults, patient–doctor chat, medical report analysis, and secure health record management.<br/>
                • Built responsive interfaces in Django using Bootstrap, JavaScript, semantic HTML/CSS from Figma prototypes, improving usability and accessibility.<br/>
                • Integrated backend REST APIs (Python/Django) for real-time chat, video, and diagnostic modules; optimized data storage in PostgreSQL and MongoDB for structure and unstructured clinical data for fast, HIPAA-compliant access.<br/>
                • Collaborated on system design decisions applying caching for Auth tokens and doctor availability, load balancing across API servers, and database sharding to scale patient and transaction records with low-latency services.<br/>
                • Streamlined deployments by collaborating with DevOps engineers on Docker, Kubernetes, and CI/CD pipelines for distributed workloads. <br/>
              </p>
            </div>
          </div>
        </div>

        {/* --- Skills --- */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FaTools className="text-indigo-500" /> Technical Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
            <ul className="space-y-1 list-disc list-inside">
              <li>Python, C++, JavaScript (React, Node.js)</li>
              <li>TensorFlow, PyTorch, Scikit-learn</li>
              <li>Secure Additive Manufacturing & G-Code Optimization</li>
              <li>Database & API Integration, Cloud Systems</li>
            </ul>
            <ul className="space-y-1 list-disc list-inside">
              <li>Bio-informatics, Parallel computing and DNA Sequencing (Stata, R)</li>
              <li>AI/ML Model Design & Optimization</li>
              <li>Cybersecurity and Network Anomaly Detection</li>
              <li>Data Visualization & Scientific Communication</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
