
import { useState, useRef } from "react";
import StudentList from "./components/StudentList";
import Stats from "./components/Stats";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Kanishtha",
      age: 21,
      course: "Web Development",
      marks: 85,
      active: true
    },
    {
      id: 2,
      name: "Rahul",
      age: 22,
      course: "JavaScript",
      marks: 72,
      active: true
    },
    {
      id: 3,
      name: "Priya",
      age: 20,
      course: "React",
      marks: 45,
      active: false
    },
    {
      id: 4,
      name: "Aman",
      age: 23,
      course: "Node.js",
      marks: 91,
      active: true
    },
    {
      id: 5,
      name: "Neha",
      age: 21,
      course: "MongoDB",
      marks: 38,
      active: false
    }
  ]);


  const [showForm, setShowForm] = useState(false);


  const [newStudent, setNewStudent] = useState({
    name: "",
    age: "",
    course: "",
    marks: "",
    active: true
  });

  
  const [search, setSearch] = useState("");


  const [filter, setFilter] = useState("all");


  const [editStudent, setEditStudent] = useState(null);


  const editFormRef = useRef(null);


  function handleChange(event) {
    const { name, value } = event.target;

    setNewStudent({
      ...newStudent,
      [name]: value
    });
  }


  function addStudent(event) {
    event.preventDefault();

    const student = {
      id: Date.now(),
      name: newStudent.name,
      age: Number(newStudent.age),
      course: newStudent.course,
      marks: Number(newStudent.marks),
      active:
        newStudent.active === "true" ||
        newStudent.active === true
    };

    setStudents([...students, student]);

    setNewStudent({
      name: "",
      age: "",
      course: "",
      marks: "",
      active: true
    });

    setShowForm(false);
  }


  function deleteStudent(id) {
    setStudents(
      students.filter((student) => student.id !== id)
    );
  }

 
  function startEdit(student) {
    setShowForm(false);

   
    setEditStudent({
      ...student
    });


    setTimeout(() => {
      editFormRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 100);
  }

 
  function handleEditChange(event) {
    const { name, value } = event.target;

    setEditStudent({
      ...editStudent,
      [name]: value
    });
  }


  function updateStudent(event) {
    event.preventDefault();

    const updatedStudent = {
      ...editStudent,
      age: Number(editStudent.age),
      marks: Number(editStudent.marks),
      active:
        editStudent.active === "true" ||
        editStudent.active === true
    };

    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id
          ? updatedStudent
          : student
      )
    );

    
    setEditStudent(null);

    
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const filteredStudents = students
    .filter((student) =>
      student.name
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .filter((student) => {
      if (filter === "active") {
        return student.active;
      }

      if (filter === "inactive") {
        return !student.active;
      }

      if (filter === "passed") {
        return student.marks >= 50;
      }

      if (filter === "failed") {
        return student.marks < 50;
      }

      return true;
    });

  return (
    <div className="app">

    
      <header className="header">
        <h1>Student Management System</h1>
        <p>Manage Students Easily</p>
      </header>

    
      <div className="top-actions">

        <input
          type="text"
          className="search-input"
          placeholder="🔍 Search student by name..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />

        <select
          className="filter-select"
          value={filter}
          onChange={(event) =>
            setFilter(event.target.value)
          }
        >
          <option value="all">All Students</option>
          <option value="active">Active Students</option>
          <option value="inactive">Inactive Students</option>
          <option value="passed">Passed Students</option>
          <option value="failed">Failed Students</option>
        </select>

        <button
          className="add-btn"
          onClick={() => {
            setShowForm(!showForm);
            setEditStudent(null);
          }}
        >
          {showForm ? "Close Form" : "+ Add Student"}
        </button>

      </div>

     
      {showForm && (
        <form
          className="student-form"
          onSubmit={addStudent}
        >
          <h2>Add New Student</h2>

          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={newStudent.name}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={newStudent.age}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="course"
            placeholder="Course"
            value={newStudent.course}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="marks"
            placeholder="Marks"
            value={newStudent.marks}
            onChange={handleChange}
            min="0"
            max="100"
            required
          />

          <select
            name="active"
            value={newStudent.active}
            onChange={handleChange}
          >
            <option value={true}>Active</option>
            <option value={false}>Inactive</option>
          </select>

          <button
            type="submit"
            className="save-btn"
          >
            Add Student
          </button>
        </form>
      )}

     
      {editStudent && (
        <form
          ref={editFormRef}
          className="student-form edit-form"
          onSubmit={updateStudent}
        >
          <h2>Update Student</h2>

          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={editStudent.name}
            onChange={handleEditChange}
            required
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={editStudent.age}
            onChange={handleEditChange}
            required
          />

          <input
            type="text"
            name="course"
            placeholder="Course"
            value={editStudent.course}
            onChange={handleEditChange}
            required
          />

          <input
            type="number"
            name="marks"
            placeholder="Marks"
            value={editStudent.marks}
            onChange={handleEditChange}
            min="0"
            max="100"
            required
          />

          <select
            name="active"
            value={editStudent.active}
            onChange={handleEditChange}
          >
            <option value={true}>Active</option>
            <option value={false}>Inactive</option>
          </select>

          <button
            type="submit"
            className="save-btn"
          >
            Update Student
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={() => setEditStudent(null)}
          >
            Cancel
          </button>
        </form>
      )}

  
      <Stats students={students} />

    
      <StudentList
        students={filteredStudents}
        onDelete={deleteStudent}
        onEdit={startEdit}
      />

    </div>
  );
}

export default App;

