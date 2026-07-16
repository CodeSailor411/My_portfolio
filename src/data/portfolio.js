export const profile = {
  name: "Elyes Thabet",
  role: "Biomedical Engineering Student | Biosignal Processing & Wearable AI",
  location: "Tunis, Tunisia",
  email: "thabetelyes@gmail.com",
  github: "https://github.com/CodeSailor411",
  linkedin: "https://www.linkedin.com/in/elyes-thabet-alchemist/",
  portfolio: "https://elyes-thabet.netlify.app/",
};

export const proofPoints = [
  {
    value: "64.3%",
    label: "Mean K-fold accuracy",
    detail: "Cervical-PPG silent-speech research",
  },
  {
    value: "140+",
    label: "Research papers reviewed",
    detail: "Electrochemical biosensor translation",
  },
  {
    value: "3rd / 40",
    label: "Engineering-cycle rank",
    detail: "ISTMT, University of Tunis El Manar",
  },
];

export const projects = [
  {
    id: "silent-speech",
    eyebrow: "Featured research | 2026",
    title: "Voice Assistance via Cervical PPG",
    summary:
      "A neck-worn, non-invasive interface that decodes articulation intent and restores recognised commands as speech.",
    contribution:
      "Built the end-to-end path from MAX30102 acquisition and signal processing to a dual-input CNN, Python inference server, and Flutter text-to-speech application.",
    tags: ["PPG", "ESP32", "Python", "CWT", "CNN", "Flutter"],
    metrics: [
      { value: "100 Hz", label: "red / IR sampling" },
      { value: "64.3%", label: "mean K-fold accuracy" },
      { value: "60.3%", label: "macro-F1" },
    ],
    visual: "signal",
    featured: true,
  },
  {
    id: "fall-detection",
    eyebrow: "Embedded system | 2024",
    title: "Elderly Fall Detection System",
    summary:
      "A real-time movement-classification system designed to identify falls and relay alerts to a mobile dashboard.",
    contribution:
      "Implemented interrupt-driven IMU acquisition, multi-axis sensor fusion, digital filtering, and ESP32-to-Flutter alert delivery.",
    tags: ["STM32F407", "ESP32", "IMU", "Embedded C", "Flutter"],
    visual: "motion",
  },
  {
    id: "assistive-gripper",
    eyebrow: "Assistive engineering | 2024",
    title: "3D-Printed Robotic Assistive Gripper",
    summary:
      "A low-cost assistive gripper developed through three physical iterations with grip-force and ergonomic feedback.",
    contribution:
      "Designed PLA/TPU parts in Fusion 360 and implemented STM32 PWM servo control for repeatable actuation.",
    tags: ["Fusion 360", "STM32", "PWM", "FDM / SLA", "Servo Control"],
    visual: "gripper",
  },
  {
    id: "intersign",
    eyebrow: "Accessibility concept | 2024",
    title: "InterSign",
    summary:
      "A real-time 3D sign-language avatar concept designed to make spoken communication more accessible to the deaf community.",
    contribution:
      "Explored multimodal AI and avatar-driven interaction as a bridge between spoken language and visual signing.",
    tags: ["Multimodal AI", "3D Avatar", "Accessibility"],
    visual: "access",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/CodeSailor411/InterSign-2",
        type: "github",
      },
      {
        label: "Live concept",
        url: "https://intersign.netlify.app/",
        type: "external",
      },
    ],
  },
];

export const experience = [
  {
    period: "Jun. 22 - Jul. 31, 2026",
    role: "Remote Research Intern",
    organisation: "Queen's University Belfast",
    location: "Wellcome-Wolfson Institute for Experimental Medicine | Remote",
    current: true,
    highlights: [
      "Conducting evidence synthesis on GREM1 genetic variants, dysregulated expression, and associated phenotypes in human cancer.",
      "Completing journal clubs, research-paper analysis, scientific-writing, and data-analysis training in Dr Derek Brazil's group.",
    ],
  },
  {
    period: "Jan. - May 2026",
    role: "End-of-Year Research Project",
    organisation: "ISTMT",
    location: "Tunis, Tunisia | Supervised by Prof. Fatouma Boukadida",
    highlights: [
      "Developed a cervical-PPG silent-speech pipeline using MAX30102, ESP32, filtering, segmentation, CWT representations, and a dual-input CNN.",
      "Deployed live inference through an ESP32-to-Python pipeline and Flutter text-to-speech application.",
    ],
  },
  {
    period: "Jul. - Sep. 2025",
    role: "Research Summer Intern",
    organisation: "National Chung Cheng University",
    location: "Chiayi, Taiwan",
    highlights: [
      "Reviewed more than 140 papers on transition-metal-dichalcogenide electrochemical biosensors.",
      "Developed a five-axis clinical-translation framework covering performance, stability, reproducibility, bio-interface compatibility, and system readiness.",
    ],
  },
  {
    period: "Jul. - Sep. 2024",
    role: "Research Intern - Multimodal Biomedical AI",
    organisation: "AI4U Research Unit",
    location: "Tunis, Tunisia",
    highlights: [
      "Built an exploratory multimodal pipeline combining text, images, and 16-channel EEG features.",
      "Used SHAP and attention visualisation to inspect model behaviour and improve interpretability.",
    ],
  },
];

export const capabilities = [
  {
    title: "Biosignal processing",
    summary: "From raw physiological acquisition to signal-quality checks and useful representations.",
    skills: ["PPG", "EEG", "EMG", "ECG", "IMU", "Digital filtering", "FFT", "CWT", "Segmentation"],
  },
  {
    title: "AI and data",
    summary: "Model development with an emphasis on multimodal learning and interpretable evidence.",
    skills: ["Python", "PyTorch", "TensorFlow", "scikit-learn", "CNNs", "SHAP", "Model evaluation"],
  },
  {
    title: "Embedded systems",
    summary: "Sensor-to-application systems built around robust acquisition and constrained hardware.",
    skills: ["STM32F4", "ESP32", "Embedded C/C++", "I2C", "SPI", "UART", "DMA", "FreeRTOS basics"],
  },
  {
    title: "Translation and prototyping",
    summary: "Connecting laboratory evidence, physical prototypes, and clinical deployment constraints.",
    skills: ["MATLAB", "Fusion 360", "SolidWorks", "FDM/SLA", "ISO 13485", "IEC 60601", "TRL methods"],
  },
];

export const education = {
  school: "Higher Institute of Medical Technologies of Tunis (ISTMT)",
  university: "University of Tunis El Manar",
  degree: "National Engineering Diploma in Biomedical Engineering - Technological Innovation in Health",
  period: "2022 - Present | Expected 2027",
  details: [
    "Ranked 3rd out of 40 on entry to the engineering cycle.",
    "Second engineering-year average: 15.08/20 with Honors (stated equivalent: 3.5/4 GPA).",
    "Selected grades: Signal Processing 18.00/20, Embedded Systems 17.10/20, Advanced Physiological Signal Processing 17.05/20.",
  ],
};

export const publication = {
  title:
    "From surface to signal: Clinical pathways for transition metal dichalcogenide-based electrochemical biosensors",
  journal: "Biosensors and Bioelectronics, 311, 118913 (2026)",
  contribution: "Co-author | Published online June 7, 2026",
  doi: "https://doi.org/10.1016/j.bios.2026.118913",
};

export const leadership = [
  {
    title: "Executive Committee Chair",
    context: "IEEE Computer Society Chapter, ISTMT | Mar. 2026 - Present",
  },
  {
    title: "MENA DSS Summer School",
    context: "Berlin | Data science, responsible AI, and innovation policy | Jul. 2025",
  },
  {
    title: "A2SV Remote Education Program",
    context: "Algorithms, data structures, and software-engineering practice | Jan. - Apr. 2025",
  },
];
