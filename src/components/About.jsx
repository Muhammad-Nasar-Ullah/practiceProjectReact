import React from 'react'

const About = ({ mode }) => {


    let aboutData = [
        {
            title: "Why This Tool?",
            content: (
                <>
                    <p>This project was built with simplicity and efficiency in mind. Instead of using complex software or wasting time editing manually, this tool provides a quick and reliable way to handle text transformations instantly.</p>
                    <p>It is designed to:</p>
                    <ul className="list-disc ml-5 space-y-1">
                        <li>Improve productivity</li>
                        <li>Save time</li>
                        <li>Provide a clean and distraction-free interface</li>
                    </ul>
                </>
            )
        },
        {
            title: "Technology Behind It",
            content: (
                <>
                    <p>This website is built using modern web technologies, focusing on performance and user experience. It uses concepts like:</p>
                    <ul className="list-disc ml-5 space-y-1">
                        <li>Functional components</li>
                        <li>State management</li>
                        <li>Conditional rendering</li>
                        <li>Interactive UI updates</li>
                    </ul>
                </>
            )
        },
        {
            title: "Our Mission",
            content: (
                <p>Our mission is to create simple tools that solve real-world problems. We believe even small utilities can make a big difference in daily workflows.</p>
            )
        },
        {
            title: "Future Plans",
            content: (
                <>
                    <p>We plan to add more features in the future, such as:</p>
                    <ul className="list-disc ml-5 space-y-1">
                        <li>Word and character counter</li>
                        <li>Remove extra spaces</li>
                        <li>Text formatting options</li>
                        <li>Download text as a file</li>
                    </ul>
                </>
            )
        },
        {
            title: "Thank You",
            content: (
                <p>Thank you for using our tool. Your support motivates us to build more helpful and efficient applications.</p>
            )
        }
    ]


    return (

        <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto my-8 flex flex-col gap-6">

            <h1 className={`text-3xl font-bold text-center ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                About Us
            </h1>

            {aboutData.map((section, index) => (
                <div
                    key={index}
                    className={`p-5 rounded-2xl shadow-md border transition duration-300 hover:shadow-lg ${mode === 'dark' ? 'bg-gray-900 border-gray-700 text-gray-200' : 'bg-white border-gray-200 text-gray-700'}`}
                >
                    <h2 className="text-xl font-semibold mb-2">
                        {section.title}
                    </h2>

                    <div className="space-y-2 text-sm leading-relaxed">
                        {section.content}
                    </div>
                </div>
            ))}

        </div>
    )
}

export default About


// <div className='flex flex-col gap-5 w-[90%] md:w-[80%] lg:w-[60%] mx-auto my-5'>
//     <h1 className={`text-2xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>About Us</h1>

//     <div className='flex flex-col gap-2'>
//         <h2 className={`text-xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Why This Tool?</h2>
//         <p className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>This project was built with simplicity and efficiency in mind. Instead of using complex software or wasting time editing manually, this tool provides a quick and reliable way to handle text transformations instantly.</p>
//         <p className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>It is designed to:</p>
//         <div className='flex flex-col ml-[8%] gap-2'>
//             <ul className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>
//                 <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ listStyleType: 'disc' }}>Improve productivity</li>
//                 <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ listStyleType: 'disc' }}>Save time</li>
//                 <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ listStyleType: 'disc' }}>Provide a clean and distraction-free interface</li>
//             </ul>
//         </div>
//     </div>

//     <div className='flex flex-col gap-2'>
//         <h2 className={`text-xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Technology Behind It</h2>
//         <p className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>This website is built using modern web technologies, focusing on performance and user experience. It uses concepts like:</p>
//         <div className='flex flex-col ml-[8%] gap-2'>
//             <ul className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>
//                 <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ listStyleType: 'disc' }}>Functional components</li>
//                 <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ listStyleType: 'disc' }}>State management</li>
//                 <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ listStyleType: 'disc' }}>Conditional rendering</li>
//                 <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ listStyleType: 'disc' }}>Interactive UI updates</li>
//             </ul>
//         </div>
//     </div>

//     <div className='flex flex-col gap-2'>
//         <h2 className={`text-xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Our Mission</h2>
//         <p className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>Our mission is to create simple tools that solve real-world problems. We believe even small utilities can make a big difference in daily workflows.</p>
//     </div>

//     <div className='flex flex-col gap-2'>
//         <h2 className={`text-xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Future Plans</h2>
//         <p className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>We plan to add more features in the future, such as:</p>
//         <div className='flex flex-col ml-[8%] gap-2'>
//             <ul className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>
//                 <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ listStyleType: 'disc' }}>Word and character counter</li>
//                 <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ listStyleType: 'disc' }}>Remove extra spaces</li>
//                 <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ listStyleType: 'disc' }}>Text formatting options</li>
//                 <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ listStyleType: 'disc' }}>Download text as a file</li>
//             </ul>
//         </div>
//     </div>

//     <div className='flex flex-col gap-2'>
//         <h2 className={`text-xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Thank You</h2>
//         <p className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>Thank you for using our tool. Your support motivates us to build more helpful and efficient applications.</p>
//     </div>
// </div>