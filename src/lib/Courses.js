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
];

export default courses;
