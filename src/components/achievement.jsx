export default function Achievement() {
    return (
        <>
            <h1 className="w-[100vw] mt-4 flex justify-center items-center text-emerald-900 text-4xl silkscreen-regular">Achievements</h1>

            <div className="mt-5 mb-5 p-10 w-screen h-[80vh] bg-slate-200 flex justify-center items-center">
                <div className="relative w-full max-w-4xl">
                    <div className="absolute top-0 left-1/2 w-1 bg-gray-400 h-full transform -translate-x-1/2"></div>
                    <div className="flex flex-col space-y-10">
                        {/** Example timeline items */}
                        {/** Item 1 */}
                        <div className="relative flex items-center justify-start">
                            <div className="w-6 h-6 bg-emerald-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                            <div className="w-1/2 bg-white p-4 border border-gray-300 rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold">Achievement 1</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aspernatur.</p>
                            </div>
                        </div>
                        {/** Item 2 */}
                        <div className="relative flex items-center justify-end">
                            <div className="w-6 h-6 bg-emerald-500 rounded-full absolute right-1/2 transform translate-x-1/2"></div>
                            <div className="w-1/2 bg-white p-4 border border-gray-300 rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold">Achievement 2</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aspernatur.</p>
                            </div>
                        </div>
                        {/** Item 3 */}
                        <div className="relative flex items-center justify-start">
                            <div className="w-6 h-6 bg-emerald-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                            <div className="w-1/2 bg-white p-4 border border-gray-300 rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold">Achievement 3</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aspernatur.</p>
                            </div>
                        </div>
                        {/** Add more timeline items as needed */}
                         {/** Item 2 */}
                         <div className="relative flex items-center justify-end">
                            <div className="w-6 h-6 bg-emerald-500 rounded-full absolute right-1/2 transform translate-x-1/2"></div>
                            <div className="w-1/2 bg-white p-4 border border-gray-300 rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold">Achievement 2</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aspernatur.</p>
                            </div>
                        </div>
                        {/** Item 3 */}
                        <div className="relative flex items-center justify-start">
                            <div className="w-6 h-6 bg-emerald-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                            <div className="w-1/2 bg-white p-4 border border-gray-300 rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold">Achievement 3</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aspernatur.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
