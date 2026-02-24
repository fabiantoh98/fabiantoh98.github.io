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
              <h4>Spice Bae - AI-Powered Spice Advisor</h4>
              <p className="tech-stack">MCP &bull; Neo4j &bull; Gradio &bull; Claude AI &bull; LlamaIndex</p>
              <p>AI-powered spice advisor with <strong>88+ spices</strong>, nutritional data from USDA, and health benefits from NCCIH. Built with Gradio, LlamaIndex, Neo4j, and Claude for the MCP 1st Birthday Hackathon. Exposes tools via Model Context Protocol for AI agent integration.</p>
              <div className="project-links">
                <a href="https://github.com/fabiantoh98/spice_bae" target="_blank" rel="noopener noreferrer" className="github-link">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-grid">
            <div className="project-card" onClick={() => navigate('/ml_projects')}>
              <h4>LLM Preference Learning</h4>
              <p>DPO, ORPO, KTO, and RLHF comparison on a single consumer GPU</p>
            </div>
            <div className="project-card" onClick={() => navigate('/ml_projects')}>
              <h4>CIFAR-10 Image Classification</h4>
              <p>95.73% accuracy with transfer learning and MLflow tracking</p>
            </div>
            <div className="project-card" onClick={() => navigate('/ml_projects')}>
              <h4>Edge AI RAG Bot</h4>
              <p>RAG chatbot with FastAPI, Streamlit, and local inference</p>
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
