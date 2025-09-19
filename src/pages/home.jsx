import './../css/home.scss'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
      <div className="home">
        <div className="hero-section">
          <h1>Hi, I'm Fabian</h1>
          <h2 className="subtitle">Aspiring AI Engineer</h2>
          <p className="intro">
            Welcome to my portfolio! I'm passionate about artificial intelligence, data science, and web development.
            This site showcases my learning journey through interactive React applications.
          </p>
        </div>

        <div className="projects-preview">
          <h3>Featured Projects</h3>

          <div className="featured-project">
            <div className="project-highlight">
              <h4>🤖 CIFAR-10 Image Classification</h4>
              <p className="tech-stack">PyTorch • MLflow • Transfer Learning • Computer Vision</p>
              <p>End-to-end machine learning pipeline achieving <strong>95.73% accuracy</strong> on CIFAR-10 dataset using RegNet_Y_800MF with transfer learning. Features comprehensive model comparison, MLflow experiment tracking, and configurable Hydra parameters.</p>
              <div className="project-links">
                <a href="https://github.com/fabiantoh98/CIFAR10-image_classification" target="_blank" rel="noopener noreferrer" className="github-link">
                  📖 View on GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-grid">
            <div className="project-card" onClick={() => navigate('/game')}>
              <h4>🧠 Interactive Quiz System</h4>
              <p>Knowledge assessment tool with dynamic question loading</p>
            </div>
            <div className="project-card" onClick={() => navigate('/dashboard')}>
              <h4>📊 Data Visualization Dashboard</h4>
              <p>CO2 emissions analytics with interactive charts</p>
            </div>
            <div className="project-card" onClick={() => navigate('/game')}>
              <h4>🎮 Interactive Games</h4>
              <p>Collection of web-based applications and utilities</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <p>Explore my projects to see what I'm learning and building!</p>
        </div>
      </div>
    );
  }
   
  export default Home;