// TODO: answer here
import Table from "./components/Table";
import Form from "./components/Form";
import "./style/style.css";
import { useEffect, useState } from "react";

const App = () => {
  const [students, setStudents] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStudents = async () => {
    await fetch("http://localhost:3001/student")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  if (error) console.log(error);

  return (
    <>
      <div className="flex flex-col gap-5 max-w-3xl mx-auto h-full py-10 justify-center items-center relative">
        <div className="flex items-baseline justify-between w-full text-gray-600">
          <span>Student Portal</span>
          <div className="flex gap-2">
            <span>Admin</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5">
          <Form />
          <Table students={students} loading={loading} />
        </div>
      </div>
    </>
  );
};

export default App;
