
const Console = () => {
    return (

        <div className="md:col-span-5 w-full p-2 ">
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
                <div className="p-6 font-mono text-xs leading-relaxed overflow-x-auto">
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
    )
}

export default Console