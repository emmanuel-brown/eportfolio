import { Badge } from "@/components/ui/Badge";  
import { Card, CardContent } from "@/components/ui/Card";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Angular", "Node.js", "ExpressJs", "Python", "Golang", "CSS3", 
    "Tailwind CSS", "Git", "MongoDB", "PostgreSQL", "REST APIs",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600">
              Get to know more about my journey, skills, and passion for creating digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Profile Image Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <img 
                  src="/self.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* About Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                My Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience creating 
                  digital solutions that make a difference. My journey began with a curiosity 
                  about how websites work, which quickly evolved into a deep love for coding 
                  and problem-solving.
                </p>
                <p>
                  I specialize in building modern web applications using React, Node.js, and 
                  cloud technologies. I believe in writing clean, maintainable code and 
                  creating user experiences that are both beautiful and functional.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, or enjoying the great outdoors with my camera.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <Card className="mb-16">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-2 px-4">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Experience</h3>
            
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              <div className="relative flex items-start space-x-6 pb-8">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Application Programmer V</h4>
                  <p className="text-blue-600 font-medium">Bank of America • Feb. 2025 - July 2025</p>
                  <p className="text-gray-600 mt-2">
                    Updated and maintained merchant services application using internal javascript framework.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start space-x-6 pb-8">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Founder and Owner</h4>
                  <p className="text-purple-600 font-medium">A2B Rentals LLC • Jan 2024 - Apr 2025</p>
                  <p className="text-gray-600 mt-2">
                    Founded a rental car business, managing operations, customer service, and vehicle maintenance. Also developed a web application for booking and managing rentals. Using
                    NextJs and Golang with MongoDB
                  </p>
                </div>
              </div>

              <div className="relative flex items-start space-x-6">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Application Programmer V</h4>
                  <p className="text-green-600 font-medium">Bank of America • Sept 2022 - Dec 2023</p>
                  <p className="text-gray-600 mt-2">
                    Gained practical experience with big data (Hadoop), Python, and Splunk for diagnosing production and database issues, consistently delivering innovative solutions. Developed advanced shell scripts for DevOps automation (environment transfers, security), leveraging Autosys and Ansible for smooth deployments. Managed React.js container security, optimized state flows, trained team members, and supported microservices debugging to ensure high system performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;