// src/data/servicesData.js
export const categories = [
  { id: "ai-ml", label: "AI / ML" },
  { id: "web-dev", label: "Web and App Development" },
  { id: "frontend", label: "Frontend" },
  { id: "bioinfo", label: "Bioinformatics" },
  { id: "cad", label: "CAD & Modeling" },
  { id: "iot", label: "IoT & Sensors" },
  { id: "data", label: "Data Analysis" },
  { id: "cloud", label: "Cloud / DevOps" },
];

export const projects = [
  {
    id: "nlp-twitter",
    title: "Sentiment Analysis using NLP for Tweets",
    period: "Feb 2024 – Present",
    role: "Group Project",
    category: ["ai-ml", "data"],
    summary:
      "1M+ tweets via Twitter API v2; zero-shot BART/RoBERTa; multilingual preprocessing; GPU-accelerated inference; structural break visualization.",
    details: [
      "Ingested >1M tweets using Tweepy (Twitter API v2) for longitudinal analysis.",
      "Zero-Shot classification with HuggingFace (BART, RoBERTa) to avoid label scarcity.",
      "SpaCy/NLTK pipeline: tokenization, lemmatization, stopword handling, multilingual.",
      "Matplotlib/Seaborn/Plotly dashboards for decade-long sentiment dynamics.",
      "PyTorch + CUDA reduced inference latency by ~35% vs CPU baselines."
    ],
    tech: ["Python", "HuggingFace", "PyTorch", "Tweepy", "Plotly", "SpaCy"],
    image: "/assets/projects/twitter-nlp.png",
    links: [{ label: "Repo", href: "https://github.com/your/repo" }],
  },
  {
    id: "precision-ag",
    title: "Climate-Smart Precision Agriculture ML Tool",
    period: "Oct 2022 – Aug 2023",
    role: "Research Assistant",
    category: ["ai-ml", "iot", "data"],
    summary:
      "RF/XGBoost fertility zone prediction; Sentinel-2 via GEE; sensor fusion with drones & soil sensors; policy dashboards.",
    details: [
      "Random Forest / XGBoost classifiers for fertility zone prediction in Nepal.",
      "Google Earth Engine (Sentinel-2) + GDAL/QGIS pre-processing.",
      "Sensor fusion of UAV imagery, soil sensors, and rainfall into TensorFlow/Keras models.",
      "Econometric benchmarking in R (plm, stargazer) for adoption constraints.",
      "Dash/Plotly policy dashboards to visualize forecasts."
    ],
    tech: ["XGBoost", "GEE", "GDAL", "QGIS", "TensorFlow", "R"],
    image: "/assets/projects/precision-ag.png",
  },
  {
    id: "software-automation",
    title: "Software Automation: Time & Space Complexity",
    period: "Jan 2023 – Apr 2023",
    role: "Research Presentation",
    category: ["cloud", "data"],
    summary:
      "CI/CD on Jenkins & GitHub Actions; MQTT IoT image streams; PostgreSQL + Redis; JMeter benchmarking.",
    details: [
      "End-to-end CI/CD for traffic sign workflows on Jenkins & GitHub Actions.",
      "PostgreSQL + Redis synchronization of new signs in real time.",
      "MQTT image streaming from IoT sensors to cloud pipelines (+15% real-time accuracy).",
      "Apache JMeter latency/throughput/memory profiling across deployments."
    ],
    tech: ["Jenkins", "GitHub Actions", "PostgreSQL", "Redis", "MQTT", "JMeter"],
    image: "/assets/projects/automation.png",
  },
  {
    id: "traffic-sign-devops",
    title: "Traffic Sign Classification with DevOps",
    period: "Mar 2021 – Apr 2022",
    role: "Undergrad Major Project",
    category: ["ai-ml", "cloud"],
    summary:
      "CNN (TensorFlow) 91% accuracy; Docker/K8s deployment; GitLab CI/CD; SDLC with UML/DFD/ERD.",
    details: [
      "TensorFlow CNN achieved ~91% accuracy, outperforming SVM baselines.",
      "Containerized with Docker; orchestrated with Kubernetes for scalable tests.",
      "Automated retraining via GitLab CI/CD; ~70% less manual ops.",
      "SDLC artefacts: UML, DFD, ER diagrams for traceability.",
    ],
    tech: ["TensorFlow", "Docker", "Kubernetes", "GitLab CI/CD", "UML"],
    image: "/assets/projects/traffic-cnn.png",
  },
  {
    id: "student-service",
    title: "Student Management System",
    period: "Aug 2020 – Jan 2021",
    role: "Undergrad Minor Project",
    category: ["web-dev", "frontend", "data"],
    summary:
      "Flask + SQLite; Flask-Login + bcrypt; analytics dashboards; clean MVC architecture.",
    details: [
      "Python Flask app with SQLite (lightweight relational design).",
      "Secure auth: Flask-Login, bcrypt hashing, session mgmt.",
      "Admin analytics using Pandas + Matplotlib.",
      "MVC separation for maintainability; Visio + LaTeX documentation."
    ],
    tech: ["Flask", "SQLite", "Pandas", "Matplotlib", "MVC"],
    image: "/assets/projects/student-system.png",
  },
  {
    id: "parkmate",
    title: "Park-Mate: Smart Parking (C++ DS + Dijkstra)",
    period: "2025",
    role: "Lead Developer",
    category: ["ai-ml", "data"],
    summary:
      "C++ queues/priority-queues with Dijkstra shortest paths; interactive CLI/UI; slot graphs.",
    details: [
      "Multi-level parking simulation using queues, stacks, and priority queues.",
      "Shortest-path routing from gate to slot with Dijkstra (adjacency lists).",
      "Vehicle ID tracking, fee calculation, and real-time status.",
      "Modular headers: Vehicle, ParkingZone, ParkingSystem, Graph."
    ],
    tech: ["C++", "Graphs", "Dijkstra", "Data Structures"],
    image: "/assets/projects/parkmate.png",
  },
  {
    id: "kerkar-lens",
    title: "Kerkar — Lens Studio Filter (JS)",
    period: "2024",
    role: "Creator",
    category: ["frontend"],
    summary:
      "Custom Snapchat Lens built in Lens Studio using JavaScript patches and shaders.",
    details: [
      "Lens Studio scene graph with material/shader nodes.",
      "JS interactions and patch editor for effect logic.",
      "Optimized textures and draw calls for mobile performance."
    ],
    tech: ["Lens Studio", "JavaScript", "Shaders"],
    image: "/assets/projects/kerkar.png",
  },
  {
    id: "bioinfo-metagenomics",
    title: "DNA Sequencing & Metagenomics Analysis (Aquaponics Microbiome Study)",
    period: "Jan 2024 – Apr 2025",
    role: "Lead Analyst",
    category: ["bioinfo"],
    summary:
      "QIIME2-based 16S rRNA pipeline assessing microbial diversity in aquaponic bell pepper rhizospheres under different sequencing quality thresholds.",
    details: [
      "Developed reproducible QIIME2 workflow from demux → DADA2 → taxonomy → diversity analysis.",
      "Benchmarked quality thresholds (Q≥30, Q≥20, Q≥5) and demonstrated their effect on alpha/beta diversity.",
      "Trained Naïve Bayes classifiers on SILVA 138.2 and Greengenes 13_9 at 99% identity, comparing accuracy and runtime.",
      "Analyzed Shannon diversity and Unweighted UniFrac metrics across growth stages and quality cut-offs.",
      "Identified taxonomic shifts and trade-offs between accuracy, diversity recovery, and computational efficiency."
    ],
    tech: ["QIIME2", "Python", "SILVA", "Greengenes", "Matplotlib", "Seaborn"],
    image: "/assets/projects/metagenomics.png",
  },
  {
    id: "bioinfo-t2t",
    title: "Telomere-to-Telomere (T2T) Genome Assembly & Annotation",
    period: "June 2025",
    role: "Workshop Trainee & Contributor",
    category: ["bioinfo"],
    summary:
      "Constructed fully phased genome assemblies from ONT, PacBio, and Hi-C data using Verkko, hifiasm, and Bandage under RCN genome assembly workshop.",
    details: [
      "Ran Verkko and hifiasm assemblers on long-read data for haplotype-resolved T2T assemblies.",
      "Performed manual graph inspection using Bandage and validated edits with Hi-C coverage and k-mer evidence.",
      "Applied QC via Merqury (k-mer spectrum analysis) and IGV (read alignment visual checks).",
      "Extracted mitochondrial/rDNA contigs and organized assembly for release-quality submission.",
      "Learned key decision points between automated and manual genome curation steps."
    ],
    tech: ["Verkko", "hifiasm", "Bandage", "Merqury", "IGV", "ONT", "HiFi"],
    image: "/assets/projects/t2t-assembly.png",
  },
  {
    id: "cad-modeling",
    title: "3D CAD & Parametric Modeling",
    period: "Ongoing",
    role: "Designer",
    category: ["cad"],
    summary:
      "Parametric parts & assemblies; 3D print-ready STL pipelines; tolerance & fit selection.",
    details: [
      "Sketch constraints, parametric features, assemblies with mates.",
      "Export pipelines for STL/3MF; slicer tuning (layer height, infill, supports).",
      "Tolerance selection for snap-fit/press-fit parts."
    ],
    tech: ["Fusion 360 / SolidWorks", "STL/3MF", "3D Printing"],
    image: "/assets/projects/cad.png",
  },
  {
    id: "iot-sensors",
    title: "IoT & Sensors",
    period: "Ongoing",
    role: "Engineer",
    category: ["iot"],
    summary:
      "MQTT/HTTP sensor streams; ESP32/Arduino; soil moisture + temp/humidity; dashboards.",
    details: [
      "ESP32/Arduino sensor firmware; OTA updates.",
      "MQTT broker integration, retained topics, QoS.",
      "Grafana dashboards; Python ingestion to SQLite/Postgres."
    ],
    tech: ["ESP32", "MQTT", "Grafana", "Python"],
    image: "/assets/projects/iot.png",
  },
  {
    id: "cloud-devops",
    title: "Cloud / CI-CD",
    period: "Ongoing",
    role: "DevOps",
    category: ["cloud"],
    summary:
      "Docker images, K8s manifests, GH Actions pipelines, secrets, caching, rollbacks.",
    details: [
      "Multi-stage Docker builds; image slimming.",
      "K8s manifests & Helm; blue-green rollouts.",
      "GitHub Actions with cache, matrix builds, and secret management."
    ],
    tech: ["Docker", "Kubernetes", "GitHub Actions", "Helm"],
    image: "/assets/projects/cloud.png",
  },
];
