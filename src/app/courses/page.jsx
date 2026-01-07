"use client";

import React, { useState, useMemo,useEffect } from "react";

import {
  Play,
  FileVideoCamera,
  Group,
  CheckCircle,
  Download,
  RefreshCcw,
  Search,
  Star,
  Filter,
  Grid,
  List,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useRouter, useSearchParams } from "next/navigation";

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
    pricing: "From ₹199/mo",
    rating: 4.9,
    reviewCount: 1200,
    skills: ["Python", "SQL", "Machine Learning", "Tableau", "TensorFlow"],
    description:
      "Master Data Science and AI using Python, SQL, TensorFlow, and real-world projects.",
    level: "Advanced",
    category: "Data Science",
    outcomes: [
      "Land Data Scientist roles at top tech firms",
      "Build and deploy ML models in production",
      "Analyze complex datasets with SQL & Python",
    ],
    videoThumbnail: "/thumbnails/data-science.jpg",
    videoTitle: "Intro to Data Science",
    testimonial: {
      quote: "Transformed my career in just 6 months!",
      author: "Priya S., Data Analyst",
    },
  },
  {
    id: "course-2",
    slug: "full-stack-development-mern-stack-real-world-projects",
    badge: {
      text: "Bestseller",
      color: "bg-green-100 text-green-700 dark:text-green-300",
    },
    title: "Full-Stack Development: MERN Stack & Real-world Projects",
    duration: "20 Weeks",
    mode: "Hybrid",
    batchSize: "25 Students",
    pricing: "From ₹179/mo",
    rating: 4.8,
    reviewCount: 950,
    skills: ["MongoDB", "Express", "React", "Node.js"],
    description:
      "Become a full-stack developer by building real-world MERN stack applications.",
    level: "Intermediate",
    category: "Full Stack",
    outcomes: [
      "Develop end-to-end web applications",
      "Secure APIs with authentication",
      "Deploy apps to cloud platforms",
    ],
    videoThumbnail: "/thumbnails/mern-stack.jpg",
    videoTitle: "Building a MERN App",
    testimonial: {
      quote: "Hands-on projects made it real!",
      author: "Amit K., Full-Stack Dev",
    },
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
    mode: "Live Online",
    batchSize: "20 Students",
    pricing: "From ₹149/mo",
    rating: 4.7,
    reviewCount: 650,
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins"],
    description:
      "Master cloud infrastructure and DevOps tools used by top tech companies.",
    level: "Advanced",
    category: "DevOps",
    outcomes: [
      "Automate deployments with CI/CD",
      "Manage scalable cloud infrastructure",
      "Containerize apps with Docker",
    ],
    videoThumbnail: "/thumbnails/devops.jpg",
    videoTitle: "AWS DevOps Demo",
    testimonial: {
      quote: "Elevated my infra skills overnight.",
      author: "Rohan M., DevOps Engineer",
    },
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
    mode: "Live Online",
    batchSize: "40 Students",
    pricing: "From ₹79/mo",
    rating: 4.9,
    reviewCount: 1800,
    skills: ["Python", "DSA", "Algorithms", "Problem Solving"],
    description:
      "Crack coding interviews with Python, Data Structures, and Algorithms.",
    level: "Intermediate",
    category: "Programming",
    outcomes: [
      "Solve 200+ LeetCode problems",
      "Optimize algorithms for efficiency",
      "Prepare for FAANG interviews",
    ],
    videoThumbnail: "/thumbnails/python-dsa.jpg",
    videoTitle: "DSA Interview Tips",
    testimonial: {
      quote: "Landed my dream job at Google!",
      author: "Sneha R., Software Engineer",
    },
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
    pricing: "From ₹99/mo",
    rating: 4.6,
    reviewCount: 450,
    skills: ["Flutter", "Dart", "Provider", "Firebase", "Hive"],
    description:
      "Learn Flutter and build a real-time chat application using Firebase.",
    level: "Intermediate",
    category: "Mobile",
    outcomes: [
      "Build cross-platform mobile apps",
      "Integrate real-time databases",
      "State management with Provider",
    ],
    videoThumbnail: "/thumbnails/flutter.jpg",
    videoTitle: "Flutter Chat App",
    testimonial: {
      quote: "Flutter magic in weeks!",
      author: "Vikram P., Mobile Dev",
    },
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
    pricing: "From ₹79/mo",
    rating: 4.8,
    reviewCount: 720,
    skills: ["C++", "OOP", "STL", "Data Structures", "Algorithms"],
    description: "Master C++ programming and data structures for interviews.",
    level: "Intermediate",
    category: "Programming",
    outcomes: [
      "Implement efficient data structures",
      "OOP principles in C++",
      "STL for competitive coding",
    ],
    videoThumbnail: "/thumbnails/cpp.jpg",
    videoTitle: "C++ Basics",
    testimonial: {
      quote: "Solid foundation for systems programming.",
      author: "Lakshmi T., C++ Dev",
    },
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
    pricing: "From ₹69/mo",
    rating: 4.9,
    reviewCount: 2100,
    skills: ["JavaScript", "ES6+", "DOM", "Async JS", "APIs"],
    description: "Learn modern JavaScript and build dynamic web applications.",
    level: "Beginner",
    category: "Frontend",
    outcomes: [
      "Master async programming",
      "Build interactive UIs",
      "Fetch and handle APIs",
    ],
    videoThumbnail: "/thumbnails/js.jpg",
    videoTitle: "Modern JS Guide",
    testimonial: {
      quote: "JS from zero to hero!",
      author: "Rajesh N., Web Dev",
    },
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
    pricing: "From ₹109/mo",
    rating: 4.7,
    reviewCount: 890,
    skills: ["ReactJS", "Hooks", "Redux", "API Integration", "Frontend"],
    description:
      "Build scalable frontend applications using React and modern tools.",
    level: "Intermediate",
    category: "Frontend",
    outcomes: [
      "Component-based architecture",
      "State management with Redux",
      "Performance optimization",
    ],
    videoThumbnail: "/thumbnails/react.jpg",
    videoTitle: "React Hooks Deep Dive",
    testimonial: {
      quote: "React mastery unlocked.",
      author: "Meera D., Frontend Engineer",
    },
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
    pricing: "From ₹85/mo",
    rating: 4.8,
    reviewCount: 1450,
    skills: ["Python", "OOPs", "APIs", "Automation"],
    description:
      "Learn Python and build real-world automation and applications.",
    level: "Beginner",
    category: "Programming",
    outcomes: [
      "Automate daily tasks",
      "OOP for scalable code",
      "API integrations",
    ],
    videoThumbnail: "/thumbnails/python-basics.jpg",
    videoTitle: "Python for Beginners",
    testimonial: {
      quote: "Perfect starter course.",
      author: "Arun V., Python Dev",
    },
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
    pricing: "From ₹95/mo",
    rating: 4.6,
    reviewCount: 780,
    skills: ["Java", "OOPs", "Multithreading", "JDBC", "Collections"],
    description: "Master Java and build scalable backend applications.",
    level: "Intermediate",
    category: "Backend",
    outcomes: [
      "Multithreaded applications",
      "Database connectivity",
      "Enterprise-level Java",
    ],
    videoThumbnail: "/thumbnails/java.jpg",
    videoTitle: "Java OOP Essentials",
    testimonial: {
      quote: "Java pro in months.",
      author: "Sonia G., Java Dev",
    },
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
    pricing: "From ₹90/mo",
    rating: 4.9,
    reviewCount: 1600,
    skills: ["HTML", "CSS", "JavaScript", "React", "UI/UX"],
    description:
      "Become a frontend developer by building responsive web applications.",
    level: "Beginner",
    category: "Frontend",
    outcomes: [
      "Responsive design mastery",
      "Modern JS frameworks",
      "UI/UX best practices",
    ],
    videoThumbnail: "/thumbnails/frontend.jpg",
    videoTitle: "Frontend Fundamentals",
    testimonial: {
      quote: "From novice to pro frontend.",
      author: "Karan L., UI Designer",
    },
  },
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
    pricing: "From ₹100/mo",
    rating: 4.7,
    reviewCount: 1120,
    skills: ["Node.js", "Express", "MongoDB", "APIs", "Authentication"],
    description:
      "Build scalable backend applications using Node.js and Express.",
    level: "Intermediate",
    category: "Backend",
    outcomes: [
      "RESTful API design",
      "User authentication systems",
      "Scalable server architecture",
    ],
    videoThumbnail: "/thumbnails/nodejs.jpg",
    videoTitle: "Node.js Backend",
    testimonial: {
      quote: "Backend beast mode activated.",
      author: "Neha B., Backend Dev",
    },
  },
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
    pricing: "From ₹120/mo",
    rating: 4.8,
    reviewCount: 1350,
    skills: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    description:
      "Become a MERN stack developer by building full-stack applications.",
    level: "Intermediate",
    category: "Full Stack",
    outcomes: [
      "Full-stack project portfolio",
      "JWT-based security",
      "MongoDB optimization",
    ],
    videoThumbnail: "/thumbnails/mern.jpg",
    videoTitle: "MERN Full Stack",
    testimonial: {
      quote: "Complete dev transformation.",
      author: "Deepak S., MERN Dev",
    },
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
    pricing: "From ₹130/mo",
    rating: 4.7,
    reviewCount: 560,
    skills: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
    description:
      "Master full-stack Java development using Spring Boot and React.",
    level: "Advanced",
    category: "Full Stack",
    outcomes: [
      "Spring Boot microservices",
      "React-Spring integration",
      "SQL database design",
    ],
    videoThumbnail: "/thumbnails/java-fullstack.jpg",
    videoTitle: "Java Full Stack",
    testimonial: {
      quote: "Enterprise-ready skills.",
      author: "Pooja Y., Full-Stack Java",
    },
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
    pricing: "From ₹140/mo",
    rating: 4.9,
    reviewCount: 890,
    skills: ["Python", "Machine Learning", "AI", "Deep Learning", "NLP"],
    description:
      "Build intelligent AI and machine learning models using real datasets.",
    level: "Advanced",
    category: "Data Science",
    outcomes: [
      "Deep learning neural networks",
      "NLP for text analysis",
      "AI ethics and deployment",
    ],
    videoThumbnail: "/thumbnails/ai-ml.jpg",
    videoTitle: "AI Model Building",
    testimonial: {
      quote: "AI innovation at fingertips.",
      author: "Tarun J., AI Engineer",
    },
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
    pricing: "From ₹110/mo",
    rating: 4.8,
    reviewCount: 1020,
    skills: ["Python", "SQL", "Power BI", "AI Tools", "Data Visualization"],
    description:
      "Analyze business data and generate insights using AI-powered tools.",
    level: "Intermediate",
    category: "Data Science",
    outcomes: [
      "Interactive dashboards in Power BI",
      "AI-driven predictive analytics",
      "Storytelling with data",
    ],
    videoThumbnail: "/thumbnails/analytics.jpg",
    videoTitle: "Data Viz Mastery",
    testimonial: {
      quote: "Insights that drive decisions.",
      author: "Anita H., Analyst",
    },
  },
];

const durationOptions = [
  { value: "all", label: "All Durations" },
  { value: "short", label: "< 3 Months" },
  { value: "medium", label: "3-6 Months" },
  { value: "long", label: "> 6 Months" },
];

const levelOptions = [
  { value: "all", label: "All Levels" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

const categoryOptions = [
  { value: "all", label: "All Categories" },
  { value: "Data Science", label: "Data Science" },
  { value: "Full Stack", label: "Full Stack" },
  { value: "DevOps", label: "DevOps" },
  { value: "Programming", label: "Programming" },
  { value: "Mobile", label: "Mobile" },
  { value: "Frontend", label: "Frontend" },
  { value: "Backend", label: "Backend" },
];

export default function CoursesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const [viewMode, setViewMode] = useState("grid");
  const [openItems, setOpenItems] = useState(new Set());

  // Sync category from URL params
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category") || "all";
    setSelectedCategory(categoryFromUrl);
  }, [searchParams]);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete("category");
    } else {
      params.set("category", value);
    }
    router.push(`/courses?${params.toString()}`, { scroll: false });
  };

  const filteredCourses = useMemo(() => {
    return courses
      .filter((course) => {
        const matchesSearch =
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.skills.some((skill) =>
            skill.toLowerCase().includes(searchTerm.toLowerCase())
          );
        const matchesDuration =
          selectedDuration === "all" ||
          (selectedDuration === "short" && course.duration.includes("< 3")) ||
          (selectedDuration === "medium" &&
            parseInt(course.duration) >= 3 &&
            parseInt(course.duration) <= 6) ||
          (selectedDuration === "long" && parseInt(course.duration) > 6);
        const matchesLevel =
          selectedLevel === "all" ||
          course.level.toLowerCase() === selectedLevel;
        const matchesCategory =
          selectedCategory === "all" || course.category === selectedCategory;
        return (
          matchesSearch && matchesDuration && matchesLevel && matchesCategory
        );
      })
      .sort((a, b) => {
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "price")
          return (
            parseInt(a.pricing.replace(/[^\d]/g, "")) -
            parseInt(b.pricing.replace(/[^\d]/g, ""))
          );
        if (sortBy === "duration")
          return parseInt(a.duration) - parseInt(b.duration);
        if (sortBy === "reviews") return b.reviewCount - a.reviewCount;
        return 0;
      });
  }, [searchTerm, selectedDuration, selectedLevel, selectedCategory, sortBy]);

  const handleToggle = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const getDurationValue = (duration) => {
    const num = parseInt(duration);
    if (isNaN(num)) return "medium";
    if (num < 3) return "short";
    if (num > 6) return "long";
    return "medium";
  };

  return (
    <>
      <div className="bg-background-dark text-slate-900 dark:text-white min-h-screen flex flex-col overflow-x-hidden">
        <main className="grow flex flex-col items-center w-full px-4 md:px-10 lg:px-40 py-10 mt-15">
          {/* Hero */}
          <div className="w-full max-w-[960px] text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-linear-to-br from-white via-gray-200 to-gray-500 dark:from-white dark:via-gray-100 dark:to-gray-500 bg-clip-text text-transparent">
              Choose Your Path to Tech Mastery
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-[#92c9a8] max-w-2xl mx-auto">
              Curated curriculums designed for the modern job market. Level up
              your skills with hands-on projects and expert mentorship.
            </p>
            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-md mx-auto text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2bee79]">16+</div>
                <div className="text-gray-500 dark:text-[#92c9a8]">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2bee79]">5000+</div>
                <div className="text-gray-500 dark:text-[#92c9a8]">
                  Students
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2bee79]">4.8/5</div>
                <div className="text-gray-500 dark:text-[#92c9a8]">
                  Avg Rating
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Filters & Search */}
          <div className="sticky top-20 z-40 w-full max-w-[960px] mb-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-4" />
                <Input
                  placeholder="Search courses, skills..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-full text-gray-400">
                  <SelectValue placeholder="Skill Level" />
                </SelectTrigger>
                <SelectContent>
                  {levelOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={selectedDuration}
                onValueChange={setSelectedDuration}
              >
                <SelectTrigger className="w-full text-gray-400">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  {durationOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full text-gray-400">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categoryOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-between items-center  backdrop-blur-md border border-gray-200 dark:border-[#234832] rounded-full p-2 shadow-lg">
              <div className="flex gap-2">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className=" h-9 bg-transparent border-none text-gray-400">
                    <SelectValue placeholder="Sort by Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price">Price: Low to High</SelectItem>
                    <SelectItem value="duration">Shortest First</SelectItem>
                    <SelectItem value="reviews">Most Reviewed</SelectItem>
                  </SelectContent>
                </Select>
                {/* <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedDuration("all");
                    setSelectedLevel("all");
                    setSelectedCategory("all");
                  }}
                  className="h-9 px-3 text-gray-400"
                >
                  <RefreshCcw className="size-4 mr-2" />
                  Reset
                </Button> */}
              </div>
              <div className="flex gap-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="h-8 w-8 rounded-full text-white"
                >
                  <Grid className="size-4" />
                </Button>
                <Button
                  variant={viewMode === "accordion" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("accordion")}
                  className="h-8 w-8 rounded-full text-white"
                >
                  <List className="size-4" />
                </Button>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-[#92c9a8] mt-2 text-center">
              Showing {filteredCourses.length} of {courses.length} courses
            </p>
          </div>

          {/* Course List */}
          <div className="w-full max-w-[960px]">
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <Accordion
                type="multiple"
                className="flex flex-col gap-6"
                value={Array.from(openItems)}
                onValueChange={(values) => setOpenItems(new Set(values))}
              >
                {filteredCourses.map((course) => (
                  <AccordionItem
                    key={course.id}
                    value={course.id}
                    className="rounded-2xl border border-gray-200 dark:border-[#234832] bg-white dark:bg-[#112218] overflow-hidden shadow-sm"
                  >
                    <AccordionTrigger
                      className="flex items-center justify-between p-5 md:p-6 bg-gray-50 dark:bg-[#16291F] hover:bg-gray-100 dark:hover:bg-[#1a3024] transition-colors data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-[#1a3024]"
                      onClick={() => handleToggle(course.id)}
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 w-full">
                        <div className="flex items-center gap-3">
                          <Badge
                            variant="secondary"
                            className={`text-[10px] font-bold uppercase tracking-wider ${course.badge.color}`}
                          >
                            {course.badge.text}
                          </Badge>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`size-3 ${
                                  i < Math.floor(course.rating)
                                    ? "fill-[#2bee79] text-[#2bee79]"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                            <span className="text-xs text-gray-500 ml-1">
                              ({course.reviewCount})
                            </span>
                          </div>
                        </div>
                        <Link
                          href={`/courses/${course.slug}`}
                          className="text-lg md:text-xl font-bold text-left flex-1 hover:underline"
                        >
                          {course.title}
                        </Link>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-5 md:p-8 border-t border-gray-100 dark:border-[#234832]/50 animate-in slide-in-from-top-2 duration-200">
                      <CourseContent course={course} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-[#92c9a8] text-lg">
                No courses found matching your criteria.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedDuration("all");
                  setSelectedLevel("all");
                  setSelectedCategory("all");
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

// Reusable Course Content Component
function CourseContent({ course }) {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 space-y-6">
        {/* Top Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 border-b border-dashed border-gray-200 dark:border-[#234832]">
          {course.duration && (
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#2bee79] rounded-full" />
              <div>
                <p className="text-xs text-gray-500 dark:text-[#92c9a8]">
                  Duration
                </p>
                <p className="text-sm font-semibold">{course.duration}</p>
              </div>
            </div>
          )}
          {course.mode && (
            <div className="flex items-center gap-3">
              <FileVideoCamera className="text-[#2bee79] size-5" />
              <div>
                <p className="text-xs text-gray-500 dark:text-[#92c9a8]">
                  Mode
                </p>
                <p className="text-sm font-semibold">{course.mode}</p>
              </div>
            </div>
          )}
          {course.batchSize && (
            <div className="flex items-center gap-3">
              <Group className="text-[#2bee79] size-5" />
              <div>
                <p className="text-xs text-gray-500 dark:text-[#92c9a8]">
                  Batch Size
                </p>
                <p className="text-sm font-semibold">{course.batchSize}</p>
              </div>
            </div>
          )}
          {course.pricing && (
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-[#2bee79] rounded-sm" />
              <div>
                <p className="text-xs text-gray-500 dark:text-[#92c9a8]">
                  Pricing
                </p>
                <p className="text-sm font-semibold">{course.pricing}</p>
              </div>
            </div>
          )}
        </div>

        {course.skills && (
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
              <Filter className="size-4" />
              Skills You'll Master
            </h4>
            <div className="flex flex-wrap gap-2">
              {course.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {course.outcomes && (
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
              <CheckCircle className="text-[#2bee79] size-4" />
              Career Outcomes
            </h4>
            <ul className="space-y-2">
              {course.outcomes.map((outcome, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-gray-600 dark:text-[#92c9a8]"
                >
                  <CheckCircle className="text-[#2bee79] size-4 mt-0.5 shrink-0" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        )}

        {course.description && (
          <p className="text-sm text-gray-600 dark:text-[#92c9a8] leading-relaxed">
            {course.description}
          </p>
        )}
      </div>

      <div className="w-full lg:w-72 flex flex-col gap-4">
        {course.videoThumbnail && (
          <Link href={`/courses/${course.slug}`} className="block">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-800 cursor-pointer group">
              <img
                src={course.videoThumbnail}
                alt="Video thumbnail"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-all">
                <div className="size-12 rounded-full bg-[#2bee79]/90 flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="text-black text-2xl fill-black" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2 right-2 px-2 py-1 bg-black/60 rounded text-xs text-white font-medium backdrop-blur-sm">
                {course.videoTitle}
              </div>
            </div>
          </Link>
        )}

        {course.testimonial && (
          <div className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-[#234832]/30 dark:to-[#16291F]/30 border border-gray-100 dark:border-[#234832] text-center">
            <p className="text-xs text-gray-500 dark:text-[#92c9a8] mb-3 italic leading-relaxed">
              "{course.testimonial.quote}"
            </p>
            <p className="text-xs font-semibold text-gray-700 dark:text-white">
              — {course.testimonial.author}
            </p>
            <div className="text-[#2bee79] text-xs mt-2">★★★★★</div>
          </div>
        )}

        <div className="flex flex-col gap-3 mt-auto">
          <Button
            asChild
            className="w-full h-11 bg-[#2bee79] hover:bg-green-400 text-[#0B120E] font-bold rounded-full"
          >
            <Link href={`/courses/${course.slug}`}>Enroll Now</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="w-full h-11 rounded-full"
          >
            <Link href={`/syllabus/${course.slug}`}>
              <Download className="size-4 mr-2" /> Download Syllabus
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

// Grid View Card Component
function CourseCard({ course }) {
  return (
    <div className="group bg-background-dark dark:bg-[#112218] rounded-2xl border border-gray-200 dark:border-[#234832] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <Link href={`/courses/${course.slug}`}>
        {course.videoThumbnail && (
          <div className="relative aspect-4/3 overflow-hidden">
            <img
              src={course.videoThumbnail}
              alt={course.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
            <div className="absolute top-3 right-3">
              <Badge className={`text-[10px] ${course.badge.color}`}>
                {course.badge.text}
              </Badge>
            </div>
            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-xs text-white font-medium">
                {course.videoTitle}
              </p>
            </div>
          </div>
        )}
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`size-3 ${
                    i < Math.floor(course.rating)
                      ? "fill-[#2bee79] text-[#2bee79]"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-xs text-gray-500">
                ({course.reviewCount})
              </span>
            </div>
            <span className="text-sm font-semibold text-[#2bee79]">
              {course.pricing}
            </span>
          </div>
          <h3 className="font-bold text-lg mb-2 line-clamp-2 text-white">
            {course.title}
          </h3>
          <p className="text-sm text-gray-400 dark:text-[#92c9a8] mb-4 line-clamp-2">
            {course.description}
          </p>
          <div className="flex justify-between items-center">
            <div className="text-xs text-gray-500">
              {course.duration} • {course.mode}
            </div>
            <Button size="sm" variant="outline" asChild>
              <Link href={`/courses/${course.slug}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
}
