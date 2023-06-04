import { useState } from "react";

const Table = (props) => {
  const handleDelete = async (id) => {
    await fetch(`http://localhost:3001/student/${id}`, { method: "DELETE" });
  };

  return (
    <table className="table-auto min-w-full leading-normal" id="table-student">
      <thead>
        <tr>
          <th className="table-head">NO</th>
          <th className="table-head">FULL NAME</th>
          <th className="table-head">BIRTH DATE</th>
          <th className="table-head">GENDER</th>
          <th className="table-head">FACULTY</th>
          <th className="table-head">PROGRAM STUDY</th>
          <th className="table-head">OPTION</th>
        </tr>
      </thead>
      <tbody>
        {props.loading ? (
          <span>Loading...</span>
        ) : (
          <>
            {props.students?.map((student, index) => (
              <tr key={index}>
                <td className="table-d">{student.id}</td>
                <td className="table-d">{student.fullname}</td>
                <td className="table-d">{student.birthDate}</td>
                <td className="table-d">{student.gender}</td>
                <td className="table-d">{student.faculty}</td>
                <td className="table-d">{student.programStudy}</td>
                <td className="table-d">
                  <span
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  );
};

export default Table;
