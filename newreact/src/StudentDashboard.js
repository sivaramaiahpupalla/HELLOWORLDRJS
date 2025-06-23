import React, { useState } from 'react'
import './StudentDashboard.css';

const StudentDashboard = () => {
    const [student, setStudent] = useState({
        Studentname: '',    
        StudentId: '',
    });
    const [marks, setMarks] = useState({
        English: '',
        Maths: '',
        Science: '',
        Hindi: '',
        Telugu: '',
        Social: '',
    });
    const [studentsData, setStudentsData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name in marks) {
            setMarks({ ...marks, [name]: value });
        } else {
            setStudent({ ...student, [name]: value });
        }
    };

    const handlesubmit = (e) => {
        e.preventDefault();
       
        const numericMarks = {};
        let total = 0;
        Object.keys(marks).forEach(sub => {
            numericMarks[sub] = Number(marks[sub]) || 0;
            total += numericMarks[sub];
        });
        const percentage = (total / (Object.keys(marks).length * 100)) * 100;

        const studentEntry = {
            ...student,
            marks: numericMarks,
            total,
            percentage: percentage
        };

        setStudentsData([...studentsData, studentEntry]);
        setStudent({ Studentname: '', StudentId: '' });
        setMarks({
            English: '',
            Maths: '',
            Science: '',
            Hindi: '',
            Telugu: '',
            Social: '',
        });
        console.log(studentsData);
        
    };

   
   
    const subjectTotals = studentsData.reduce((totals, s) => {
    Object.keys(marks).forEach(sub => {
        totals[sub] = (totals[sub] || 0) + (s.marks[sub] || 0);
    });
    return totals;
}, {});

   const subjectPercentages = Object.keys(marks).reduce((percentages, sub) => {
    percentages[sub] = studentsData.length
        ? ((subjectTotals[sub] / (studentsData.length * 100)) * 100).toFixed(2)
        : '0.00';
    return percentages;
}, {});

    return (
        <>
            <form className='form'onSubmit={handlesubmit}>
                <h2>Student Dashboard</h2>
                <div className='label'>
                    <label>Student Name:</label>
                    <input className='input'
                        type="text"
                        name="Studentname"
                        value={student.Studentname}
                        onChange={handleChange}
                    />
                </div>
                <div className='label'>
                    <label>Student Id:</label>
                    <input
                        className='input'
                        type="text"
                        name="StudentId"
                        value={student.StudentId}
                        onChange={handleChange}
                    />
                </div>
                
                {Object.keys(marks).map(sub => (
                    <div key={sub}>
                        <label>{sub}:</label>
                        <input
                            type="text"
                            name={sub}
                            value={marks[sub]}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <div>
                    <button className='button' type="submit">Submit</button>
                </div>
            </form>

            <h3>Students List</h3>
            <table className ='table' border="1" cellPadding="5" cellSpacing={0}>
                <thead className='thead'>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        {Object.keys(marks).map(sub => (
                          <th key={sub}>{sub}</th>
                        ))}
                        <th>Total</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    {studentsData.map((s, idx) => (
                        <tr key={idx}>
                            <td>{s.Studentname}</td>
                            <td>{s.StudentId}</td>
                            {Object.keys(marks).map(sub => (
                                <td key={sub}>{s.marks[sub]}</td>
                            ))}
                            <td>{s.total}</td>
                            <td>{s.percentage.toFixed(2)}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3 className='h3'>Each Subject Percentage</h3>
            <table  className ='table' border="1" cellPadding="5" cellSpacing={0}>
                <thead className='thead'>
                    <tr>
                        {Object.keys(marks).map(sub => (
                            <th key={sub}>{sub}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {Object.keys(marks).map(sub => (
                            <td key={sub}>{subjectPercentages[sub]}%</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default StudentDashboard;