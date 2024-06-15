import React, { useState } from 'react';
import './dropdown.css'; // Assuming you have a CSS file named GetStartedPage.css for styling
import { useNavigate } from 'react-router-dom';

const Dropdown = () => {
    let scan = useNavigate();
    function handleScan() {
        scan("/fully_scanned");
    }

    const [year, setYear] = useState('');
    const [semester, setSemester] = useState('');
    const [branch, setBranch] = useState('');
    const [subject, setSubject] = useState('');

    const handleYearChange = (event) => {
        setYear(event.target.value);
        // Reset semester, branch, and subject when year changes
        setSemester('');
        setBranch('');
        setSubject('');
    };

    const handleSemesterChange = (event) => {
        setSemester(event.target.value);
        // Reset subject when semester changes
        setSubject('');
    };

    return (
        <div className="dropdown-container">
            <label htmlFor="year" className="year" style={{ color: 'white' }}>Year:</label>
            <select id="year" value={year} onChange={handleYearChange} className="white-text">
                <option value="">Select Year</option>
                <option value="PUC">PUC</option>
                <option value="B.Tech">B.Tech</option>
            </select>

            {year === 'PUC' && (
                <>
                    <label htmlFor="puc-year" className="puc-year" style={{ color: 'white' }}>PUC Year:</label>
                    <select id="puc-year" value={semester} onChange={handleSemesterChange} className="white-text">
                        <option value="">Select PUC Year</option>
                        <option value="PUC 1">PUC 1</option>
                        <option value="PUC 2">PUC 2</option>
                    </select>
                </>
            )}

            {year === 'B.Tech' && (
                <>
                    <label htmlFor="branch" className="branch" style={{ color: 'white' }}>Branch:</label>
                    <select id="branch" value={branch} onChange={(event) => setBranch(event.target.value)} className="white-text">
                        <option value="">Select Branch</option>
                        <option value="CSE">Computer Science</option>
                        <option value="ECE">Electronics and Communication</option>
                        <option value="CHE">Chemical Engineering</option>
                        <option value="MME">Electronics and Communication</option>
                        <option value="CIVIL">Civil Engineering</option>
                        <option value="EEE">EEE</option>
                        <option value="ME">Mechanical Engineering</option>
                        {/* Add other branches as needed */}
                    </select>

                    <label htmlFor="semester" className="sem" style={{ color: 'white' }}>Semester:</label>
                    <select id="semester" value={semester} onChange={handleSemesterChange} className="white-text">
                        <option value="">Select Semester</option>
                        <option value="Semester 1">Semester 1</option>
                        <option value="Semester 2">Semester 2</option>
                    </select>
                </>
            )}

            {year && semester && (
                <>
                    <label htmlFor="subject" className="subject" style={{ color: 'white' }}>Subject:</label>
                    <select id="subject" value={subject} onChange={(event) => setSubject(event.target.value)} className="white-text">
                        <option value="">Select Subject</option>
                        {/* Add subjects based on year and semester */}
                    </select>
                </>
            )}
            <button type="button" className="scan" onClick={handleScan}>Scan</button>
        </div>
    );
};

export default Dropdown;
