export default function Contact(){
    return(
        <>
            <h1 className="w-[100vw] mt-4 flex justify-center items-center text-emerald-900 text-4xl silkscreen-regular">Contact</h1>

            <div className="mt-5 mb-5 p-10 w-screen h-[80vh] bg-green-300 flex flex-col justify-center items-center">
                <p className="black-ops-one-regular font-bold">I would love to here from you, please message me</p>
                
                <br /><br /><br /><br /><br />
                <h2>Name:</h2>
                <input type="text" className="mb-10 w-[50vw] p-2 bg-white text-center rounded-full"/>
                <h2>Email:</h2>
                <input type="email" className="mb-10 w-[50vw] p-2 bg-white text-center rounded-full"/>
                <h2>Message:</h2>
                <input type="text" className="mb-10 w-[50vw] p-2 bg-white text-center rounded-full"/>
                <button type="submit" className="btn bg-blue-800 text-white rounded-full hover:animate-pulse">Submit</button>
            </div>
        </>
    )
}