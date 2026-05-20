const Indicators = ({ text, color, filter }) => {
    const textColors = {
        cyan: "text-cyan-600 bg-cyan-50 border-cyan-100",
        purple: "text-purple-600 bg-purple-50 border-purple-100",
        green: "text-green-600 bg-green-50 border-green-100",
        red: "text-red-600 bg-red-50 border-red-100"
    }

    const count = Array.isArray(filter) ? filter.length : 0

    return (
        <div className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-6">
            <div className="flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                    {/* Tiny tracking label optimized for mobile text sizing first */}
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">
                        KPI Tracker
                    </span>
                    <h2 className="text-base font-semibold text-slate-900 sm:text-lg lg:text-xl">
                        {text}
                    </h2>
                </div>
                
                {/* Visual badge that scales beautifully across devices */}
                <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-base font-bold shadow-sm sm:h-12 sm:w-12 sm:text-lg ${textColors[color] ?? "text-slate-700 bg-slate-50 border-slate-100"}`}>
                    {count}
                </span>
            </div>
            
            {/* Context paragraph tucked nicely at the bottom */}
            <p className="mt-4 text-xs text-slate-500 sm:text-sm">
                Number of matching application records.
            </p>
        </div>
    )
}

export default Indicators