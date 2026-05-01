// lib/courses.js

const courses = [
  {
    id: "course-1",
    slug: "data-science-machine-learning",
    badge: {
      text: "Bestseller",
      color: "bg-green-100 text-green-700 dark:text-green-300",
      rating: 4.9,
      totalRatings: "120",
      lastUpdated: "March 2025",
    },
    title: "Data Science Machine Learning",
    duration: "2 Months",
    mode: "Live Online",
    batchSize: "30 Students",
    pricing: {
      current: "399",
      original: "2999",
      discountPercent: 87,
      offerEndsIn: "3 days",
    },
    rating: 4.9,
    reviewCount: 120,
    skills: ["Python", "SQL", "Machine Learning", "Tableau", "TensorFlow"],
    description:
      "Master Data Science and Machine Learning using Python, SQL, TensorFlow, and real-world projects.",
    level: "Advanced",
    category: "Data Science",
    outcomes: [
      "Land Data Scientist roles at top tech firms",
      "Build and deploy ML models in production",
      "Analyze complex datasets with SQL & Python",
    ],
    language: {
      audio: "English",
      captions: ["English", "Hindi"],
    },
    instructors: [
      {
        name: "Arjun Mehta",
        role: "Senior Data Scientist at Google",
        avatar: "/avatars/arjun.jpg",
      },
      {
        name: "Sneha Kapoor",
        role: "ML Engineer & Kaggle Grandmaster",
        avatar: "/avatars/sneha.jpg",
      },
    ],
    previewVideo: {
      thumbnail: "/thumbnails/data-science.jpg",
      url: "/videos/data-science-preview.mp4",
    },
    videoThumbnail: "/thumbnails/data-science.jpg",
    videoTitle: "Intro to Data Science",
    curriculumSummary: {
      totalDuration: "60+ hours on-demand video",
    },
    learningOutcomes: [
      "Build end-to-end ML pipelines using Python and Scikit-learn",
      "Perform exploratory data analysis with Pandas and NumPy",
      "Create stunning data visualizations using Tableau and Matplotlib",
      "Train and evaluate deep learning models with TensorFlow",
      "Write complex SQL queries for large-scale data extraction",
      "Deploy ML models to production using Flask and cloud platforms",
      "Understand statistical concepts like regression, classification, clustering",
      "Work with real-world datasets from Kaggle and industry projects",
    ],
    targetAudience: [
      "Aspiring Data Scientists and ML Engineers",
      "Software developers looking to transition into Data Science",
      "Analysts who want to upskill with machine learning",
      "Students preparing for data science job interviews",
    ],
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
        rating: 5,
        comment:
          "Best Data Science course available in India. Got placed at a top MNC right after completing this.",
      },
      {
        name: "Anjali T.",
        time: "1 month ago",
        rating: 4.5,
        comment:
          "The TensorFlow section is gold. Would love even more content on NLP but overall outstanding.",
      },
      {
        name: "Karan D.",
        time: "2 months ago",
        rating: 5,
        comment:
          "The SQL + Python combination taught here is exactly what companies ask for in interviews.",
      },
    ],
    testimonial: {
      quote: "Transformed my career in just 6 months!",
      author: "Priya S., Data Analyst",
    },
  },

  {
    id: "course-2",
    slug: "full-stack-development",
    badge: {
      text: "Bestseller",
      color: "bg-green-100 text-green-700 dark:text-green-300",
      rating: 4.8,
      totalRatings: "1,350",
      lastUpdated: "April 2025",
    },
    title: "Full Stack Development: Build Full-Stack Web Apps",
    duration: "5 Months",
    mode: "Live Online",
    batchSize: "30 Students",
    pricing: {
      current: "499",
      original: "3499",
      discountPercent: 86,
      offerEndsIn: "2 days",
    },
    rating: 4.8,
    reviewCount: 1350,
    skills: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    description:
      "Become a full-stack developer by building full-stack applications with the MERN stack from scratch.",
    level: "Intermediate",
    category: "Full Stack",
    outcomes: [
      "Full-stack project portfolio",
      "JWT-based security",
      "MongoDB optimization",
    ],
    language: {
      audio: "English",
      captions: ["English", "Hindi"],
    },
    instructors: [
      {
        name: "Rahul Sharma",
        role: "Senior Full Stack Developer at Amazon",
        avatar: "/avatars/rahul.jpg",
      },
    ],
    previewVideo: {
      thumbnail: "/thumbnails/full-stack-dev.jpg",
      url: "/videos/full-stack-preview.mp4",
    },
    videoThumbnail: "/thumbnails/full-stack-dev.jpg",
    videoTitle: "MERN Full Stack",
    curriculumSummary: {
      totalDuration: "80+ hours on-demand video",
    },
    learningOutcomes: [
      "Build complete MERN stack applications from scratch",
      "Design RESTful APIs with Node.js and Express",
      "Create dynamic, responsive UIs using React and Tailwind CSS",
      "Implement JWT-based authentication and role-based authorization",
      "Model and optimize MongoDB databases for performance",
      "Deploy full-stack apps to Vercel, Render, and AWS",
      "Integrate third-party APIs and payment gateways",
      "Write clean, maintainable code following industry best practices",
    ],
    targetAudience: [
      "Beginners who want to become full-stack developers",
      "Frontend developers looking to master backend skills",
      "Students preparing for software engineering job roles",
      "Freelancers who want to build complete web products",
    ],
    reviews: [
      {
        name: "Deepak S.",
        time: "2 weeks ago",
        rating: 5,
        comment:
          "Complete dev transformation. The way MERN stack is taught here is unmatched anywhere online.",
      },
      {
        name: "Anita M.",
        time: "1 month ago",
        rating: 4.5,
        comment:
          "Very well structured. The projects really helped solidify concepts. Got my first freelance client during the course!",
      },
      {
        name: "Vikram P.",
        time: "1 month ago",
        rating: 5,
        comment:
          "The JWT and security section alone is worth the price. Finally understand how auth works end to end.",
      },
      {
        name: "Meera R.",
        time: "2 months ago",
        rating: 4.5,
        comment:
          "Loved the live sessions. Mentors are always available to clear doubts. Highly recommended!",
      },
    ],
    testimonial: {
      quote: "Complete dev transformation.",
      author: "Deepak S., MERN Dev",
    },
  },

  {
    id: "course-3",
    slug: "java-full-stack-development",
    badge: {
      text: "Career Track",
      color: "bg-yellow-100 text-yellow-700 dark:text-yellow-300",
      rating: 4.7,
      totalRatings: "560",
      lastUpdated: "February 2025",
    },
    title: "Java Full Stack Development: Frontend + Backend",
    duration: "3 Months",
    mode: "Live Online",
    batchSize: "30 Students",
    pricing: {
      current: "449",
      original: "2999",
      discountPercent: 85,
      offerEndsIn: "5 days",
    },
    rating: 4.7,
    reviewCount: 560,
    skills: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
    description:
      "Master full-stack Java development using Spring Boot and React to build enterprise-grade web applications.",
    level: "Advanced",
    category: "Full Stack",
    outcomes: [
      "Spring Boot microservices",
      "React-Spring integration",
      "SQL database design",
    ],
    language: {
      audio: "English",
      captions: ["English", "Hindi"],
    },
    instructors: [
      {
        name: "Pooja Yadav",
        role: "Java Architect at Infosys",
        avatar: "/avatars/pooja.jpg",
      },
      {
        name: "Amit Verma",
        role: "Spring Boot Expert & Tech Lead",
        avatar: "/avatars/amit.jpg",
      },
    ],
    previewVideo: {
      thumbnail: "/thumbnails/java-full.jpg",
      url: "/videos/java-full-stack-preview.mp4",
    },
    videoThumbnail: "/thumbnails/java-full.jpg",
    videoTitle: "Java Full Stack",
    curriculumSummary: {
      totalDuration: "55+ hours on-demand video",
    },
    learningOutcomes: [
      "Build production-ready Spring Boot REST APIs",
      "Design microservices architecture with Spring Cloud",
      "Create dynamic frontend UIs with React and Redux",
      "Connect React frontend seamlessly with Spring Boot backend",
      "Design normalized MySQL databases with complex queries",
      "Implement Spring Security with JWT for authentication",
      "Write unit and integration tests with JUnit and Mockito",
      "Deploy Java applications on AWS EC2 and Docker containers",
    ],
    targetAudience: [
      "Java developers who want to add full-stack skills",
      "Computer science graduates targeting service-based companies",
      "Developers aiming for enterprise software roles",
      "Anyone preparing for Java developer interviews",
    ],
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
    testimonial: {
      quote: "Enterprise-ready skills.",
      author: "Pooja Y., Full-Stack Java",
    },
  },

  {
    id: "course-4",
    slug: "ai",
    badge: {
      text: "Advanced",
      color: "bg-indigo-100 text-indigo-700 dark:text-indigo-300",
      rating: 4.9,
      totalRatings: "890",
      lastUpdated: "April 2025",
    },
    title: "Artificial Intelligence",
    duration: "2 Months",
    mode: "Live Online",
    batchSize: "25 Students",
    pricing: {
      current: "549",
      original: "3999",
      discountPercent: 86,
      offerEndsIn: "1 day",
    },
    rating: 4.9,
    reviewCount: 890,
    skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision", "AI"],
    description:
      "Build intelligent AI systems and cutting-edge machine learning models using real-world datasets and modern frameworks.",
    level: "Advanced",
    category: "Data Science",
    outcomes: [
      "Deep learning neural networks",
      "NLP for text analysis",
      "AI ethics and deployment",
    ],
    language: {
      audio: "English",
      captions: ["English", "Hindi"],
    },
    instructors: [
      {
        name: "Tarun Joshi",
        role: "AI Research Engineer at Microsoft",
        avatar: "/avatars/tarun.jpg",
      },
    ],
    previewVideo: {
      thumbnail: "/thumbnails/ai.jpg",
      url: "/videos/ai-preview.mp4",
    },
    videoThumbnail: "/thumbnails/ai.jpg",
    videoTitle: "AI Model Building",
    curriculumSummary: {
      totalDuration: "50+ hours on-demand video",
    },
    learningOutcomes: [
      "Design and train deep neural networks using TensorFlow and PyTorch",
      "Build NLP models for sentiment analysis, chatbots, and text classification",
      "Implement Computer Vision solutions with CNNs and OpenCV",
      "Fine-tune large language models (LLMs) for custom tasks",
      "Apply reinforcement learning techniques to real-world problems",
      "Deploy AI models as scalable APIs using FastAPI and Docker",
      "Understand and apply AI ethics, bias mitigation, and responsible AI",
      "Work with Hugging Face transformers and pre-trained models",
    ],
    targetAudience: [
      "Data scientists who want to specialise in deep learning",
      "Software engineers transitioning into AI roles",
      "Researchers looking to apply AI in their domain",
      "ML enthusiasts who want to go beyond basic machine learning",
    ],
    reviews: [
      {
        name: "Tarun J.",
        time: "1 week ago",
        rating: 5,
        comment:
          "AI innovation at fingertips. The LLM fine-tuning module is something you won't find anywhere else at this price.",
      },
      {
        name: "Divya P.",
        time: "2 weeks ago",
        rating: 5,
        comment:
          "Finally understood transformers and attention mechanisms. The instructor explains complex topics with such clarity.",
      },
      {
        name: "Sanjay M.",
        time: "1 month ago",
        rating: 4.5,
        comment:
          "The computer vision projects are amazing. Built a real-time object detection app during the course!",
      },
      {
        name: "Riya S.",
        time: "1 month ago",
        rating: 5,
        comment:
          "Got an AI Engineer role at a startup after completing this. The portfolio projects made my resume stand out.",
      },
    ],
    testimonial: {
      quote: "AI innovation at fingertips.",
      author: "Tarun J., AI Engineer",
    },
  },

  {
    id: "course-5",
    slug: "app-development",
    badge: {
      text: "In Demand",
      color: "bg-blue-100 text-blue-700 dark:text-blue-300",
      rating: 4.7,
      totalRatings: "890",
      lastUpdated: "March 2025",
    },
    title: "App Development with React Native & AI",
    duration: "2 Months",
    mode: "Live Online",
    batchSize: "30 Students",
    pricing: {
      current: "429",
      original: "2999",
      discountPercent: 86,
      offerEndsIn: "4 days",
    },
    rating: 4.7,
    reviewCount: 890,
    skills: [
      "React Native",
      "JavaScript",
      "API Integration",
      "Firebase",
      "AI APIs",
    ],
    description:
      "Build cross-platform mobile apps for Android and iOS with React Native, Firebase, and cutting-edge AI integrations.",
    level: "Intermediate",
    category: "Development",
    outcomes: [
      "Build Android & iOS apps",
      "Integrate AI features like chatbots",
      "Deploy apps to Play Store",
    ],
    language: {
      audio: "English",
      captions: ["English", "Hindi"],
    },
    instructors: [
      {
        name: "Rahul Singh",
        role: "Mobile Developer & App Entrepreneur",
        avatar: "/avatars/rahul-s.jpg",
      },
    ],
    previewVideo: {
      thumbnail: "/thumbnails/app-dev.jpg",
      url: "/videos/app-dev-preview.mp4",
    },
    videoThumbnail: "/thumbnails/app-dev.jpg",
    videoTitle: "Build Your First App",
    curriculumSummary: {
      totalDuration: "45+ hours on-demand video",
    },
    learningOutcomes: [
      "Build fully functional Android and iOS apps with a single codebase",
      "Design beautiful mobile UIs with React Native components and StyleSheet",
      "Implement real-time databases and authentication using Firebase",
      "Integrate AI APIs like OpenAI and Google Vision into mobile apps",
      "Manage app state efficiently with Redux and Context API",
      "Handle navigation and deep linking with React Navigation",
      "Push notifications, offline support, and performance optimization",
      "Publish your app to Google Play Store and Apple App Store",
    ],
    targetAudience: [
      "Web developers who want to build mobile apps",
      "Aspiring mobile app developers with basic JavaScript knowledge",
      "Entrepreneurs who want to build their own app idea",
      "Freelancers looking to add mobile development to their services",
    ],
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
          "The Firebase integration section saved me weeks of learning on my own. Very practical approach.",
      },
      {
        name: "Akash G.",
        time: "1 month ago",
        rating: 5,
        comment:
          "Built an AI-powered fitness app as my capstone project. Got 3 freelance offers right after!",
      },
      {
        name: "Simran K.",
        time: "2 months ago",
        rating: 4.5,
        comment:
          "Great course for learning cross-platform development. The AI API integration module is the best part.",
      },
    ],
    testimonial: {
      quote: "From idea to app store — this course made it simple.",
      author: "Rahul S., App Developer",
    },
  },

  {
    id: "course-6",
    slug: "digital-marketing",
    badge: {
      text: "Hot",
      color: "bg-orange-100 text-orange-700 dark:text-orange-300",
      rating: 4.6,
      totalRatings: "760",
      lastUpdated: "April 2025",
    },
    title: "Digital Marketing",
    duration: "2 Months",
    mode: "Live Online",
    batchSize: "40 Students",
    pricing: {
      current: "299",
      original: "1999",
      discountPercent: 85,
      offerEndsIn: "6 days",
    },
    rating: 4.6,
    reviewCount: 760,
    skills: [
      "SEO",
      "Social Media Marketing",
      "Google Ads",
      "Content Marketing",
      "AI Tools",
    ],
    description:
      "Master digital marketing strategies and leverage AI tools to grow brands, drive traffic, and generate leads faster.",
    level: "Beginner",
    category: "Marketing",
    outcomes: [
      "Run successful ad campaigns",
      "Grow social media presence",
      "Use AI for content & automation",
    ],
    language: {
      audio: "English",
      captions: ["English", "Hindi"],
    },
    instructors: [
      {
        name: "Priya Kulkarni",
        role: "Digital Marketing Lead at Zomato",
        avatar: "/avatars/priya-k.jpg",
      },
    ],
    previewVideo: {
      thumbnail: "/thumbnails/digital-mark.jpg",
      url: "/videos/digital-marketing-preview.mp4",
    },
    videoThumbnail: "/thumbnails/digital-mark.jpg",
    videoTitle: "Marketing That Converts",
    curriculumSummary: {
      totalDuration: "40+ hours on-demand video",
    },
    learningOutcomes: [
      "Rank websites on Google's first page with advanced SEO techniques",
      "Plan and execute high-converting Google Ads and Meta Ads campaigns",
      "Grow brand presence on Instagram, LinkedIn, YouTube, and Twitter",
      "Create compelling content strategies using AI writing tools",
      "Build automated email marketing funnels with Mailchimp and HubSpot",
      "Analyse campaign performance with Google Analytics 4 and Search Console",
      "Use AI tools like ChatGPT, Jasper, and Canva AI for content at scale",
      "Understand influencer marketing, affiliate marketing, and viral strategies",
    ],
    targetAudience: [
      "Business owners and entrepreneurs wanting to grow online",
      "Marketing professionals looking to upgrade their digital skills",
      "Freshers exploring a career in digital marketing",
      "Freelancers who want to offer marketing services to clients",
    ],
    reviews: [
      {
        name: "Priya K.",
        time: "2 weeks ago",
        rating: 5,
        comment:
          "Helped me scale my business online quickly. Revenue doubled in 2 months after applying what I learned.",
      },
      {
        name: "Mohit A.",
        time: "1 month ago",
        rating: 4.5,
        comment:
          "The Google Ads module is incredibly detailed. I was managing ₹50k ad spend confidently within a week.",
      },
      {
        name: "Kavya L.",
        time: "1 month ago",
        rating: 4.5,
        comment:
          "Best part is the AI tools section. ChatGPT + Canva AI workflow changed how I produce content completely.",
      },
      {
        name: "Nikhil S.",
        time: "2 months ago",
        rating: 5,
        comment:
          "Got my first digital marketing job at a startup in Bangalore. The practical assignments made all the difference.",
      },
    ],
    testimonial: {
      quote: "Helped me scale my business online quickly.",
      author: "Priya K., Entrepreneur",
    },
  },

  {
    id: "course-7",
    slug: "ui-ux-design",
    badge: {
      text: "Creative",
      color: "bg-pink-100 text-pink-700 dark:text-pink-300",
      rating: 4.9,
      totalRatings: "1,120",
      lastUpdated: "March 2025",
    },
    title: "UI/UX Design with Figma & AI Tools",
    duration: "2 Months",
    mode: "Live Online",
    batchSize: "25 Students",
    pricing: {
      current: "349",
      original: "2499",
      discountPercent: 86,
      offerEndsIn: "3 days",
    },
    rating: 4.9,
    reviewCount: 1120,
    skills: [
      "Figma",
      "User Research",
      "Wireframing",
      "Prototyping",
      "AI Design Tools",
    ],
    description:
      "Design stunning, intuitive user experiences using Figma, AI design tools, and industry-standard UX methodologies.",
    level: "Beginner",
    category: "Design",
    outcomes: [
      "Create high-fidelity UI designs",
      "Build interactive prototypes",
      "Understand user behavior & UX principles",
    ],
    language: {
      audio: "English",
      captions: ["English", "Hindi"],
    },
    instructors: [
      {
        name: "Sneha Rao",
        role: "Lead UI/UX Designer at Swiggy",
        avatar: "/avatars/sneha-r.jpg",
      },
    ],
    previewVideo: {
      thumbnail: "/thumbnails/ui-ux.jpg",
      url: "/videos/ui-ux-preview.mp4",
    },
    videoThumbnail: "/thumbnails/ui-ux.jpg",
    videoTitle: "Design Like a Pro",
    curriculumSummary: {
      totalDuration: "45+ hours on-demand video",
    },
    learningOutcomes: [
      "Master Figma from scratch — components, auto-layout, variants, and Dev Mode",
      "Conduct user research with interviews, surveys, and usability testing",
      "Create low-fidelity wireframes and transform them into polished high-fidelity designs",
      "Build interactive, clickable prototypes to present to stakeholders",
      "Design with accessibility in mind — WCAG guidelines and inclusive design",
      "Use AI design tools like Galileo AI, Uizard, and Framer AI to speed up workflow",
      "Build and maintain a comprehensive design system from scratch",
      "Prepare a professional UX case study portfolio to land your first design job",
    ],
    targetAudience: [
      "Beginners with zero design experience who want to enter the design field",
      "Graphic designers transitioning into UI/UX",
      "Developers who want to improve their design sensibility",
      "Product managers looking to better collaborate with design teams",
    ],
    reviews: [
      {
        name: "Sneha R.",
        time: "1 week ago",
        rating: 5,
        comment:
          "My design skills improved drastically. Got hired as a UI Designer at a product startup within a month of finishing.",
      },
      {
        name: "Farhan A.",
        time: "2 weeks ago",
        rating: 5,
        comment:
          "The Figma auto-layout and components section is the most thorough I've seen. Worth every rupee.",
      },
      {
        name: "Ishita C.",
        time: "1 month ago",
        rating: 4.5,
        comment:
          "The AI design tools section is ahead of its time. Galileo AI + Figma workflow is super powerful.",
      },
      {
        name: "Harsh P.",
        time: "2 months ago",
        rating: 5,
        comment:
          "Built a complete portfolio with 3 UX case studies during the course. Instructor feedback was invaluable.",
      },
    ],
    testimonial: {
      quote: "My design skills improved drastically with this course.",
      author: "Sneha R., UI Designer",
    },
  },
];

export default courses;
