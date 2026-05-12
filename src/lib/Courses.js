// lib/courses.js

const courses = [
  {
    id: "course-1",
    slug: "data-science",

    // ── Identity ──
    badge: {
      text: "Bestseller",
      color: "bg-green-100 text-green-700 dark:text-green-300",
      rating: 4.9,
      totalRatings: "120",
      lastUpdated: "May 2026",
    },
    title: "Data Science",
    category: "Data Science",
    level: "Advanced",

    // ── Logistics ──
    duration: "2 Months",
    mode: "Live Online",
    batchSize: "30 Students",
    language: {
      audio: "English",
      captions: ["English", "Hindi"],
    },

    // ── Pricing ──
    pricing: {
      fullPrice: 7499,
      emi: {
        available: true,
        installments: [4500, 3000],
      },
      currency: "INR",
    },

    // ── Ratings & Reviews summary ──
    rating: 4.9,
    reviewCount: 120,

    // ── Media ──
    videoThumbnail: "/thumbnails/data-science.jpg",
    videoTitle: "Intro to Data Science",
    previewVideo: {
      thumbnail: "/thumbnails/data-science.jpg",
      url: "/videos/data-science-preview.mp4",
    },

    // ── Program Overview (brochure p.2) ──
    description:
      "Master the essentials of data analysis, machine learning, and visualization through hands-on projects and expert guidance — ideal for anyone aiming to thrive in today's data-driven world.",

    // ── Why Choose This Program (brochure p.2) ──
    whyChoose: [
      "Data Science is at the heart of decision-making across industries — from business analysis to cutting-edge AI models.",
      "High Demand: Every industry relies on data to drive innovation.",
      "Lucrative Career: Data Science roles offer some of the best salaries in tech.",
      "Versatile Skillset: Applicable in tech, healthcare, finance, and more.",
    ],

    // ── Curriculum — 7 modules (brochure pp.3-5) ──
    curriculum: [
      {
        module: 1,
        title: "Python for Data Science",
        topics: [
          "Introduction to Python & Jupyter Notebooks",
          "Data types, variables, operators",
          "Control structures (if, for, while)",
          "Functions & lambda expressions",
          "Data structures: Lists, tuples, sets, dictionaries",
          "Libraries: NumPy & Pandas (basic data manipulation)",
        ],
      },
      {
        module: 2,
        title: "Statistics & Probability",
        topics: [
          "Descriptive statistics: Mean, median, mode, variance, standard deviation",
          "Probability basics: Independent vs. dependent events",
          "Normal distribution, skewness, and kurtosis",
          "Hypothesis testing, p-values, confidence intervals",
        ],
      },
      {
        module: 3,
        title: "Data Visualization",
        topics: [
          "Matplotlib: Line plots, bar charts, histograms",
          "Seaborn: Heatmaps, pair plots, violin plots",
          "Plot styling and customization",
          "Telling stories with data visuals",
        ],
      },
      {
        module: 4,
        title: "Exploratory Data Analysis (EDA)",
        topics: [
          "Data cleaning: Handling nulls, duplicates, outliers",
          "Feature engineering basics",
          "Correlation analysis",
          "Case study: EDA on Titanic, Iris, or custom dataset",
        ],
      },
      {
        module: 5,
        title: "SQL & Data Handling",
        topics: [
          "SQL basics: SELECT, WHERE, GROUP BY, JOIN",
          "Querying datasets from SQLite/MySQL",
          "Integration of SQL with Python via sqlite3 or SQLAlchemy",
          "Hands-on querying real-world datasets",
        ],
      },
      {
        module: 6,
        title: "Machine Learning Algorithms",
        topics: [
          "ML pipeline overview: Supervised vs Unsupervised",
          "Linear & Logistic Regression",
          "Decision Trees & Random Forest",
          "K-Means Clustering",
          "Model evaluation: Confusion matrix, accuracy, recall, precision, F1-score",
        ],
      },
      {
        module: 7,
        title: "Deep Learning Fundamentals",
        topics: [
          "Introduction to Neural Networks",
          "Activation functions, forward & backward propagation",
          "Building models with TensorFlow/Keras",
          "CNNs for image data",
          "Model training, validation, and tuning",
        ],
      },
    ],

    // ── Skills (flat list for filtering/tags) ──
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Jupyter Notebooks",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "SQL",
      "Machine Learning",
      "Deep Learning",
      "EDA",
      "Statistics & Probability",
    ],

    // ── Sample Projects (brochure pp.6-7) ──
    sampleProjects: [
      {
        id: 1,
        title: "Exploratory Data Analysis on Titanic Dataset",
        skills: ["Data cleaning", "Visualization", "Statistical analysis"],
        description:
          "Analyze the Titanic dataset to explore patterns in survival rates based on factors like gender, age, passenger class, and fare. Create visualizations like bar charts, heatmaps, and box plots to summarize findings.",
        dataset: "Titanic Dataset (Kaggle)",
      },
      {
        id: 2,
        title: "Customer Segmentation Using K-Means Clustering",
        skills: ["Unsupervised learning", "Feature scaling", "Clustering"],
        description:
          "Use customer data (annual income, spending score, age) to segment customers into groups by preprocessing the data and applying K-Means clustering.",
        dataset: "Mall Customer Dataset (Kaggle)",
      },
      {
        id: 3,
        title: "Predicting House Prices",
        skills: ["Regression", "Feature selection", "Data preprocessing"],
        description:
          "Predict house prices using features like number of bedrooms, square footage, and location. Train a linear regression or decision tree model and evaluate its accuracy.",
        dataset: "Ames Housing Dataset or Boston Housing Dataset (Kaggle)",
      },
      {
        id: 4,
        title: "Sentiment Analysis on Twitter Data",
        skills: ["NLP", "Text preprocessing", "Classification"],
        description:
          "Build a sentiment analysis model to classify tweets as positive, negative, or neutral using tokenization, stopword removal, TF-IDF vectorization, and models like Naive Bayes or SVM.",
        dataset: "Twitter Sentiment Analysis Dataset (Kaggle or Twitter API)",
      },
      {
        id: 5,
        title: "Fraud Detection with Credit Card Data",
        skills: [
          "Classification",
          "Imbalanced data handling",
          "Evaluation metrics",
        ],
        description:
          "Build a model to detect fraudulent transactions using techniques like SMOTE (Synthetic Minority Over-sampling Technique) for handling imbalanced data.",
        dataset: "Credit Card Fraud Detection Dataset (Kaggle)",
      },
    ],

    // ── Career Opportunities (brochure p.8) ──
    careerRoles: [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Business Intelligence Analyst",
      "Data Engineer",
    ],
    hiringCompanies: [
      "Amazon",
      "Alomonx",
      "Deloitte",
      "Startups and Fintech Companies",
    ],

    // ── Outcomes (used in UI cards / accordion) ──
    outcomes: [
      "Land roles as Data Scientist, ML Engineer, or Data Analyst",
      "Build and deploy end-to-end ML pipelines",
      "Perform EDA and statistical analysis on real-world datasets",
      "Get placed at companies like Amazon, Google, Microsoft & Deloitte",
    ],

    // ── Full Learning Outcomes ──
    learningOutcomes: [
      "Build end-to-end ML pipelines using Python and Scikit-learn",
      "Perform exploratory data analysis with Pandas and NumPy",
      "Create data visualizations using Matplotlib and Seaborn",
      "Train and evaluate deep learning models",
      "Write complex SQL queries for large-scale data extraction",
      "Work with real-world datasets from Kaggle and industry projects",
      "Understand statistical concepts: regression, classification, clustering",
      "Earn a dual certificate from Alomonx Technology & Alocodes",
    ],

    // ── Target Audience ──
    targetAudience: [
      "Aspiring Data Scientists and ML Engineers",
      "Software developers looking to transition into Data Science",
      "Analysts who want to upskill with machine learning",
      "Students preparing for data science job interviews",
    ],

    // ── Certificate (brochure p.9) ──
    certificate: {
      type: "Certificate of Internship Completion",
      issuedBy: ["Alomonx Technology", "Alocodes"],
      signatories: [
        { role: "Authorized Signatory", title: "Director" },
        { role: "HR Manager", title: "Human Resources" },
      ],
      description:
        "Upon successful completion, graduates receive a joint Certificate of Internship Completion from Alomonx Technology and Alocodes, recognising their dedication, professionalism, and strong technical skills.",
      imageUrl: "/Certificate.jpeg",
    },

    // ── Instructors ──
    instructors: [
      {
        name: "Arjun Mehta",
        role: "Senior Data Scientist at Google",
        avatar: "/avatars/man_ava.jpg",
      },
      {
        name: "Sneha Kapoor",
        role: "ML Engineer & Kaggle Grandmaster",
        avatar: "/avatars/woman_ava.jpg",
      },
    ],

    // ── Curriculum Summary ──
    curriculumSummary: {
      totalModules: 7,
      totalDuration: "60+ hours on-demand video",
    },

    // ── Reviews ──
    reviews: [
      {
        name: "Priya S.",
        time: "1 week ago",
        rating: 5,
        comment:
          "Transformed my career in just 6 months! The projects are incredibly practical and the instructors explain everything clearly.",
      },
      {
        name: "Rohan V.",
        time: "3 weeks ago",
        rating: 4.5,
        comment:
          "Best Data Science course available in India. Got placed at a top MNC right after completing this.",
      },
    ],

    // ── Testimonial (for card UI) ──
    testimonial: {
      quote: "Transformed my career in just 6 months!",
      author: "Priya S., Data Analyst",
    },

    // ── Brochure ──
    brochure: {
      title: "Data Science & Machine Learning Brochure",
      fileUrl: "/brochures/data-science.pdf", // PDF path
      fileType: "pdf",
      fileSize: "2.5 MB", // optional
      lastUpdated: "March 2025",
    },
  },

  {
    id: "course-2",
    slug: "full-stack-development",

    // ── Identity ──
    badge: {
      text: "Bestseller",
      color: "bg-green-100 text-green-700 dark:text-green-300",
      rating: 4.8,
      totalRatings: "1,350",
      lastUpdated: "May 2026",
    },

    title: "Full Stack Development",
    category: "Full Stack",
    level: "Intermediate",

    // ── Logistics ──
    duration: "3 Months",
    mode: "Live Online",
    batchSize: "30 Students",

    language: {
      audio: "English",
      captions: ["English", "Hindi"],
    },

    // ── Pricing ──
    pricing: {
      fullPrice: 7499,
      emi: {
        available: true,
        installments: [4500, 3000],
      },
      currency: "INR",
    },

    // ── Ratings ──
    rating: 4.8,
    reviewCount: 1350,

    // ── Media ──
    videoThumbnail: "/thumbnails/full-stack-dev.jpg",
    videoTitle: "Full Stack Development",

    previewVideo: {
      thumbnail: "/thumbnails/full-stack-dev.jpg",
      url: "/videos/full-stack-preview.mp4",
    },

    // ── Description ──
    description:
      "Master frontend and backend development to build complete web applications from scratch with hands-on real-world projects and deployment experience.",

    // ── Why Choose ──
    whyChoose: [
      "High demand in every industry",
      "One of the most in-demand tech skills globally",
      "Ability to build complete applications independently",
      "Strong freelancing and startup opportunities",
    ],

    // ── Curriculum ──
    curriculum: [
      {
        module: 1,
        title: "Web Development Fundamentals",
        topics: [
          "Introduction to web technologies",
          "How websites and web apps work",
          "Client-server architecture",
          "Internet & browser basics",
        ],
      },

      {
        module: 2,
        title: "Frontend Development (HTML, CSS, JavaScript)",
        topics: [
          "HTML5 fundamentals",
          "CSS3 styling & responsive design",
          "Flexbox & Grid",
          "JavaScript basics",
          "DOM manipulation",
          "ES6 concepts",
        ],
      },

      {
        module: 3,
        title: "Frontend Frameworks",
        topics: [
          "Introduction to React.js",
          "Components & Props",
          "State & Lifecycle",
          "React Hooks",
          "Routing in React",
          "API integration",
        ],
      },

      {
        module: 4,
        title: "Backend Development",
        topics: [
          "Introduction to Node.js",
          "Express.js fundamentals",
          "Server creation",
          "Middleware",
          "RESTful APIs",
          "Authentication & Authorization",
        ],
      },

      {
        module: 5,
        title: "Database Management",
        topics: [
          "Introduction to databases",
          "MongoDB basics",
          "CRUD operations",
          "Database relationships",
          "Firebase integration basics",
        ],
      },

      {
        module: 6,
        title: "API Development & Integration",
        topics: [
          "REST API architecture",
          "JSON handling",
          "API testing with Postman",
          "Connecting frontend with backend",
        ],
      },

      {
        module: 7,
        title: "Authentication & Security",
        topics: [
          "User authentication systems",
          "JWT authentication",
          "Password encryption",
          "Security best practices",
        ],
      },

      {
        module: 8,
        title: "Deployment & Hosting",
        topics: [
          "Git & GitHub",
          "Deployment using Vercel/Netlify",
          "Backend deployment",
          "Domain & hosting basics",
        ],
      },
    ],

    // ── Skills ──
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "REST APIs",
      "JWT Authentication",
      "Git",
      "GitHub",
    ],

    // ── Tools & Platforms ──
    tools: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Git",
      "GitHub",
    ],

    // ── Sample Projects ──
    sampleProjects: [
      {
        id: 1,
        title: "E-Commerce Web Application",
        skills: [
          "MERN Stack",
          "Authentication",
          "Payment Integration",
          "Database Management",
        ],
        description:
          "Develop a complete online shopping platform where users can browse products, add items to the cart, and place orders with admin product management features.",
      },

      {
        id: 2,
        title: "Social Media Platform",
        skills: [
          "Frontend & Backend Integration",
          "Real-time Database",
          "Authentication",
          "API Development",
        ],
        description:
          "Build a social networking platform where users can create accounts, share posts, like content, and interact in real time.",
      },

      {
        id: 3,
        title: "Task Management System",
        skills: [
          "CRUD Operations",
          "React State Management",
          "REST APIs",
          "Database Integration",
        ],
        description:
          "Create a productivity application where users can manage daily tasks, update progress, and organize workflows efficiently.",
      },

      {
        id: 4,
        title: "Online Learning Platform",
        skills: [
          "Full Stack Development",
          "Video Management",
          "Authentication",
          "Backend APIs",
        ],
        description:
          "Develop an e-learning platform where students can enroll in courses, watch lessons, and track progress.",
      },

      {
        id: 5,
        title: "Real-Time Chat Application",
        skills: [
          "Socket.io",
          "Real-time Communication",
          "Backend Development",
          "Authentication",
        ],
        description:
          "Build a live messaging platform that allows users to send and receive instant messages in real time.",
      },

      {
        id: 6,
        title: "Portfolio & Blogging Website",
        skills: ["Responsive Web Design", "CRUD Operations", "Deployment"],
        description:
          "Develop a personal portfolio and blogging platform where users can publish articles and showcase projects.",
      },
    ],

    // ── Career Opportunities ──
    careerRoles: [
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "MERN Stack Developer",
      "Software Engineer",
      "Web Application Developer",
    ],

    hiringCompanies: [
      "Amazon",
      "Alomonx",
      "Google",
      "Microsoft",
      "Deloitte",
      "Startups and Fintech Companies",
    ],

    // ── Outcomes ──
    outcomes: [
      "Build complete web applications independently",
      "Understand frontend and backend architecture",
      "Deploy real-world full stack applications",
      "Prepare for software engineering roles",
    ],

    // ── Learning Outcomes ──
    learningOutcomes: [
      "Build responsive frontend applications using React.js",
      "Develop RESTful backend APIs using Node.js and Express",
      "Manage databases using MongoDB",
      "Implement authentication and authorization systems",
      "Connect frontend and backend applications",
      "Deploy applications using Vercel and Netlify",
      "Work with Git and GitHub for version control",
      "Build production-ready full stack projects",
    ],

    // ── Target Audience ──
    targetAudience: [
      "Beginners who want to become full stack developers",
      "Students preparing for software development jobs",
      "Frontend developers moving into backend development",
      "Freelancers and startup founders",
    ],

    // ── Certificate ──
    certificate: {
      type: "Certificate of Internship Completion",

      issuedBy: ["Alomonx Technology", "Alocodes"],

      signatories: [
        { role: "Authorized Signatory", title: "Director" },
        { role: "HR Manager", title: "Human Resources" },
      ],

      description:
        "Upon successful completion, learners receive a joint Certificate of Internship Completion from Alomonx Technology and Alocodes.",

      imageUrl: "/Certificate.jpeg",
    },

    // ── Instructors ──
    instructors: [
      {
        name: "Rahul Sharma",
        role: "Senior Full Stack Developer",
        avatar: "/avatars/man_ava.jpg",
      },
    ],

    // ── Curriculum Summary ──
    curriculumSummary: {
      totalModules: 8,
      totalDuration: "80+ hours on-demand video",
    },

    // ── Reviews ──
    reviews: [
      {
        name: "Deepak S.",
        time: "2 weeks ago",
        rating: 5,
        comment:
          "The course helped me understand frontend and backend development clearly.",
      },

      {
        name: "Anita M.",
        time: "1 month ago",
        rating: 4.5,
        comment: "Projects are practical and helped me improve my portfolio.",
      },

      {
        name: "Vikram P.",
        time: "1 month ago",
        rating: 5,
        comment:
          "Authentication and deployment sections are explained really well.",
      },

      {
        name: "Meera R.",
        time: "2 months ago",
        rating: 4.5,
        comment: "Great mentors and beginner-friendly explanations.",
      },
    ],

    // ── Testimonial ──
    testimonial: {
      quote: "Build complete web applications independently.",
      author: "Deepak S., Full Stack Developer",
    },

    brochure: {
      title: "Full Stack Development Brochure",
      fileUrl: "/brochures/full-stack-development.pdf",
      fileType: "pdf",
      fileSize: "2.5 MB",
      lastUpdated: "April 2025",
    },
  },

  {
    id: "course-3",
    slug: "java-full-stack-development",

    // ── Identity ──
    badge: {
      text: "Career Track",
      color: "bg-yellow-100 text-yellow-700 dark:text-yellow-300",
      rating: 4.7,
      totalRatings: "560",
      lastUpdated: "February 2025",
    },
    title: "Java Full Stack Development",
    category: "Full Stack",
    level: "Advanced",

    // ── Logistics ──
    duration: "3 Months",
    mode: "Live Online",
    batchSize: "30 Students",
    language: {
      audio: "English",
      captions: ["English", "Hindi"],
    },

    // ── Pricing ──
    pricing: {
      fullPrice: 7499,
      emi: {
        available: true,
        installments: [4500, 3000],
      },
      currency: "INR",
    },

    // ── Ratings ──
    rating: 4.7,
    reviewCount: 560,

    // ── Media ──
    videoThumbnail: "/thumbnails/java-full.jpg",
    videoTitle: "Java Full Stack",
    previewVideo: {
      thumbnail: "/thumbnails/java-full.jpg",
      url: "/videos/java-full-stack-preview.mp4",
    },

    // ── Description ──
    description:
      "Master full-stack Java development using Spring Boot and React to build scalable, enterprise-grade applications with real-world architecture.",

    // ── Why Choose ──
    whyChoose: [
      "Java remains the backbone of enterprise applications worldwide",
      "Spring Boot is widely used in product-based and service companies",
      "Strong demand for Java full-stack developers in India and globally",
      "Hands-on enterprise-level projects and microservices architecture",
    ],

    // ── Curriculum ──
    curriculum: [
      {
        module: 1,
        title: "Core Java & OOP",
        topics: [
          "Java basics, JVM, JDK, JRE",
          "OOP concepts (Inheritance, Polymorphism, Abstraction, Encapsulation)",
          "Collections Framework",
          "Exception handling & multithreading",
        ],
      },
      {
        module: 2,
        title: "Frontend with React",
        topics: [
          "React fundamentals (components, props, state)",
          "Hooks (useState, useEffect)",
          "Routing with React Router",
          "State management basics",
        ],
      },
      {
        module: 3,
        title: "Backend with Spring Boot",
        topics: [
          "Spring Boot architecture",
          "REST API development",
          "Dependency Injection & Annotations",
          "Controller, Service, Repository layers",
        ],
      },
      {
        module: 4,
        title: "Database with MySQL",
        topics: [
          "Relational database concepts",
          "Normalization",
          "Joins, indexes, queries",
          "Integration with Spring Data JPA",
        ],
      },
      {
        module: 5,
        title: "Microservices Architecture",
        topics: [
          "Introduction to microservices",
          "Spring Cloud basics",
          "API Gateway & Service Discovery",
          "Inter-service communication",
        ],
      },
      {
        module: 6,
        title: "Security & Authentication",
        topics: [
          "Spring Security",
          "JWT authentication",
          "Role-based authorization",
          "Secure API development",
        ],
      },
      {
        module: 7,
        title: "Testing & Deployment",
        topics: [
          "JUnit & Mockito",
          "Integration testing",
          "Docker basics",
          "Deploying on AWS EC2",
        ],
      },
    ],

    // ── Skills ──
    skills: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "REST APIs",
      "Spring Security",
      "Microservices",
      "JWT",
      "Docker",
    ],

    // ── Sample Projects ──
    sampleProjects: [
      {
        id: 1,
        title: "E-commerce Microservices System",
        skills: ["Spring Boot", "Microservices", "MySQL"],
        description:
          "Build a scalable e-commerce backend using microservices architecture with API Gateway and service communication.",
      },
      {
        id: 2,
        title: "Full Stack CRUD Application",
        skills: ["React", "Spring Boot"],
        description:
          "Create a full-stack CRUD app with React frontend and Spring Boot backend.",
      },
      {
        id: 3,
        title: "Authentication & Authorization System",
        skills: ["JWT", "Spring Security"],
        description:
          "Implement secure login/signup with JWT and role-based access control.",
      },
      {
        id: 4,
        title: "Employee Management System",
        skills: ["JPA", "MySQL"],
        description:
          "Develop an enterprise-level employee management system with database integration.",
      },
    ],

    // ── Career Opportunities ──
    careerRoles: [
      "Java Developer",
      "Full Stack Java Developer",
      "Backend Developer",
      "Software Engineer",
      "Microservices Engineer",
    ],

    hiringCompanies: [
      "Infosys",
      "TCS",
      "Alomonx",
      "Wipro",
      "Accenture",
      "Product-based Companies",
    ],

    // ── Outcomes ──
    outcomes: [
      "Build enterprise-grade Java applications",
      "Understand microservices architecture",
      "Crack Java developer interviews",
      "Deploy scalable backend systems",
    ],

    // ── Learning Outcomes ──
    learningOutcomes: [
      "Build production-ready Spring Boot REST APIs",
      "Design microservices architecture with Spring Cloud",
      "Create dynamic frontend UIs with React and Redux",
      "Integrate React frontend with Spring Boot backend",
      "Design optimized MySQL databases",
      "Implement JWT authentication with Spring Security",
      "Write unit and integration tests",
      "Deploy applications using Docker and AWS",
    ],

    // ── Target Audience ──
    targetAudience: [
      "Java developers who want full-stack expertise",
      "Students targeting service-based companies",
      "Developers aiming for enterprise roles",
      "Candidates preparing for Java interviews",
    ],

    // ── Certificate ──
    certificate: {
      type: "Certificate of Internship Completion",
      issuedBy: ["Alomonx Technology", "Alocodes"],
      signatories: [
        { role: "Authorized Signatory", title: "Director" },
        { role: "HR Manager", title: "Human Resources" },
      ],
      description:
        "Upon successful completion, graduates receive a joint Certificate of Internship Completion from Alomonx Technology and Alocodes, recognising their dedication, professionalism, and strong technical skills.",
      imageUrl: "/Certificate.jpeg",
    },

    // ── Instructors ──
    instructors: [
      {
        name: "Pooja Yadav",
        role: "Java Architect at Infosys",
        avatar: "/avatars/woman_ava.jpg",
      },
      {
        name: "Amit Verma",
        role: "Spring Boot Expert & Tech Lead",
        avatar: "/avatars/man_ava.jpg",
      },
    ],

    // ── Curriculum Summary ──
    curriculumSummary: {
      totalModules: 7,
      totalDuration: "55+ hours on-demand video",
    },

    // ── Reviews ──
    reviews: [
      {
        name: "Pooja Y.",
        time: "3 weeks ago",
        rating: 5,
        comment:
          "Enterprise-ready skills delivered in just 3 months. The Spring Boot microservices module is exceptional.",
      },
      {
        name: "Suresh K.",
        time: "1 month ago",
        rating: 4.5,
        comment:
          "Got placed at TCS Digital with a 12 LPA package. This course prepared me end to end.",
      },
      {
        name: "Nisha B.",
        time: "2 months ago",
        rating: 4.5,
        comment:
          "Best Java full stack course. The React + Spring Boot integration project is exactly what companies ask for.",
      },
      {
        name: "Arpit J.",
        time: "2 months ago",
        rating: 5,
        comment:
          "Instructors are top notch. Live sessions are interactive and doubt resolution is fast.",
      },
    ],

    // ── Testimonial ──
    testimonial: {
      quote: "Enterprise-ready skills.",
      author: "Pooja Y., Full-Stack Java",
    },
    brochure: {
      title: "Data Science & Machine Learning Brochure",
      fileUrl: "/brochures/data-science.pdf", // PDF path
      fileType: "pdf",
      fileSize: "2.5 MB", // optional
      lastUpdated: "March 2025",
    },
  },

  {
    id: "course-4",
    slug: "machine-learning",

    // ── Identity ──
    badge: {
      text: "AI Track",
      color: "bg-blue-100 text-blue-700 dark:text-blue-300",
      rating: 4.8,
      totalRatings: "620",
      lastUpdated: "May 2026",
    },

    title: "Machine Learning",
    category: "Artificial Intelligence",
    level: "Advanced",

    // ── Logistics ──
    duration: "2 Months",
    mode: "Live Online",
    batchSize: "30 Students",

    language: {
      audio: "English",
      captions: ["English", "Hindi"],
    },

    // ── Pricing ──
    pricing: {
      fullPrice: 7499,
      emi: {
        available: true,
        installments: [4500, 3000],
      },
      currency: "INR",
    },

    // ── Ratings ──
    rating: 4.8,
    reviewCount: 620,

    // ── Media ──
    videoThumbnail: "/thumbnails/machine-learning.jpeg",
    videoTitle: "Machine Learning",
    previewVideo: {
      thumbnail: "/thumbnails/machine-learning.jpeg",
      url: "/videos/machine-learning-preview.mp4",
    },

    // ── Description ──
    description:
      "Master Machine Learning, Deep Learning, NLP, and AI system development using Python and industry-standard tools to build intelligent real-world applications.",

    // ── Why Choose ──
    whyChoose: [
      "Focus on AI system development, not just data analysis",
      "Learn how machines learn patterns and make decisions",
      "Build production-ready machine learning models",
      "Covers deployment and real-world AI integration",
    ],

    // ── Curriculum ──
    curriculum: [
      {
        module: 1,
        title: "Foundations of Machine Intelligence",
        topics: [
          "What is Machine Learning vs AI",
          "Types of learning (Supervised, Unsupervised, Reinforcement)",
          "Real-world ML use cases",
          "NumPy & Pandas basics",
        ],
      },

      {
        module: 2,
        title: "Learning Algorithms Deep Dive",
        topics: [
          "Linear & Logistic Regression",
          "Decision Trees & Random Forest",
          "Support Vector Machines",
          "Bias vs Variance tradeoff",
        ],
      },

      {
        module: 3,
        title: "Feature Engineering & Optimization",
        topics: [
          "Feature selection techniques",
          "Dimensionality reduction (PCA)",
          "Hyperparameter tuning",
          "Model optimization",
        ],
      },

      {
        module: 4,
        title: "Deep Learning & Neural Networks",
        topics: [
          "Artificial Neural Networks (ANN)",
          "Convolutional Neural Networks (CNN)",
          "Introduction to RNN",
          "Real-world AI applications",
        ],
      },

      {
        module: 5,
        title: "Natural Language Processing",
        topics: [
          "Text preprocessing",
          "Word embeddings",
          "Sentiment analysis",
          "Chatbot basics",
        ],
      },

      {
        module: 6,
        title: "Computer Vision",
        topics: [
          "Image processing basics",
          "Object detection",
          "Face recognition concepts",
        ],
      },

      {
        module: 7,
        title: "Model Deployment & AI Systems",
        topics: [
          "Model deployment using APIs",
          "Flask / FastAPI basics",
          "Integrating ML with web/mobile apps",
          "Real-world AI pipelines",
        ],
      },

      {
        module: 8,
        title: "AI Product Development",
        topics: [
          "Designing ML-based applications",
          "Scalability & performance",
          "Industry use cases",
        ],
      },
    ],

    // ── Skills ──
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "NLP",
      "Computer Vision",
      "FastAPI",
    ],

    // ── Tools & Platforms ──
    tools: [
      "Python",
      "TensorFlow",
      "Jupyter Notebook",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Seaborn",
      "Matplotlib",
    ],

    // ── Sample Projects ──
    sampleProjects: [
      {
        id: 1,
        title: "House Price Prediction",
        skills: ["Linear Regression", "Feature Selection", "Model Evaluation"],
        description:
          "Build a machine learning model to predict house prices using regression algorithms and real-world datasets.",
      },

      {
        id: 2,
        title: "Customer Segmentation Using K-Means",
        skills: ["Clustering", "Unsupervised Learning", "Feature Scaling"],
        description:
          "Segment customers into groups using K-Means clustering and customer behavior analysis.",
      },

      {
        id: 3,
        title: "Movie Recommendation System",
        skills: ["Recommendation Systems", "Collaborative Filtering", "Pandas"],
        description:
          "Develop a recommendation engine similar to Netflix using collaborative filtering techniques.",
      },

      {
        id: 4,
        title: "Twitter Sentiment Analysis",
        skills: ["NLP", "TF-IDF", "Classification"],
        description:
          "Build an NLP model to classify tweets into positive, negative, or neutral sentiments.",
      },

      {
        id: 5,
        title: "Credit Card Fraud Detection",
        skills: ["Classification", "SMOTE", "Imbalanced Data Handling"],
        description:
          "Create a fraud detection system using machine learning classification algorithms and transaction datasets.",
      },
    ],

    // ── Career Opportunities ──
    careerRoles: [
      "Machine Learning Engineer",
      "AI Engineer",
      "Data Scientist",
      "NLP Engineer",
      "AI Product Developer",
    ],

    hiringCompanies: [
      "Amazon",
      "Google",
      "Microsoft",
      "Deloitte",
      "Alomonx",
      "Startups & Fintech Companies",
    ],

    // ── Outcomes ──
    outcomes: [
      "Build intelligent AI systems",
      "Develop production-ready ML models",
      "Deploy machine learning applications",
      "Work on real-world AI projects",
    ],

    // ── Learning Outcomes ──
    learningOutcomes: [
      "Understand machine learning fundamentals and AI concepts",
      "Build supervised and unsupervised ML models",
      "Optimize models using feature engineering and hyperparameter tuning",
      "Develop deep learning applications using TensorFlow",
      "Implement NLP and sentiment analysis systems",
      "Create computer vision applications",
      "Deploy ML models using APIs and FastAPI",
      "Design scalable AI-powered applications",
    ],

    // ── Target Audience ──
    targetAudience: [
      "Students interested in AI and Machine Learning",
      "Python developers moving into AI",
      "Beginners wanting practical ML experience",
      "Developers building intelligent applications",
    ],

    // ── Certificate ──
    certificate: {
      type: "Certificate of Internship Completion",
      issuedBy: ["Alomonx Technology", "Alocodes"],
      signatories: [
        { role: "Authorized Signatory", title: "Director" },
        { role: "HR Manager", title: "Human Resources" },
      ],
      description:
        "Upon successful completion, learners receive a joint Certificate of Internship Completion from Alomonx Technology and Alocodes.",
      imageUrl: "/Certificate.jpeg",
    },

    // ── Instructors ──
    instructors: [
      {
        name: "Rahul Sharma",
        role: "AI Engineer & ML Specialist",
        avatar: "/avatars/man_ava.jpg",
      },

      {
        name: "Priya Mehta",
        role: "Data Scientist & NLP Expert",
        avatar: "/avatars/woman_ava.jpg",
      },
    ],

    // ── Curriculum Summary ──
    curriculumSummary: {
      totalModules: 8,
      totalDuration: "60+ hours on-demand video",
    },

    // ── Reviews ──
    reviews: [
      {
        name: "Ankit R.",
        time: "2 weeks ago",
        rating: 5,
        comment:
          "The deep learning and NLP modules are industry-focused and easy to understand.",
      },

      {
        name: "Shreya P.",
        time: "1 month ago",
        rating: 4.5,
        comment:
          "Loved the practical projects and real-world datasets used throughout the course.",
      },
    ],

    // ── Testimonial ──
    testimonial: {
      quote: "Build intelligent AI systems with real-world applications.",
      author: "Ankit R., ML Engineer",
    },

    brochure: {
      title: "Machine Learning Brochure",
      fileUrl: "/brochures/machine-learning.pdf",
      fileType: "pdf",
      fileSize: "2.5 MB",
      lastUpdated: "March 2025",
    },
  },

  {
    id: "course-4",
    slug: "ai",

    // ── Identity ──
    badge: {
      text: "Advanced",
      color: "bg-indigo-100 text-indigo-700 dark:text-indigo-300",
      rating: 4.9,
      totalRatings: "890",
      lastUpdated: "April 2025",
    },
    title: "Artificial Intelligence",
    category: "Artificial Intelligence",
    level: "Advanced",

    // ── Logistics ──
    duration: "2 Months",
    mode: "Live Online",
    batchSize: "25 Students",
    language: {
      audio: "English",
      captions: ["English", "Hindi"],
    },

    // ── Pricing ──
    pricing: {
      fullPrice: 7499,
      emi: {
        available: true,
        installments: [4500, 3000],
      },
      currency: "INR",
    },

    // ── Ratings ──
    rating: 4.9,
    reviewCount: 890,

    // ── Media ──
    videoThumbnail: "/thumbnails/ai.jpg",
    videoTitle: "AI Model Building",
    previewVideo: {
      thumbnail: "/thumbnails/ai.jpg",
      url: "/videos/ai-preview.mp4",
    },

    // ── Description ──
    description:
      "Build intelligent AI systems and cutting-edge machine learning models using real-world datasets, deep learning techniques, and modern AI frameworks.",

    // ── Why Choose ──
    whyChoose: [
      "AI is transforming every industry from healthcare to finance",
      "Learn cutting-edge technologies like LLMs, NLP, and Computer Vision",
      "Hands-on projects with real-world datasets and use cases",
      "Strong focus on deployment and real-world AI applications",
    ],

    // ── Curriculum ──
    curriculum: [
      {
        module: 1,
        title: "Python & AI Foundations",
        topics: [
          "Python for AI (NumPy, Pandas)",
          "Linear algebra basics",
          "Probability & statistics for AI",
          "Data preprocessing techniques",
        ],
      },
      {
        module: 2,
        title: "Machine Learning Fundamentals",
        topics: [
          "Supervised vs Unsupervised learning",
          "Regression & classification algorithms",
          "Model evaluation metrics",
          "Feature engineering",
        ],
      },
      {
        module: 3,
        title: "Deep Learning",
        topics: [
          "Neural networks basics",
          "Forward & backward propagation",
          "Activation functions",
          "Training deep learning models",
        ],
      },
      {
        module: 4,
        title: "Computer Vision",
        topics: [
          "Image processing with OpenCV",
          "CNN architectures",
          "Object detection",
          "Image classification",
        ],
      },
      {
        module: 5,
        title: "Natural Language Processing (NLP)",
        topics: [
          "Text preprocessing",
          "Tokenization & embeddings",
          "Transformers & attention mechanism",
          "Sentiment analysis & chatbots",
        ],
      },
      {
        module: 6,
        title: "Large Language Models (LLMs)",
        topics: [
          "Introduction to LLMs",
          "Hugging Face transformers",
          "Fine-tuning pre-trained models",
          "Prompt engineering",
        ],
      },
      {
        module: 7,
        title: "Deployment & AI Ethics",
        topics: [
          "Deploy AI models with FastAPI",
          "Docker for ML deployment",
          "Scalable APIs",
          "Bias, fairness, and ethical AI",
        ],
      },
    ],

    // ── Skills ──
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "NLP",
      "Computer Vision",
      "AI",
      "Deep Learning",
      "LLMs",
      "Transformers",
    ],

    // ── Sample Projects ──
    sampleProjects: [
      {
        id: 1,
        title: "Sentiment Analysis System",
        skills: ["NLP", "Text Classification"],
        description:
          "Build a sentiment analysis model to classify reviews using NLP techniques and transformers.",
      },
      {
        id: 2,
        title: "Image Classification Model",
        skills: ["CNN", "Computer Vision"],
        description:
          "Train a deep learning model to classify images using convolutional neural networks.",
      },
      {
        id: 3,
        title: "Chatbot with LLM",
        skills: ["LLMs", "Transformers"],
        description:
          "Develop an intelligent chatbot using Hugging Face transformers and fine-tuned models.",
      },
      {
        id: 4,
        title: "Object Detection System",
        skills: ["Computer Vision", "Deep Learning"],
        description:
          "Create a real-time object detection system using OpenCV and deep learning.",
      },
      {
        id: 5,
        title: "AI Model Deployment",
        skills: ["FastAPI", "Docker"],
        description:
          "Deploy trained AI models as scalable APIs using FastAPI and Docker.",
      },
    ],

    // ── Career Opportunities ──
    careerRoles: [
      "AI Engineer",
      "Machine Learning Engineer",
      "Deep Learning Engineer",
      "NLP Engineer",
      "Computer Vision Engineer",
    ],

    hiringCompanies: [
      "Google",
      "Microsoft",
      "Amazon",
      "Alomonx",
      "AI Startups",
      "Research Labs",
    ],

    // ── Outcomes ──
    outcomes: [
      "Build deep learning and AI systems",
      "Work with NLP and computer vision models",
      "Deploy production-ready AI applications",
      "Crack AI/ML engineer roles",
    ],

    // ── Learning Outcomes ──
    learningOutcomes: [
      "Design and train deep neural networks",
      "Build NLP models for text processing",
      "Implement computer vision systems",
      "Fine-tune large language models",
      "Apply reinforcement learning basics",
      "Deploy AI models using FastAPI and Docker",
      "Understand AI ethics and bias mitigation",
      "Work with Hugging Face transformers",
    ],

    // ── Target Audience ──
    targetAudience: [
      "Data scientists specializing in AI",
      "Software engineers moving into AI",
      "Researchers applying AI in real-world domains",
      "ML enthusiasts advancing beyond basics",
    ],

    // ── Certificate ──
    certificate: {
      type: "Certificate of Internship Completion",
      issuedBy: ["Alomonx Technology", "Alocodes"],
      signatories: [
        { role: "Authorized Signatory", title: "Director" },
        { role: "HR Manager", title: "Human Resources" },
      ],
      description:
        "Upon successful completion, graduates receive a joint Certificate of Internship Completion from Alomonx Technology and Alocodes, recognising their dedication, professionalism, and strong technical skills.",
      imageUrl: "/Certificate.jpeg",
    },

    // ── Instructors ──
    instructors: [
      {
        name: "Tarun Joshi",
        role: "AI Research Engineer at Microsoft",
        avatar: "/avatars/man_ava.jpg",
      },
    ],

    // ── Curriculum Summary ──
    curriculumSummary: {
      totalModules: 7,
      totalDuration: "50+ hours on-demand video",
    },

    // ── Reviews ──
    reviews: [
      {
        name: "Tarun J.",
        time: "1 week ago",
        rating: 5,
        comment:
          "AI innovation at fingertips. The LLM fine-tuning module is outstanding.",
      },
      {
        name: "Divya P.",
        time: "2 weeks ago",
        rating: 4.5,
        comment:
          "Transformers and attention finally make sense. Great explanation.",
      },
    ],

    // ── Testimonial ──
    testimonial: {
      quote: "AI innovation at fingertips.",
      author: "Tarun J., AI Engineer",
    },
    brochure: {
      title: "Data Science & Machine Learning Brochure",
      fileUrl: "/brochures/data-science.pdf", // PDF path
      fileType: "pdf",
      fileSize: "2.5 MB", // optional
      lastUpdated: "March 2025",
    },
  },

  {
    id: "course-5",
    slug: "app-development",

    // ── Identity ──
    badge: {
      text: "In Demand",
      color: "bg-blue-100 text-blue-700 dark:text-blue-300",
      rating: 4.7,
      totalRatings: "890",
      lastUpdated: "May 2026",
    },
    title: "Application Development",
    category: "Application Development",
    level: "Intermediate",

    // ── Logistics ──
    duration: "2 Months",
    mode: "Live Online",
    batchSize: "30 Students",
    language: {
      audio: "English",
      captions: ["English", "Hindi"],
    },

    // ── Pricing ──
    pricing: {
      fullPrice: 7499,
      emi: {
        available: true,
        installments: [4500, 3000],
      },
      currency: "INR",
    },

    // ── Ratings ──
    rating: 4.7,
    reviewCount: 890,

    // ── Media ──
    videoThumbnail: "/thumbnails/app-dev.jpg",
    videoTitle: "Build Your First App",
    previewVideo: {
      thumbnail: "/thumbnails/app-dev.jpg",
      url: "/videos/app-dev-preview.mp4",
    },

    // ── Description ──
    description:
      "Learn to build modern, scalable mobile applications using industry tools like Flutter, Swift, and Android. This program focuses on real-world development skills for students, beginners, and professionals.",

    // ── Why Choose ──
    whyChoose: [
      "High Demand: Mobile apps are used in every industry",
      "Lucrative Career: High-paying job opportunities",
      "Global Opportunities: Work remotely or freelance",
      "Creative + Technical Field",
    ],

    // ── Curriculum ──
    curriculum: [
      {
        module: 1,
        title: "Programming Fundamentals",
        topics: [
          "Introduction to programming concepts",
          "Dart / Swift / Java basics",
          "Variables, data types, operators",
          "Functions and lambda expressions",
          "Control statements (if, loops)",
          "OOP concepts",
        ],
      },
      {
        module: 2,
        title: "Mobile App Development Basics",
        topics: [
          "Introduction to mobile development",
          "Android vs iOS ecosystem",
          "Setting up development environment",
          "Understanding app architecture",
        ],
      },
      {
        module: 3,
        title: "UI/UX Design",
        topics: [
          "Design principles (color, typography, layout)",
          "Wireframing using Figma",
          "Responsive design",
          "User-friendly interface creation",
        ],
      },
      {
        module: 4,
        title: "Flutter / Native Development",
        topics: [
          "Flutter basics (Widgets, Layouts)",
          "SwiftUI basics",
          "Navigation & routing",
          "State management",
        ],
      },
      {
        module: 5,
        title: "Backend Integration",
        topics: [
          "REST APIs integration",
          "JSON parsing",
          "Firebase basics (Authentication, Firestore)",
          "API handling in apps",
        ],
      },
      {
        module: 6,
        title: "Database Management",
        topics: [
          "Local storage (SQLite, Hive)",
          "Cloud database (Firebase)",
          "Data handling and caching",
        ],
      },
      {
        module: 7,
        title: "Testing & Debugging",
        topics: [
          "Debugging techniques",
          "Performance optimization",
          "Testing apps on real devices",
        ],
      },
    ],

    // ── Skills ──
    skills: [
      "Flutter",
      "Swift",
      "Android Studio",
      "Firebase",
      "API Integration",
      "Mobile UI/UX",
      "App Deployment",
      "Figma",
    ],

    // ── Sample Projects ──
    sampleProjects: [
      {
        id: 1,
        title: "To-Do List Application",
        skills: ["Flutter", "State Management", "SQLite / Hive", "UI Design"],
        description:
          "Build a task management app where users can add, update, and delete tasks with local data storage.",
      },
      {
        id: 2,
        title: "Chat Application (Real-Time Messaging)",
        skills: [
          "Firebase Authentication",
          "Realtime Database",
          "API Integration",
        ],
        description:
          "Develop a real-time chat app with authentication and instant messaging using Firebase.",
      },
      {
        id: 3,
        title: "E-Commerce Mobile App",
        skills: [
          "API Integration",
          "JSON Parsing",
          "State Management",
          "UI/UX",
        ],
        description:
          "Build a mobile shopping app with product listing, cart functionality, and payment basics.",
      },
      {
        id: 4,
        title: "Doctor-Patient Appointment App",
        skills: ["Firebase", "Routing", "Notifications"],
        description:
          "Create an app for booking doctor appointments with scheduling and notifications.",
      },
      {
        id: 5,
        title: "Social Media Application",
        skills: ["Database", "Image Upload", "Firebase Storage"],
        description:
          "Build a social platform where users can post, like, and comment on content.",
      },
    ],

    // ── Career Opportunities ──
    careerRoles: [
      "Mobile App Developer",
      "Flutter Developer",
      "iOS Developer",
      "Android Developer",
      "UI/UX Designer",
      "Freelance App Developer",
    ],

    hiringCompanies: [
      "Amazon",
      "Alomonx",
      "Google",
      "Microsoft",
      "Deloitte",
      "Startups and Fintech Companies",
    ],

    // ── Outcomes ──
    outcomes: [
      "Build and publish mobile apps",
      "Integrate AI features into apps",
      "Understand cross-platform development",
      "Create production-ready mobile apps",
    ],

    // ── Learning Outcomes ──
    learningOutcomes: [
      "Build Android and iOS apps with a single codebase",
      "Design modern mobile UIs using React Native",
      "Implement Firebase authentication and database",
      "Integrate AI APIs into mobile apps",
      "Manage state with Redux and Context API",
      "Handle navigation with React Navigation",
      "Optimize app performance",
      "Publish apps to Play Store and App Store",
    ],

    // ── Target Audience ──
    targetAudience: [
      "Web developers entering mobile development",
      "Beginners with JavaScript knowledge",
      "Entrepreneurs building app ideas",
      "Freelancers expanding into mobile apps",
    ],

    // ── Certificate ──
    certificate: {
      type: "Certificate of Internship Completion",
      issuedBy: ["Alomonx Technology", "Alocodes"],
      signatories: [
        { role: "Authorized Signatory", title: "Director" },
        { role: "HR Manager", title: "Human Resources" },
      ],
      description:
        "Upon successful completion, graduates receive a joint Certificate of Internship Completion from Alomonx Technology and Alocodes, recognising their dedication, professionalism, and strong technical skills.",
      imageUrl: "/Certificate.jpeg",
    },

    // ── Instructors ──
    instructors: [
      {
        name: "Rahul Singh",
        role: "Mobile Developer & App Entrepreneur",
        avatar: "/avatars/man_ava.jpg",
      },
    ],

    // ── Curriculum Summary ──
    curriculumSummary: {
      totalModules: 7,
      totalDuration: "45+ hours on-demand video",
    },

    // ── Reviews ──
    reviews: [
      {
        name: "Rahul S.",
        time: "1 week ago",
        rating: 5,
        comment:
          "From idea to app store — this course made it simple. My app has 500+ downloads already!",
      },
      {
        name: "Preethi N.",
        time: "3 weeks ago",
        rating: 4.5,
        comment:
          "Firebase integration is explained very clearly and practically.",
      },
      {
        name: "Akash G.",
        time: "1 month ago",
        rating: 5,
        comment: "Built an AI-powered fitness app. Got freelance offers!",
      },
      {
        name: "Simran K.",
        time: "2 months ago",
        rating: 4.5,
        comment: "Great course. AI integration is the best part.",
      },
    ],

    // ── Testimonial ──
    testimonial: {
      quote: "From idea to app store — this course made it simple.",
      author: "Rahul S., App Developer",
    },

    brochure: {
      title: "App Development Brochure",
      fileUrl: "/brochures/app-dev.pdf", // PDF path
      fileType: "pdf",
      fileSize: "2.5 MB", // optional
      lastUpdated: "March 2025",
    },
  },

  {
    id: "course-6",
    slug: "digital-marketing",

    // ── Identity ──
    badge: {
      text: "Hot",
      color: "bg-orange-100 text-orange-700 dark:text-orange-300",
      rating: 4.6,
      totalRatings: "760",
      lastUpdated: "April 2025",
    },
    title: "Digital Marketing",
    category: "Marketing",
    level: "Beginner",

    // ── Logistics ──
    duration: "2 Months",
    mode: "Live Online",
    batchSize: "40 Students",
    language: {
      audio: "English",
      captions: ["English", "Hindi"],
    },

    // ── Pricing ──
    pricing: {
      fullPrice: 7499,
      emi: {
        available: true,
        installments: [4500, 3000],
      },
      currency: "INR",
    },

    // ── Ratings ──
    rating: 4.6,
    reviewCount: 760,

    // ── Media ──
    videoThumbnail: "/thumbnails/digital-mark.jpg",
    videoTitle: "Marketing That Converts",
    previewVideo: {
      thumbnail: "/thumbnails/digital-mark.jpg",
      url: "/videos/digital-marketing-preview.mp4",
    },

    // ── Description ──
    description:
      "Master digital marketing strategies and leverage AI tools to grow brands, drive traffic, generate leads, and scale businesses online.",

    // ── Why Choose ──
    whyChoose: [
      "Digital marketing is essential for every business today",
      "Learn high-income skills like SEO, ads, and content marketing",
      "Use AI tools to automate and scale marketing efforts",
      "Hands-on campaigns and real-world marketing projects",
    ],

    // ── Curriculum ──
    curriculum: [
      {
        module: 1,
        title: "Digital Marketing Fundamentals",
        topics: [
          "Introduction to digital marketing",
          "Customer journey & funnels",
          "Marketing channels overview",
          "Brand positioning",
        ],
      },
      {
        module: 2,
        title: "Search Engine Optimization (SEO)",
        topics: [
          "On-page SEO",
          "Off-page SEO & backlinks",
          "Technical SEO",
          "Keyword research & tools",
        ],
      },
      {
        module: 3,
        title: "Paid Advertising (PPC)",
        topics: [
          "Google Ads fundamentals",
          "Meta Ads (Facebook & Instagram)",
          "Campaign setup & targeting",
          "Budget optimization",
        ],
      },
      {
        module: 4,
        title: "Social Media Marketing",
        topics: [
          "Instagram growth strategies",
          "LinkedIn & Twitter marketing",
          "Content calendars",
          "Engagement techniques",
        ],
      },
      {
        module: 5,
        title: "Content Marketing & AI Tools",
        topics: [
          "Content strategy planning",
          "Copywriting fundamentals",
          "Using AI tools (ChatGPT, Jasper)",
          "Canva AI for creatives",
        ],
      },
      {
        module: 6,
        title: "Email Marketing & Automation",
        topics: [
          "Email funnels",
          "Mailchimp & HubSpot",
          "Lead nurturing",
          "Automation workflows",
        ],
      },
      {
        module: 7,
        title: "Analytics & Growth Strategies",
        topics: [
          "Google Analytics 4",
          "Search Console",
          "Performance tracking",
          "Scaling marketing campaigns",
        ],
      },
    ],

    // ── Skills ──
    skills: [
      "SEO",
      "Social Media Marketing",
      "Google Ads",
      "Content Marketing",
      "AI Tools",
      "Email Marketing",
      "Analytics",
      "Marketing Funnels",
    ],

    // ── Sample Projects ──
    sampleProjects: [
      {
        id: 1,
        title: "SEO Website Ranking Project",
        skills: ["SEO", "Keyword Research"],
        description:
          "Optimize a website and rank it on Google using on-page and off-page SEO strategies.",
      },
      {
        id: 2,
        title: "Google Ads Campaign",
        skills: ["PPC", "Ad Campaigns"],
        description:
          "Create and manage a live Google Ads campaign with budget optimization.",
      },
      {
        id: 3,
        title: "Social Media Growth Strategy",
        skills: ["Social Media", "Content"],
        description:
          "Build and execute a content strategy to grow a social media page organically.",
      },
      {
        id: 4,
        title: "AI Content Automation System",
        skills: ["AI Tools", "Automation"],
        description:
          "Use AI tools to create scalable content pipelines for blogs and social media.",
      },
    ],

    // ── Career Opportunities ──
    careerRoles: [
      "Digital Marketing Specialist",
      "SEO Expert",
      "Performance Marketer",
      "Social Media Manager",
      "Freelance Marketer",
    ],

    hiringCompanies: [
      "Alomonx",
      "Zomato",
      "Flipkart",
      "Startups",
      "Marketing Agencies",
      "E-commerce Companies",
    ],

    // ── Outcomes ──
    outcomes: [
      "Run high-converting ad campaigns",
      "Grow brands on social media",
      "Automate marketing using AI",
      "Generate leads and revenue online",
    ],

    // ── Learning Outcomes ──
    learningOutcomes: [
      "Rank websites using advanced SEO techniques",
      "Run Google Ads and Meta Ads campaigns",
      "Grow social media presence across platforms",
      "Create content strategies using AI tools",
      "Build automated email marketing funnels",
      "Analyze campaigns using Google Analytics",
      "Use AI tools for scalable content creation",
      "Understand influencer and affiliate marketing",
    ],

    // ── Target Audience ──
    targetAudience: [
      "Business owners growing online presence",
      "Marketing professionals upgrading skills",
      "Beginners exploring digital marketing",
      "Freelancers offering marketing services",
    ],

    // ── Certificate ──
    certificate: {
      type: "Certificate of Internship Completion",
      issuedBy: ["Alomonx Technology", "Alocodes"],
      signatories: [
        { role: "Authorized Signatory", title: "Director" },
        { role: "HR Manager", title: "Human Resources" },
      ],
      description:
        "Upon successful completion, graduates receive a joint Certificate of Internship Completion from Alomonx Technology and Alocodes, recognising their dedication, professionalism, and strong technical skills.",
      imageUrl: "/Certificate.jpeg",
    },

    // ── Instructors ──
    instructors: [
      {
        name: "Priya Kulkarni",
        role: "Digital Marketing Lead at Zomato",
        avatar: "/avatars/woman_ava.jpg",
      },
    ],

    // ── Curriculum Summary ──
    curriculumSummary: {
      totalModules: 7,
      totalDuration: "40+ hours on-demand video",
    },

    // ── Reviews ──
    reviews: [
      {
        name: "Priya K.",
        time: "2 weeks ago",
        rating: 5,
        comment:
          "Helped me scale my business online quickly. Revenue doubled in 2 months.",
      },
      {
        name: "Mohit A.",
        time: "1 month ago",
        rating: 4.5,
        comment: "Google Ads module is very practical and detailed.",
      },
      {
        name: "Kavya L.",
        time: "1 month ago",
        rating: 4.5,
        comment:
          "AI tools workflow completely changed my content creation process.",
      },
      {
        name: "Nikhil S.",
        time: "2 months ago",
        rating: 5,
        comment: "Got my first job after completing this course.",
      },
    ],

    // ── Testimonial ──
    testimonial: {
      quote: "Helped me scale my business online quickly.",
      author: "Priya K., Entrepreneur",
    },

    brochure: {
      title: "Data Science & Machine Learning Brochure",
      fileUrl: "/brochures/data-science.pdf", // PDF path
      fileType: "pdf",
      fileSize: "2.5 MB", // optional
      lastUpdated: "March 2025",
    },
  },

  {
    id: "course-7",
    slug: "ui-ux-design",

    // ── Identity ──
    badge: {
      text: "Creative",
      color: "bg-pink-100 text-pink-700 dark:text-pink-300",
      rating: 4.9,
      totalRatings: "1,120",
      lastUpdated: "March 2025",
    },
    title: "UI/UX Design with Figma & AI Tools",
    category: "Design",
    level: "Beginner",

    // ── Logistics ──
    duration: "2 Months",
    mode: "Live Online",
    batchSize: "25 Students",
    language: {
      audio: "English",
      captions: ["English", "Hindi"],
    },

    // ── Pricing ──
    pricing: {
      fullPrice: 7499,
      emi: {
        available: true,
        installments: [4500, 3000],
      },
      currency: "INR",
    },

    // ── Ratings ──
    rating: 4.9,
    reviewCount: 1120,

    // ── Media ──
    videoThumbnail: "/thumbnails/ui-ux.jpg",
    videoTitle: "Design Like a Pro",
    previewVideo: {
      thumbnail: "/thumbnails/ui-ux.jpg",
      url: "/videos/ui-ux-preview.mp4",
    },

    // ── Description ──
    description:
      "Design intuitive, visually stunning user experiences using Figma, AI tools, and industry-standard UX methodologies with real-world case studies.",

    // ── Why Choose ──
    whyChoose: [
      "UI/UX is one of the fastest-growing and high-paying creative fields",
      "Learn both UI design and UX research in one structured program",
      "Build a strong portfolio with real-world case studies",
      "Use AI tools to speed up and enhance design workflows",
    ],

    // ── Curriculum ──
    curriculum: [
      {
        module: 1,
        title: "Design Fundamentals",
        topics: [
          "Principles of design (color, typography, layout)",
          "UI vs UX fundamentals",
          "Design thinking process",
          "Understanding users and problems",
        ],
      },
      {
        module: 2,
        title: "User Research & UX",
        topics: [
          "User personas",
          "User journey mapping",
          "Interviews & surveys",
          "Usability testing",
        ],
      },
      {
        module: 3,
        title: "Wireframing & Information Architecture",
        topics: [
          "Low-fidelity wireframes",
          "User flows",
          "Information architecture",
          "Sketching and planning interfaces",
        ],
      },
      {
        module: 4,
        title: "Figma Mastery",
        topics: [
          "Figma interface and tools",
          "Components & variants",
          "Auto-layout",
          "Design systems",
        ],
      },
      {
        module: 5,
        title: "Prototyping & Interaction Design",
        topics: [
          "Clickable prototypes",
          "Micro-interactions",
          "Animations",
          "User testing with prototypes",
        ],
      },
      {
        module: 6,
        title: "AI Tools in Design",
        topics: [
          "Galileo AI",
          "Uizard",
          "Framer AI",
          "AI-assisted UI generation",
        ],
      },
      {
        module: 7,
        title: "Portfolio & Career Preparation",
        topics: [
          "Case study creation",
          "Portfolio building",
          "Design interviews",
          "Freelancing and job search",
        ],
      },
    ],

    // ── Skills ──
    skills: [
      "Figma",
      "User Research",
      "Wireframing",
      "Prototyping",
      "AI Design Tools",
      "Design Systems",
      "UX Principles",
      "Interaction Design",
    ],

    // ── Sample Projects ──
    sampleProjects: [
      {
        id: 1,
        title: "Mobile App UI Design",
        skills: ["Figma", "UI Design"],
        description:
          "Design a complete mobile app UI with high-fidelity screens and components.",
      },
      {
        id: 2,
        title: "UX Case Study Project",
        skills: ["User Research", "UX"],
        description:
          "Conduct user research and create a full UX case study from problem to solution.",
      },
      {
        id: 3,
        title: "Website Redesign",
        skills: ["Wireframing", "Prototyping"],
        description:
          "Redesign an existing website with improved user experience and interface.",
      },
      {
        id: 4,
        title: "AI-assisted UI Design",
        skills: ["AI Tools", "Figma"],
        description:
          "Use AI tools to generate and refine UI designs efficiently.",
      },
    ],

    // ── Career Opportunities ──
    careerRoles: [
      "UI Designer",
      "UX Designer",
      "Product Designer",
      "Interaction Designer",
      "Freelance Designer",
    ],

    hiringCompanies: [
      "Swiggy",
      "Zomato",
      "Startups",
      "Alomonx",
      "Product Companies",
      "Design Agencies",
    ],

    // ── Outcomes ──
    outcomes: [
      "Design high-quality UI interfaces",
      "Understand user behavior and UX principles",
      "Build a strong design portfolio",
      "Land UI/UX design roles",
    ],

    // ── Learning Outcomes ──
    learningOutcomes: [
      "Master Figma tools and workflows",
      "Conduct user research and usability testing",
      "Create wireframes and high-fidelity designs",
      "Build interactive prototypes",
      "Design accessible and user-friendly interfaces",
      "Use AI tools to enhance design speed",
      "Create professional UX case studies",
      "Prepare for design interviews and jobs",
    ],

    // ── Target Audience ──
    targetAudience: [
      "Beginners entering UI/UX design",
      "Graphic designers transitioning to UX",
      "Developers improving design skills",
      "Product managers collaborating with designers",
    ],

    // ── Certificate ──
    certificate: {
      type: "Certificate of Internship Completion",
      issuedBy: ["Alomonx Technology", "Alocodes"],
      signatories: [
        { role: "Authorized Signatory", title: "Director" },
        { role: "HR Manager", title: "Human Resources" },
      ],
      description:
        "Upon successful completion, graduates receive a joint Certificate of Internship Completion from Alomonx Technology and Alocodes, recognising their dedication, professionalism, and strong technical skills.",
      imageUrl: "/Certificate.jpeg",
    },

    // ── Instructors ──
    instructors: [
      {
        name: "Sneha Rao",
        role: "Lead UI/UX Designer at Swiggy",
        avatar: "/avatars/woman_ava.jpg",
      },
    ],

    // ── Curriculum Summary ──
    curriculumSummary: {
      totalModules: 7,
      totalDuration: "45+ hours on-demand video",
    },

    // ── Reviews ──
    reviews: [
      {
        name: "Sneha R.",
        time: "1 week ago",
        rating: 5,
        comment:
          "My design skills improved drastically. Got hired within a month.",
      },
      {
        name: "Farhan A.",
        time: "2 weeks ago",
        rating: 5,
        comment: "Figma auto-layout and components are explained perfectly.",
      },
      {
        name: "Ishita C.",
        time: "1 month ago",
        rating: 4.5,
        comment: "AI tools workflow is very powerful.",
      },
      {
        name: "Harsh P.",
        time: "2 months ago",
        rating: 5,
        comment: "Built a strong portfolio with real case studies.",
      },
    ],

    // ── Testimonial ──
    testimonial: {
      quote: "My design skills improved drastically with this course.",
      author: "Sneha R., UI Designer",
    },
    brochure: {
      title: "Data Science & Machine Learning Brochure",
      fileUrl: "/brochures/data-science.pdf", // PDF path
      fileType: "pdf",
      fileSize: "2.5 MB", // optional
      lastUpdated: "May 2026",
    },
  },
];

export default courses;
