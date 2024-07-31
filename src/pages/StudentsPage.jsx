import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../features/studentSlice';

const StudentsPage = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  return (
    <div className="students-page">
      <div><h2>Students</h2></div>
      
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.firstName} {student.lastName} - {student.group}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsPage;
