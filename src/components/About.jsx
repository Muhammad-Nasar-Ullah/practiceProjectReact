import React from 'react'

const About = ({ mode }) => {
    return (
        <div className='flex flex-col gap-5 w-[40%] mx-auto my-5'>
            <h1 className={`text-2xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>About Us</h1>

            <div className='flex flex-col gap-2'>
                <h2 className={`text-xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Why This Tool?</h2>
                <p className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>This project was built with simplicity and efficiency in mind. Instead of using complex software or wasting time editing manually, this tool provides a quick and reliable way to handle text transformations instantly.</p>
                <p className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>It is designed to:</p>
                <div className='flex flex-col ml-[8%] gap-2'>
                    <ul className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                        <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ listStyleType: 'disc' }}>Improve productivity</li>
                        <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ listStyleType: 'disc' }}>Save time</li>
                        <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ listStyleType: 'disc' }}>Provide a clean and distraction-free interface</li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <h2 className={`text-xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Technology Behind It</h2>
                <p className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>This website is built using modern web technologies, focusing on performance and user experience. It uses concepts like:</p>
                <div className='flex flex-col ml-[8%] gap-2'>
                    <ul className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                        <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ listStyleType: 'disc' }}>Functional components</li>
                        <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ listStyleType: 'disc' }}>State management</li>
                        <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ listStyleType: 'disc' }}>Conditional rendering</li>
                        <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ listStyleType: 'disc' }}>Interactive UI updates</li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <h2 className={`text-xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Our Mission</h2>
                <p className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>Our mission is to create simple tools that solve real-world problems. We believe even small utilities can make a big difference in daily workflows.</p>
            </div>

            <div className='flex flex-col gap-2'>
                <h2 className={`text-xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Future Plans</h2>
                <p className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>We plan to add more features in the future, such as:</p>
                <div className='flex flex-col ml-[8%] gap-2'>
                    <ul className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                        <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ listStyleType: 'disc' }}>Word and character counter</li>
                        <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ listStyleType: 'disc' }}>Remove extra spaces</li>
                        <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ listStyleType: 'disc' }}>Text formatting options</li>
                        <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ listStyleType: 'disc' }}>Download text as a file</li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <h2 className={`text-xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Thank You</h2>
                <p className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>Thank you for using our tool. Your support motivates us to build more helpful and efficient applications.</p>
            </div>


        </div>
    )
}

export default About