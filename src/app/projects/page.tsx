"use client"

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/Button";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "A2B Rentals",
      description: "A comprehensive rental management platform designed to streamline the process of renting vehicles, featuring user-friendly interfaces and robust backend systems.",
      image: "/A2B_Logo_name.png",
      technologies: ["NextJS", "Node.js", "Golang", "Stripe", "Tailwind CSS", "MongoDb"],
      category: "Web App",
      liveUrl: "https://dev.atob.rentals/",
      githubUrl: "https://github.com/orgs/AtoB-Rentals/repositories"
    },
    {
      id: 2,
      title: "Gourmade Laundry",
      description: "A modern laundry service platform that connects users with local laundries, offering a seamless booking experience and real-time tracking of laundry orders.",
      image: "/GL_Logo.jpg",
      technologies: ["React", "MongoDB", "ExpressJs", "React Native", "Stripe"],
      category: "Mobile App",
      liveUrl: "",
      githubUrl: "https://github.com/orgs/Dryve-Org/repositories"
    },
    {
      id: 3,
      title: "Daytorius Autosport",
      description: "A sleek and modern website for Daytorius Autosport, showcasing their automotive services and expertise in a visually appealing format.",
      image: "/day_logo.jpg",
      technologies: ["Webflow"],
      category: "Web App",
      liveUrl: "https://www.daytoriusautosport.com/",
    }
  ]

  const categories = ["All", "Web App", "Website", "Mobile App"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's a showcase of some of my recent work. Each project represents a unique challenge 
            and an opportunity to create something meaningful.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className="px-6 py-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              category={project.category}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Interested in working together?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects and opportunities. 
            Let's create something amazing together!
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;