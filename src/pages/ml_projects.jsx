import '../css/ml_projects.scss';

const MLProjects = () => {
    return (
        <div className="ml-projects">
            <div className="page-header">
                <h1>Machine Learning Projects</h1>
                <p>Deep learning and AI projects showcasing computer vision and data science skills</p>
            </div>

            <div className="projects-container">
                <div className="project-detailed">
                    <div className="project-main">
                        <h2>🤖 CIFAR-10 Image Classification Pipeline</h2>
                        <div className="tech-badges">
                            <span className="badge">PyTorch</span>
                            <span className="badge">MLflow</span>
                            <span className="badge">Hydra</span>
                            <span className="badge">Transfer Learning</span>
                            <span className="badge">Computer Vision</span>
                        </div>

                        <div className="project-content">
                            <div className="project-description">
                                <h3>Project Overview</h3>
                                <p>
                                    Built an end-to-end machine learning pipeline for image classification on the CIFAR-10 dataset.
                                    The project demonstrates advanced ML engineering practices including experiment tracking,
                                    configurable parameters, and comprehensive model comparison.
                                </p>

                                <h3>Key Achievements</h3>
                                <ul>
                                    <li><strong>95.73% Accuracy</strong> achieved with RegNet_Y_800MF model</li>
                                    <li><strong>Weighted F1 Score:</strong> 0.9572 showing balanced performance</li>
                                    <li><strong>Multiple Model Comparison:</strong> MobileNetV2, GoogleNet, ResNet50, RegNet_Y_800MF</li>
                                    <li><strong>Production-Ready Pipeline:</strong> Modular, configurable, and reproducible</li>
                                </ul>

                                <h3>Technical Implementation</h3>
                                <div className="technical-details">
                                    <div className="detail-section">
                                        <h4>Model Architecture</h4>
                                        <ul>
                                            <li>Transfer learning with pre-trained backbones</li>
                                            <li>Custom classifier: Linear(256) → ReLU → Dropout(0.2) → Linear(84)</li>
                                            <li>Input image resizing from 32×32 to 224×224</li>
                                        </ul>
                                    </div>

                                    <div className="detail-section">
                                        <h4>ML Engineering</h4>
                                        <ul>
                                            <li>MLflow for experiment tracking and model versioning</li>
                                            <li>Hydra for configuration management</li>
                                            <li>Early stopping to prevent overfitting</li>
                                            <li>Data augmentation and preprocessing pipeline</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="project-stats">
                                <div className="stat-card">
                                    <div className="stat-number">95.73%</div>
                                    <div className="stat-label">Best Accuracy</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">4</div>
                                    <div className="stat-label">Models Compared</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">10</div>
                                    <div className="stat-label">Classes</div>
                                </div>
                            </div>
                        </div>

                        <div className="project-links">
                            <a href="https://github.com/fabiantoh98/CIFAR10-image_classification" target="_blank" rel="noopener noreferrer" className="primary-link">
                                📖 View on GitHub
                            </a>
                            <a href="https://github.com/fabiantoh98/CIFAR10-image_classification#readme" target="_blank" rel="noopener noreferrer" className="secondary-link">
                                📋 Documentation
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-detailed">
                    <div className="project-main">
                        <h2>🤖 Edge AI RAG Bot</h2>
                        <div className="tech-badges">
                            <span className="badge">RAG</span>
                            <span className="badge">ChromaDB</span>
                            <span className="badge">FastAPI</span>
                            <span className="badge">Streamlit</span>
                            <span className="badge">Haystack</span>
                            <span className="badge">Whisper</span>
                        </div>

                        <div className="project-content">
                            <div className="project-description">
                                <h3>Project Overview</h3>
                                <p>
                                    Built a comprehensive Retrieval-Augmented Generation (RAG) application focused on Edge AI.
                                    The system provides intelligent question-answering capabilities using a custom document corpus
                                    with support for multiple file formats and local inference.
                                </p>

                                <h3>Key Achievements</h3>
                                <ul>
                                    <li><strong>Multi-Format Support:</strong> PDF, PowerPoint, audio, video, and image processing</li>
                                    <li><strong>Performance Metrics:</strong> ROUGE-1 F1: 0.373, BLEU Score: 0.260</li>
                                    <li><strong>Local Inference:</strong> Edge AI deployment with quantization support</li>
                                    <li><strong>Full-Stack Implementation:</strong> FastAPI backend with Streamlit frontend</li>
                                </ul>

                                <h3>Technical Implementation</h3>
                                <div className="technical-details">
                                    <div className="detail-section">
                                        <h4>RAG Architecture</h4>
                                        <ul>
                                            <li>ChromaDB vector storage with GTE-large embeddings</li>
                                            <li>Haystack framework for retrieval pipeline</li>
                                            <li>Local Hugging Face model inference</li>
                                        </ul>
                                    </div>

                                    <div className="detail-section">
                                        <h4>Document Processing</h4>
                                        <ul>
                                            <li>OpenAI Whisper for audio/video transcription</li>
                                            <li>Multi-format document parsing (PDF, PPT, images)</li>
                                            <li>Comprehensive evaluation with ROUGE and BLEU metrics</li>
                                            <li>Edge AI optimization with bitsandbytes quantization</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="project-stats">
                                <div className="stat-card">
                                    <div className="stat-number">0.373</div>
                                    <div className="stat-label">ROUGE-1 F1</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">6+</div>
                                    <div className="stat-label">File Formats</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">Local</div>
                                    <div className="stat-label">Edge Inference</div>
                                </div>
                            </div>
                        </div>

                        <div className="project-links">
                            <a href="https://github.com/fabiantoh98/edge_ai_rag_bot" target="_blank" rel="noopener noreferrer" className="primary-link">
                                📖 View on GitHub
                            </a>
                            <a href="https://github.com/fabiantoh98/edge_ai_rag_bot#readme" target="_blank" rel="noopener noreferrer" className="secondary-link">
                                📋 Documentation
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-detailed">
                    <div className="project-main">
                        <h2>🌧️ Singapore Rainfall Prediction Pipeline</h2>
                        <div className="tech-badges">
                            <span className="badge">PyTorch</span>
                            <span className="badge">GRU</span>
                            <span className="badge">Time Series</span>
                            <span className="badge">MLflow</span>
                            <span className="badge">FastAPI</span>
                        </div>

                        <div className="project-content">
                            <div className="project-description">
                                <h3>Project Overview</h3>
                                <p>
                                    Developed an end-to-end time series machine learning pipeline for predicting rainfall in Singapore.
                                    The project demonstrates advanced temporal modeling techniques with multiple neural network architectures
                                    and comprehensive experiment tracking for weather forecasting applications.
                                </p>

                                <h3>Key Achievements</h3>
                                <ul>
                                    <li><strong>Best Model Performance:</strong> GRU with RMSE 0.8944 and R² 0.0821</li>
                                    <li><strong>Multi-Model Comparison:</strong> GRU, RNN, 1D CNN, Random Forest</li>
                                    <li><strong>Production Pipeline:</strong> FastAPI backend with automated preprocessing</li>
                                    <li><strong>Feature Engineering:</strong> Cyclical time features and multi-station aggregation</li>
                                </ul>

                                <h3>Technical Implementation</h3>
                                <div className="technical-details">
                                    <div className="detail-section">
                                        <h4>Model Architecture</h4>
                                        <ul>
                                            <li>GRU-based recurrent neural networks for temporal patterns</li>
                                            <li>1D CNN for local temporal feature extraction</li>
                                            <li>Advanced preprocessing with timestamp transitions</li>
                                        </ul>
                                    </div>

                                    <div className="detail-section">
                                        <h4>Data Engineering</h4>
                                        <ul>
                                            <li>Multi-station weather data aggregation</li>
                                            <li>Cyclical encoding for temporal features</li>
                                            <li>Automated historical data download pipeline</li>
                                            <li>MLflow experiment tracking and model versioning</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="project-stats">
                                <div className="stat-card">
                                    <div className="stat-number">0.8944</div>
                                    <div className="stat-label">Best RMSE</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">4</div>
                                    <div className="stat-label">Models Tested</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">Multi</div>
                                    <div className="stat-label">Weather Stations</div>
                                </div>
                            </div>
                        </div>

                        <div className="project-links">
                            <a href="https://github.com/fabiantoh98/rainfall_prediction" target="_blank" rel="noopener noreferrer" className="primary-link">
                                📖 View on GitHub
                            </a>
                            <a href="https://github.com/fabiantoh98/rainfall_prediction#readme" target="_blank" rel="noopener noreferrer" className="secondary-link">
                                📋 Documentation
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MLProjects;