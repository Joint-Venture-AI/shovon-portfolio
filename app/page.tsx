import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<main className="min-h-screen">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-b from-primary to-primary/80 text-white lg:h-[80vh]">
				<div className="container mx-auto px-4 py-20 md:py-32">
					<div className="flex flex-col items-center justify-center text-center">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
							AI Developer & Machine Learning Expert
						</h1>
						<p className="text-xl md:text-2xl max-w-3xl mb-10 text-white/90">
							Building intelligent solutions that drive business growth and
							enhance user experiences
						</p>
						<Button
							variant="secondary"
							size="lg"
							className="rounded-full font-medium"
							asChild
						>
							<a href="#about">
								Learn More <ChevronDown className="ml-2 h-4 w-4" />
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
			<section id="about" className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
						About Me
					</h2>
					<div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
						<div className="md:w-2/5 relative">
							<div className="bg-primary/10 absolute inset-0 rounded-2xl transform rotate-3"></div>
							<div className="bg-primary/20 absolute inset-0 rounded-2xl transform -rotate-3"></div>
							<div className="relative">
								<Image
									src="/placeholder.svg?height=500&width=500"
									alt="Profile Image"
									width={500}
									height={500}
									className="rounded-2xl shadow-xl relative z-10"
								/>
							</div>
						</div>
						<div className="md:w-3/5">
							<h3 className="text-2xl font-bold mb-4 text-gray-800">
								Hello! I'm Shovon
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
							<div className="flex flex-wrap gap-4">
								<Button variant="outline" className="rounded-full gap-2">
									<Github size={18} />
									GitHub
								</Button>
								<Button variant="outline" className="rounded-full gap-2">
									<Linkedin size={18} />
									LinkedIn
								</Button>
								<Button variant="outline" className="rounded-full gap-2">
									<Twitter size={18} />
									Twitter
								</Button>
								<Button variant="outline" className="rounded-full gap-2">
									<Mail size={18} />
									Contact
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
						My Skills
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{[
							{
								title: "Artificial Intelligence",
								description:
									"Developing custom AI models and solutions for various business needs and applications.",
							},
							{
								title: "Natural Language Processing",
								description:
									"Building systems that can understand, interpret, and generate human language.",
							},
							{
								title: "Mobile App Development",
								description:
									"Creating intelligent mobile applications with seamless user experiences.",
							},
							{
								title: "Machine Learning",
								description:
									"Implementing algorithms that allow systems to learn and improve from experience.",
							},
							{
								title: "Data Analysis",
								description:
									"Extracting meaningful insights from complex datasets to drive decision-making.",
							},
							{
								title: "Cloud Computing",
								description:
									"Deploying and managing AI solutions on cloud platforms for scalability.",
							},
						].map((skill, index) => (
							<div
								key={index}
								className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
							>
								<h3 className="text-xl font-bold mb-4 text-gray-800">
									{skill.title}
								</h3>
								<p className="text-gray-600">{skill.description}</p>
							</div>
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
											src="/placeholder.svg?height=80&width=80"
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
												4.9/5
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
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
									<div className="flex items-center gap-4 mb-4">
										<div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
											JD
										</div>
										<div>
											<h4 className="font-semibold">John Doe</h4>
											<div className="flex text-amber-400">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													className="w-5 h-5"
												>
													<path
														fillRule="evenodd"
														d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
														clipRule="evenodd"
													/>
												</svg>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													className="w-5 h-5"
												>
													<path
														fillRule="evenodd"
														d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
														clipRule="evenodd"
													/>
												</svg>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													className="w-5 h-5"
												>
													<path
														fillRule="evenodd"
														d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
														clipRule="evenodd"
													/>
												</svg>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													className="w-5 h-5"
												>
													<path
														fillRule="evenodd"
														d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
														clipRule="evenodd"
													/>
												</svg>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													className="w-5 h-5"
												>
													<path
														fillRule="evenodd"
														d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
														clipRule="evenodd"
													/>
												</svg>
											</div>
										</div>
									</div>
									<p className="text-gray-600 italic">
										"Shovon delivered an exceptional AI solution for our
										business. The custom NLP model he built has significantly
										improved our customer service automation. Highly
										recommended!"
									</p>
								</div>

								<div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
									<div className="flex items-center gap-4 mb-4">
										<div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
											AS
										</div>
										<div>
											<h4 className="font-semibold">Amanda Smith</h4>
											<div className="flex text-amber-400">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													className="w-5 h-5"
												>
													<path
														fillRule="evenodd"
														d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
														clipRule="evenodd"
													/>
												</svg>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													className="w-5 h-5"
												>
													<path
														fillRule="evenodd"
														d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
														clipRule="evenodd"
													/>
												</svg>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													className="w-5 h-5"
												>
													<path
														fillRule="evenodd"
														d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
														clipRule="evenodd"
													/>
												</svg>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													className="w-5 h-5"
												>
													<path
														fillRule="evenodd"
														d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
														clipRule="evenodd"
													/>
												</svg>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													className="w-5 h-5"
												>
													<path
														fillRule="evenodd"
														d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
														clipRule="evenodd"
													/>
												</svg>
											</div>
										</div>
									</div>
									<p className="text-gray-600 italic">
										"Working with Shovon was a pleasure. He understood our
										requirements perfectly and delivered a sophisticated AI
										solution that exceeded our expectations. His communication
										was excellent throughout the project."
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects" className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
						Projects
					</h2>

					<div className="max-w-6xl mx-auto">
						{/* Project 1 */}
						<div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
							<div className="lg:w-1/2 order-2 lg:order-1">
								<h3 className="text-2xl font-bold mb-4 text-gray-800">
									AI-powered audio recording app
								</h3>
								<p className="text-lg text-gray-700 mb-6 leading-relaxed">
									CleverTalk is an AI-powered app that captures audio, converts
									speech to text, and organizes it efficiently. It offers
									real-time transcription, summaries, and searchable notes, with
									cloud syncing. Ideal for professionals, students, and content
									creators, it helps manage meetings, conversations, and
									personal reminders easily.
								</p>
								<Button className="rounded-full">View Project</Button>
							</div>
							<div className="lg:w-1/2 order-1 lg:order-2">
								<div className="bg-gradient-to-r from-purple-500 to-primary rounded-2xl p-8 flex justify-center">
									<Image
										src="/placeholder.svg?height=600&width=300"
										alt="CleverTalk App"
										width={300}
										height={600}
										className="rounded-xl shadow-lg"
									/>
								</div>
							</div>
						</div>

						{/* Project 2 (Added as an example) */}
						<div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
							<div className="lg:w-1/2">
								<div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl p-8 flex justify-center">
									<Image
										src="/placeholder.svg?height=600&width=300"
										alt="AI Vision App"
										width={300}
										height={600}
										className="rounded-xl shadow-lg"
									/>
								</div>
							</div>
							<div className="lg:w-1/2">
								<h3 className="text-2xl font-bold mb-4 text-gray-800">
									Computer Vision Solution
								</h3>
								<p className="text-lg text-gray-700 mb-6 leading-relaxed">
									An advanced computer vision system that enables real-time
									object detection, facial recognition, and scene analysis. This
									solution has been implemented in retail environments to
									analyze customer behavior and improve store layouts for better
									customer experience.
								</p>
								<Button className="rounded-full">View Project</Button>
							</div>
						</div>

						{/* Project 3 (Added as an example) */}
						<div className="flex flex-col lg:flex-row items-center gap-10">
							<div className="lg:w-1/2 order-2 lg:order-1">
								<h3 className="text-2xl font-bold mb-4 text-gray-800">
									Predictive Analytics Platform
								</h3>
								<p className="text-lg text-gray-700 mb-6 leading-relaxed">
									A comprehensive analytics platform that leverages machine
									learning to predict business trends and customer behaviors.
									This tool has helped companies optimize their marketing
									strategies and increase conversion rates by up to 35%.
								</p>
								<Button className="rounded-full">View Project</Button>
							</div>
							<div className="lg:w-1/2 order-1 lg:order-2">
								<div className="bg-gradient-to-r from-amber-500 to-orange-400 rounded-2xl p-8 flex justify-center">
									<Image
										src="/placeholder.svg?height=400&width=600"
										alt="Analytics Dashboard"
										width={600}
										height={400}
										className="rounded-xl shadow-lg"
									/>
								</div>
							</div>
						</div>
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
							<div className="flex flex-col md:flex-row justify-center gap-4">
								<Button className="rounded-full gap-2" size="lg">
									<Mail size={18} />
									Send Email
								</Button>
								<Button
									variant="outline"
									className="rounded-full gap-2"
									size="lg"
								>
									<Linkedin size={18} />
									Connect on LinkedIn
								</Button>
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
							<Link href="#" className="hover:text-primary transition-colors">
								<Github size={24} />
							</Link>
							<Link href="#" className="hover:text-primary transition-colors">
								<Linkedin size={24} />
							</Link>
							<Link href="#" className="hover:text-primary transition-colors">
								<Twitter size={24} />
							</Link>
							<Link href="#" className="hover:text-primary transition-colors">
								<Mail size={24} />
							</Link>
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
