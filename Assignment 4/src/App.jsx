import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
    return (
        <div className="app">

            <h1>React Profile Card</h1>

            <ProfileCard
                name="Neel Raskar"
                imageUrl="https://i.pravatar.cc/300?img=12"
                description="Computer Science postgraduate student interested in Java, React, databases and web development."
            />

        </div>
    );
}

export default App;