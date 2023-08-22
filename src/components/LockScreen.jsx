import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function LockScreen(props) {
    const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [weekday, setWeekday] = useState(new Date().getDay())
    const [month, setMonth] = useState(new Date().getMonth())
    const [date, setDate] = useState(new Date().getDate())
    const [hours, setHours] = useState(("0" + new Date().getHours()).slice(-2))
    const [mins, setMins] = useState(("0" + new Date().getMinutes()).slice(-2))
    const dispatch = useDispatch()

    setInterval(() => {
        setWeekday(new Date().getDay())
        setMonth(new Date().getMonth())
        setDate(new Date().getDate())
        setHours(("0" + new Date().getHours()).slice(-2))
        setMins(("0" + new Date().getMinutes()).slice(-2))
    }, 60000);

    return (
        <div className="relative overflow-hidden h-screen w-screen text-white">
            <div className="absolute inset-0 z-50 h-full w-full">
                <img src='/images/windows-flower.jpg' className="h-full w-full transform scale-110 blur-md" alt="bg" />
            </div>
            <div className="flex flex-col items-center absolute inset-0 z-60 p-10 pt-20" style={{zIndex:9000}}>
                <div className="w-full flex justify-center">
                    <h1 className="text-8xl">{hours} : {mins}</h1>
                </div>
                <div className="w-full flex justify-center">
                    <h2 className="text-2xl">{dayList[weekday]}, {date} {monthList[month]}</h2>
                </div>
                <div className="mt-10">
                    <img src='/images/me.jpg' className="h-64 w-64 rounded-full" />
                </div>
                <button 
                    onClick={() => { props.setScreen(1) }} 
                    className="mt-10 w-64 py-2 bg-gray-800 text-white border-b-4 border-cyan-500 hover:bg-gray-700"
                >
                    Login
                </button>
                <p className="mt-5 text-sm">Tip: Click to login, there's no password</p>
                <p className="mt-1 text-sm">Tip: Use a Desktop and Google Chrome for the best experience!</p>
                <p className="mt-1 text-sm">Tip: Double click opens all applications, although some may also respond to single clicks</p>
            </div>
        </div>
    )
}
