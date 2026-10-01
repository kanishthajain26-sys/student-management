
import StudentCard from "./StudentCard";

function StudentList({ students, onDelete, onEdit }) {
  return (
    <section className="student-section">

      <h2>All Students</h2>

      <div className="student-grid">

        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            age={student.age}
            course={student.course}
            marks={student.marks}
            active={student.active}
            onDelete={() => onDelete(student.id)}
            onEdit={() => onEdit(student)}
          />
        ))}

      </div>

    </section>
  );
}

export default StudentList;

