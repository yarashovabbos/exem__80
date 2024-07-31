import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers } from '../features/teacherSlice';

const TeachersPage = () => {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  return (
    <div className="teachers-page">
      <h2>Teachers</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>{teacher.firstName} {teacher.lastName} - {teacher.level}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeachersPage;
