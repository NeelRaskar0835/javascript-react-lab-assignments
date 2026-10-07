import { useState } from "react";
import "./App.css";

function App() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: ""
    });

    function handleChange(event) {

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <div className="container">

            <div className="form-container">

                <h1>Controlled React Form</h1>

                <form>

                    <label>Name</label>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <label>Phone</label>

                    <input
                        type="text"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                    />

                    <label>Course</label>

                    <input
                        type="text"
                        name="course"
                        placeholder="Enter your course"
                        value={formData.course}
                        onChange={handleChange}
                    />

                </form>


                <div className="output">

                    <h2>Entered Data</h2>

                    <p>
                        <strong>Name:</strong> {formData.name}
                    </p>

                    <p>
                        <strong>Email:</strong> {formData.email}
                    </p>

                    <p>
                        <strong>Phone:</strong> {formData.phone}
                    </p>

                    <p>
                        <strong>Course:</strong> {formData.course}
                    </p>

                </div>

            </div>

        </div>
    );
}

export default App;