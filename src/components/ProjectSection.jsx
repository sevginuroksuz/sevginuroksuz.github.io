
import { ExternalLink, Github, ArrowRight } from "lucide-react";
const projects = [
        {
        id: 1,
        title: "EmotionAI – Sentiment Analysis Assistant",
        description:
            "An AI-powered mobile assistant that analyzes user sentiment using pre-trained Hugging Face models.",
        image: "/projects/project1.png",
        tags: ["React Native", "Hugging Face", "AI", "NLP"],
        //demoUrl: "#",
        githubUrl: "https://github.com/sevginuroksuz/emotionAI",
        },
        {
        id: 2,
        title: "BankLoanDB & Credit Calculator System",
        description:
            "A full-stack banking-oriented loan calculation and application system with structured SQL design, stored procedures, and API integration.",
        image: "/projects/project2.png",
        tags: [".NET", "SQL Server", "Dapper", "EF Core"],
        //demoUrl: "#",
        githubUrl: "https://github.com/sevginuroksuz/credi-calculator-app-frontend",
        },
        {
        id: 3,
        title: "Ergin Warehouse Management System",
        description:
            "Mobile warehouse management application developed for real-world usage, including barcode scanning, stock tracking, and movement logging.",
        image: "/projects/project3.png",
        tags: ["Flutter", ".NET API", "MS SQL"],
        //demoUrl: "#",
        githubUrl: "https://github.com/sevginuroksuz/ergin-warehouse-management-mobile-app",
        },
        {
        id: 4,
        title: "AWS Scalable WordPress Architecture",
        description:
            "A cloud architecture project demonstrating a scalable and secure WordPress setup using core AWS services.",
        image: "/projects/project4.jpg",
        tags: ["AWS", "EC2", "RDS", "CloudFront", "DevOps"],
        //demoUrl: "#",
        githubUrl: "https://github.com/sevginuroksuz/aws-wp-scalable-architecture",
        },

        {
        id: 5,
        title: "FocusGarden – Gamified Productivity App",
        description:
            "A gamified productivity mobile application that visualizes focused work time as a growing flower garden, encouraging deep focus and habit building.",
        image: "/projects/project5.png",
        tags: ["React Native", "Expo", "TypeScript", "Gamification"],
        //demoUrl: "#",
        githubUrl: "https://github.com/sevginuroksuz/focusgarden",
    },  

        {
        id: 6,
        title: "Zenity Inventory Management System",
        description:
            "A desktop-based inventory management system designed to manage stock, track products, and handle basic warehouse operations with a structured database.",
        image: "/projects/project8.png",
        tags: ["C#", ".NET", "MS SQL", "Desktop App"],
        //demoUrl: "#",
        githubUrl: "https://github.com/sevginuroksuz/zenity-inventory-system",
        },
        {
        id: 7,
        title: "Ardunio Smart Car",
        description:
            "A hardware-software integrated robot car project capable of obstacle detection and autonomous movement using sensor data.",
        image: "/projects/project7.jpg",
        tags: ["Embedded Systems", "Arduino", "C/C++", "IoT"],
        //demoUrl: "#",
        githubUrl: "https://github.com/sevginuroksuz/arduino-smart-car",
        },
        {
        id: 8,
        title: "Real-Time Quiz Platform",
        description:
            "A real-time quiz application where users can create quizzes, join live sessions, and compete via live leaderboards using WebSocket technology.",
        image: "/projects/project9.png",
        tags: ["Node.js", "Express", "Socket.io", "MongoDB"],
        //demoUrl: "#",
        githubUrl: "https://github.com/sevginuroksuz/kahoot-app",
    },
        {
        id: 9,
        title: "Secure File Transfer Application",
        description:
            "A secure client-server file transfer system implementing AES and RSA encryption, tested with network traffic analysis.",
        image: "/projects/project10.png",
        tags: ["Python", "Cryptography", "Sockets", "Cyber Security"],
        //demoUrl: "#",
        githubUrl: "https://github.com/sevginuroksuz/secure-file-transfer-ip",
    },

];
export const ProjectSection = () => {
   return( 
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                 Featured <span className="text-primary"> Projects </span>
                 </h2>
                 <p className="text-center text-muted-foreground mb-12 max-w-2xl max-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance and user experience.

                 </p>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6 ">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, idx) => (
                                        <span key={tag + idx} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground ">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                             
                            <h3 className="text-xl font-semibold mb-2"> {project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                                </p> 
                                <div className="flex justify-between items-center">
                                    
                                    <div className="flex space-x-3">
                                        {/**
                                        <a 
                                        //href={project.demoUrl} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>
                                        */}
                                        
                                        <a 
                                        href={project.githubUrl} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                    </div>
                                </div> 
                        </div>
                    ))}
                 </div>

                 <div className="text-center mt-12">
                    <a 
                    className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                    href="https://github.com/sevginuroksuz"
                    target="_blank"
                    >
                        Check My Github <ArrowRight size={16}/>
                    </a>
                 </div>
        </div>
    </section>
);
};