import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleLogout = () => {

    localStorage.removeItem('authToken')
    console.log("Token Removed");
    
    navigate("/login");
  };
  return (
    <div className="home-container">
      <header>
        <h2>Welcome, !</h2>
      </header>
      <main>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
          alt="Beautiful Home Image"
        />
        <p>Enjoy exploring your new app.</p>
        <button onClick={handleLogout}>Logout</button>
      </main>
    </div>
  );
}

export default Home;
