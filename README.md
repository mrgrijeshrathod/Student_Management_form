:

🎓 Student API (Express.js)

A simple and clean RESTful API built using Node.js + Express to manage student data.

🚀 Base URL
/api/student

📚 API Routes
1️⃣ Get All Students

Method: GET

Endpoint: /api/student

Description: Retrieves all students.

Access: Public

router.get("/", getStudents);

2️⃣ Create a New Student

Method: POST

Endpoint: /api/student

Description: Creates a new student record.

Access: Public

router.post("/", addStudent);

3️⃣ Get a Single Student

Method: GET

Endpoint: /api/student/:id

Description: Fetches one student using their ID.

Access: Public

router.get("/:id", getStudent);

4️⃣ Delete a Student

Method: DELETE

Endpoint: /api/student/:id

Description: Deletes a student by ID.

Access: Public

router.delete("/:id", removeStudent);

5️⃣ Update a Student

Method: PUT

Endpoint: /api/student/:id

Description: Updates student information by ID.

Access: Public

router.put("/:id", updateStudent);

🛠️ Installation & Setup
📥 Install Dependencies
npm install

▶️ Start Server
npm start

🧰 Technologies Used

🚀 Express.js

⚡ Node.js

🗄️ MongoDB (optional)

🔗 Mongoose (optional)