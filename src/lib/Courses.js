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
        installments: [4499, 3000],
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
        installments: [4499, 3000],
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
      rating: 4.8,
      totalRatings: "620",
      lastUpdated: "May 2026",
    },

    title: "Full Stack Java Development",
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
        installments: [4499, 3000],
      },
      currency: "INR",
    },

    // ── Ratings ──
    rating: 4.8,
    reviewCount: 620,

    // ── Media ──
    videoThumbnail: "/thumbnails/java-full.jpg",
    videoTitle: "Full Stack Java",
    previewVideo: {
      thumbnail: "/thumbnails/java-full.jpg",
      url: "/videos/java-full-stack-preview.mp4",
    },

    // ── Description ──
    description:
      "Master Full Stack Java Development with frontend, backend, database management, Spring Boot, React JS, REST APIs, and deployment through real-world projects.",

    // ── Why Choose ──
    whyChoose: [
      "Industry-level Full Stack Java training",
      "Real-world project-based learning approach",
      "Learn frontend, backend, database & deployment",
      "Build scalable web applications with Java technologies",
      "Hands-on practical implementation with expert guidance",
    ],

    // ── Curriculum ──
    curriculum: [
      {
        module: 1,
        title: "Frontend Development",
        topics: ["HTML", "CSS", "JavaScript", "Responsive Website Design"],
      },

      {
        module: 2,
        title: "Core Java Programming",
        topics: [
          "Variables & Data Types",
          "Loops & Conditions",
          "Arrays & Strings",
          "Classes & Objects",
          "OOP Concepts",
        ],
      },

      {
        module: 3,
        title: "Database Management",
        topics: [
          "MySQL Basics",
          "SQL Queries",
          "CRUD Operations",
          "Database Connectivity",
        ],
      },

      {
        module: 4,
        title: "Java Backend Development",
        topics: ["Servlets", "JSP", "MVC Architecture", "Session Management"],
      },

      {
        module: 5,
        title: "Spring Boot Development",
        topics: [
          "Spring Boot Basics",
          "REST API",
          "CRUD Application",
          "Spring Data JPA",
        ],
      },

      {
        module: 6,
        title: "React JS Frontend",
        topics: ["Components", "Props & State", "Routing", "API Integration"],
      },

      {
        module: 7,
        title: "Full Stack Project & Deployment",
        topics: [
          "Full Stack Project",
          "Git & GitHub",
          "Project Deployment",
          "Interview Preparation",
        ],
      },
    ],

    // ── Skills ──
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Java",
      "React JS",
      "Spring Boot",
      "REST API",
      "MySQL",
      "Servlets",
      "JSP",
      "Git",
      "GitHub",
    ],

    // ── Sample Projects ──
    sampleProjects: [
      {
        id: 1,
        title: "E-Commerce Website with User Authentication",
        skills: ["React JS", "Spring Boot", "MySQL", "REST API"],
        description:
          "Develop a complete online shopping website where users can register, login, browse products, add items to cart, and place orders securely.",
      },

      {
        id: 2,
        title: "Online Learning Management System",
        skills: ["Frontend Development", "Java Backend", "API Integration"],
        description:
          "Create an online platform where students can enroll in courses, watch video lectures, submit assignments, and track their progress.",
      },

      {
        id: 3,
        title: "Real-Time Chat Application",
        skills: ["Spring Boot", "WebSocket", "React JS"],
        description:
          "Build a chat application that allows users to send and receive messages instantly in real time.",
      },

      {
        id: 4,
        title: "Hotel Booking and Reservation System",
        skills: [
          "Full Stack Development",
          "Payment Integration",
          "CRUD Operations",
        ],
        description:
          "Develop a hotel reservation system where users can search rooms, book hotels, manage reservations, and make online payments.",
      },

      {
        id: 5,
        title: "Task Management and Collaboration Tool",
        skills: ["React JS", "Java Backend", "Authentication System"],
        description:
          "Create a task management application where teams can create tasks, assign work, track progress, and collaborate efficiently.",
      },
    ],

    // ── Career Opportunities ──
    careerRoles: [
      "Java Full Stack Developer",
      "Java Developer",
      "Frontend Developer",
      "Backend Developer",
      "Web Application Developer",
      "Software Engineer",
      "API Developer",
    ],

    hiringCompanies: [
      "Amazon",
      "Google",
      "Microsoft",
      "Deloitte",
      "Alomonx",
      "Startups and Fintech Companies",
    ],

    // ── Outcomes ──
    outcomes: [
      "Build complete full stack web applications",
      "Develop REST APIs using Spring Boot",
      "Create responsive frontend interfaces",
      "Deploy real-world Java applications",
      "Prepare for full stack developer interviews",
    ],

    // ── Learning Outcomes ──
    learningOutcomes: [
      "Develop responsive frontend applications using HTML, CSS & JavaScript",
      "Master Core Java and OOP concepts",
      "Build backend applications using Servlets and JSP",
      "Develop REST APIs with Spring Boot",
      "Integrate React frontend with Java backend",
      "Manage databases using MySQL",
      "Build and deploy full stack projects",
      "Use Git & GitHub for version control",
    ],

    // ── Target Audience ──
    targetAudience: [
      "Students interested in Full Stack Development",
      "Beginners learning Java programming",
      "Developers wanting frontend + backend skills",
      "Candidates preparing for software jobs",
    ],

    // ── Certificate ──
    certificate: {
      type: "Certificate of Internship Completion",

      issuedBy: ["Alomonx Technology", "Alocodes"],

      signatories: [
        {
          role: "Authorized Signatory",
          title: "Director",
        },
        {
          role: "HR Manager",
          title: "Human Resources",
        },
      ],

      description:
        "Upon successful completion, students receive an industry-recognized Certificate of Internship Completion from Alomonx Technology and Alocodes.",

      imageUrl: "/Certificate.jpeg",
    },

    // ── Instructors ──
    instructors: [
      {
        name: "Amit Verma",
        role: "Senior Java Full Stack Developer",
        avatar: "/avatars/man_ava.jpg",
      },

      {
        name: "Pooja Yadav",
        role: "Spring Boot & React Expert",
        avatar: "/avatars/woman_ava.jpg",
      },
    ],

    // ── Curriculum Summary ──
    curriculumSummary: {
      totalModules: 7,
      totalDuration: "60+ Hours",
    },

    // ── Reviews ──
    reviews: [
      {
        name: "Rahul S.",
        time: "2 weeks ago",
        rating: 5,
        comment:
          "Best Full Stack Java course with practical projects and deployment guidance.",
      },

      {
        name: "Nisha K.",
        time: "1 month ago",
        rating: 4.5,
        comment:
          "The React and Spring Boot integration modules were extremely helpful.",
      },
    ],

    // ── Testimonial ──
    testimonial: {
      quote: "Learn. Code. Get Placed.",
      author: "Alocodes Full Stack Java Program",
    },

    // ── Brochure ──
    brochure: {
      title: "Full Stack Java Brochure",
      fileUrl: "/brochures/full-stack-java.pdf",
      fileType: "pdf",
      fileSize: "3 MB",
      lastUpdated: "May 2026",
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
        installments: [4499, 3000],
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
    slug: "artificial-intelligence",

    // ── Identity ──
    badge: {
      text: "Advanced",
      color: "bg-indigo-100 text-indigo-700 dark:text-indigo-300",
      rating: 4.9,
      totalRatings: "950",
      lastUpdated: "May 2026",
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
        installments: [4499, 3000],
      },
      currency: "INR",
    },

    // ── Ratings ──
    rating: 4.9,
    reviewCount: 950,

    // ── Media ──
    videoThumbnail: "/thumbnails/ai.jpg",
    videoTitle: "Artificial Intelligence",

    previewVideo: {
      thumbnail: "/thumbnails/ai.jpg",
      url: "/videos/ai-preview.mp4",
    },

    // ── Description ──
    description:
      "Step into the future with our Artificial Intelligence program designed to teach Machine Learning, Deep Learning, NLP, and intelligent systems through hands-on real-world projects.",

    // ── Why Choose ──
    whyChoose: [
      "Learn AI, ML, Deep Learning & NLP from industry experts",
      "Build real-world projects with practical implementation",
      "Career support with resume preparation & interview guidance",
      "Industry-aligned and job-ready curriculum",
      "Hands-on training with modern AI tools and libraries",
    ],

    // ── Curriculum ──
    curriculum: [
      {
        module: 1,
        title: "Introduction to Python for AI",
        topics: [
          "Python Basics: Variables, Data Types, Lists, Tuples, Dictionaries",
          "Functions, Conditional Statements, and Loops",
          "Hands-on Python programs for AI tasks",
        ],
      },

      {
        module: 2,
        title: "Data Handling & Visualization Libraries",
        topics: [
          "Introduction to NumPy & Pandas",
          "Data Cleaning and Manipulation",
          "Visualization with Matplotlib & Seaborn",
          "Building charts and plots with real datasets",
        ],
      },

      {
        module: 3,
        title: "Math & Statistics for Machine Learning",
        topics: [
          "Basic Linear Algebra: Vectors & Matrices",
          "Statistics: Mean, Median, Mode, Dispersion",
          "Probability Concepts & Gaussian Distribution",
          "Hands-on data analysis using Python",
        ],
      },

      {
        module: 4,
        title: "Supervised Machine Learning",
        topics: [
          "Linear & Logistic Regression",
          "Decision Trees and SVM",
          "Case Study Implementation using Scikit-learn",
        ],
      },

      {
        module: 5,
        title: "Unsupervised Learning & Clustering",
        topics: [
          "K-Means Clustering and Elbow Method",
          "Distance Metrics: Euclidean & Manhattan",
          "Practical Project: Customer Segmentation",
        ],
      },

      {
        module: 6,
        title: "Introduction to Deep Learning",
        topics: [
          "Neural Networks Basics and Architecture",
          "Keras & TensorFlow for Model Building",
          "Real-life Application: Text Classification",
        ],
      },

      {
        module: 7,
        title: "NLP & Text Processing",
        topics: [
          "Sentiment Analysis, Tokenization, Stemming",
          "Text Classification with Naïve Bayes",
          "Chatbot & Recommendation System Concepts",
        ],
      },

      {
        module: 8,
        title: "CNNs & Image Analysis (Advanced)",
        topics: [
          "Grayscale vs Binary Images",
          "Filters, Kernels & CNN Architecture",
          "Mini Project: Image Classification Basics",
        ],
      },
    ],

    // ── Skills ──
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Artificial Intelligence",
      "NLP",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "Computer Vision",
      "Data Analysis",
    ],

    // ── Sample Projects ──
    sampleProjects: [
      {
        id: 1,
        title: "Predicting House Prices (Regression Model)",
        skills: ["Data Preprocessing", "Linear Regression", "Model Training"],
        description:
          "Use housing datasets to predict house prices using regression algorithms and machine learning models.",
      },

      {
        id: 2,
        title: "Handwritten Digit Recognition (MNIST Dataset)",
        skills: ["Neural Networks", "Computer Vision", "Classification"],
        description:
          "Build a neural network or CNN model to classify handwritten digits using the MNIST dataset.",
      },

      {
        id: 3,
        title: "Spam Email Detection",
        skills: ["NLP", "TF-IDF", "Classification"],
        description:
          "Develop a spam classifier using machine learning algorithms like Naive Bayes or SVM.",
      },

      {
        id: 4,
        title: "Movie Recommendation System",
        skills: [
          "Collaborative Filtering",
          "Recommendation Algorithms",
          "Matrix Factorization",
        ],
        description:
          "Create a movie recommendation system that suggests movies based on user preferences.",
      },

      {
        id: 5,
        title: "Chatbot with Basic NLP",
        skills: [
          "Natural Language Processing",
          "Chatbot Development",
          "AI Response Generation",
        ],
        description:
          "Build a chatbot that responds to user queries using rule-based or NLP-based approaches.",
      },
    ],

    // ── Career Opportunities ──
    careerRoles: [
      "AI/ML Developer",
      "Machine Learning Developer",
      "Data Scientist",
      "Python Developer",
      "Data Analyst",
      "Chatbot Enhancer",
    ],

    hiringCompanies: [
      "Amazon",
      "Google",
      "Microsoft",
      "Deloitte",
      "Alomonx",
      "Startups and Fintech Companies",
    ],

    // ── Outcomes ──
    outcomes: [
      "Build intelligent AI and ML systems",
      "Work on real-world AI projects",
      "Develop NLP and recommendation systems",
      "Understand deep learning and neural networks",
      "Prepare for AI and ML job roles",
    ],

    // ── Learning Outcomes ──
    learningOutcomes: [
      "Write Python programs for AI applications",
      "Handle and visualize datasets using Pandas & Matplotlib",
      "Apply machine learning algorithms using Scikit-learn",
      "Build neural networks using TensorFlow & Keras",
      "Implement NLP and text classification models",
      "Understand clustering and recommendation systems",
      "Build CNN-based image classification projects",
      "Create AI-powered chatbot systems",
    ],

    // ── Target Audience ──
    targetAudience: [
      "Students interested in Artificial Intelligence",
      "Beginners learning Machine Learning",
      "Developers transitioning into AI",
      "Tech enthusiasts exploring Deep Learning and NLP",
    ],

    // ── Certificate ──
    certificate: {
      type: "Certificate of Internship Completion",

      issuedBy: ["Alomonx Technology", "Alocodes"],

      signatories: [
        {
          role: "Authorized Signatory",
          title: "Director",
        },
        {
          role: "HR Manager",
          title: "Human Resources",
        },
      ],

      description:
        "Upon successful completion, students receive an industry-recognized Certificate of Internship Completion from Alomonx Technology and Alocodes.",

      imageUrl: "/Certificate.jpeg",
    },

    // ── Instructors ──
    instructors: [
      {
        name: "Tarun Joshi",
        role: "AI Research Engineer",
        avatar: "/avatars/man_ava.jpg",
      },

      {
        name: "Priya Sharma",
        role: "Machine Learning Expert",
        avatar: "/avatars/woman_ava.jpg",
      },
    ],

    // ── Curriculum Summary ──
    curriculumSummary: {
      totalModules: 8,
      totalDuration: "55+ Hours",
    },

    // ── Reviews ──
    reviews: [
      {
        name: "Tarun J.",
        time: "1 week ago",
        rating: 5,
        comment:
          "Excellent AI course with practical machine learning and deep learning projects.",
      },

      {
        name: "Divya P.",
        time: "2 weeks ago",
        rating: 4.5,
        comment:
          "The NLP and recommendation system modules were extremely helpful.",
      },
    ],

    // ── Testimonial ──
    testimonial: {
      quote: "Build smart solutions with AI.",
      author: "Alocodes AI Program",
    },

    // ── Brochure ──
    brochure: {
      title: "Artificial Intelligence Brochure",
      fileUrl: "/brochures/artificial-intelligence.pdf",
      fileType: "pdf",
      fileSize: "3 MB",
      lastUpdated: "May 2026",
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
        installments: [4499, 3000],
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
      rating: 4.7,
      totalRatings: "820",
      lastUpdated: "May 2026",
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
        installments: [4499, 3000],
      },

      currency: "INR",
    },

    // ── Ratings ──
    rating: 4.7,
    reviewCount: 820,

    // ── Media ──
    videoThumbnail: "/thumbnails/digital-mark.jpg",
    videoTitle: "Digital Marketing Mastery",

    previewVideo: {
      thumbnail: "/thumbnails/digital-mark.jpg",
      url: "/videos/digital-marketing-preview.mp4",
    },

    // ── Description ──
    description:
      "Master Digital Marketing with SEO, Social Media Marketing, Google Ads, Content Marketing, Email Automation, and Analytics through real-world projects and live campaigns.",

    // ── Why Choose ──
    whyChoose: [
      "Comprehensive syllabus covering SEO, PPC, Social Media & Analytics",
      "Hands-on experience with live digital marketing campaigns",
      "Learn industry-leading tools like Google Analytics, SEMrush & HubSpot",
      "Practical and job-ready curriculum with real-world projects",
      "Build skills in branding, lead generation & online growth strategies",
    ],

    // ── Curriculum ──
    curriculum: [
      {
        module: 1,
        title: "Introduction to Digital Marketing",
        topics: [
          "Basics of Digital Marketing",
          "Traditional vs Digital Marketing",
          "Types of Digital Marketing",
          "Understanding Online Audience",
          "Digital Marketing Strategies",
        ],
      },

      {
        module: 2,
        title: "Social Media Marketing (SMM)",
        topics: [
          "Facebook Marketing",
          "Instagram Marketing",
          "LinkedIn Marketing",
          "YouTube Marketing",
          "Content Planning & Scheduling",
        ],
      },

      {
        module: 3,
        title: "Search Engine Optimization (SEO)",
        topics: [
          "Introduction to SEO",
          "On-Page SEO",
          "Off-Page SEO",
          "Keyword Research",
          "Technical SEO Basics",
          "Google Search Ranking",
        ],
      },

      {
        module: 4,
        title: "Google Ads & Pay-Per-Click (PPC)",
        topics: [
          "Google Ads Basics",
          "Search Ads & Display Ads",
          "Keyword Bidding",
          "Campaign Setup",
          "Ad Performance Analysis",
        ],
      },

      {
        module: 5,
        title: "Content Marketing",
        topics: [
          "Content Writing Basics",
          "Blog Writing",
          "Copywriting Techniques",
          "Content Strategy",
          "Video & Visual Content Marketing",
        ],
      },

      {
        module: 6,
        title: "Email Marketing & Automation",
        topics: [
          "Email Campaign Creation",
          "Email Design Basics",
          "Audience Segmentation",
          "Lead Generation",
          "Marketing Automation Tools",
        ],
      },

      {
        module: 7,
        title: "Analytics & Performance Tracking",
        topics: [
          "Google Analytics",
          "Website Traffic Analysis",
          "User Behaviour Tracking",
          "Campaign Performance Measurement",
          "ROI Calculation",
        ],
      },

      {
        module: 8,
        title: "Freelancing, Personal Branding & Live Projects",
        topics: [
          "Building Personal Brand",
          "Freelancing Platforms",
          "Client Communication",
          "Portfolio Creation",
          "Real-world Marketing Projects",
        ],
      },
    ],

    // ── Skills ──
    skills: [
      "SEO",
      "Social Media Marketing",
      "Google Ads",
      "Content Marketing",
      "Email Marketing",
      "Google Analytics",
      "SEMrush",
      "Canva",
      "Meta Ads",
      "PPC",
      "Lead Generation",
      "Marketing Automation",
    ],

    // ── Sample Projects ──
    sampleProjects: [
      {
        id: 1,
        title: "SEO Optimization for E-Commerce Websites",

        skills: [
          "SEO",
          "Keyword Research",
          "Technical SEO",
          "Google Analytics",
        ],

        description:
          "Optimize an e-commerce website to improve Google rankings and website traffic using advanced SEO strategies.",
      },

      {
        id: 2,
        title: "Social Media Marketing Strategy for a Fashion Brand",

        skills: [
          "Social Media Marketing",
          "Content Creation",
          "Campaign Planning",
        ],

        description:
          "Create and execute social media campaigns for a fashion brand using Instagram and Facebook marketing.",
      },

      {
        id: 3,
        title: "Email Marketing Campaign for Lead Generation",

        skills: ["Email Marketing", "Lead Generation", "Copywriting"],

        description:
          "Develop email campaigns with promotional content and automation workflows to engage customers.",
      },

      {
        id: 4,
        title: "Google Ads Campaign for a Local Business",

        skills: ["Google Ads", "PPC Marketing", "Campaign Optimization"],

        description:
          "Create and manage a Google Ads campaign focusing on keyword targeting and performance tracking.",
      },

      {
        id: 5,
        title: "Content Marketing Plan for a Tech Blog",

        skills: ["Content Marketing", "SEO Writing", "Digital Branding"],

        description:
          "Develop a content marketing strategy for a technology blog with SEO-friendly content promotion.",
      },
    ],

    // ── Career Opportunities ──
    careerRoles: [
      "Digital Marketing Executive",
      "SEO Specialist",
      "Social Media Manager",
      "Content Marketing Executive",
      "Google Ads Specialist",
    ],

    hiringCompanies: [
      "Amazon",
      "Google",
      "Microsoft",
      "Deloitte",
      "Alomonx",
      "Startups and Fintech Companies",
    ],

    // ── Outcomes ──
    outcomes: [
      "Run successful digital marketing campaigns",
      "Improve website rankings and online visibility",
      "Generate leads through social media and email marketing",
      "Track and optimize campaign performance",
      "Build personal branding and freelancing skills",
    ],

    // ── Learning Outcomes ──
    learningOutcomes: [
      "Understand the fundamentals of digital marketing",
      "Create and optimize SEO strategies",
      "Run Google Ads and PPC campaigns",
      "Develop social media marketing campaigns",
      "Create engaging content and copywriting strategies",
      "Build automated email marketing workflows",
      "Analyze traffic and campaign performance using Google Analytics",
      "Work on real-world digital marketing projects",
    ],

    // ── Target Audience ──
    targetAudience: [
      "Beginners interested in digital marketing",
      "Business owners growing online presence",
      "Freelancers offering marketing services",
      "Students and professionals upgrading marketing skills",
    ],

    // ── Certificate ──
    certificate: {
      type: "Certificate of Internship Completion",

      issuedBy: ["Alomonx Technology", "Alocodes"],

      signatories: [
        {
          role: "Authorized Signatory",
          title: "Director",
        },

        {
          role: "HR Manager",
          title: "Human Resources",
        },
      ],

      description:
        "Upon successful completion, students receive an industry-recognized Certificate of Internship Completion from Alomonx Technology and Alocodes.",

      imageUrl: "/Certificate.jpeg",
    },

    // ── Instructors ──
    instructors: [
      {
        name: "Priya Kulkarni",
        role: "Digital Marketing Strategist",
        avatar: "/avatars/woman_ava.jpg",
      },

      {
        name: "Rahul Mehta",
        role: "SEO & Performance Marketing Expert",
        avatar: "/avatars/man_ava.jpg",
      },
    ],

    // ── Curriculum Summary ──
    curriculumSummary: {
      totalModules: 8,
      totalDuration: "45+ Hours",
    },

    // ── Reviews ──
    reviews: [
      {
        name: "Priya K.",
        time: "2 weeks ago",
        rating: 5,
        comment:
          "The SEO and Google Ads modules were highly practical and easy to implement.",
      },

      {
        name: "Mohit A.",
        time: "1 month ago",
        rating: 4.5,
        comment:
          "Loved the live projects and social media marketing strategies.",
      },
    ],

    // ── Testimonial ──
    testimonial: {
      quote: "Master marketing that drives real growth.",
      author: "Alocodes Digital Marketing Program",
    },

    // ── Brochure ──
    brochure: {
      title: "Digital Marketing Brochure",
      fileUrl: "/brochures/digital-marketing.pdf",
      fileType: "pdf",
      fileSize: "3 MB",
      lastUpdated: "May 2026",
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
        installments: [4499, 3000],
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
