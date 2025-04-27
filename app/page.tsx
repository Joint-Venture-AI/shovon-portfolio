"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	Award,
	Bot,
	Brain,
	CheckCircle2,
	ChevronDown,
	Clock,
	Code,
	ExternalLink,
	Github,
	Linkedin,
	Mail,
	MessageSquare,
	Sparkles,
	SquareArrowOutUpRight,
	Star,
	Twitter,
	Zap,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import projects from "../public/project.json";
import TestimonialCard from "@/components/testimonial-card";
import { useEffect } from "react";
import { annotate } from "rough-notation";

export default function Home() {
	useEffect(() => {
		const colors = {
			highlight: "#1e7ba6",
			underline: "#45e1f5",
			box: "#ffffff",
			bracket: "#e0f7fa",
		};

		const aiTitle = document.querySelector(".ai-title") as HTMLElement;
		const aiAnnotation = annotate(aiTitle, {
			type: "highlight",
			color: colors.highlight,
			padding: 5,
			strokeWidth: 2,
			animationDuration: 1000,
		});

		const mlTitle = document.querySelector(".ml-title") as HTMLElement;
		const mlAnnotation = annotate(mlTitle, {
			type: "underline",
			color: colors.underline,
			strokeWidth: 3,
			padding: 2,
			animationDuration: 1200,
			iterations: 2,
		});

		const button = document.querySelector(".cta-button") as HTMLElement;
		const buttonAnnotation = annotate(button, {
			type: "box",
			color: colors.box,
			padding: 8,
			strokeWidth: 2,
			animationDuration: 800,
		});

		const animationSequence = [
			{ annotation: aiAnnotation, delay: 500 },
			{ annotation: mlAnnotation, delay: 1000 },
			{ annotation: buttonAnnotation, delay: 1500 },
		];

		animationSequence.forEach(({ annotation, delay }) => {
			setTimeout(() => annotation.show(), delay);
		});
	}, []);

	return (
		<main className="min-h-screen">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-b from-primary to-primary/80 text-white h-[60vh] md:h-[80vh] lg:h-screen lg:flex lg:items-center">
				<div className="container mx-auto px-4 py-20 md:py-32">
					<div className="flex flex-col items-center justify-center text-center">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in leading-[1.3] md:leading-[1.4]">
							<span className="ai-title">AI Developer</span> <br />
							<span className="ml-title">Machine Learning Expert</span>
						</h1>
						<p className="text-xl md:text-2xl max-w-3xl mb-10 text-white/90">
							Building intelligent solutions that drive business growth and
							enhance user experiences
						</p>
						<Button
							variant="secondary"
							size="lg"
							className="rounded-full font-medium cta-button"
							asChild
						>
							<a href="#about" className="relative z-10">
								Learn More <SquareArrowOutUpRight className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</div>
				</div>
				<div className="absolute bottom-0 left-0 right-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320"
						className="w-full"
					>
						<path fill="#ffffff" fill-opacity="1">
							<animate
								attributeName="d"
								values="
        M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,330L1392,330C1344,330,1248,330,1152,330C1056,330,960,330,864,330C768,330,672,330,576,330C480,330,384,330,288,330C192,330,96,330,48,330L0,330Z;
        
        M0,96L48,106.7C96,117,192,139,288,144C384,149,480,139,576,128C672,117,768,107,864,112C960,117,1056,139,1152,144C1248,149,1344,139,1392,128L1440,117L1440,330L1392,330C1344,330,1248,330,1152,330C1056,330,960,330,864,330C768,330,672,330,576,330C480,330,384,330,288,330C192,330,96,330,48,330L0,330Z;
        
        M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,330L1392,330C1344,330,1248,330,1152,330C1056,330,960,330,864,330C768,330,672,330,576,330C480,330,384,330,288,330C192,330,96,330,48,330L0,330Z
      "
								dur="8s"
								repeatCount="indefinite"
							/>
						</path>
					</svg>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="py-20 lg:pt-40 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
						About Me
					</h2>
					<div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
						<div className="md:w-2/5 relative">
							<motion.div
								className="bg-primary/10 absolute inset-0 rounded-2xl"
								animate={{
									rotateX: [0, 3, 0, -3, 0],
									rotateY: [0, -2, 0, 2, 0],
								}}
								transition={{
									duration: 8,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							/>

							<motion.div
								className="bg-primary/20 absolute inset-0 rounded-2xl"
								animate={{
									rotateX: [0, -4, 0, 4, 0],
									rotateY: [0, 3, 0, -3, 0],
								}}
								transition={{
									duration: 7,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 0.3,
								}}
							/>

							<motion.div
								className="relative"
								animate={{
									y: [0, -10, 0],
									rotate: [0, 0.5, -0.5, 0],
								}}
								transition={{
									duration: 6,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							>
								<Image
									src="/man-image.png"
									alt="Profile Image"
									width={500}
									height={500}
									className="rounded-2xl shadow-xl relative z-10 drop-shadow-md"
								/>

								{/* Subtle glow effect */}
								<motion.div
									className="absolute inset-0 bg-primary/5 rounded-2xl blur-md"
									animate={{
										opacity: [0.3, 0.5, 0.3],
									}}
									transition={{
										duration: 5,
										repeat: Infinity,
									}}
								/>
							</motion.div>
						</div>
						<div className="md:w-3/5">
							<h3 className="text-2xl font-bold mb-4 text-gray-800">
								Hello! I'm{" "}
								<Typewriter
									words={[
										"Shovon",
										"ai developer",
										"Shovon",
										"web developer",
										"Shovon",
										"app developer",
										"Shovon",
									]}
									loop={5}
									cursor
									cursorStyle="_"
									typeSpeed={150}
									deleteSpeed={50}
									delaySpeed={1500}
								/>
							</h3>
							<p className="text-lg text-gray-700 mb-6 leading-relaxed">
								A dedicated and expert-vetted AI developer with over 5 years of
								experience in the field. My expertise spans across artificial
								intelligence, natural language processing, and mobile app
								development.
							</p>
							<p className="text-lg text-gray-700 mb-8 leading-relaxed">
								I pride myself on delivering high-quality, efficient, and
								user-friendly AI solutions that drive business growth and
								enhance user experience.
							</p>
							<div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
								<motion.div
									className="flex items-center gap-2 bg-sky-600/80 backdrop-blur-sm px-4 py-2 rounded-full"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.3 }}
								>
									<Star className="h-4 w-4 text-yellow-300" />
									<span className="text-white font-medium">
										5.0 Rating (200+ Reviews)
									</span>
								</motion.div>

								<motion.div
									className="flex items-center gap-2 bg-sky-600/80 backdrop-blur-sm px-4 py-2 rounded-full"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.4 }}
								>
									<Clock className="h-4 w-4 text-green-300" />
									<span className="text-white font-medium">Fast Delivery</span>
								</motion.div>

								<motion.div
									className="flex items-center gap-2 bg-sky-600/80 backdrop-blur-sm px-4 py-2 rounded-full"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.5 }}
								>
									<Award className="h-4 w-4 text-blue-300" />
									<span className="text-white font-medium">Level 2 Seller</span>
								</motion.div>
							</div>
							<div className="flex flex-wrap gap-4">
								<a
									target="_blank"
									href="https://www.linkedin.com/in/shovon-kumar-sarkar-6047b3361"
								>
									<Button variant="outline" className="rounded-full gap-2">
										<Linkedin size={18} />
										LinkedIn
									</Button>
								</a>
								<a target="_blank" href="https://www.fiverr.com/code_craf">
									<Button variant="outline" className="rounded-full gap-2">
										<Mail size={18} />
										Contact
									</Button>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div id="services"></div>
			</section>

			{/* Skills Section */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
						My Services
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								title: "AI Chatbot Development",
								description:
									"Custom chatbots built with the latest AI technologies to enhance customer service and engagement on your website or app.",
								icon: <Bot className="h-8 w-8 text-purple-600" />,
								features: [
									"24/7 Customer Support",
									"Personalized Responses",
									"Multi-platform Integration",
								],
								price: "Starting at $150",
							},
							{
								title: "GPT Integration",
								description:
									"Seamless integration of OpenAI's GPT models into your applications for content generation, summarization, and more.",
								icon: <Code className="h-8 w-8 text-purple-600" />,
								features: [
									"API Implementation",
									"Custom Prompts",
									"Response Optimization",
								],
								price: "Starting at $120",
							},
							{
								title: "AI-Powered Analytics",
								description:
									"Transform your data into actionable insights with machine learning algorithms and predictive analytics.",
								icon: <Zap className="h-8 w-8 text-purple-600" />,
								features: [
									"Data Visualization",
									"Predictive Models",
									"Business Intelligence",
								],
								price: "Starting at $200",
							},
							{
								title: "Computer Vision Solutions",
								description:
									"Image recognition and processing capabilities to extract valuable insights from visual data for your business.",
								icon: <Sparkles className="h-8 w-8 text-purple-600" />,
								features: [
									"Object Detection",
									"Image Classification",
									"Visual Search",
								],
								price: "Starting at $250",
							},
							{
								title: "Natural Language Processing",
								description:
									"Process and analyze human language to enable sentiment analysis, text classification, and more.",
								icon: <MessageSquare className="h-8 w-8 text-purple-600" />,
								features: [
									"Sentiment Analysis",
									"Text Classification",
									"Language Translation",
								],
								price: "Starting at $180",
							},
							{
								title: "Custom AI Development",
								description:
									"Tailored AI solutions designed specifically for your unique business challenges and objectives.",
								icon: <Brain className="h-8 w-8 text-purple-600" />,
								features: [
									"Consultation",
									"Custom Development",
									"Ongoing Support",
								],
								price: "Starting at $300",
							},
						].map((service, index) => (
							<motion.div
								key={index}
								className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true, margin: "-100px" }}
								whileHover={{ y: -10 }}
							>
								<motion.div
									className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-[#a03ac962] group-hover:text-white transition-colors duration-300"
									whileHover={{ rotate: 360 }}
									transition={{ duration: 0.6 }}
								>
									{service.icon}
								</motion.div>
								<h3 className="text-xl font-bold text-gray-900 mb-2">
									{service.title}
								</h3>
								<p className="text-gray-600 mb-4">{service.description}</p>

								<ul className="mb-6 space-y-2">
									{service.features.map((feature, i) => (
										<motion.li
											key={i}
											className="flex items-center gap-2 text-gray-700"
											initial={{ opacity: 0, x: -10 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
											viewport={{ once: true }}
										>
											<CheckCircle2 className="h-4 w-4 text-green-500" />
											<span>{feature}</span>
										</motion.li>
									))}
								</ul>

								<div className="flex items-center justify-between">
									{/* <span className='font-bold text-purple-600'>
                    {service.price}
                  </span> */}
									<Button
										size="sm"
										className="bg-[#1dbf73] hover:bg-[#19a463] text-white"
										onClick={() =>
											window.open("https://www.fiverr.com/code_craf", "_blank")
										}
									>
										Order Now
									</Button>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Experience Section */}
			<section id="experience" className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
						Work Experience
					</h2>

					<div className="max-w-6xl mx-auto">
						{/* Fiverr Experience */}
						<div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 mb-8">
							<div className="flex flex-col md:flex-row gap-8 items-start">
								<div className="md:w-1/4 flex justify-center md:justify-start">
									<div className="bg-white p-4 rounded-xl shadow-md">
										<Image
											src="/man-image.png?height=80&width=80"
											alt="Fiverr Logo"
											width={80}
											height={80}
											className="h-20 w-20"
										/>
									</div>
								</div>
								<div className="md:w-3/4">
									<div className="flex flex-col md:flex-row justify-between mb-4">
										<h3 className="text-2xl font-bold text-gray-800">
											Freelance AI Developer
										</h3>
										<div className="text-primary font-medium">
											2020 - Present
										</div>
									</div>
									<p className="text-lg text-gray-700 mb-6 leading-relaxed">
										I provide specialized AI development services on Fiverr,
										helping clients implement cutting-edge artificial
										intelligence solutions for their businesses.
									</p>

									<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
										<div className="bg-white p-4 rounded-lg shadow-sm text-center">
											<div className="text-3xl font-bold text-primary mb-1">
												100+
											</div>
											<div className="text-gray-600">Projects Completed</div>
										</div>
										<div className="bg-white p-4 rounded-lg shadow-sm text-center">
											<div className="text-3xl font-bold text-primary mb-1">
												5/5
											</div>
											<div className="text-gray-600">Average Rating</div>
										</div>
										<div className="bg-white p-4 rounded-lg shadow-sm text-center">
											<div className="text-3xl font-bold text-primary mb-1">
												90%
											</div>
											<div className="text-gray-600">Repeat Clients</div>
										</div>
									</div>

									<div className="space-y-4">
										<h4 className="text-xl font-semibold text-gray-800">
											Services Offered:
										</h4>
										<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
											<li className="flex items-center gap-2">
												<div className="h-2 w-2 rounded-full bg-primary"></div>
												<span>Custom AI Model Development</span>
											</li>
											<li className="flex items-center gap-2">
												<div className="h-2 w-2 rounded-full bg-primary"></div>
												<span>Natural Language Processing</span>
											</li>
											<li className="flex items-center gap-2">
												<div className="h-2 w-2 rounded-full bg-primary"></div>
												<span>Machine Learning Integration</span>
											</li>
											<li className="flex items-center gap-2">
												<div className="h-2 w-2 rounded-full bg-primary"></div>
												<span>AI Chatbot Development</span>
											</li>
											<li className="flex items-center gap-2">
												<div className="h-2 w-2 rounded-full bg-primary"></div>
												<span>Computer Vision Solutions</span>
											</li>
											<li className="flex items-center gap-2">
												<div className="h-2 w-2 rounded-full bg-primary"></div>
												<span>AI Consultation Services</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						{/* Client Testimonials */}
						<div className="mt-12">
							<h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
								Client Testimonials
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								<TestimonialCard
									quote="Collaborating with Shovon has been a great experience time and time again. He brings both talent and dedication to every project, handling challenges with ease and delivering polished, high-quality work. If you are looking for a dependable developer who goes the extra mile he is a fantastic choice."
									author="imdjohirulfin01"
									position="United States"
									avatar="/imdjohirulfin01.webp"
									rating={5}
									date="3 months ago"
								/>
								<TestimonialCard
									quote="Shovon and his team are so helpful and they are very passionate about their work. You can trust you are in good hands with Shovon and his team as they want to see you succeed and are happy to help, answer any questions, and make any changes."
									author="maxilef"
									position="United States"
									avatar="/maxllef.webp"
									rating={5}
									date="2 weeks ago"
								/>
								<TestimonialCard
									quote="I’ve consistently been impressed with Shovon’s expertise and reliable execution. He continues to be a valuable asset to our AI projects, and I look forward to working with him again."
									author="davisdebard"
									position="United States"
									avatar="/davisdebard.jpg"
									rating={5}
									date="1 month ago"
								/>
							</div>
						</div>
					</div>
				</div>
				<div id="projects"></div>
			</section>

			{/* Projects Section */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
						Projects
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{projects.map((project, index) => (
							<motion.div
								key={project.id}
								className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group ${
									true ? "md:col-span-2 lg:col-span-1" : ""
								}`}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true, margin: "-100px" }}
								whileHover={{ y: -10 }}
							>
								<div className="relative overflow-hidden">
									<div className="aspect-video bg-gradient-to-br from-purple-100 to-indigo-100">
										<Image
											width={700}
											height={700}
											src={project.image || "/placeholder.svg"}
											alt={project.title}
											className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
										/>
									</div>
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
										<div className="p-6 w-full">
											<div className="flex justify-end gap-3">
												{project.link && (
													<a
														href={project.link}
														target="_blank"
														rel="noopener noreferrer"
														className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
													>
														<ExternalLink className="h-4 w-4 text-white" />
													</a>
												)}
											</div>
										</div>
									</div>
								</div>

								<div className="p-6">
									<div className="flex flex-wrap gap-2 mb-3">
										{project.tags.map((tech, i) => (
											<span
												key={i}
												className="text-xs font-medium bg-purple-50 text-purple-600 px-2 py-1 rounded-md"
											>
												{tech}
											</span>
										))}
									</div>
									<h3 className="text-xl font-bold text-gray-900 mb-2">
										{project.title}
									</h3>
									<p className="text-gray-600 mb-4">{project.description}</p>
									<Button
										variant="link"
										className="p-0 h-auto text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1 group/btn"
										onClick={() => window.open(project.link, "_blank")}
									>
										View Project Details
										<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
									</Button>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
						Get In Touch
					</h2>
					<div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
						<div className="p-8 md:p-12">
							<p className="text-lg text-gray-700 mb-8 text-center">
								Interested in working together? Feel free to reach out for
								collaborations or just a friendly hello!
							</p>
							<div className="flex flex-wrap gap-4">
								<a
									target="_blank"
									href="https://www.linkedin.com/in/shovon-kumar-sarkar-6047b3361"
								>
									<Button variant="outline" className="rounded-full gap-2">
										<Linkedin size={18} />
										LinkedIn
									</Button>
								</a>
								<a target="_blank" href="https://www.fiverr.com/code_craf">
									<Button variant="outline" className="rounded-full gap-2">
										<Mail size={18} />
										Contact
									</Button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-12">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-6 md:mb-0">
							<h2 className="text-2xl font-bold">Shovon</h2>
							<p className="text-gray-400 mt-2">
								AI Developer & Machine Learning Expert
							</p>
						</div>
						<div className="flex gap-6">
							<a
								target="_blank"
								href="https://www.linkedin.com/in/shovon-kumar-sarkar-6047b3361"
								className="hover:text-primary transition-colors"
							>
								<Linkedin size={24} />
							</a>
							<a
								target="_blank"
								href="https://www.fiverr.com/code_craf"
								className="hover:text-primary transition-colors"
							>
								<Mail size={24} />
							</a>
						</div>
					</div>
					<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
						<p>© {new Date().getFullYear()} Shovon. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</main>
	);
}
