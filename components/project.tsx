"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const ProjectCard = ({ project, index }: any) => {
	const [length, setLength] = useState(150);

	return (
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
							<h3 className="text-lg font-bold text-white">{project.title}</h3>
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
					{project.description?.slice(0, length)}{" "}
					{project.description?.length > length && "..."}
				</p>

				{/* Learn More Button */}
				<motion.button
					onClick={() => {
						setLength(
							project.description?.length !== length
								? project.description?.length
								: 150
						);
					}}
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
					<span className="z-10 relative">
						{project?.description?.length > length ? "Learn More" : "Read Less"}
					</span>
					<motion.span
						className="absolute inset-0 bg-white/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						layoutId={`button-glow-${index}`}
					/>
				</motion.button>
			</div>
		</motion.div>
	);
};
