import { Code,User,Briefcase} from "lucide-react";

export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 ">
                    <h3 className="text-2xl font-semibold">Passionate Fullstack and Mobile Developer</h3>
                    <p className="text-muted-foreground">
                        Software Engineer with a focus on full-stack and mobile solutions in enterprise environments.
                    </p>
                    <p className="text-muted-foreground">
                        I am a Software Engineer specializing in full-stack and mobile application development.
I work with technologies such as .NET, C#, SQL Server, React, React Native, Node.js, and RESTful APIs, focusing on scalable and user-centered solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a
                            href="#contact"
                            className="cosmic-button"
                        >
                            Get In Touch
                        </a>

                        <a
                            href="/sevgi-nur-oksuz-cv.pdf"
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download CV Here
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                            </div>

                            <div className="text-left ">
                                <h4 className="font-semibold text-lg "> Full Stack Development</h4>
                                <p className="text-muted-foreground">
                                    Creating responsive, modern web and mobile applications with a focus on usability and performance.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left ">
                                <h4 className="font-semibold text-lg ">Collaboration</h4>
                                <p className="text-muted-foreground">
                                    Experience working in team-based environments and cross-functional projects.<br/>
                                    Strong communication and problem-solving skills.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left ">
                                <h4 className="font-semibold text-lg ">Experience</h4>
                                <p className="text-muted-foreground">
                                    Experience working in team-based environments and cross-functional projects.<br/>
                                    Strong communication and problem-solving skills.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}