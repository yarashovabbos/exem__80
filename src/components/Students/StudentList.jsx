import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listStudents } from '../../actions/studentActions';
import Loader from '../common/Loader';

const StudentList = () => {
  const dispatch = useDispatch();

  const studentList = useSelector((state) => state.studentList);
  const { loading, error, students } = studentList;

  useEffect(() => {
    dispatch(listStudents());
  }, [dispatch]);

  return (
    <div>
      <h1>Students</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.firstName} {student.lastName} - {student.group}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;
