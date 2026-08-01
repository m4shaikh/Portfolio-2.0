import React from 'react';

const Home = () => {
	return (
		// 1. Changed p-6 md:p-8 to tighter vertical padding (py-4 md:py-6) to save screen real estate on zoom
		// 2. Added min-h-[100dvh] for better mobile viewport handling
		<div className="min-h-[100vh] ml-[60px] flex flex-col justify-between px-6 py-4 select-none bg-[#1a1a1a] text-white">

			{/* Top HTML Tag */}
			<div className="space-y-1">
				<span className="font-tag text-blue-500 block">&lt;html&gt;</span>
				<span className="font-tag text-blue-500 block pl-6">&lt;body&gt;</span>
			</div>

			{/* 3. Removed 'py-8' here. Flexbox will now naturally center the content without forcing extra height */}
			<div className="flex-1 flex flex-col justify-center my-4 md:my-0">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pl-4 md:pl-16">

					{/* LEFT COLUMN: Hero Text */}
					<div className="lg:col-span-7 flex flex-col gap-6">
						<div>
							<span className="font-tag text-blue-500 block mb-2">&lt;h1&gt;</span>
							<h1 className="font-rg text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight uppercase tracking-wide">
								Hi There, <br />
								I'm <span className="text-primary-500">Moinuddin Shaikh</span> <br />
								Software Engineer
							</h1>
							<span className="font-tag text-blue-500 block mt-2">&lt;/h1&gt;</span>
						</div>

						<p className="font-label text-secondary-500 text-lg tracking-wide">
							Designing Scalable &amp; Secure APIs
						</p>

						{/* Buttons */}
						<div className="flex flex-wrap gap-4 pt-2">
							<button className="border-2 border-green-500 hover:bg-green-500 hover:text-black text-green-500 font-label px-6 py-2.5 rounded-sm transition-all duration-300">
								Contact Me
							</button>
							<button className="bg-primary-500 hover:opacity-90 text-white font-label px-6 py-2.5 rounded-sm transition-all duration-300 shadow-lg shadow-primary-500/20">
								Download Resume
							</button>
						</div>
					</div>

					{/* RIGHT COLUMN: Interactive API Terminal */}
					<div className="lg:col-span-5 w-full max-w-lg mx-auto lg:mx-0">
						<div className="bg-[#1e1e1e] border border-gray-800 rounded-lg shadow-2xl overflow-hidden backdrop-blur-sm">

							{/* Terminal Header */}
							<div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-gray-800">
								<div className="flex gap-2">
									<div className="w-3 h-3 rounded-full bg-red-500"></div>
									<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
									<div className="w-3 h-3 rounded-full bg-green-500"></div>
								</div>
								<span className="text-xs text-gray-400 font-mono">bash - GET /api/v1/profile</span>
								<div className="w-8"></div> {/* Spacer for symmetry */}
							</div>

							{/* Terminal Body */}
							<div className="p-6 font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
								<div className="text-green-400 mb-2">
									<span className="text-gray-500">$</span> curl -X GET https://api.m4shaikh.in/v1/status
								</div>

								<div className="text-gray-300">
									<span className="text-gray-500">{"{"}</span>
									<div className="pl-4">
										<span className="text-blue-400">&quot;name&quot;</span>: <span className="text-orange-400">&quot;Moinuddin Shaikh&quot;</span>,<br />
										<span className="text-blue-400">&quot;role&quot;</span>: <span className="text-orange-400">&quot;Software Engineer&quot;</span>,<br />
										<span className="text-blue-400">&quot;status&quot;</span>: <span className="text-green-400">&quot;200 OK - Available for hire&quot;</span>,<br />
										<span className="text-blue-400">&quot;focus&quot;</span>: [
										<div className="pl-4 text-orange-400">
											&quot;Backend Architecture&quot;,<br />
											&quot;Distributed Systems&quot;,<br />
											&quot;Secure API Design&quot;
										</div>
										],<br />
										<span className="text-blue-400">&quot;current_location&quot;</span>: <span className="text-orange-400">&quot;India&quot;</span>
									</div>
									<span className="text-gray-500">{"}"}</span>
								</div>
							</div>

						</div>
					</div>

				</div>
			</div>

			{/* Bottom HTML Tag */}
			<div className="space-y-1">
				<span className="font-tag text-blue-500 block pl-6">&lt;/body&gt;</span>
				<span className="font-tag text-blue-500 block">&lt;/html&gt;</span>
			</div>

		</div>
	);
};

export default Home;