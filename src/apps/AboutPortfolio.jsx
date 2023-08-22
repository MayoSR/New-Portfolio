import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function AboutPortfolio() {
    return (
        <div className="text-black p-10 text-left">
            <h1 className="text-3xl mb-5">Q: What is this?</h1>
            <p className="text-md mb-5">This is my web portfolio. It is inspired by the design of Windows 11, and works similar to how an operating system works. Scroll down for some comparison pictures!</p>

            <h1 className="text-3xl mb-5">Tutorial</h1>
            <iframe
                src="https://www.loom.com/embed/16193859a91f4adeb8e35c23f3970a33"
                frameborder="0"
                allowfullscreen
                className="w-full h-[500px] mb-5"
                title="wireframe video"
            />
            
            <h1 className="text-3xl mb-5">Q: How does this work?</h1>
            <ul className="space-y-2">
                {[
                    'Use Google Chrome for the best experience!',
                    'The M icon is the start button. Click on it to view my skills and experience!',
                    'Double clicking opens applications.',
                    'The close buttons close the apps, either from the navbar or from the window itself.',
                    'The fullscreen button goes fullscreen.',
                    'Clicking on a window behind will bring it to the front, or clicking the corresponding navbar icon will bring it to the front as well.',
                    'Windows can be dragged around.',
                    'The navbar on the bottom can be used to close windows, or preview them on hover.'
                ].map((text, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                        <AiOutlineArrowRight className="text-green-500" />
                        <span className="font-bold">{text}</span>
                    </li>
                ))}
            </ul>
            
            <p className="my-5">It works similar to how a real OS functions... [truncated for brevity]</p>
            <h1 className="text-3xl mb-5">Q: Why did you choose this design?</h1>
            <p className="mb-5">Windows 11 is the latest OS... [truncated for brevity]</p>

            <div className="flex flex-col w-full gap-4">
                <img src="/images/screen.png" className="inline-block" />
                <img src="/images/navbar.png" className="inline-block" />
                <img src="/images/folder.png" className="inline-block" />
            </div>
        </div>
    )
}
