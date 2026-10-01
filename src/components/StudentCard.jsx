
function StudentCard({
  name,
  age,
  course,
  marks,
  active,
  onDelete,
  onEdit
}) {
  return (
    <div className="student-card">

      <div className="student-header">

        <h2>{name}</h2>

        {active ? (
          <span className="status active">
            Active
          </span>
        ) : (
          <span className="status inactive">
            Inactive
          </span>
        )}

      </div>

      <p>Age: {age}</p>

      <p>Course: {course}</p>

      <p>Marks: {marks}</p>

      {marks >= 50 ? (
        <p className="result pass">
          Passed 🎉
        </p>
      ) : (
        <p className="result fail">
          Failed ❌
        </p>
      )}

      <button
        className="edit-btn"
        onClick={onEdit}
      >
        ✏️ Edit Student
      </button>

      <button
        className="delete-btn"
        onClick={onDelete}
      >
        Delete Student
      </button>

    </div>
  );
}

export default StudentCard;

