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
      fullPrice: 9999,
      discount: 25,
      finalPrice: 7499,
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
      "Master the essentials of data analysis, machine learning, and visualization through hands-on projects and expert guidance ideal for anyone aiming to thrive in today's data-driven world.",

    // ── Why Choose This Program (brochure p.2) ──
    whyChoose: [
      "Data Science is at the heart of decision-making across industries.",
      "From business analysis to cutting-edge Al models, Data Science professionals are in high demand.",
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
          "Introduction to Python, Jupyter Notebooks",
          "Data types, variables, operators",
          "Control structures (if, for, while)",
          "Functions, lambda expressions",
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
          "Using Matplotlib: Line plots, bar charts, histograms",
          "Using Seaborn: Heatmaps, pair plots, violin plots",
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
          "Case study: EDA on a real dataset (Titanic, Iris, or custom)",
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
          "ML pipeline overview: Supervised vs Unsupervised",
          "Linear & Logistic Regression",
          "Decision Trees & Random Forest",
          "K-Means Clustering",
          "Model evaluation: Confusion matrix, accuracy, recall, precision, F1-score",
        ],
      },
    ],

    // ── Skills (flat list for filtering/tags) ──
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Jupyter",
      "matplotlib",
      "seaborn",
      "scikit learn",
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
        title: "Exploratory Data Analysis (EDA) on Titanic Dataset",
        skills: ["Data cleaning", "visualization", "statistical analysis"],
        description:
          "Students can analyze the Titanic dataset to explore patterns in survival rates based on factors like gender, age, passenger class, and fare. They'll create visualizations like bar charts, heatmaps, and box plots to summarize findings.",
        dataset: "Titanic Dataset (available on Kaggle)",
      },
      {
        id: 2,
        title: "Customer Segmentation Using K-Means Clustering",
        skills: ["Unsupervised learning", "feature scaling", "clustering"],
        description:
          "Use customer data (such as annual income, spending score, age) to segment customers into different groups. The project will involve preprocessing the data and applying K-means clustering to identify customer segments.",
        dataset: "Mall Customer Dataset (Kaggle)",
      },
      {
        id: 3,
        title: "Predicting House Prices",
        skills: ["Regression", "feature selection", "data preprocessing"],
        description:
          "Students will predict house prices using data on house features like the number of bedrooms, square footage, location, etc. They'll train a linear regression or a decision tree model and evaluate its accuracy.",
        dataset: "Ames Housing Dataset or Boston Housing Dataset (Kaggle)",
      },
      {
        id: 4,
        title: "Sentiment Analysis on Twitter Data",
        skills: [
          "Natural Language Processing (NLP)",
          "text preprocessing",
          "classification",
        ],
        description:
          "Using a dataset of tweets, students can build a sentiment analysis model to classify tweets as positive, negative, or neutral. They'll apply techniques like tokenization, stopword removal, and vectorization (e.g., TF-IDF) and use models like Naive Bayes or SVM.",
        dataset: "Twitter Sentiment Analysis Dataset (Kaggle or Twitter API)",
      },
      {
        id: 5,
        title: "Fraud Detection with Credit Card Data",
        skills: [
          "Classification",
          "imbalanced data handling",
          "evaluation metrics",
        ],
        description:
          "Using a credit card transactions dataset, students can build a model to detect fraudulent transactions. Techniques for handling imbalanced data, such as SMOTE (Synthetic Minority Over-sampling Technique), can be applied.",
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
      "Flipkart",
      "VOIS",
      "Wipro",
      "TCS",
      "Cognizant",
      "Startups and Fintech Companies",
    ],

    // ── Outcomes ──
    outcomes: [
      "Land roles as Data Scientist, ML Engineer, or Data Analyst",
      "Build and deploy end-to-end ML pipelines",
      "Perform EDA and statistical analysis on real-world datasets",
      "Get placed at top companies like Flipkart, Wipro, TCS & Cognizant",
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
      "Earn dual certifications from Alocodes and Alomonx Technology",
    ],

    // ── Target Audience ──
    targetAudience: [
      "Students",
      "Job-seekers",
      "Professionals looking to transition into Data Science",
    ],

    // ── Certificates (brochure p.9) ──
    certificates: [
      {
        type: "Certificate of Course Completion",
        issuedBy: ["Alocodes", "Alomonx Technology"],
        certifications: [
          "ISO 9001:2015",
          "MSME (Ministry of MSME, Govt. of India)",
        ],
        signatories: [{ role: "Authorized Signatory", title: "Acedemic Head" }],
        description:
          "Successfully completed the course training program at Alocodes, demonstrating dedication, consistency, and a strong commitment to learning and skill development.",
        imageUrl: "/course_completion_alocodes.jpeg",
        certificateIdSample: "AL/26/712358424563",
      },
      {
        type: "Certificate of Internship Completion",
        issuedBy: ["Alomonx Technology", "Alocodes"],
        certifications: [
          "ISO 9001:2015",
          "MSME (Ministry of MSME, Govt. of India)",
        ],
        signatories: [{ role: "Authorized Signatory", title: "Acedemic Head" }],
        description:
          "Successfully completed the industrial internship as a role variant at Alomonx Technology, demonstrating dedication, professionalism, and strong technical skills.",
        imageUrl: "/intercert_demo.jpeg",
        certificateIdSample: "AL/26/712358424563",
      },
    ],

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
      title: "DATA SCIENCE BROCHURE",
      fileUrl: "/brochures/data-science.pdf",
      fileType: "pdf",
      fileSize: "2.5 MB",
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
      fullPrice: 9999,
      discount: 25,
      finalPrice: 7499,
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
      "The Full Stack Development Program is designed to help students and professionals master both frontend and backend development to build complete web applications from scratch.",

    // ── Why Choose ──
    whyChoose: [
      "High demand in every industry.",
      "One of the most in-demand tech skills globally.",
      "Ability to build complete applications independently.",
      "Strong freelancing and startup opportunities.",
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
          "RESTful APIS",
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
      "HTML",
      "CSS",
      "React JS",
      "Node.js",
      "Firebase",
      "MongoDB",
      "Git",
      "GitHub",
      "Vercel",
    ],

    // ── Tools & Platforms ──
    tools: [
      "HTML",
      "CSS",
      "React JS",
      "Node.js",
      "Firebase",
      "MongoDB",
      "Git",
      "GitHub",
      "Vercel",
    ],

    // ── Sample Projects ──
    sampleProjects: [
      {
        id: 1,
        title: "E-Commerce Web Application",
        skills: [
          "MERN Stack development",
          "Authentication system",
          "Payment integration",
          "Database management",
        ],
        description:
          "Develop a complete online shopping platform where users can browse products, add items to the cart, and place orders. Admin features include product management and order tracking.",
      },

      {
        id: 2,
        title: "Social Media Platform",
        skills: [
          "Frontend & backend integration",
          "Real-time database handling",
          "Authentication system",
          "API development",
        ],
        description:
          "Build a social networking platform where users can create accounts, share posts, like content, and interact with others in real time.",
      },

      {
        id: 3,
        title: "Task Management System",
        skills: [
          "CRUD operations",
          "React state management",
          "REST API development",
          "Database integration",
        ],
        description:
          "Create a productivity application where users can manage daily tasks, update progress, and organize workflows efficiently.",
      },

      {
        id: 4,
        title: "Online Learning Platform",
        skills: [
          "Full stack web development",
          "Video/content management",
          "Authentication & dashboards",
          "Backend APIs",
        ],
        description:
          "Develop an e-learning platform where students can enroll in courses, watch lessons, and track progress.",
      },

      {
        id: 5,
        title: "Real-Time Chat Application",
        skills: [
          "Socket.io integration",
          "Real-time communication",
          "Backend server development",
          "User authentication",
        ],
        description:
          "Build a live messaging platform that allows users to send and receive instant messages in real time.",
      },

      {
        id: 6,
        title: "Portfolio & Blogging Website",
        skills: [
          "Responsive web design",
          "CMS-like functionality",
          "CRUD operations",
          "Deployment",
        ],
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
      "Flipkart",
      "VIOS",
      "Wipro",
      "TCS",
      "Cognizant",
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
    targetAudience: ["Students", "Job-seekers", "Professionals"],

    // ── Certificates ──
    certificates: [
      {
        type: "Certificate of Course Completion",
        issuedBy: ["Alocodes", "Alomonx Technology"],
        certifications: [
          "ISO 9001:2015",
          "MSME (Ministry of MSME, Govt. of India)",
        ],
        signatories: [{ role: "Authorized Signatory", title: "Academic Head" }],
        description:
          "Successfully completed the course training program at Alocodes, demonstrating dedication, consistency, and a strong commitment to learning and skill development.",
        imageUrl: "/course_completion_alocodes.jpeg",
        certificateIdSample: "AL/26/712358424563",
      },
      {
        type: "Certificate of Internship Completion",
        issuedBy: ["Alomonx Technology", "Alocodes"],
        certifications: [
          "ISO 9001:2015",
          "MSME (Ministry of MSME, Govt. of India)",
        ],
        signatories: [{ role: "Authorized Signatory", title: "Acedemic Head" }],
        description:
          "Successfully completed the industrial internship as a role variant at Alomonx Technology, demonstrating dedication, professionalism, and strong technical skills.",
        imageUrl: "/intercert_demo.jpeg",
        certificateIdSample: "AL/26/712358424563",
      },
    ],

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
      fullPrice: 9999,
      discount: 25,
      finalPrice: 7499,
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
      "Our Full Stack Java Development Program offers an in-depth learning experience covering both front-end and back-end technologies using Java. this program equips students with practical skills through handson projects, enabling them to build real-world web applications with confidence.",

    // ── Why Choose ──
    whyChoose: [
      "Full Stack Java refers to the development of both the front-end (client-side) and back-end (server-side) components of web applications using Java technologies.",
      "A Full Stack Java Developer is proficient in the entire development process, from designing user interfaces to managing databases and server-side logic.",
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
        title: "Session Management",
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
      "MySQL",
      "React JS",
      "Spring Boot",
      "Servlets & Jsp",
      "REsT API Development",
      "Database Connectivity",
      "Full Stack Project Development",
    ],

    // ── Tools & Platforms ──
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "Java",
      "MySQL",
      "React JS",
      "Spring Boot",
      "Servlets & Jsp",
      "REsT API Development",
      "Database Connectivity",
      "Full Stack Project Development",
    ],

    // ── Sample Projects ──
    sampleProjects: [
      {
        id: 1,
        title: "E-Commerce Website with User Authentication",
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "React JS",
          "Java & Spring Boot",
          "REST API Development",
          "MySQL Database",
          "Login & Registration System",
          "Authentication & Authorization",
        ],
        description:
          "Develop a complete online shopping website where users can register, login, browse products, add items to cart, and place orders securely..",
      },

      {
        id: 2,
        title: "Online Learning Management System",
        skills: [
          "Frontend Development",
          "Backend Development with Java",
          "Database Management",
          "API Integration",
          "User Authentication",
          "File Upload System",
        ],
        description:
          "Create an online platform where students can enroll in courses, watch video lectures, submit assignments, and track their progress.",
      },

      {
        id: 3,
        title: "Real-Time Chat Application",
        skills: [
          "Java Programming",
          "Spring Boot",
          "WebSocket Technology",
          "React JS",
          "Real-Time Communication",
          "Database Connectivity",
        ],
        description:
          "Build a chat application that allows users to send and receive messages instantly in real time.",
      },

      {
        id: 4,
        title: "Hotel Booking and Reservation System",
        skills: [
          "Full Stack Development",
          "Database Design",
          "Booking Management",
          "Payment Integration",
          "Form Validation",
          "CRUD Operations",
        ],
        description:
          "Develop a hotel reservation system where users can search rooms, book hotels, manage reservations, and make online payments.",
      },

      {
        id: 5,
        title: "Task Management and Collaboration Tool",
        skills: [
          "React JS Frontend",
          "Java Backend Development",
          "API Development",
          "Team Collaboration Features",
          "Authentication System",
          "Database Management",
        ],
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
      "Flipkart",
      "VOIS",
      "Wipro",
      "TCS",
      "Cognizant",
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
    targetAudience: ["Students", "Job-seekers", "Professionals"],

    // ── Certificates ──
    certificates: [
      {
        type: "Certificate of Course Completion",
        issuedBy: ["Alocodes", "Alomonx Technology"],
        certifications: [
          "ISO 9001:2015",
          "MSME (Ministry of MSME, Govt. of India)",
        ],
        signatories: [{ role: "Authorized Signatory", title: "Acedemic Head" }],
        description:
          "Successfully completed the course training program at Alocodes, demonstrating dedication, consistency, and a strong commitment to learning and skill development.",
        imageUrl: "/course_completion_alocodes.jpeg",
        certificateIdSample: "AL/26/712358424563",
      },
      {
        type: "Certificate of Internship Completion",
        issuedBy: ["Alomonx Technology", "Alocodes"],
        certifications: [
          "ISO 9001:2015",
          "MSME (Ministry of MSME, Govt. of India)",
        ],
        signatories: [{ role: "Authorized Signatory", title: "Acedemic Head" }],
        description:
          "Successfully completed the industrial internship as a role variant at Alomonx Technology, demonstrating dedication, professionalism, and strong technical skills.",
        imageUrl: "/intercert_demo.jpeg",
        certificateIdSample: "AL/26/712358424563",
      },
    ],

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

    brochure: {
      title: "FULL STACK JAVA BROCHURE",
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
      fullPrice: 9999,
      discount: 25,
      finalPrice: 7499,
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
      "This program of machine learning is designed to build intelligent systems that can learn from data and make decisions without explicit programming. Unlike traditional data-focused programs, this course emphasizes: Model building, Real-world Al applications, Automation & intelligent decision systems.",

    // ── Why Choose ──
    whyChoose: [
      "Focus on Al system development, not just analysis",
      "Learn how machines learn patterns & make decisions",
      "Build production-ready ML models",
      "Covers deployment + real-world integration",
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
          "Libraries: NumPy & Pandas (basic data manipulation)",
        ],
      },

      {
        module: 2,
        title: "Learning Algorithms Deep Dive",
        topics: [
          "Linear & Logistic Regression (intuition + math)",
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
          "Real-world applications",
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
          "Flask/FastAPI basics",
          "Integrating ML with mobile/web apps",
          "Real-world Al pipelines",
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
      "python",
      "TensorFlow",
      "Jupyter",
      "pandas",
      "scikit learn",
      "NumPy",
      "seaborn",
      "matplotlib",
      "flask",
    ],

    // ── Tools & Platforms ──
    tools: [
      "python",
      "TensorFlow",
      "Jupyter",
      "pandas",
      "scikit-learn",
      "NumPy",
      "seaborn",
      "matplotlib",
      "flask",
    ],

    // ── Sample Projects ──
    sampleProjects: [
      {
        id: 1,
        title: "House Price Prediction",
        skills: [
          "Regression algorithms (Linear Regression)",
          "Data preprocessing",
          "Feature selection",
          "Model evaluation",
        ],
        description:
          "This project involves predicting house prices based on features like location, size, number of bedrooms, and amenities. Students will clean the dataset, train a regression model, and evaluate its performance using metrics like accuracy and error rate.",
        dataset: "Ames Housing Dataset or Boston Housing Dataset (Kaggle).",
      },

      {
        id: 2,
        title: "Customer Segmentation Using K-Means Clustering",
        skills: ["Unsupervised learning", "feature scaling", "clustering"],
        description:
          "Use customer data (such as annual income, spending score, age) to segment customers into different groups. The project will involve preprocessing the data and applying K-means clustering to identify customer segments.",
        dataset: "Mall Customer Dataset (Kaggle).",
      },

      {
        id: 3,
        title: "Movie Recommendation System",
        skills: [
          "Recommendation algorithms",
          "Collaborative filtering",
          "Data analysis",
          "Python libraries (Pandas, NumPy)",
        ],
        description:
          "This project focuses on building a recommendation system that suggests movies based on user preferences and behaviour. It demonstrates how platforms like Netflix suggest content.",
      },

      {
        id: 4,
        title: "Sentiment Analysis on Twitter Data",
        skills: [
          "Natural Language Processing (NLP)",
          "text preprocessing",
          "classification",
        ],
        description:
          "Using a dataset of tweets, students can build a sentiment analysis model to classify tweets as positive, negative, or neutral. They'll apply techniques like tokenization, stopword removal, and vectorization (e.g., TF-IDF) and use models like Naive Bayes or SVM.",
        dataset: "Twitter Sentiment Analysis Dataset (Kaggle or Twitter API).",
      },

      {
        id: 5,
        title: "Fraud Detection with Credit Card Data",
        skills: [
          "Classification",
          "imbalanced data handling",
          "evaluation metrics",
        ],
        description:
          "Using a credit card transactions dataset, students can build a model to detect fraudulent transactions. Techniques for handling imbalanced data, such as SMOTE (Synthetic Minority Over-sampling Technique), can be applied.",
        dataset: "Credit Card Fraud Detection Dataset (Kaggle).",
      },
    ],

    // ── Career Opportunities ──
    careerRoles: [
      "Data Scientist",
      "Machine Learning Engineer",
      "AI Engineer",
      "NLP Engineer",
      "AI product Developer",
    ],

    hiringCompanies: [
      "Flipkart",
      "VIOS",
      "Wipro",
      "TCS",
      "Cognizant",
      "Startups and Fintech Companies",
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
    targetAudience: ["Students", "Job-seekers", "Professionals"],

    // ── Certificates ──
    certificates: [
      {
        type: "Certificate of Course Completion",
        issuedBy: ["Alocodes", "Alomonx Technology"],
        certifications: [
          "ISO 9001:2015",
          "MSME (Ministry of MSME, Govt. of India)",
        ],
        signatories: [{ role: "Authorized Signatory", title: "Acedemic Head" }],
        description:
          "Successfully completed the course training program at Alocodes, demonstrating dedication, consistency, and a strong commitment to learning and skill development.",
        imageUrl: "/course_completion_alocodes.jpeg",
        certificateIdSample: "AL/26/712358424563",
      },
      {
        type: "Certificate of Internship Completion",
        issuedBy: ["Alomonx Technology", "Alocodes"],
        certifications: [
          "ISO 9001:2015",
          "MSME (Ministry of MSME, Govt. of India)",
        ],
        signatories: [{ role: "Authorized Signatory", title: "Acedemic Head" }],
        description:
          "Successfully completed the industrial internship as a role variant at Alomonx Technology, demonstrating dedication, professionalism, and strong technical skills.",
        imageUrl: "/intercert_demo.jpeg",
        certificateIdSample: "AL/26/712368424563",
      },
    ],

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
    id: "course-5",
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
      fullPrice: 9999,
      discount: 25,
      finalPrice: 7499,
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
      "Step into the future with our Artificial Intelligence program, designed to equip you with cutting edge skills in Machine Learning, Deep Learning, Natural Language Processing, and more. Gain hands-on experience through real-world projects and learn from industry experts to build smart solutions and intelligent systems. Whether you're a beginner or looking to advance your Al journey, this program offers the perfect blend of theory and practical learning to help you thrive in the tech driven world.",

    // ── Why Choose ──
    whyChoose: [
      "Learn AI, ML, Deep Learning & NLP from industry experts",
      "Build real-world projects & gain hands-on skills",
      "Career support with resume prep & interview guidance",
      "Industry-aligned, practical, and job-ready curriculum",
    ],

    // ── Curriculum ──
    curriculum: [
      {
        module: 1,
        title: "Introduction to Python for AI",
        topics: [
          "Python Basics: Variables, Data Types, Lists, Tuples, Dictionaries",
          "Functions, Conditional Statements, and Loops",
          "Hands-on: Basic Python programs for Al tasks",
        ],
      },

      {
        module: 2,
        title: "Data Handling & Visualization Libraries",
        topics: [
          "Introduction to Numpy & Pandas",
          "Data Cleaning and Manipulation",
          "Visualization with Matplotlib & Seaborn",
          "Hands-on: Building charts and plots with real datasets",
        ],
      },

      {
        module: 3,
        title: "Math & Stats for Machine Learning",
        topics: [
          "Basic Linear Algebra: Vectors, Matrices",
          "Statistics: Mean, Median, Mode, Dispersion",
          "Probability Concepts: Central Tendency, Gaussian Distribution",
          "Hands-on: Data analysis using Python",
        ],
      },

      {
        module: 4,
        title: "Supervised Machine Learning",
        topics: [
          "Linear & Logistic Regression",
          "Decision Trees and Support Vector Machines (SVM)",
          "Real-world Case Study Implementation using Scikit-learn",
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
          "Neural Networks: Basics and Architecture",
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
        title: "CNNs & Image Analysis (Optional/Advanced)",
        topics: [
          "Grayscale vs Binary Images",
          "Filters, Kernels, and CNN Architecture",
          "Mini project: Image classification basics",
        ],
      },
    ],

    // ── Skills ──
    skills: [
      "Google colab",
      "Jupyter",
      "DEEP LEARNING",
      "Python",
      "Numpy",
      "Pandas",
      "NLP",
      "Statistics & Probability",
      "Scikit-learn",
      "TensorFlow & Keras",
    ],

    // ── Tools & Platforms ──
    tools: [
      "Google colab",
      "Jupyter",
      "DEEP LEARNING",
      "Python",
      "Numpy",
      "Pandas",
      "NLP",
      "Statistics & Probability",
      "Scikit-learn",
      "TensorFlow & Keras",
    ],

    // ── Sample Projects ──
    sampleProjects: [
      {
        id: 1,
        title: "Predicting House Prices (Regression Model)",
        skills: [
          "Data preprocessing",
          "linear regression",
          "training/testing models",
        ],
        description:
          "Students can use a dataset with housing features (like number of bedrooms, square footage, etc.) to predict house prices.",
      },

      {
        id: 2,
        title: "Handwritten Digit Recognition (MNIST Dataset)",
        skills: ["Neural networks", "computer vision", "classification"],
        description:
          "A simple neural network or convolutional neural network (CNN) can be used to classify handwritten digits (0-9) from the famous MNIST dataset",
      },

      {
        id: 3,
        title: "Spam Email Detection (Binary Classification)",
        skills: [
          "Natural language processing (NLP)",
          "feature extraction (TF-IDF)",
          "classification",
        ],
        description:
          "Students can build a classifier to distinguish between spam and non-spam emails using machine learning algorithms like Naive Bayes or SVM.",
      },

      {
        id: 4,
        title: "Movie Recommendation System",
        skills: [
          "Collaborative filtering",
          "matrix factorization",
          "recommendation algorithms",
        ],
        description:
          "Using a dataset like MovieLens, students can develop a recommendation system that suggests movies based on user preferences.",
      },

      {
        id: 5,
        title: "Chatbot with Basic NLP",
        skills: [
          "Natural language understanding",
          "rule based or AI-based response generation",
        ],
        description:
          "Students can create a basic chatbot that responds to user queries using simple rule-based techniques or a basic NLP model like Bag-of-Words.",
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
      "Flipkart",
      "VOIS",
      "Wipro",
      "TCS",
      "Cognizant",
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
    targetAudience: ["Students", "Job-seekers", "Professionals"],

    // ── Certificates ──
    certificates: [
      {
        type: "Certificate of Course Completion",
        issuedBy: ["Alocodes", "Alomonx Technology"],
        certifications: [
          "ISO 9001:2015",
          "MSME (Ministry of MSME, Govt. of India)",
        ],
        signatories: [{ role: "Authorized Signatory", title: "Academic Head" }],
        description:
          "Successfully completed the course training program at Alocodes, demonstrating dedication, consistency, and a strong commitment to learning and skill development.",
        imageUrl: "/course_completion_alocodes.jpeg",
        certificateIdSample: "AL/26/712358424563",
      },
      {
        type: "Certificate of Internship Completion",
        issuedBy: ["Alomonx Technology", "Alocodes"],
        certifications: [
          "ISO 9001:2015",
          "MSME (Ministry of MSME, Govt. of India)",
        ],
        signatories: [{ role: "Authorized Signatory", title: "Acedemic Head" }],
        description:
          "Successfully completed the industrial internship as a role variant at Alomonx Technology, demonstrating dedication, professionalism, and strong technical skills.",
        imageUrl: "/intercert_demo.jpeg",
        certificateIdSample: "AL/26/712358424563",
      },
    ],

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

    brochure: {
      title: "Artificial Intelligence Brochure",
      fileUrl: "/brochures/artificial-intelligence.pdf",
      fileType: "pdf",
      fileSize: "3 MB",
      lastUpdated: "May 2026",
    },
  },

  {
    id: "course-6",
    slug: "app-development",

    // ── Identity ──
    badge: {
      text: "In Demand",
      color: "bg-blue-100 text-blue-700 dark:text-blue-300",
      rating: 4.7,
      totalRatings: "890",
      lastUpdated: "May 2026",
    },
    title: "App Development",
    category: "App Development",
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
      fullPrice: 9999,
      discount: 25,
      finalPrice: 7499,
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
      "Our App Development Program is designed to help students, beginners, and professionals build modern, scalable mobile applications. This program focuses on real-world skills using industry tools and frameworks like Flutter, Swift, and Android.",

    // ── Why Choose ──
    whyChoose: [
      "High Demand: Mobile apps are used in every industry.",
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
          "Dart/Swift / Java basics",
          "Variables, data types, operators",
          "Functions, lambda expressions",
          "Control statements (if, loops)",
          "Functions and OOP concepts",
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
          "SwiftUI (for iOS) basics",
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
      "Firebase",
      "Android Studio",
      "UI/UX Design",
      "API Integration",
      "Database Handling",
      "Figma",
    ],

    // ── Tools & Platforms ──
    tools: [
      "Flutter",
      "Swift",
      "Firebase",
      "Android Studio",
      "UI/UX Design",
      "API Integration",
      "Database Handling",
      "Figma",
    ],

    // ── Sample Projects ──
    sampleProjects: [
      {
        id: 1,
        title: "To-Do List Application",
        skills: [
          "Flutter / SwiftUI basics",
          "State management",
          "Local database (SQLite / Hive)",
          "UI design",
        ],
        description:
          "This project involves building a simple task management application where users can add, update, and delete tasks. The app will store data locally on the device and provide an intuitive interface to manage daily activities efficiently.",
      },
      {
        id: 2,
        title: "Chat Application (Real-Time Messaging)",
        skills: [
          "Firebase Authentication",
          "Cloud Firestore / Realtime Database",
          "API integration",
          "UI/UX design",
        ],
        description:
          "Students will develop a real-time chat application that allows users to send and receive messages instantly. The app will include user authentication, chat screens, and real-time data synchronization using Firebase.",
      },
      {
        id: 3,
        title: "E-Commerce Mobile App",
        skills: [
          "API integration",
          "JSON parsing",
          "State management",
          "Payment gateway basics",
          "UI/UX design",
        ],
        description:
          "Students will predict house prices using data on house features like the number of bedrooms, square footage, location, etc. They'll train a linear regression or a decision tree model and evaluate its accuracy.",
      },
      {
        id: 4,
        title: "Doctor-Patient Appointment App",
        skills: [
          "Backend integration (Firebase / APIs)",
          "Form handling",
          "Navigation and routing",
          "Notification system",
        ],
        description:
          "In this project, students will create an app that allows patients to book appointments with doctors. Features include user registration, appointment scheduling, and notifications for upcoming bookings.",
      },
      {
        id: 5,
        title: "Social Media Application",
        skills: [
          "Database management",
          "image upload & storage (Firebase Storage)",
          "API handling",
          "UI/UX design",
        ],
        description:
          "This project involves creating a social platform where users can post images, like posts, and comment. It helps students understand how large-scale apps manage user-generated content.",
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
      "Flipkart",
      "VOIS",
      "Wipro",
      "TCS",
      "Cognizant",
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
    targetAudience: ["Students", "Job-seekers", "Professionals"],

    // ── Certificates ──
    certificates: [
      {
        type: "Certificate of Course Completion",
        issuedBy: ["Alocodes", "Alomonx Technology"],
        certifications: [
          "ISO 9001:2015",
          "MSME (Ministry of MSME, Govt. of India)",
        ],
        signatories: [
          { role: "Authorized Signatory", title: "Acodermic Head" },
        ],
        description:
          "Successfully completed the course training program at Alocodes, demonstrating dedication, consistency, and a strong commitment to learning and skill development.",
        imageUrl: "/course_completion_alocodes.jpeg",
        certificateIdSample: "AL/26/712358424563",
      },
      {
        type: "Certificate of Internship Completion",
        issuedBy: ["Alomonx Technology", "Alocodes"],
        certifications: [
          "ISO 9001:2015",
          "MSME (Ministry of MSME, Govt. of India)",
        ],
        signatories: [{ role: "Authorized Signatory", title: "Acedemic Head" }],
        description:
          "Successfully completed the industrial internship as a role variant at Alomonx Technology, demonstrating dedication, professionalism, and strong technical skills.",
        imageUrl: "/intercert_demo.jpeg",
        certificateIdSample: "AL/26/712358424563",
      },
    ],

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
      title: "APP DEVELOPMENT BROCHURE",
      fileUrl: "/brochures/app-dev.pdf",
      fileType: "pdf",
      fileSize: "2.5 MB",
      lastUpdated: "March 2025",
    },
  },

  {
    id: "course-7",
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
      fullPrice: 9999,
      discount: 25,
      finalPrice: 7499,
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
      "Dive deep into the world of Digital Marketing with our expertly designed course. This program is crafted to equip you with the knowledge and hands-on experience required to design, implement, and optimize integrated circuits at a nano-scale level. Whether you're an aspiring semiconductor engineer or looking to upgrade your skills, this course covers all the essential areas",

    // ── Why Choose ──
    whyChoose: [
      "Comprehensive Syllabus: Covering SEO, PPC, Social Media, Email Marketing, Web Analytics, and more.",
      "Real-Life Projects: Work on live digital marketing campaigns",
      "Latest Tools & Techniques: Learn to use industry-leading tools like Google Analytics, SEMrush, and HubSpot.",
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
      "Canva",
      "Google Analytics",
      "mailchimp",
      "CapCut",
      "Meta",
      "SEMRUSH",
    ],

    // ── Tools & Platforms ──
    tools: [
      "Canva",
      "Google Analytics",
      "mailchimp",
      "CapCut",
      "Meta",
      "SEMRUSH",
    ],

    // ── Sample Projects ──
    sampleProjects: [
      {
        id: 1,
        title: "SEO Optimization for E-Commerce Websites",
        skills: [
          "Search Engine Optimization (SEO)",
          "Keyword Research",
          "On-Page SEO",
          "Technical SEO",
          "Content Optimization",
          "Google Analytics & Search Console",
        ],
        description:
          "Optimize an e-commerce website to improve Google search rankings and website traffic. Students will work on keywords, product pages, and SEO strategies for better online visibility.",
      },

      {
        id: 2,
        title: "Social Media Marketing Strategy for a Fashion Brand",
        skills: [
          "Social Media Marketing",
          "Content Creation",
          "Brand Promotion",
          "Audience Engagement",
          "Canva & Social Media Tools",
          "Campaign Planning",
        ],
        description:
          "Create a social media marketing strategy for a fashion brand using Instagram and Facebook. Students will design posts, plan campaigns, and increase audience engagement.",
      },

      {
        id: 3,
        title: "Email Marketing Campaign for Lead Generation",
        skills: [
          "Email Marketing",
          "Lead Generation",
          "Copywriting",
          "Email Automation",
          "Campaign Analytics",
        ],
        description:
          "Develop an email marketing campaign to attract and engage customers. Students will create email templates, promotional content, and analyse campaign performance.",
      },

      {
        id: 4,
        title: "Google Ads Campaign for a Local Business",
        skills: [
          "Google Ads",
          "PPC Marketing",
          "Keyword Planning",
          "Ad Copywriting",
          "Campaign Optimization",
        ],
        description:
          "Create and manage a Google Ads campaign for a local business. Students will learn ad creation, keyword targeting, and performance tracking.",
      },

      {
        id: 5,
        title: "Content Marketing Plan for a Tech Blog",
        skills: [
          "Content Marketing",
          "Blog Writing",
          "SEO Writing",
          "Content Strategy",
          "Digital Branding",
        ],
        description:
          "Create a content marketing plan for a technology blog. Students will write SEO-friendly blogs and promote content through digital platforms.",
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
      "Flipkart",
      "VOIS",
      "Wipro",
      "TCS",
      "Cognizant",
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
    targetAudience: ["Students", "Job-seekers", "Professionals"],

    // ── Certificates ──
    certificates: [
      {
        type: "Certificate of Course Completion",
        issuedBy: ["Alocodes", "Alomonx Technology"],
        certifications: [
          "ISO 9001:2015",
          "MSME (Ministry of MSME, Govt. of India)",
        ],
        signatories: [{ role: "Authorized Signatory", title: "Academic Head" }],
        description:
          "Successfully completed the course training program at Alocodes, demonstrating dedication, consistency, and a strong commitment to learning and skill development.",
        imageUrl: "/course_completion_alocodes.jpeg",
        certificateIdSample: "AL/26/712358424563",
      },
      {
        type: "Certificate of Internship Completion",
        issuedBy: ["Alomonx Technology", "Alocodes"],
        certifications: [
          "ISO 9001:2015",
          "MSME (Ministry of MSME, Govt. of India)",
        ],
        signatories: [{ role: "Authorized Signatory", title: "Acedemic Head" }],
        description:
          "Successfully completed the industrial internship as a role variant at Alomonx Technology, demonstrating dedication, professionalism, and strong technical skills.",
        imageUrl: "/intercert_demo.jpeg",
        certificateIdSample: "AL/26/712358424563",
      },
    ],

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

    brochure: {
      title: "Digital Marketing Brochure",
      fileUrl: "/brochures/digital-marketing.pdf",
      fileType: "pdf",
      fileSize: "3 MB",
      lastUpdated: "May 2026",
    },
  },

  {
    id: "course-8",
    slug: "ui-ux-design",

    // ── Identity ──
    badge: {
      text: "Creative",
      color: "bg-pink-100 text-pink-700 dark:text-pink-300",
      rating: 4.9,
      totalRatings: "1,120",
      lastUpdated: "March 2025",
    },
    title: "UI/UX Design",
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
      fullPrice: 9999,
      discount: 25,
      finalPrice: 7499,
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
      "Step into the creative world of UI/UX Design with our industry-oriented training program. This course is designed to help students master the principles of user interface and user experience design, from wireframing to prototyping and design systems. Learn how to create visually appealing, user-friendly, and interactive digital products used in modern mobile apps and websites.",

    // ── Why Choose (brochure p.2) ──
    whyChoose: [
      "Comprehensive Syllabus: Learn UI Design, UX Research, Wireframing, Prototyping, Design Systems, and Mobile App Design.",
      "Practical Learning: Work on live projects and real-world case studies.",
      "Portfolio Development: Build a professional design portfolio to showcase your skills",
      "Career Guidance: Get interview preparation, freelancing guidance, and placement support.",
    ],

    // ── Curriculum — 7 modules (brochure pp.3-5) ──
    curriculum: [
      {
        module: 1,
        title: "Introduction to UI/UX Design",
        topics: [
          "Basics of UI & UX",
          "Principles of Good Design",
          "User-Centered Design",
          "Design Thinking Process",
          "Importance of User Experience",
        ],
      },
      {
        module: 2,
        title: "Design Fundamentals",
        topics: [
          "Color Theory",
          "Typography",
          "Layout & Grid Systems",
          "Visual Hierarchy",
          "Spacing & Alignment",
        ],
      },
      {
        module: 3,
        title: "User Research & UX Process",
        topics: [
          "User Personas",
          "User Journey Mapping",
          "Competitor Analysis",
          "User Flow Creation",
          "Information Architecture",
          "UX Research Methods",
        ],
      },
      {
        module: 4,
        title: "Wireframing & Prototyping",
        topics: [
          "Low-Fidelity Wireframes",
          "High-Fidelity Wireframes",
          "Interactive Prototypes",
          "Clickable Designs",
          "Mobile App Wireframes",
        ],
      },
      {
        module: 5,
        title: "UI Design with Figma",
        topics: [
          "Introduction to Figma",
          "Components & Variants",
          "Auto Layout",
          "Design Systems",
          "Team Collaboration",
        ],
      },
      {
        module: 6,
        title: "Mobile App & Web Design",
        topics: [
          "Android App Design",
          "iOS App Design",
          "Responsive Website Design",
          "Dashboard Design",
          "Landing Page Design",
        ],
      },
      {
        module: 7,
        title: "Usability Testing & Accessibility",
        topics: [
          "User Testing",
          "Accessibility Principles",
          "Feedback Collection",
          "UX Improvements",
          "Error Handling Design",
        ],
      },
      {
        module: 8,
        title: "Portfolio, Freelancing & Live Projects",
        topics: [
          "Portfolio Creation",
          "Behance & Dribbble Setup",
          "Freelancing Platforms",
          "Client Communication",
          "Resume Building",
        ],
      },
    ],

    // ── Skills ──
    skills: ["Canva", "Figma", "PS", "Notion"],

    // ── Tools & Platforms ──
    tools: ["Canva", "Figma", "PS", "Notion"],

    // ── Sample Projects (brochure pp.6-7) ──
    sampleProjects: [
      {
        id: 1,
        title: "E-Commerce Mobile App Design",
        skills: [
          "UI Design",
          "UX Research",
          "Wireframing",
          "Mobile App Design",
          "Prototyping",
          "Figma",
          "User Flow Design",
        ],
        description:
          "Design a modern e-commerce mobile application with user-friendly navigation, product browsing, and checkout experience. Students will create wireframes, UI screens, and interactive prototypes..",
      },
      {
        id: 2,
        title: "Food Delivery App UI/UX Design",
        skills: [
          "Mobile UI Design",
          "User Experience Design",
          "Prototyping",
          "Typography",
          "Color Theory",
          "Figma Components",
        ],
        description:
          "Create a visually attractive and easy-to-use food delivery app interface. Students will design ordering flow, restaurant pages, and delivery tracking screens.",
      },
      {
        id: 3,
        title: "Portfolio Website Design",
        skills: [
          "Responsive Web Design",
          "Layout Design",
          "UI Components",
          "Web Prototyping",
          "User Interface Design",
        ],
        description:
          "Build a professional portfolio website design for a designer or developer. Students will focus on modern layouts, responsiveness, and personal branding.",
      },
      {
        id: 4,
        title: "Banking Dashboard Design",
        skills: [
          "Dashboard UI Design",
          "Data Visualization",
          "UX Flow",
          "Responsive Design",
          "Design Systems",
        ],
        description:
          "Design a clean and professional banking dashboard interface with analytics, account management, and transaction tracking features.",
      },
      {
        id: 5,
        title: "Travel Booking Website Design",
        skills: [
          "Web Design",
          "UX Research",
          "Wireframing",
          "Interactive Prototyping",
          "User Journey Mapping",
        ],
        description:
          "Create a travel booking platform with hotel search, ticket booking, and payment flow screens. Students will learn complete UX process and interface design.",
      },
    ],

    // ── Career Opportunities (brochure p.8) ──
    careerRoles: [
      "UI Designer",
      "UX Designer",
      "Product Designer",
      "Visual Designer",
      "Interaction Designer",
      "Web Designer",
      "Mobile App Designer",
    ],

    hiringCompanies: [
      "Flipkart",
      "VOIS",
      "Wipro",
      "TCS",
      "Cognizant",
      "Startups and Fintech Companies",
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
    targetAudience: ["Students", "Job-seekers", "Professionals"],

    // ── Certificates (brochure p.9) ──
    certificates: [
      {
        type: "Certificate of Course Completion",
        issuedBy: ["Alocodes", "Alomonx Technology"],
        certifications: [
          "ISO 9001:2015",
          "MSME (Ministry of MSME, Govt. of India)",
        ],
        signatories: [{ role: "Authorized Signatory", title: "Academic Head" }],
        description:
          "Successfully completed the course training program at Alocodes, demonstrating dedication, consistency, and a strong commitment to learning and skill development.",
        imageUrl: "/course_completion_alocodes.jpeg",
        certificateIdSample: "AL/26/712358424563",
      },
      {
        type: "Certificate of Internship Completion",
        issuedBy: ["Alomonx Technology", "Alocodes"],
        certifications: [
          "ISO 9001:2015",
          "MSME (Ministry of MSME, Govt. of India)",
        ],
        signatories: [{ role: "Authorized Signatory", title: "Acedemic Head" }],
        description:
          "Successfully completed the industrial internship as a role variant at Alomonx Technology, demonstrating dedication, professionalism, and strong technical skills.",
        imageUrl: "/intercert_demo.jpeg",
        certificateIdSample: "AL/26/712358424563",
      },
    ],

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
      totalModules: 8,
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
      title: "UI/UX Design BROCHURE",
      fileUrl: "/brochures/ui-ux.pdf",
      fileType: "pdf",
      fileSize: "2.5 MB",
      lastUpdated: "May 2026",
    },
  },

  {
    id: "course-9",
    slug: "data-analytics",

    // ── Identity ──
    badge: {
      text: "Bestseller",
      color: "bg-green-100 text-green-700 dark:text-green-300",
      rating: 4.8,
      totalRatings: "920",
      lastUpdated: "May 2026",
    },
    title: "Data Analytics",
    category: "Data Analytics",
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
      fullPrice: 9999,
      discount: 25,
      finalPrice: 7499,
      emi: {
        available: true,
        installments: [4499, 3000],
      },
      currency: "INR",
    },

    // ── Ratings ──
    rating: 4.8,
    reviewCount: 920,

    // ── Media ──
    videoThumbnail: "/thumbnails/data-analytics.jpg",
    videoTitle: "Introduction to Data Analytics",
    previewVideo: {
      thumbnail: "/thumbnails/data-analytics.jpg",
      url: "/videos/data-analytics-preview.mp4",
    },

    // ── Description (brochure p.2) ──
    description:
      "Unlock the power of data with our comprehensive Data Analytics Program. This course is designed to help students learn how to collect, process, analyze, and visualize data to make better business decisions. From Excel and SQL to Python and Power BI, students will gain practical knowledge of industry tools and analytical techniques used by companies worldwide.",

    // ── Why Choose This Program (brochure p.2) ──
    whyChoose: [
      "Industry-Focused Curriculum: Learn Excel, SQL, Python, Power BI, Tableau, and Data Visualization.",
      "Hands-On Projects: Work on real datasets and business case studies.",
      "Modern Tools & Technologies: Gain practical experience with industry-standard analytics tools.",
      "Career-Oriented Learning: Build analytical thinking and problem-solving skills.",
      "Portfolio Development: Create professional projects to showcase your expertise.",
    ],

    // ── Curriculum — 8 modules (brochure pp.3-5) ──
    curriculum: [
      {
        module: 1,
        title: "Introduction to Data Analytics",
        topics: [
          "Basics of Data Analytics",
          "Types of Data",
          "Data Analytics Lifecycle",
          "Importance of Data in Business",
          "Data-Driven Decision Making",
          "Introduction to Business Intelligence",
        ],
      },
      {
        module: 2,
        title: "Microsoft Excel for Analytics",
        topics: [
          "Excel Basics & Advanced Functions",
          "Data Cleaning in Excel",
          "Pivot Tables & Charts",
          "Conditional Formatting",
          "Data Validation",
          "Dashboard Creation in Excel",
        ],
      },
      {
        module: 3,
        title: "SQL for Data Analysis",
        topics: [
          "Introduction to Databases",
          "SQL Queries",
          "Filtering & Sorting Data",
          "Joins & Relationships",
          "Aggregate Functions",
          "Database Management Basics",
        ],
      },
      {
        module: 4,
        title: "Python for Data Analytics",
        topics: [
          "Python Basics",
          "NumPy & Pandas",
          "Data Cleaning & Processing",
          "Data Visualization with Matplotlib",
          "Exploratory Data Analysis",
          "Real Dataset Analysis",
        ],
      },
      {
        module: 5,
        title: "Data Visualization & Dashboards",
        topics: [
          "Introduction to Power BI",
          "Tableau Basics",
          "Interactive Dashboard Design",
          "Charts & Visual Reports",
          "KPI Tracking",
        ],
      },
      {
        module: 6,
        title: "Statistics & Business Analytics",
        topics: [
          "Descriptive Statistics",
          "Probability Basics",
          "Hypothesis Testing",
          "Correlation & Regression",
          "Business Metrics Analysis",
          "Predictive Analytics Basics",
        ],
      },
      {
        module: 7,
        title: "Data Cleaning & Preparation",
        topics: [
          "Handling Missing Data",
          "Removing Duplicates",
          "Data Transformation",
          "Data Formatting",
          "ETL Basics",
          "Data Quality Management",
        ],
      },
      {
        module: 8,
        title: "Portfolio, Freelancing & Live Projects",
        topics: [
          "Portfolio Building",
          "Resume Preparation",
          "Freelancing Platforms",
          "Client Reporting",
          "Interview Preparation",
          "Real-World Analytics Projects",
        ],
      },
    ],

    // ── Skills (flat list for filtering/tags brochure p.6) ──
    skills: [
      "SQL",
      "NumPy",
      "tableau",
      "pandas",
      "Jupyter",
      "Power BI",
      "Python",
    ],

    // ── Tools & Platforms (brochure p.6) ──
    tools: [
      "SQL",
      "NumPy",
      "tableau",
      "pandas",
      "Jupyter",
      "Power BI",
      "Python",
    ],

    // ── Sample Projects (brochure pp.6-7) ──
    sampleProjects: [
      {
        id: 1,
        title: "Sales Performance Dashboard",
        skills: [
          "Excel",
          "Power BI",
          "Data Visualization",
          "KPI Tracking",
          "Dashboard Design",
          "Business Reporting",
        ],
        description:
          "Create an interactive sales dashboard to analyze revenue, customer growth, and product performance. Students will work with real datasets and generate visual business insights.",
      },
      {
        id: 2,
        title: "Customer Behaviour Analysis",
        skills: [
          "Python",
          "Pandas",
          "Data Cleaning",
          "Exploratory Data Analysis",
          "Data Visualization",
        ],
        description:
          "Analyze customer purchasing behavior to identify trends and buying patterns. Students will clean datasets, perform analysis, and visualize customer insights.",
      },
      {
        id: 3,
        title: "E-Commerce Data Analytics Project",
        skills: [
          "SQL",
          "Database Management",
          "Query Optimization",
          "Reporting",
          "Business Analytics",
        ],
        description:
          "Work on an e-commerce database to analyze orders, customer activity, and product sales. Students will write SQL queries and generate analytical reports.",
      },
      {
        id: 4,
        title: "HR Analytics Dashboard",
        skills: [
          "Power BI",
          "Tableau",
          "Data Visualization",
          "Employee Data Analysis",
          "Dashboard Creation",
        ],
        description:
          "Design an HR analytics dashboard to track employee performance, attrition rates, and hiring metrics for better workforce management.",
      },
      {
        id: 5,
        title: "Social Media Analytics System",
        skills: [
          "Python",
          "Data Analysis",
          "Visualization",
          "Trend Analysis",
          "Reporting",
        ],
        description:
          "Analyze social media engagement data to identify audience trends and campaign performance. Students will generate reports and actionable insights.",
      },
    ],

    // ── Career Opportunities (brochure p.8) ──
    careerRoles: [
      "Data Analyst",
      "Business Analyst",
      "BI Analyst",
      "Data Visualization Specialist",
      "Reporting Analyst",
      "SQL Developer",
      "Power BI Developer",
    ],

    hiringCompanies: [
      "Flipkart",
      "VOIS",
      "Wipro",
      "TCS",
      "Cognizant",
      "Startups and Fintech Companies",
    ],

    // ── Outcomes ──
    outcomes: [
      "Run successful data analytics operations",
      "Design interactive dashboards and automated reports",
      "Perform end-to-end data cleaning and transformations",
      "Extract powerful metrics using advanced SQL database logic",
    ],

    // ── Full Learning Outcomes ──
    learningOutcomes: [
      "Learn and apply Excel advanced functions and macro dashboard design",
      "Write multi-table SQL queries, aggregates, and database joins",
      "Utilize Python libraries including NumPy and Pandas for data mining",
      "Build dynamic tracking visuals inside Power BI and Tableau platforms",
      "Incorporate key statistical evaluations including mathematical hypotheses",
      "Manage real-world business KPIs and complex corporate diagnostics",
    ],

    // ── Target Audience ──
    targetAudience: ["Students", "Job-seekers", "Professionals"],

    // ── Certificates (brochure p.9) ──
    certificates: [
      {
        type: "Certificate of Course Completion",
        issuedBy: ["Alocodes", "Alomonx Technology"],
        certifications: [
          "ISO 9001:2015",
          "MSME (Ministry of MSME, Govt. of India)",
        ],
        signatories: [{ role: "Authorized Signatory", title: "Acedemic Head" }],
        description:
          "Successfully completed the course training program at Alocodes, demonstrating dedication, consistency, and a strong commitment to learning and skill development.",
        imageUrl: "/course_completion_alocodes.jpeg",
        certificateIdSample: "AL/26/712358424563",
      },
      {
        type: "Certificate of Internship Completion",
        issuedBy: ["Alomonx Technology", "Alocodes"],
        certifications: [
          "ISO 9001:2015",
          "MSME (Ministry of MSME, Govt. of India)",
        ],
        signatories: [
          { role: "Authorized Signatory", title: "Acedemic HHead" },
        ],
        description:
          "Successfully completed the industrial internship as a role variant at Alomonx Technology, demonstrating dedication, professionalism, and strong technical skills.",
        imageUrl: "/intercert_demo.jpeg",
        certificateIdSample: "AL/26/712358424563",
      },
    ],

    // ── Instructors ──
    instructors: [
      {
        name: "Arjun Mehta",
        role: "Senior Data Analyst",
        avatar: "/avatars/man_ava.jpg",
      },
    ],

    // ── Curriculum Summary ──
    curriculumSummary: {
      totalModules: 8,
      totalDuration: "50+ hours on-demand video",
    },

    // ── Reviews ──
    reviews: [
      {
        name: "Priya S.",
        time: "1 week ago",
        rating: 5,
        comment:
          "The Power BI and SQL modules were incredibly detailed. Creating real sales dashboards helped me land interviews immediately.",
      },
    ],

    // ── Testimonial ──
    testimonial: {
      quote: "Unlock the power of data to drive better business decisions.",
      author: "Priya S., Business BI Analyst",
    },

    brochure: {
      title: "Data Analytics Brochure",
      fileUrl: "/brochures/data-analytics.pdf",
      fileType: "pdf",
      fileSize: "2.5 MB",
      lastUpdated: "May 2026",
    },
  },
];

export default courses;
