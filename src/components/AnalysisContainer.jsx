const AnalysisContainer = ({ Icon, heading, calculation, subheading }) => {
    return (
        <div className=" w-auto px-1 py-7 shadow-sm shadow-gray-500">
            <div className="flex items-center gap-6 ml-4">
                
                <Icon className="fill-green-500 bg-green-500 p-[3px] w-10 h-10 rounded-lg" />
                <div className="flex flex-col justify-center">
                    <h2 className="text-lg font-medium">{heading}</h2>
                    <p className="text-xl font-bold">{calculation}</p>
                </div>
            </div>


            <h2 className="mt-3 ml-3 font-medium w-[70%]">{subheading}</h2>
        </div>
    )
}

export default AnalysisContainer