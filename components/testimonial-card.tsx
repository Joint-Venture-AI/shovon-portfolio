"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
	quote: string;
	author: string;
	position: string;
	avatar: string;
	rating: number;
	date?: string;
}

export default function TestimonialCard({
	quote,
	author,
	position,
	avatar,
	rating,
	date,
}: TestimonialCardProps) {
	return (
		<motion.div
			className="relative bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			viewport={{ once: true }}
			whileHover={{ scale: 1.03 }}
		>
			{/* Background Glow Effect */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-br from-purple-300/10 to-indigo-300/10 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
				initial={{ opacity: 0 }}
				whileHover={{ opacity: 1 }}
				transition={{ duration: 0.6 }}
			/>

			{/* Floating Decoration */}
			<motion.div
				className="absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 blur-md opacity-30 -z-10"
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			/>

			{/* Avatar and Rating Section */}
			<div className="flex flex-row justify-between items-start gap-6">
				<div className="flex items-center gap-4">
					<motion.div
						className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-purple-400 ring-offset-2 shadow-md relative"
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.3 }}
					>
						<img
							src={avatar || "/placeholder.svg"}
							alt={author}
							className="w-full h-full object-cover"
						/>
						{/* Hover Overlay */}
						<motion.div
							className="absolute inset-0 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							whileHover={{ scale: 1.2 }}
						/>
					</motion.div>

					<div>
						<h4 className="font-bold text-gray-900 text-xl">{author}</h4>
						<p className="text-gray-500 text-sm">{position}</p>
						{date && <p className="text-xs text-gray-400 mt-1">{date}</p>}
					</div>
				</div>
			</div>
			<div className="flex items-center gap-1 my-4">
				{Array.from({ length: 5 }).map((_, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: i * 0.1 }}
					>
						<Star
							className={`size-8 ${
								i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
							}`}
						/>
					</motion.div>
				))}
			</div>
			{/* Quote Section */}
			<p className="text-gray-700 italic text-lg leading-relaxed mb-6 relative">
				<span className="text-4xl text-purple-500 absolute -left-6 -top-2">
					“
				</span>
				{quote}
			</p>
		</motion.div>
	);
}
