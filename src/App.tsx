import React, { useState } from "react";
//import emailjs from "emailjs-com";
import {
  Github,
  Linkedin,
  Mail,
  User,
  Briefcase,
  Code,
  FileText,
  ChevronDown,
  Send,
} from "lucide-react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "          @gmail.com",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-blue-50 to-indigo-50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              'https://media-hosting.imagekit.io//61591f8ab9fc4b53/pexels-jorge-jesus-137537-614117.jpg?Expires=1832089233&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jwH~4SoMzlD2RCHSO1rmk92pJAG-l~7wOhhzwW9MEMV7HFUDptC3osg~Ji51D3jinjcexusOlV1yJkZlHPiPxqnalYSVbnrHtu32tt7IsPEDo9UkyG0UotO4MMSXtWtcjwxN75LVyd5pOdkrWSYqBzdVTMx3XttPo3ym1SvTQ6NQKesf1Nvx2u0qXzssXTOigVHZ2d7jCTIHfOKChHiVFa8fgl0neMoLlrh6yd8Jk3O25F9Mom6CAsJriu5SX5hPUEyMMlfz5DfiaAr0PTpQY6Z38mMZlU77LqDw0LLl2N2yBaJnI2a23zKxHRVItd8lhY16V1bz098SRbUyp7282Q___")',
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <img
            src="https://media-hosting.imagekit.io//6eebe449fef34f00/chulin.jpg?Expires=1832088733&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=NWlo1CEAIBltBZEAbZ4jVOI3GAwLZfIP5yKMKWI65Espm0SrvvtqR7E99GRdXdm8VmZOqyRueZh0WU0~53VuKEl5p9idKPpmnU7eXP~PHLhUjhfTLj5H0k0d-qW4oMvyRMS1xoD3KORn9TqnHPk18gv~ZBrnHq~EF7pI3yJrmctUXaKKZSlHDdlBcWdnbDdTGjOGlXCZ8EPpcYl2qMeXBw8v9wSERLM6bGSJSF-JddTinHFYagqvGG0waLYZRp4KxcOdt-nuceGa01ODg9QMSwgLoKSfRyj~nYPhc7tMIb4-kWkP6p2R6qpSrIwlMEOHOg-tw9XIwJjOy0Uu6m0slQ__"
            alt="Chulindra Rai"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-white shadow-lg"
          />
          <h1 className="text-5xl font-bold mb-4 text-gray-800">
            Chulindra Rai
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Full Stack Developer & Machine learning engineering
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://github.com/IotchulindraRai"
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/chulindra-rai-a51308206/"
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Linkedin className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="chulindrarai123@gmail.com"
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Mail className="w-6 h-6 text-gray-700" />
            </a>
          </div>
          <a href="#about" className="animate-bounce inline-block">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <User className="w-6 h-6 text-indigo-600" />
              <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              I'm a passionate Full Stack Developer with expertise in modern web
              technologies. With a strong foundation in both frontend and
              backend development, I create scalable and efficient solutions
              that solve real-world problems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "Python",
                    "Node.js",
                    "Python",
                    "AWS",
                    "Docker",
                    "PHP",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Education
                </h3>
                <p className="text-gray-600">
                  Bachelor of technology in Computer Science Engineering(IOT)
                  <br />
                  <span className="text-sm text-gray-500">2020-2024</span>
                  <br />
                  <span className="text-sm text-gray-500">
                    Jain University, Bangalore,India
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <Code className="w-6 h-6 text-indigo-600" />
              <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Element share chat application
                </h3>
                <p className="text-gray-600 mb-4">
                  It is a Real time Element sharing or message sharing web
                  application using React, Node js using Socket.io, Rest APIs
                  having the functionality of user login , add member in a group
                  , creating a group while Sending Images , chat(message)
                </p>
                <a
                  href="https://github.com/IotchulindraRai/Elementshare-A-Real-Time-Chat-web-application1-"
                  className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                >
                  View Project →
                </a>
              </div>
              {/* Project 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  number plate detection using Yolov8 model
                </h3>
                <p className="text-gray-600 mb-4">
                  created number plate detection using Yolov8 model and able to
                  detect vehicle plate numbe
                </p>
                <a
                  href="https://github.com/IotchulindraRai/Number_plate_detectionusing-Yolov8"
                  className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                >
                  View Project →
                </a>
              </div>
              {/* Project 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Online Food Ordering System
                </h3>
                <p className="text-gray-600 mb-4">
                  The Online Food Ordering System Project, this system can be
                  defined as software web application that allows to accept
                  order placed over the online for hungry customers to view the
                  food restaurant. we can see the Restaurant in a Map in a
                  page.functionof admin /manager and customer where there is a
                  function of CRUD based on responsibility.
                </p>
                <a
                  href="https://github.com/IotchulindraRai/Online-Food-Ordering-System-using-PHP"
                  className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                >
                  View Project →
                </a>
              </div>
              {/* Project 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Websense Ai
                </h3>
                <p className="text-gray-600 mb-4">
                  Websense is a sleek, intelligent React app designed to
                  transform lengthy articles into concise, meaningful summaries
                  with the power of GPT-4 and RapidAP
                </p>
                <a
                  href="https://github.com/IotchulindraRai/Websense_summerize"
                  className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-6 h-6 text-indigo-600" />
              <h2 className="text-3xl font-bold text-gray-800">Experience</h2>
            </div>
            <div className="space-y-8">
              {[
                {
                  title: "Machine Learning Intern",
                  company: "Novanector service pvt,India",
                  period: "2024 - 2025",
                  description:
                    "Work as machine Learning engineering and perform and created various end to end ml model",
                },
                {
                  title: "IOT intern ",
                  company: "Emertxe Technologies,India",
                  period: "2024",
                  description: "Developed and maintained IOT  applications.",
                },
              ].map((job, index) => (
                <div key={index} className="border-l-4 border-indigo-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {job.title}
                  </h3>
                  <p className="text-indigo-600 font-medium">{job.company}</p>
                  <p className="text-sm text-gray-500 mb-2">{job.period}</p>
                  <p className="text-gray-600">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-8">
              <FileText className="w-6 h-6 text-indigo-600" />
              <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8 text-center">
              I'm always open to new opportunities and interesting projects.
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="chulindrarai123@gmail.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Subject of your message"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your message..."
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-colors ${
                    isSubmitting
                      ? "bg-indigo-400"
                      : "bg-indigo-600 hover:bg-indigo-700"
                  }`}
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {submitStatus === "success" && (
                  <p className="text-green-600">Message sent successfully!</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-600">
                    Failed to send message. Please try again.
                  </p>
                )}
              </div>
            </form>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Or reach out directly:</p>
              <a
                href="mailto:contact@chulindrarai.com"
                className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
              >
                <Mail className="w-5 h-5" />
                chulindrarai123@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>
            © {new Date().getFullYear()} Chulindra Rai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
