export const portfolioData = {
  name: "Prathis Upadhyay",
  title: "Software Engineer",
  email: "prithuupadhyay0123@gmail.com",
  linkedin: "https://www.linkedin.com/in/prathisupadhyay/",
  github: "https://github.com/prathis08",
  profileImage: "/pfp.jpeg",
  profile:
    "Highly innovative and results-oriented Engineer with a proven track record of quickly mastering new technologies. Adept at conveying complex technical ideas in clear terms. Ready to bring technical expertise and leadership to a dynamic team.",
  education: {
    degree: "Bachelors of Engineering",
    university: "DYPCOE, Akurdi, Savitribai Phule Pune University",
    year: "2019-2023",
    gpa: "8.66",
  },
  skills: [
    { name: "Java", icon: "devicon-java-plain" },
    { name: "Python", icon: "devicon-python-plain" },
    { name: "ReactJs", icon: "devicon-react-original" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    { name: "MySQL", icon: "devicon-mysql-plain" },
    { name: "Django", icon: "devicon-django-plain" },
    { name: "Flask", icon: "devicon-flask-original" },
    { name: "Hibernate", icon: "devicon-hibernate-plain" },
    { name: "GCP", icon: "devicon-googlecloud-plain" },
    { name: "Linux", icon: "devicon-linux-plain" },
    { name: "Git", icon: "devicon-git-plain" },
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "Lana Health",
      period: "Jan 2023 - Present",
      description: [
        "Developed and maintained robust backend solutions using Java, enhancing application performance and scalability.",
        "Created a video calling solution (signalling server) using Express.js and raw WebRTC.",
        "Engineered interactive user interfaces with ReactJs, optimizing UX/UI.",
        "Managed PostgreSQL databases and deployed services on Google Cloud Platform (GCP).",
      ],
    },
    {
      role: "Backend Developer Intern",
      company: "DevCorps IT Solutions",
      period: "Apr 2022 - Sep 2022",
      description: [
        "Developed and maintained the backend for a smart fitness band application using Flask.",
        "Managed MySQL databases and performed query optimization to improve data retrieval efficiency.",
        "Engineered and supported an additional application utilizing Flask, ensuring reliable performance.",
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "Evolve Floor",
      period: "Jan 2022 - May 2022",
      description: [
        "Developed a high-performance backend system utilizing Django.",
        "Improved API response times by 40% through database query optimization and caching.",
        "Maintained and improved user interfaces using ReactJS.",
        "Deployed applications on AWS EC2 (Linux environment).",
      ],
    },
  ],
  projects: [
    // {
    //   title: "WebRTC Video Calling Solution",
    //   description:
    //     "Engineered an end-to-end video calling application from scratch, featuring a custom signaling server built with Express.js and raw WebRTC for high-performance, low-latency communication.",
    //   tags: ["WebRTC", "Express.js", "Node.js", "Socket.IO"],
    //   link: "#",
    // },
    {
      title: "PDF Generator Microservice",
      description:
        "A Python microservice that listens to Google Cloud Pub/Sub messages, generates PDFs from HTML content using WeasyPrint, uploads them to Google Cloud Storage, and sends webhook notifications upon completion",
      tags: ["Python", "GCP", "REST API", "Pub/Sub"],
      link: "https://github.com/prathis08/pdf-generator",
    },
    {
      title: "National Robotics Competition (ABU Robocon)",
      description:
        "As programming lead, architected the control software for autonomous and manually-operated robots, leading the team to a national 2nd place finish. Developed complex algorithms for navigation and task execution.",
      tags: ["Robotics", "C++", "Python", "Algorithms"],
      link: "#",
    },
    {
      title: "High-Performance Django Backend",
      description:
        "Built and optimized a backend system for Evolve Floor, successfully reducing API response times by 40% through strategic database query optimization and advanced caching techniques.",
      tags: ["Django", "Python", "Caching", "AWS EC2"],
      link: "https://www.evolvespace.in/",
    },
  ],
  achievements: [
    {
      title: "World Robotics Championship",
      description:
        "Led a robotics team to 6th place among 180+ international teams in Technoxian (by AICRA).",
    },
    {
      title: "National ABU Robocon 2020",
      description: "Achieved AIR 2 as the programming team lead.",
    },
    {
      title: "JPMorgan Chase & Co. Internship",
      description:
        "Completed the Virtual Software Engineering Internship program.",
    },
    {
      title: "HackerRank Achievements",
      description:
        "Reached 5-Star level in both Python and SQL problem-solving.",
    },
  ],
};
