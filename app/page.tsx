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
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import projects from "../public/projects.json";
import skills from "../public/skills.json";
import TestimonialCard from "@/components/testimonial-card";
import { randomizeInPlace } from "@/lib/randomizeInPlace";
import {
	buttonHover,
	buttonTap,
	ContactSection,
	itemVariants,
} from "@/components/contact";

randomizeInPlace(projects);
randomizeInPlace(skills);

function StarIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
			/>
		</svg>
	);
}

export default function Home() {
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
						<div className="md:w-2/5 relative h-[500px] perspective-1000">
							{/* Holographic Base Grid */}
							<motion.div
								className="absolute inset-0 rounded-2xl overflow-hidden"
								animate={{
									rotateX: [0, 0.5, 0],
									rotateY: [0, 0.5, 0],
								}}
								transition={{
									duration: 15,
									repeat: Infinity,
									ease: "linear",
								}}
							>
								<div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-px">
									{[...Array(100)].map((_, i) => (
										<motion.div
											key={i}
											className="bg-primary/5 hover:bg-primary/20 transition-colors"
											animate={{
												opacity: [0.3, 0.7, 0.3],
												backgroundColor: [
													"rgba(99, 102, 241, 0.05)",
													"rgba(99, 102, 241, 0.2)",
													"rgba(99, 102, 241, 0.05)",
												],
											}}
											transition={{
												duration: 3 + Math.random() * 4,
												repeat: Infinity,
												delay: Math.random() * 2,
											}}
										/>
									))}
								</div>
							</motion.div>

							{/* Floating Image Container */}
							<motion.div
								className="relative h-full w-full"
								animate={{
									y: [0, -10, 0],
									rotateZ: [0, 0.5, -0.5, 0],
								}}
								transition={{
									duration: 8,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								whileHover={{
									scale: 1.02,
									transition: { duration: 0.3 },
								}}
							>
								{/* Main Profile Image */}
								<Image
									src="/man-image.png"
									alt="Profile Image"
									fill
									className="rounded-2xl object-cover shadow-2xl z-10"
									style={{
										maskImage:
											"linear-gradient(to bottom, rgba(0,0,0,1) 80%, transparent 100%)",
									}}
								/>

								{/* Holographic Scan Lines */}
								<motion.div
									className="absolute inset-0 rounded-2xl pointer-events-none"
									style={{
										background: `linear-gradient(
          to bottom,
          transparent 0%,
          rgba(99, 102, 241, 0.1) 50%,
          transparent 100%
        )`,
										backgroundSize: "100% 8px",
									}}
									animate={{
										backgroundPosition: ["0 0", "0 500px"],
									}}
									transition={{
										duration: 2,
										repeat: Infinity,
										ease: "linear",
									}}
								/>

								{/* Floating Tech Particles */}
								<div className="absolute inset-0 overflow-hidden rounded-2xl">
									{[...Array(15)].map((_, i) => (
										<motion.div
											key={i}
											className="absolute rounded-full bg-primary"
											style={{
												width: `${Math.random() * 6 + 2}px`,
												height: `${Math.random() * 6 + 2}px`,
												left: `${Math.random() * 100}%`,
												top: `${Math.random() * 100}%`,
												filter: "blur(1px)",
											}}
											animate={{
												y: [
													`${Math.random() * 100}%`,
													`${Math.random() * 100}%`,
												],
												x: [
													`${Math.random() * 100}%`,
													`${Math.random() * 100}%`,
												],
												opacity: [0, 0.8, 0],
												scale: [0.5, 1.2, 0.5],
											}}
											transition={{
												duration: 5 + Math.random() * 10,
												repeat: Infinity,
												repeatType: "reverse",
												ease: "easeInOut",
											}}
										/>
									))}
								</div>
							</motion.div>

							{/* Outer Glow */}
							<motion.div
								className="absolute inset-0 rounded-2xl pointer-events-none"
								style={{
									boxShadow: "0 0 60px rgba(99, 102, 241, 0.2)",
								}}
								animate={{
									boxShadow: [
										"0 0 60px rgba(99, 102, 241, 0.2)",
										"0 0 80px rgba(99, 102, 241, 0.3)",
										"0 0 60px rgba(99, 102, 241, 0.2)",
									],
								}}
								transition={{
									duration: 5,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							/>
						</div>
						<div className="md:w-3/5">
							<h3 className="text-2xl font-bold mb-4 text-gray-800">
								Hello! I'm{" "}
								<Typewriter
									words={[
										"Shovon",
										"AI Developer",
										"Shovon",
										"Web Developer",
										"Shovon",
										"App Developer",
										"Shovon",
										"Machine Learning Engineer",
										"Shovon",
										"NLP Specialist",
										"Shovon",
										"Data Analyst",
										"Shovon",
										"Cloud Developer",
										"Shovon",
										"Full-Stack Developer",
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
								A seasoned AI developer with 5+ years of experience in building
								cutting-edge solutions, specializing in{" "}
								<span className="font-semibold text-blue-600">
									Artificial Intelligence
								</span>
								,{" "}
								<span className="font-semibold text-blue-600">
									Natural Language Processing (NLP)
								</span>
								, and{" "}
								<span className="font-semibold text-blue-600">
									full-stack development
								</span>
								. I transform complex problems into scalable, intuitive
								applications powered by machine learning and modern web
								technologies.
							</p>
							<p className="text-lg text-gray-700 mb-8 leading-relaxed">
								Passionate about crafting{" "}
								<span className="italic">high-performance AI systems</span> and{" "}
								<span className="italic">user-centric interfaces</span>, I
								bridge the gap between advanced algorithms and real-world
								usability. My solutions are engineered to boost efficiency,
								drive innovation, and deliver measurable business results.
							</p>
							<div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
								{/* Rating Badge */}
								<motion.div
									className="relative group"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										type: "spring",
										stiffness: 300,
										damping: 15,
										delay: 0.3,
									}}
									whileHover={{ y: -3 }}
								>
									<div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-md group-hover:opacity-80 opacity-0 transition-opacity duration-300" />
									<div className="relative flex items-center gap-2 bg-gradient-to-br from-sky-600 to-sky-700 backdrop-blur-sm px-4 py-2 rounded-full border border-sky-500/30 shadow-lg shadow-sky-500/10">
										<motion.div
											animate={{ rotate: [0, 15, -10, 5, 0] }}
											transition={{ duration: 1, delay: 1 }}
										>
											<Star className="h-4 w-4 text-yellow-300 fill-yellow-300" />
										</motion.div>
										<span className="text-white font-medium text-sm">
											5.0 Rating (200+ Reviews)
										</span>
										<div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none" />
									</div>
								</motion.div>

								{/* Delivery Badge */}
								<motion.div
									className="relative group"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										type: "spring",
										stiffness: 300,
										damping: 15,
										delay: 0.4,
									}}
									whileHover={{ y: -3 }}
								>
									<div className="absolute inset-0 bg-green-400/30 rounded-full blur-md group-hover:opacity-80 opacity-0 transition-opacity duration-300" />
									<div className="relative flex items-center gap-2 bg-gradient-to-br from-emerald-600 to-emerald-700 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-500/30 shadow-lg shadow-emerald-500/10">
										<motion.div
											animate={{ x: [0, 2, -1, 1, 0] }}
											transition={{ duration: 1.5, delay: 1.2 }}
										>
											<Clock className="h-4 w-4 text-green-300" />
										</motion.div>
										<span className="text-white font-medium text-sm">
											Fast Delivery
										</span>
										<div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none" />
									</div>
								</motion.div>

								{/* Seller Badge */}
								<motion.div
									className="relative group"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										type: "spring",
										stiffness: 300,
										damping: 15,
										delay: 0.5,
									}}
									whileHover={{ y: -3 }}
								>
									<div className="absolute inset-0 bg-blue-400/30 rounded-full blur-md group-hover:opacity-80 opacity-0 transition-opacity duration-300" />
									<div className="relative flex items-center gap-2 bg-gradient-to-br from-indigo-600 to-indigo-700 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-500/30 shadow-lg shadow-indigo-500/10">
										<motion.div
											animate={{ scale: [1, 1.1, 1] }}
											transition={{ duration: 1.8, delay: 1.5 }}
										>
											<Award className="h-4 w-4 text-blue-300 fill-blue-300/30" />
										</motion.div>
										<span className="text-white font-medium text-sm">
											Level 2 Seller
										</span>
										<div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none" />
									</div>
								</motion.div>
							</div>
							<div className="flex flex-wrap justify-center gap-4">
								<motion.a
									target="_blank"
									href="https://www.linkedin.com/in/shovon-kumar-sarkar-6047b3361"
									className="px-6 py-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-primary/50 text-gray-800 font-medium flex items-center gap-2"
									whileHover={buttonHover}
									whileTap={buttonTap}
									variants={itemVariants}
								>
									<Linkedin className="w-5 h-5 text-primary" />
									<span>LinkedIn</span>
								</motion.a>

								<motion.a
									target="_blank"
									href="https://www.fiverr.com/code_craf"
									className="px-6 py-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-green-500/50 text-gray-800 font-medium flex items-center gap-2"
									whileHover={buttonHover}
									whileTap={buttonTap}
									variants={itemVariants}
								>
									<Mail className="w-5 h-5 text-green-600" />
									<span>Contact on Fiverr</span>
								</motion.a>
							</div>
						</div>
					</div>
				</div>
				<div id="skills"></div>
			</section>

			{/* Skills Section */}
			<section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
				{/* Floating background elements */}
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
					{[...Array(12)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute rounded-full bg-primary"
							style={{
								width: `${Math.random() * 300 + 100}px`,
								height: `${Math.random() * 300 + 100}px`,
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
								filter: "blur(60px)",
							}}
							animate={{
								x: [
									`${Math.random() * 100 - 50}px`,
									`${Math.random() * 100 - 50}px`,
								],
								y: [
									`${Math.random() * 100 - 50}px`,
									`${Math.random() * 100 - 50}px`,
								],
							}}
							transition={{
								duration: 20 + Math.random() * 20,
								repeat: Infinity,
								repeatType: "reverse",
								ease: "easeInOut",
							}}
						/>
					))}
				</div>

				<div className="container mx-auto px-4 relative z-10">
					{/* Animated title */}
					<motion.h2
						className="text-3xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						My Skills
					</motion.h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{skills.map((skill, index) => (
							<motion.div
								key={index}
								className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 relative overflow-hidden"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true, margin: "-50px" }}
								whileHover={{ y: -5 }}
							>
								{/* Skill icon placeholder - replace with your icons */}
								<div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-bold">
									{skill.title.charAt(0)}
								</div>

								<h3 className="text-xl font-bold mb-4 text-gray-800">
									{skill.title}
								</h3>
								<p className="text-gray-600 mb-6">{skill.description}</p>

								{/* Animated progress bar indicator */}
								<div className="w-full bg-gray-200 rounded-full h-1.5">
									<motion.div
										className="bg-gradient-to-r from-primary to-secondary h-1.5 rounded-full"
										initial={{ width: 0 }}
										whileInView={{ width: `${Math.random() * 50 + 50}%` }}
										transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
										viewport={{ once: true }}
									/>
								</div>

								{/* Hover shine effect */}
								<div className="absolute inset-0 overflow-hidden opacity-0 hover:opacity-100 transition-opacity duration-300">
									<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-500" />
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Experience Section */}
			<section
				id="experience"
				className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
			>
				{/* Decorative elements */}
				<div className="absolute top-0 left-0 w-full h-full opacity-5">
					<div className="absolute top-20 left-10 w-40 h-40 bg-primary rounded-full filter blur-3xl"></div>
					<div className="absolute bottom-10 right-20 w-60 h-60 bg-secondary rounded-full filter blur-3xl"></div>
				</div>

				<div className="container mx-auto px-4 relative z-10">
					<h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
						Work Experience
					</h2>

					<div className="max-w-6xl mx-auto">
						{/* Fiverr Experience - Enhanced Card */}
						<div className="bg-white rounded-3xl p-8 mb-12 shadow-2xl transform transition-all hover:scale-[1.01] hover:shadow-xl">
							<div className="flex flex-col md:flex-row gap-8 items-start">
								<div className="md:w-1/4 flex justify-center md:justify-start">
									<div className="bg-gradient-to-br from-primary to-secondary p-1 rounded-xl shadow-lg">
										<div className="bg-white p-4 rounded-lg">
											<Image
												src="/man-image.png?height=100&width=100"
												alt="Fiverr Logo"
												width={100}
												height={100}
												className="h-24 w-24 object-contain"
											/>
										</div>
									</div>
								</div>
								<div className="md:w-3/4">
									<div className="flex flex-col md:flex-row justify-between mb-4">
										<div>
											<h3 className="text-3xl font-bold text-gray-800 bg-clip-text bg-gradient-to-r from-primary to-secondary">
												Freelance AI Developer
											</h3>
											<div className="flex items-center mt-2">
												<span className="text-lg text-gray-600 mr-2">
													Fiverr Pro Seller
												</span>
												<span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
													<StarIcon className="w-3 h-3 mr-1" />
													Top Rated
												</span>
											</div>
										</div>
										<div className="mt-2 md:mt-0">
											<span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
												Since 2020
											</span>
										</div>
									</div>

									<p className="text-lg text-gray-700 mb-6 leading-relaxed">
										I provide specialized AI development services on Fiverr,
										helping clients implement cutting-edge artificial
										intelligence solutions for their businesses. With a focus on
										quality and innovation, I deliver tailored solutions that
										drive real business impact.
									</p>

									<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
										<div className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl shadow-md border border-gray-100 text-center transform transition-all hover:scale-105">
											<div className="text-4xl font-bold text-primary mb-1 flex justify-center items-end">
												200<span className="text-2xl text-primary/70">+</span>
											</div>
											<div className="text-gray-600 font-medium">
												Projects Completed
											</div>
										</div>
										<div className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl shadow-md border border-gray-100 text-center transform transition-all hover:scale-105">
											<div className="text-4xl font-bold text-primary mb-1 flex justify-center items-center">
												5
												<StarIcon className="w-5 h-5 ml-1 text-yellow-400 fill-yellow-400" />
											</div>
											<div className="text-gray-600 font-medium">
												Average Rating
											</div>
										</div>
										<div className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl shadow-md border border-gray-100 text-center transform transition-all hover:scale-105">
											<div className="text-4xl font-bold text-primary mb-1">
												90%
											</div>
											<div className="text-gray-600 font-medium">
												Repeat Clients
											</div>
										</div>
									</div>

									<div className="space-y-6">
										<h4 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
											<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
												Services Offered
											</span>
										</h4>
										<ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
											{[
												"Custom AI Model Development",
												"Natural Language Processing",
												"Machine Learning Integration",
												"AI Chatbot Development",
												"Computer Vision Solutions",
												"AI Consultation Services",
											].map((service, index) => (
												<li
													key={index}
													className="flex items-start gap-3 group"
												>
													<div className="mt-1.5 flex-shrink-0">
														<div className="h-3 w-3 rounded-full bg-primary group-hover:bg-secondary transition-colors"></div>
													</div>
													<span className="text-gray-700 group-hover:text-gray-900 transition-colors">
														{service}
													</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="projects"></div>
			</section>

			{/* Projects Section */}
			<section className="pb-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
						Projects
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{projects.map((project, index) => (
							<motion.div
								key={project.id}
								className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true, margin: "-100px" }}
								whileHover={{ scale: 1.02 }}
							>
								{/* Background Glow Effect */}
								<motion.div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

								{/* Image Section */}
								<div className="relative overflow-hidden rounded-t-3xl">
									<div className="aspect-video bg-gradient-to-br from-purple-100 to-indigo-100">
										<Image
											width={700}
											height={700}
											src={project.image || "/placeholder.svg"}
											alt={project.title}
											className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
										/>
									</div>

									{/* Hover Overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
										<div className="p-6 w-full">
											<div className="flex justify-between items-center gap-3">
												<h3 className="text-lg font-bold text-white">
													{project.title}
												</h3>
												{project.link && (
													<a
														href={project.link}
														target="_blank"
														rel="noopener noreferrer"
														className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors duration-300"
													>
														<ExternalLink className="h-4 w-4 text-white" />
													</a>
												)}
											</div>
										</div>
									</div>
								</div>

								{/* Content Section */}
								<div className="p-6">
									<h3 className="text-xl font-bold text-gray-900 mb-2">
										{project.title}
									</h3>
									<p className="text-gray-600 mb-4">
										{project.description?.slice(0, 150)} ...
									</p>

									{/* Learn More Button */}
									<motion.a
										href={project.link}
										className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
										whileHover={{
											scale: 1.05,
											backgroundPosition: "right center",
										}}
										whileTap={{ scale: 0.95 }}
										style={{
											backgroundSize: "200% auto",
											backgroundImage:
												"linear-gradient(to right, #6366f1, #a855f7, #6366f1)",
										}}
									>
										<span className="z-10 relative">Learn More</span>
										<motion.span
											className="absolute inset-0 bg-white/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
											layoutId={`button-glow-${index}`}
										/>
									</motion.a>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Client Review Section */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
						Client Review
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								quote:
									"Shovon and his team are so helpful and they are very passionate about their work. You can trust you are in good hands with Shovon and his team as they want to see you succeed and are happy to help, answer any questions, and make any changes.",
								author: "maxilef",
								position: "United States",
								avatar: "/maxllef.webp",
								rating: 5,
								date: "2 weeks ago",
							},
							{
								quote:
									"Collaborating with Shovon has been a great experience time and time again. He brings both talent and dedication to every project, handling challenges with ease and delivering polished, high-quality work.",
								author: "imdjohirulfin01",
								position: "United States",
								avatar: "/imdjohirulfin01.webp",
								rating: 5,
								date: "3 months ago",
							},
							{
								quote:
									"I've consistently been impressed with Shovon's expertise and reliable execution. He continues to be a valuable asset to our AI projects, and I look forward to working with him again.",
								author: "davisdebard",
								position: "United States",
								avatar: "/davisdebard.jpg",
								rating: 5,
								date: "1 month ago",
							},
						].map((testimonial, index) => (
							<div
								key={index}
								className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform transition-all hover:scale-[1.02] hover:shadow-xl"
							>
								<div className="flex items-center mb-4">
									<div className="flex -space-x-1 overflow-hidden mr-3">
										<Image
											src={testimonial.avatar}
											alt={testimonial.author}
											width={48}
											height={48}
											className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
										/>
									</div>
									<div>
										<h4 className="font-bold text-gray-800">
											{testimonial.author}
										</h4>
										<p className="text-sm text-gray-500">
											{testimonial.position}
										</p>
									</div>
								</div>
								<div className="mb-4">
									{[...Array(5)].map((_, i) => (
										<StarIcon
											key={i}
											className={`w-5 h-5 inline ${
												i < testimonial.rating
													? "text-yellow-400 fill-yellow-400"
													: "text-gray-300 fill-gray-300"
											}`}
										/>
									))}
									<span className="text-sm text-gray-500 ml-2">
										{testimonial.date}
									</span>
								</div>
								<p className="text-gray-700 italic relative pl-4 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b from-primary to-secondary before:rounded-full">
									"{testimonial.quote}"
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<ContactSection />

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
