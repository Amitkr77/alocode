// lib/courses.js

const courses = [
  {
    id: "course-1",
    slug: "data-science-ai-master-python-tensorflow-sql",
    badge: {
      text: "Bestseller",
      color: "bg-green-100 text-green-700 dark:text-green-300",
    },
    title: "Data Science & AI: Master Python, TensorFlow & SQL",
    duration: "24 Weeks",
    mode: "Live Online",
    batchSize: "30 Students",
    pricing: "From $199/mo",
    skills: ["Python", "SQL", "Machine Learning", "Tableau", "TensorFlow"],

    description:
      "Master Data Science and AI using Python, SQL, TensorFlow, and real-world projects designed to make you job-ready.",

    language: {
      audio: "English",
      captions: ["English (Auto)"],
    },

    instructors: [
      {
        name: "Industry Expert",
        role: "Senior Data Scientist",
        students: "90k+",
        rating: 4.7,
        courses: 6,
        bio: "Experienced data scientist with expertise in AI, ML, and big data systems.",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      },
    ],

    pricing: {
      current: 199,
      original: 599,
      discountPercent: 67,
      emi: "Starts at $25/mo",
      offerEndsIn: "12 hours",
    },

    learningOutcomes: [
      "Build 5 industry-grade AI & ML projects",
      "Master Python, SQL, and TensorFlow",
      "Deploy machine learning models",
      "Target roles: Data Scientist, AI Engineer",
    ],

    targetAudience: [
      "Beginners entering Data Science",
      "Engineers transitioning to AI roles",
      "Professionals upgrading ML skills",
    ],

    curriculumSummary: {
      sections: 12,
      lectures: 110,
      totalDuration: "60h+",
    },

    previewVideo: {
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCZZXVIyzc8i4yJxiYmjA_xB7EXdY8_lVIL2i-rkAivOE3X8gG8wca-ioNgHIqLcF_fq1Lmm0sRoI7VanRXtVlfNeZ8zTK-SJlgyI1M3KWhEqbi5GWB5MnmTkV-M7b8okkNFMAdyp-qECfEQeJHoIPTgAf1BZnQyROwjFOAtipTOoX4AbaNfcvUlrtExBGoeRHfNTjBdZAhhyiS56nQpKWlPVdTbAjoPG059SLGQz8n7qMw6KfCBzZsNbFCjTfRr2Yh7U1Nm6Uo-wf3",
      label: "Preview this course",
    },

    reviews: [
      {
        name: "Amit R.",
        rating: 5,
        time: "3 weeks ago",
        comment:
          "Very practical and well-structured course for Data Science beginners.",
      },
    ],
  },

  {
    "id": "course-2",
    "slug": "full-stack-development-mern-stack-real-world-projects",
    "badge": {
      "text": "Bestseller",
      "rating": 4.8,
      "totalRatings": 2450,
      "lastUpdated": "December 2023"
    },
    "title": "Full-Stack Development: MERN Stack & Real-world Projects",
    "duration": "20 Weeks",
    "mode": "Hybrid",
    "batchSize": "25 Students",
    "skills": ["MongoDB", "Express", "React", "Node.js"],
    "outcomes": [
      "Portfolio of 3 Full-Stack Apps",
      "Target Roles: Full Stack Developer, Frontend Engineer"
    ],
    "testimonial": {
      "quote": "This course changed my career trajectory completely.",
      "author": "Sarah J.",
      "rating": 5
    },
    "description": "Become a full-stack developer with just one course. Learn HTML, CSS, JavaScript, Node.js, React, MongoDB, and more. Build 12+ real-world projects and get hired.",
    "language": {
      "audio": "English",
      "captions": ["English (Auto)", "Spanish"]
    },
    "instructors": [
      {
        "name": "Alex Dev",
        "role": "Senior Software Engineer at Google",
        "students": "120k+",
        "rating": 4.8,
        "courses": 12,
        "bio": "Alex is a full-stack developer with 10+ years of experience. He has architected scalable systems for major tech companies and specializes in React, Node, and Cloud Architecture.",
        "avatar": "https://lh3.googleusercontent.com/aida-public/AB6AXuA8fvmWQLG-Vd4GakU7E3qEHaC8l9OPqxz6b0GP4ACdCyooM8M5pGkcN8qO79WJtj5V6LLW_TcmaQMAam9vvSZAfG_IFgXz9WwfipMfiwDQ0gChIEzkxIO35gi4m4DNEcIJ4oasNfr0raW7x0uM2Pek0WlGAd9lN9iSroo6kApmlQPIKZrN7F4dYSKIz81R0qbgtfEt6FM4evIPfSSjU0W8VRUTbYB6bv6lOW80T81d8ddxESfffclUoA0PcGkmXGNxwmqizcHclrce"
      },
      {
        "name": "Sarah Code",
        "role": "Lead Developer at Netflix",
        "students": "85k+",
        "rating": 4.9,
        "courses": 8,
        "bio": "Sarah is a frontend specialist focused on UI/UX. She has led teams that built award-winning interfaces and teaches modern CSS and JavaScript through practical examples.",
        "avatar": "https://lh3.googleusercontent.com/aida-public/AB6AXuAGMT5Kw-ALUqeFU2Q8JpiDAsUtMpfkcyzOCsRbPp5HIEl4oggOpSv3LS0cKFGn-W3Yaro2CA3LujLImAmyglXoMYthxjECjlMywQAGJOj2O-9ulg0PKhYbb0sdwBXZC_uxzcZYN260vbvQgPGJZF0tiZGpTb1jjzgO4-jktiTKuaUFcRjKHMeAtvK13jypxiyYOyP6TIOrxkszACfsEX38BOMyyyrcSRd8Vdgcyf5yVZF7MNFJsz3nQTdO7ZbXenD0RifPtu3eMaFy"
      }
    ],
    "pricing": {
      "currency": "USD",
      "current": 89,
      "original": 499,
      "discountPercent": 82,
      "monthlyPlan": "From $179/mo",
      "emi": "Starts at ₹15/mo",
      "offerEndsIn": "5 hours"
    },
    "learningOutcomes": [
      "Build 16 web development projects for your portfolio",
      "Learn JavaScript ES6+, Bootstrap 5, Tailwind CSS, Node.js, and React.js",
      "Master backend development with Node, Express, and MongoDB",
      "Work as a freelance web developer or apply for Full Stack roles",
      "Understand authentication, security, and deployment",
      "Follow professional best practices: Clean Code, Git/GitHub, debugging"
    ],
    "targetAudience": [
      "Complete beginners learning to code from scratch",
      "Students building a real-world project portfolio",
      "Professionals switching careers into tech",
      "Developers upgrading to the MERN stack"
    ],
    "curriculumSummary": {
      "sections": 15,
      "lectures": 146,
      "totalDuration": "54h 23m"
    },
    "previewVideo": {
      "thumbnail": "https://lh3.googleusercontent.com/aida-public/AB6AXuDrpJa1-otvaHGomIM-8hvc24j2DsUNvXSAoxkoH1n_hP7Bx3NOUjlikH0KPO9DOc8WQXh8BgfSGlpgjAF5vbB1AmX9kggcctPWTvQZglKPwlM7ZuPVvV5wGDbNazUCYLiImgHPpHexzt7VW4rp_YwgJ1GAOKzw-LYDmxbmbmiUrsdDLysWAbjVHTkArEiQga3jXyXpaPcHmdJ9LtKDd8GMj3bo8mDxJe6FEh55Wz-7cEXiRbQS3NQMRcVFO30UnbgwjeAyJG7Tf-7y",
      "label": "Preview this course"
    },
    "reviews": [
      {
        "name": "Michael T.",
        "rating": 5,
        "time": "2 weeks ago",
        "comment": "This course changed my life. I went from knowing nothing about coding to landing my first junior developer job in 6 months."
      },
      {
        "name": "Jessica K.",
        "rating": 4.5,
        "time": "1 month ago",
        "comment": "Excellent content on React and Node. The backend section is particularly strong."
      }
    ]
  },


  {
    id: "course-3",
    slug: "cloud-devops-aws-docker-ci-cd-pipelines",
    badge: {
      text: "Advanced",
      color: "bg-blue-100 text-blue-700 dark:text-blue-300",
    },
    title: "Cloud & DevOps: AWS, Docker & CI/CD Pipelines",
    duration: "16 Weeks",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins"],

    description:
      "Master cloud infrastructure, DevOps tools, and CI/CD pipelines used by top tech companies.",

    mode: "Live Online",
    batchSize: "20 Students",

    language: {
      audio: "English",
      captions: ["English (Auto)"],
    },

    instructors: [
      {
        name: "DevOps Architect",
        role: "Cloud Engineer",
        students: "60k+",
        rating: 4.6,
        courses: 5,
        bio: "Specialist in AWS, Kubernetes, and scalable cloud systems.",
        avatar:
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
      },
    ],

    pricing: {
      current: 149,
      original: 399,
      discountPercent: 63,
      emi: "Starts at $20/mo",
      offerEndsIn: "1 day",
    },

    learningOutcomes: [
      "Deploy production-grade cloud infrastructure",
      "Build CI/CD pipelines using Jenkins",
      "Master Docker & Kubernetes",
    ],

    targetAudience: [
      "Backend developers",
      "System administrators",
      "Cloud engineers",
    ],

    curriculumSummary: {
      sections: 10,
      lectures: 90,
      totalDuration: "45h",
    },

    previewVideo: {
      thumbnail:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
      label: "Preview this course",
    },

    reviews: [
      {
        name: "Rahul S.",
        rating: 4.5,
        time: "1 month ago",
        comment:
          "Great hands-on approach for DevOps and cloud fundamentals.",
      },
    ],
  },
  {
    id: "course-4",
    slug: "python-dsa-bootcamp-ace-your-tech-interviews",
    badge: {
      text: "Fast Track",
      color: "bg-orange-100 text-orange-700 dark:text-orange-300",
    },
    title: "Python + DSA Bootcamp: Ace Your Tech Interviews",
    duration: "12 Weeks",
    problems: "500+ Problems",

    description:
      "Crack coding interviews with Python, Data Structures & Algorithms, and mock interviews.",

    mode: "Live Online",
    batchSize: "40 Students",

    language: {
      audio: "English",
      captions: ["English (Auto)"],
    },

    instructors: [
      {
        name: "FAANG Mentor",
        role: "Senior Software Engineer",
        students: "150k+",
        rating: 4.9,
        courses: 10,
        bio: "Interview expert with experience at top product companies.",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
    ],

    pricing: {
      current: 79,
      original: 299,
      discountPercent: 74,
      emi: "Starts at $10/mo",
      offerEndsIn: "8 hours",
    },

    learningOutcomes: [
      "Solve 500+ DSA problems",
      "Master Python for interviews",
      "Clear technical interviews confidently",
    ],

    targetAudience: [
      "College students",
      "Job seekers",
      "Early-career developers",
    ],

    curriculumSummary: {
      sections: 8,
      lectures: 120,
      totalDuration: "40h",
    },

    previewVideo: {
      thumbnail:
        "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
      label: "Preview this course",
    },

    reviews: [
      {
        name: "Neha P.",
        rating: 5,
        time: "2 weeks ago",
        comment:
          "Perfect bootcamp for cracking coding interviews!",
      },
    ],
  },
  {
    id: "course-5",
    slug: "flutter-chat-app-provider-firebase-hive",
    badge: {
      text: "Popular",
      color: "bg-blue-100 text-blue-700 dark:text-blue-300",
    },
    title: "Flutter Development: Build Chat Apps with Provider & Firebase",
    duration: "2 Months",
    mode: "Live Online",
    batchSize: "25 Students",
    pricing: "From $99/mo",
    skills: ["Flutter", "Dart", "Provider", "Firebase", "Hive"],

    description:
      "Learn Flutter from scratch and build a real-time Chat Application using Provider, Firebase Authentication, Firestore, and local storage with Hive.",

    language: {
      audio: "English",
      captions: ["English (Auto)"],
    },

    instructors: [
      {
        name: "Flutter Expert",
        role: "Senior Flutter Developer",
        students: "50k+",
        rating: 4.8,
        courses: 4,
        bio: "Flutter specialist with hands-on experience building scalable mobile applications using Firebase and Provider.",
        avatar:
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
      },
    ],

    pricing: {
      current: 99,
      original: 299,
      discountPercent: 67,
      emi: "Starts at $15/mo",
      offerEndsIn: "24 hours",
    },

    learningOutcomes: [
      "Build a real-time Chat Application",
      "Master Flutter & Dart fundamentals",
      "Implement Provider for state management",
      "Use Firebase Auth, Firestore & Hive",
    ],

    targetAudience: [
      "Beginners learning Flutter",
      "Mobile developers switching to Flutter",
      "Students building real-world projects",
    ],

    curriculumSummary: {
      sections: 8,
      lectures: 64,
      totalDuration: "32h+",
    },

    previewVideo: {
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA4FfMFlz7gZ2TQz8n8LZC8y3FQbq8p8FzYtG6fTq1u8d5cZ9nq1k2f8mF4b6H",
      label: "Preview this course",
    },

    reviews: [
      {
        name: "Rahul S.",
        rating: 5,
        time: "2 weeks ago",
        comment:
          "Best Flutter course for understanding Provider and Firebase with a real chat app project.",
      },
    ],
  },
  {
    id: "course-6",
    slug: "cpp-programming-data-structures-algorithms",
    badge: {
      text: "Trending",
      color: "bg-purple-100 text-purple-700 dark:text-purple-300",
    },
    title: "C++ Programming & Data Structures Masterclass",
    duration: "10 Weeks",
    mode: "Live Online",
    batchSize: "30 Students",
    pricing: "From $79/mo",
    skills: ["C++", "OOP", "STL", "Data Structures", "Algorithms"],

    description:
      "Master C++ programming from basics to advanced concepts including OOP, STL, and Data Structures for interviews and competitive programming.",

    language: {
      audio: "English",
      captions: ["English (Auto)"],
    },

    instructors: [
      {
        name: "DSA Expert",
        role: "Senior Software Engineer",
        students: "70k+",
        rating: 4.6,
        courses: 5,
        bio: "Expert in C++ and Data Structures with years of experience mentoring developers.",
        avatar:
          "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
      },
    ],

    pricing: {
      current: 79,
      original: 199,
      discountPercent: 60,
      emi: "Starts at $10/mo",
      offerEndsIn: "18 hours",
    },

    learningOutcomes: [
      "Strong C++ fundamentals",
      "Master DSA for interviews",
      "Write optimized code",
      "Crack coding interviews",
    ],

    targetAudience: [
      "Beginners in programming",
      "Students preparing for interviews",
      "Competitive programmers",
    ],

    curriculumSummary: {
      sections: 8,
      lectures: 75,
      totalDuration: "40h+",
    },

    previewVideo: {
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCcppPreviewImage",
      label: "Preview this course",
    },

    reviews: [
      {
        name: "Neha K.",
        rating: 5,
        time: "1 month ago",
        comment:
          "Perfect course to understand C++ and data structures clearly.",
      },
    ],
  },
  {
    id: "course-7",
    slug: "javascript-modern-es6-web-development",
    badge: {
      text: "Bestseller",
      color: "bg-yellow-100 text-yellow-700 dark:text-yellow-300",
    },
    title: "JavaScript Mastery: Modern ES6+ & Web Development",
    duration: "8 Weeks",
    mode: "Live Online",
    batchSize: "35 Students",
    pricing: "From $69/mo",
    skills: ["JavaScript", "ES6+", "DOM", "Async JS", "APIs"],

    description:
      "Learn modern JavaScript from fundamentals to advanced concepts including ES6+, asynchronous programming, and real-world projects.",

    language: {
      audio: "English",
      captions: ["English (Auto)"],
    },

    instructors: [
      {
        name: "Frontend Specialist",
        role: "Senior Web Developer",
        students: "85k+",
        rating: 4.7,
        courses: 6,
        bio: "Frontend engineer with deep expertise in JavaScript and modern web technologies.",
        avatar:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      },
    ],

    pricing: {
      current: 69,
      original: 199,
      discountPercent: 65,
      emi: "Starts at $9/mo",
      offerEndsIn: "10 hours",
    },

    learningOutcomes: [
      "Master core JavaScript",
      "Build dynamic websites",
      "Work with APIs",
      "Understand async programming",
    ],

    targetAudience: [
      "Web development beginners",
      "Frontend developers",
      "Students learning JavaScript",
    ],

    curriculumSummary: {
      sections: 7,
      lectures: 60,
      totalDuration: "30h+",
    },

    previewVideo: {
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuJSPreviewImage",
      label: "Preview this course",
    },

    reviews: [
      {
        name: "Ankit M.",
        rating: 5,
        time: "2 weeks ago",
        comment:
          "JavaScript concepts are explained very clearly with examples.",
      },
    ],
  },
  {
    id: "course-8",
    slug: "reactjs-frontend-development",
    badge: {
      text: "Hot",
      color: "bg-red-100 text-red-700 dark:text-red-300",
    },
    title: "ReactJS: Build Modern Frontend Applications",
    duration: "2 Months",
    mode: "Live Online",
    batchSize: "30 Students",
    pricing: "From $109/mo",
    skills: ["ReactJS", "Hooks", "Redux", "API Integration", "Frontend"],

    description:
      "Learn ReactJS from scratch and build scalable, modern frontend applications using hooks, state management, and APIs.",

    language: {
      audio: "English",
      captions: ["English (Auto)"],
    },

    instructors: [
      {
        name: "React Specialist",
        role: "Senior Frontend Developer",
        students: "65k+",
        rating: 4.8,
        courses: 5,
        bio: "React expert with experience building production-grade frontend systems.",
        avatar:
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      },
    ],

    pricing: {
      current: 109,
      original: 349,
      discountPercent: 69,
      emi: "Starts at $18/mo",
      offerEndsIn: "16 hours",
    },

    learningOutcomes: [
      "Build complete React applications",
      "Master hooks & component patterns",
      "Work with APIs & state management",
      "Frontend job readiness",
    ],

    targetAudience: [
      "JavaScript developers",
      "Frontend engineers",
      "Students learning React",
    ],

    curriculumSummary: {
      sections: 8,
      lectures: 70,
      totalDuration: "30h+",
    },

    previewVideo: {
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuReactThumbnail",
      label: "Preview this course",
    },

    reviews: [
      {
        name: "Sneha P.",
        rating: 5,
        time: "3 weeks ago",
        comment:
          "Clear explanations and practical React projects. Highly recommended.",
      },
    ],
  },
  {
    id: "course-9",
    slug: "python-programming-data-applications",
    badge: {
      text: "Bestseller",
      color: "bg-green-100 text-green-700 dark:text-green-300",
    },
    title: "Python Programming: From Basics to Real-World Applications",
    duration: "3 Months",
    mode: "Live Online",
    batchSize: "40 Students",
    pricing: "From $85/mo",
    skills: ["Python", "OOPs", "File Handling", "APIs", "Automation"],

    description:
      "Learn Python from scratch and build real-world applications using object-oriented programming, automation, and APIs.",

    language: {
      audio: "English",
      captions: ["English (Auto)"],
    },

    instructors: [
      {
        name: "Python Expert",
        role: "Software Developer",
        students: "100k+",
        rating: 4.7,
        courses: 6,
        bio: "Python developer with experience in backend systems, automation, and data processing.",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
    ],

    pricing: {
      current: 85,
      original: 259,
      discountPercent: 67,
      emi: "Starts at $13/mo",
      offerEndsIn: "22 hours",
    },

    learningOutcomes: [
      "Master Python fundamentals",
      "Build automation & scripts",
      "Understand OOPs deeply",
      "Prepare for backend & data roles",
    ],

    targetAudience: [
      "Beginners in programming",
      "Students learning Python",
      "Professionals upskilling",
    ],

    curriculumSummary: {
      sections: 11,
      lectures: 95,
      totalDuration: "45h+",
    },

    previewVideo: {
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuPythonThumbnail",
      label: "Preview this course",
    },

    reviews: [
      {
        name: "Karan D.",
        rating: 5,
        time: "1 week ago",
        comment:
          "Perfect Python course for beginners with lots of practical examples.",
      },
    ],
  },
  {
    id: "course-10",
    slug: "java-programming-masterclass",
    badge: {
      text: "Popular",
      color: "bg-blue-100 text-blue-700 dark:text-blue-300",
    },
    title: "Java Programming: From Fundamentals to Advanced Development",
    duration: "4 Months",
    mode: "Live Online",
    batchSize: "35 Students",
    pricing: "From $95/mo",
    skills: ["Java", "OOPs", "Multithreading", "JDBC", "Collections"],

    description:
      "Learn Java from scratch and build robust, scalable applications using industry-standard practices.",

    language: {
      audio: "English",
      captions: ["English (Auto)"],
    },

    instructors: [
      {
        name: "Java Specialist",
        role: "Senior Software Engineer",
        students: "120k+",
        rating: 4.8,
        courses: 8,
        bio: "Experienced Java developer specializing in enterprise and backend systems.",
        avatar:
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
      },
    ],

    pricing: {
      current: 95,
      original: 299,
      discountPercent: 68,
      emi: "Starts at $15/mo",
      offerEndsIn: "18 hours",
    },

    learningOutcomes: [
      "Master core Java concepts",
      "Build multithreaded applications",
      "Understand JVM internals",
      "Prepare for backend roles",
    ],

    targetAudience: [
      "Programming beginners",
      "Java learners",
      "Backend developers",
    ],

    curriculumSummary: {
      sections: 13,
      lectures: 110,
      totalDuration: "55h+",
    },

    previewVideo: {
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuJavaThumbnail",
      label: "Preview this course",
    },

    reviews: [
      {
        name: "Amit S.",
        rating: 5,
        time: "2 weeks ago",
        comment:
          "Excellent Java course with clear explanations and real-world examples.",
      },
    ],
  },
  {
    id: "course-11",
    slug: "frontend-web-development",
    badge: {
      text: "Trending",
      color: "bg-purple-100 text-purple-700 dark:text-purple-300",
    },
    title: "Frontend Web Development: HTML, CSS, JavaScript & React",
    duration: "3.5 Months",
    mode: "Live Online",
    batchSize: "45 Students",
    pricing: "From $90/mo",
    skills: ["HTML", "CSS", "JavaScript", "React", "UI/UX"],

    description:
      "Become a frontend developer by building responsive and interactive web applications.",

    language: {
      audio: "English",
      captions: ["English (Auto)"],
    },

    instructors: [
      {
        name: "Frontend Architect",
        role: "UI Engineer",
        students: "150k+",
        rating: 4.8,
        courses: 7,
        bio: "Frontend expert with a passion for clean UI and scalable design systems.",
        avatar:
          "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
      },
    ],

    pricing: {
      current: 90,
      original: 279,
      discountPercent: 68,
      emi: "Starts at $14/mo",
      offerEndsIn: "20 hours",
    },

    learningOutcomes: [
      "Build responsive websites",
      "Master JavaScript & React",
      "Understand UI/UX best practices",
      "Create production-ready projects",
    ],

    targetAudience: [
      "Beginners",
      "UI designers",
      "Aspiring frontend developers",
    ],

    curriculumSummary: {
      sections: 12,
      lectures: 100,
      totalDuration: "48h+",
    },

    previewVideo: {
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuFrontendThumbnail",
      label: "Preview this course",
    },

    reviews: [
      {
        name: "Sneha R.",
        rating: 5,
        time: "3 days ago",
        comment:
          "Loved the hands-on projects and React modules.",
      },
    ],
  }
  ,
  {
    id: "course-12",
    slug: "backend-development-nodejs",
    badge: {
      text: "Hot",
      color: "bg-red-100 text-red-700 dark:text-red-300",
    },
    title: "Backend Development with Node.js & Express",
    duration: "3 Months",
    mode: "Live Online",
    batchSize: "40 Students",
    pricing: "From $100/mo",
    skills: ["Node.js", "Express", "MongoDB", "APIs", "Authentication"],

    description:
      "Build scalable backend applications using Node.js, Express, and MongoDB.",

    language: {
      audio: "English",
      captions: ["English (Auto)"],
    },

    instructors: [
      {
        name: "Backend Engineer",
        role: "Node.js Developer",
        students: "90k+",
        rating: 4.7,
        courses: 5,
        bio: "Backend specialist with expertise in REST APIs and microservices.",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      },
    ],

    pricing: {
      current: 100,
      original: 319,
      discountPercent: 69,
      emi: "Starts at $16/mo",
      offerEndsIn: "16 hours",
    },

    learningOutcomes: [
      "Build RESTful APIs",
      "Implement authentication",
      "Work with databases",
      "Deploy backend applications",
    ],

    targetAudience: [
      "JavaScript developers",
      "Backend aspirants",
      "Full-stack learners",
    ],

    curriculumSummary: {
      sections: 10,
      lectures: 85,
      totalDuration: "42h+",
    },

    previewVideo: {
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuNodeThumbnail",
      label: "Preview this course",
    },

    reviews: [
      {
        name: "Rahul P.",
        rating: 5,
        time: "1 week ago",
        comment:
          "Clear explanations of backend concepts with real APIs.",
      },
    ],
  }
  ,
  {
    id: "course-13",
    slug: "mern-stack-development",
    badge: {
      text: "Bestseller",
      color: "bg-green-100 text-green-700 dark:text-green-300",
    },
    title: "MERN Stack Development: Build Full-Stack Web Apps",
    duration: "5 Months",
    mode: "Live Online",
    batchSize: "30 Students",
    pricing: "From $120/mo",
    skills: ["MongoDB", "Express", "React", "Node.js", "JWT"],

    description:
      "Become a full-stack MERN developer by building complete web applications from scratch.",

    language: {
      audio: "English",
      captions: ["English (Auto)"],
    },

    instructors: [
      {
        name: "Full Stack Mentor",
        role: "MERN Stack Developer",
        students: "180k+",
        rating: 4.9,
        courses: 9,
        bio: "Full-stack developer with extensive MERN production experience.",
        avatar:
          "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
      },
    ],

    pricing: {
      current: 120,
      original: 399,
      discountPercent: 70,
      emi: "Starts at $19/mo",
      offerEndsIn: "12 hours",
    },

    learningOutcomes: [
      "Build full-stack applications",
      "Integrate frontend & backend",
      "Deploy MERN apps",
      "Crack full-stack interviews",
    ],

    targetAudience: [
      "Frontend developers",
      "Backend developers",
      "Career switchers",
    ],

    curriculumSummary: {
      sections: 15,
      lectures: 140,
      totalDuration: "70h+",
    },

    previewVideo: {
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuMERNThumbnail",
      label: "Preview this course",
    },

    reviews: [
      {
        name: "Neha K.",
        rating: 5,
        time: "5 days ago",
        comment:
          "Best MERN stack course with real-world projects.",
      },
    ],
  },
  {
    id: "course-14",
    slug: "java-full-stack-development",
    badge: {
      text: "Career Track",
      color: "bg-yellow-100 text-yellow-700 dark:text-yellow-300",
    },
    title: "Java Full Stack Development: Frontend + Backend",
    duration: "6 Months",
    mode: "Live Online",
    batchSize: "30 Students",
    pricing: "From $130/mo",
    skills: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],

    description:
      "Master both frontend and backend development using Java, Spring Boot, and modern UI frameworks.",

    language: {
      audio: "English",
      captions: ["English (Auto)"],
    },

    instructors: [
      {
        name: "Full Stack Java Lead",
        role: "Technical Architect",
        students: "140k+",
        rating: 4.8,
        courses: 6,
        bio: "Enterprise Java architect with full-stack expertise.",
        avatar:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      },
    ],

    pricing: {
      current: 130,
      original: 459,
      discountPercent: 72,
      emi: "Starts at $21/mo",
      offerEndsIn: "24 hours",
    },

    learningOutcomes: [
      "Develop full-stack Java apps",
      "Use Spring Boot effectively",
      "Integrate frontend frameworks",
      "Deploy enterprise applications",
    ],

    targetAudience: [
      "Java developers",
      "Final-year students",
      "Working professionals",
    ],

    curriculumSummary: {
      sections: 16,
      lectures: 150,
      totalDuration: "80h+",
    },

    previewVideo: {
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuJavaFullStackThumbnail",
      label: "Preview this course",
    },

    reviews: [
      {
        name: "Vikram J.",
        rating: 5,
        time: "2 weeks ago",
        comment:
          "Complete Java full stack roadmap with excellent mentoring.",
      },
    ],
  },
  {
    id: "course-15",
    slug: "data-science-with-ai",
    badge: {
      text: "Advanced",
      color: "bg-indigo-100 text-indigo-700 dark:text-indigo-300",
    },
    title: "Data Science with AI & Machine Learning",
    duration: "5 Months",
    mode: "Live Online",
    batchSize: "25 Students",
    pricing: "From $140/mo",
    skills: ["Python", "Machine Learning", "AI", "Deep Learning", "NLP"],

    description:
      "Learn data science and artificial intelligence by building intelligent, data-driven models.",

    language: {
      audio: "English",
      captions: ["English (Auto)"],
    },

    instructors: [
      {
        name: "AI Scientist",
        role: "Data Science Lead",
        students: "200k+",
        rating: 4.9,
        courses: 10,
        bio: "AI researcher with hands-on industry and academic experience.",
        avatar:
          "https://images.unsplash.com/photo-1552058544-f2b08422138a",
      },
    ],

    pricing: {
      current: 140,
      original: 499,
      discountPercent: 72,
      emi: "Starts at $23/mo",
      offerEndsIn: "10 hours",
    },

    learningOutcomes: [
      "Analyze real-world datasets",
      "Build ML & AI models",
      "Work with neural networks",
      "Prepare for data science roles",
    ],

    targetAudience: [
      "Graduates",
      "Engineers",
      "Data professionals",
    ],

    curriculumSummary: {
      sections: 14,
      lectures: 130,
      totalDuration: "65h+",
    },

    previewVideo: {
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDataScienceThumbnail",
      label: "Preview this course",
    },

    reviews: [
      {
        name: "Ankit M.",
        rating: 5,
        time: "1 week ago",
        comment:
          "Excellent balance of theory and hands-on AI projects.",
      },
    ],
  },
  {
    id: "course-16",
    slug: "data-analytics-with-ai",
    badge: {
      text: "Job Ready",
      color: "bg-teal-100 text-teal-700 dark:text-teal-300",
    },
    title: "Data Analytics with AI: Insights & Visualization",
    duration: "4 Months",
    mode: "Live Online",
    batchSize: "35 Students",
    pricing: "From $110/mo",
    skills: ["Python", "SQL", "Power BI", "AI Tools", "Data Visualization"],

    description:
      "Become a data analyst by leveraging AI-powered tools for insights, reporting, and decision-making.",

    language: {
      audio: "English",
      captions: ["English (Auto)"],
    },

    instructors: [
      {
        name: "Analytics Consultant",
        role: "Data Analyst",
        students: "160k+",
        rating: 4.8,
        courses: 7,
        bio: "Data analytics expert specializing in business intelligence and AI-driven insights.",
        avatar:
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      },
    ],

    pricing: {
      current: 110,
      original: 359,
      discountPercent: 69,
      emi: "Starts at $18/mo",
      offerEndsIn: "14 hours",
    },

    learningOutcomes: [
      "Analyze business data",
      "Create dashboards & reports",
      "Use AI for data insights",
      "Prepare for analyst roles",
    ],

    targetAudience: [
      "Business professionals",
      "Beginners in analytics",
      "Career switchers",
    ],

    curriculumSummary: {
      sections: 11,
      lectures: 95,
      totalDuration: "50h+",
    },

    previewVideo: {
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDataAnalyticsThumbnail",
      label: "Preview this course",
    },

    reviews: [
      {
        name: "Pooja S.",
        rating: 5,
        time: "4 days ago",
        comment:
          "Very practical course with strong focus on analytics tools.",
      },
    ],
  },






];

export default courses;
