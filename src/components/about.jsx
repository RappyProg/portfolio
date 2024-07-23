export default function About(){
    return(
        <>
            <h1 className="w-[100vw] mt-4 flex justify-center items-center text-emerald-900 text-4xl silkscreen-regular">About</h1>
            <div className="mt-5 mb-2 h-[80vh] w-[100vw] bg-white p-10 grid grid-cols-2 gap-2">
                <div className="card p-5 bg-green-800 items-center text-white text-center">
                    <div className="card-title black-ops-one-regular ">About Me</div>
                    <div className="card-body">
                        <hr />
                        <b><u>My Nationality:</u></b>
                        <p>Indonesian</p>
                        <hr />
                        <b><u>I Speak:</u></b> 
                        <p>Bahasa Indonesia, English, Bahasa Melayu(a bit)</p>
                        <hr />
                        
                    </div>
                </div>
                <div className="card p-5 bg-blue-800 items-center text-white text-center b-">
                    <div className="card-title black-ops-one-regular">Programming Background</div>
                    <div className="card-body">
                        <hr />
                        <b><u>Graduated from:</u></b>
                        <p>-</p>
                        <hr />
                        <b><u>Programming Language:</u></b> 
                        <p>HTML, CSS, JS, React.JS, Tailwind, etc.</p>
                        <hr />
                        
                    </div>
                </div>
                <div className="card p-5 bg-red-500 items-center text-white text-center b-">
                    <div className="card-title black-ops-one-regular">Anything Else</div>
                    <div className="card-body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, pariatur?
                        Fugit quo vel debitis ipsam odio ducimus amet odit excepturi.
                        Vero incidunt nam quas. Nihil nesciunt assumenda adipisci reprehenderit delectus.
                        
                    </div>
                </div>
                <div className="card p-5 bg-yellow-700 items-center text-white text-center b-">
                    <div className="card-title black-ops-one-regular">Anything Else</div>
                    <div className="card-body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, pariatur?
                        Fugit quo vel debitis ipsam odio ducimus amet odit excepturi.
                        Vero incidunt nam quas. Nihil nesciunt assumenda adipisci reprehenderit delectus.
                        
                    </div>
                </div>
                

            </div>
        </>
    )
}