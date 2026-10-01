function Stats({ students }) {

  const totalMarks = students.reduce(
    (total, student) => total + student.marks,
    0
  );

  const averageMarks = (
    totalMarks / students.length
  ).toFixed(1);

  const passedStudents = students.filter(
    (student) => student.marks >= 50
  ).length;

  const activeStudents = students.filter(
    (student) => student.active
  ).length;

  return (
    <section className="stats">

      <div className="stat-card">
        <h3>Total Students</h3>
        <p>{students.length}</p>
      </div>

      <div className="stat-card">
        <h3>Average Marks</h3>
        <p>{averageMarks}%</p>
      </div>

      <div className="stat-card">
        <h3>Passed Students</h3>
        <p>{passedStudents}</p>
      </div>

      <div className="stat-card">
        <h3>Active Students</h3>
        <p>{activeStudents}</p>
      </div>

    </section>
  );
}

export default Stats;