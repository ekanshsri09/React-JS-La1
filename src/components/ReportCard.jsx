// ReportCard.jsx
import React from 'react'
function ReportCard(){
    //Step1: Data (Array of Objects)
    const students = [
        {id:1, sname:'Rahul', marks:75},
        {id:2, sname:'Aman', marks:32},
        {id:3, sname:'Aditi', marks:92},
        {id:4, sname:'Rohit', marks:58},
        {id:5, sname:'Neha', marks:20},
    ]

    return (
        <div className = 'min-h-screen bg-gray-100 p-6'>
            <div className = 'max-w-md mx-auto bg-white p-6 rounded-lg shadow-md'>
                <h2 className = 'text-2xl font-bold mb-4 text-blue-600 text-center'>
                    Students' Result
                </h2>
                {/* List Rendering */}
                <ul className = 'space-y-3'>
                    {
                        students.map( (student)=>(
                            <li key = {student.id} className = 'flex justify-between items-center border p-3 rounded' >
                                {/* //student name */}
                                <div>
                                    <span className = 'text-gray-800 font-medium'>{student.sname}</span>

                                    {/* Topper Badge */}
                                    {
                                        student.marks > 70 && (
                                            <span className = 'ml-3 text-sm text-blue-600'>
                                                (Topper)
                                            </span>
                                        )
                                    }
                                </div>
                                
                                {/* Conditional Redndering (Pass/Fail) */}
                                <span className = { student.marks >= 40 ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold' }>
                                    {
                                        student.marks>=40?'Pass':'Fail'
                                    }
                                </span>
                            </li>
                        ) )
                    }
                </ul>
            </div>
        </div>
    )
}
export default ReportCard