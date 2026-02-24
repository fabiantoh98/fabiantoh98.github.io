import './../css/about_me.scss'
const AboutMe = () => {
    return (
      <div className="aboutme">
        <h1>About Me</h1>

        <h2> Introduction </h2>
        <p>
          Hi! I am Fabian and I am interested in learning new skills from AI, Analytics, Cloud Computing to Full Stack Development.
          Graduated from Singapore Management University with a Bachelor's in Information System majoring in Smart City Management and Data Science.
        </p>

        <h3> AI / ML Engineering </h3>
        <ul>
          <li>LLM fine-tuning and preference learning (DPO, ORPO, KTO, RLHF) with PyTorch and Hugging Face</li>
          <li>Retrieval-Augmented Generation (RAG) systems with ChromaDB, Haystack, and LlamaIndex</li>
          <li>Computer vision and deep learning (CNNs, autoencoders, transfer learning)</li>
          <li>Model Context Protocol (MCP) server development and AI agent integration</li>
          <li>Experiment tracking and ML pipelines with MLflow and Hydra</li>
        </ul>

        <h3> Full Stack Development </h3>
        <ul>
          <li>Django framework for backend</li>
          <li>React.js and Next.js for frontend</li>
          <li>FastAPI and Streamlit for ML application backends and frontends</li>
          <li>Python for developing internal tools and scripts</li>
          <li>Database management with PostgreSQL and Neo4j</li>
        </ul>

        <h3> Data Science & Analytics </h3>
        <ul>
          <li>Time series forecasting and prediction pipelines</li>
          <li>NLP and text analytics (topic modeling, sentiment analysis)</li>
          <li>Data visualization and dashboard development</li>
        </ul>

        <h2> Project Motivation </h2>
        <p>
          I have been picking up new skills but after some time I forgot about it since I am not using it frequently. Oops :P
          Since github.io provide a free hosting place, I thought it will be nice to have my own website to display my past work.
          I do realised that nowadays, people like to write coding article on Medium but it is not exactly 'free'. (3 premium articles per month)
          Therefore with github keeping track of all my Repos, I decided to start my own project on github instead!
        </p>


        <h2> Tech Involved in this Project</h2>
        <ul>
          <li> HTML </li>
          <li> SCSS </li>
          <li> JavaScript </li>
          <li> React.js </li>
        </ul>
        <p>
          However, do keep in mind that everything you are see here is still work in progress.
          Feel free to drop me a message on Linkedin if you identify any bugs!
          You may also file for an issue <a href='https://github.com/fabiantoh98/fabian-personal-project/issues'>here</a>.
        </p>
        <p> Thank you for visiting!</p>
      </div>
    );
  }

  export default AboutMe;
