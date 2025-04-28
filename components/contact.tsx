import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.3,
		},
	},
};

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 10,
		},
	},
};

const buttonHover = {
	scale: 1.05,
	boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
	transition: {
		type: "spring",
		stiffness: 400,
		damping: 10,
	},
};

const buttonTap = {
	scale: 0.98,
};

export function ContactSection() {
	return (
		<motion.section
			id="contact"
			className="py-20 bg-white relative overflow-hidden"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={containerVariants}
		>
			{/* Animated background elements */}
			<motion.div
				className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 0.1 }}
				transition={{ duration: 1.5, delay: 0.2 }}
			/>
			<motion.div
				className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 0.1 }}
				transition={{ duration: 1.5, delay: 0.4 }}
			/>

			<div className="container mx-auto px-4 relative z-10">
				<h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
					Get In Touch
				</h2>

				<div className="max-w-3xl mx-auto">
					<motion.div
						className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100"
						whileHover={{
							y: -5,
							boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
						}}
						transition={{ type: "spring", stiffness: 300 }}
						variants={itemVariants}
					>
						<div className="text-center">
							<motion.p
								className="text-xl text-gray-700 mb-10 leading-relaxed"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.6 }}
							>
								Interested in working together? Feel free to reach out for
								<br className="hidden md:block" />
								collaborations or just a friendly hello!
							</motion.p>

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
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}
