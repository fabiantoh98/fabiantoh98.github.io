import '../css/ml_projects.scss';

const MLProjects = () => {
    return (
        <div className="ml-projects">
            <div className="page-header">
                <h1>Machine Learning Projects</h1>
                <p>AI/ML projects spanning LLMs, computer vision, NLP, and time series forecasting</p>
            </div>

            <div className="projects-container">

                <div className="project-detailed">
                    <div className="project-main">
                        <h2>Spice Bae - AI-Powered Spice Advisor</h2>
                        <div className="tech-badges">
                            <span className="badge">MCP</span>
                            <span className="badge">Neo4j</span>
                            <span className="badge">Gradio</span>
                            <span className="badge">Claude AI</span>
                            <span className="badge">LlamaIndex</span>
                        </div>

                        <div className="project-content">
                            <div className="project-description">
                                <h3>Project Overview</h3>
                                <p>
                                    AI-powered spice advisor with nutritional data, health benefits, and safety information
                                    for 88+ spices. Built for the MCP 1st Birthday Hackathon, it features a conversational
                                    interface powered by Claude via LlamaIndex AgentWorkflow and exposes tools via the
                                    Model Context Protocol for AI agent integration.
                                </p>

                                <h3>Key Achievements</h3>
                                <ul>
                                    <li><strong>88+ Spices:</strong> Comprehensive database with USDA nutritional data</li>
                                    <li><strong>MCP Server:</strong> Exposes 8 function tools for AI agent integration</li>
                                    <li><strong>Guardrails:</strong> Rate limiting, cost controls ($1/day), and medical disclaimer enforcement</li>
                                    <li><strong>Data Provenance:</strong> All data sourced from USDA FoodData Central and NCCIH</li>
                                </ul>

                                <h3>Technical Implementation</h3>
                                <div className="technical-details">
                                    <div className="detail-section">
                                        <h4>AI Architecture</h4>
                                        <ul>
                                            <li>LlamaIndex AgentWorkflow with Claude AI</li>
                                            <li>Neo4j graph database for spice relationships</li>
                                            <li>MCP server via Gradio for tool exposure</li>
                                        </ul>
                                    </div>

                                    <div className="detail-section">
                                        <h4>Features</h4>
                                        <ul>
                                            <li>Spice substitution based on nutritional or medicinal similarity</li>
                                            <li>Health benefits and safety information from NCCIH</li>
                                            <li>Deployed on HuggingFace Spaces and Modal</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="project-stats">
                                <div className="stat-card">
                                    <div className="stat-number">88+</div>
                                    <div className="stat-label">Spices</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">8</div>
                                    <div className="stat-label">MCP Tools</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">2</div>
                                    <div className="stat-label">Deployments</div>
                                </div>
                            </div>
                        </div>

                        <div className="project-links">
                            <a href="https://github.com/fabiantoh98/spice_bae" target="_blank" rel="noopener noreferrer" className="primary-link">
                                View on GitHub
                            </a>
                            <a href="https://mcp-1st-birthday-spice-bae.hf.space" target="_blank" rel="noopener noreferrer" className="secondary-link">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-detailed">
                    <div className="project-main">
                        <h2>LLM Preference Learning</h2>
                        <div className="tech-badges">
                            <span className="badge">DPO</span>
                            <span className="badge">ORPO</span>
                            <span className="badge">KTO</span>
                            <span className="badge">RLHF</span>
                            <span className="badge">LoRA</span>
                            <span className="badge">PyTorch</span>
                        </div>

                        <div className="project-content">
                            <div className="project-description">
                                <h3>Project Overview</h3>
                                <p>
                                    End-to-end comparison of LLM preference optimization methods including DPO, ORPO, KTO,
                                    and RLHF. Implemented with TinyLlama (1.1B) using 4-bit quantization and LoRA fine-tuning
                                    on a single 8GB consumer GPU. Includes training, evaluation, and comparison pipelines.
                                </p>

                                <h3>Key Achievements</h3>
                                <ul>
                                    <li><strong>Best Method:</strong> ORPO achieved highest average reward (0.7200)</li>
                                    <li><strong>4 Methods Compared:</strong> DPO, ORPO, KTO, and RLHF on identical data</li>
                                    <li><strong>Consumer GPU Training:</strong> Full pipeline on RTX 4070 Laptop (8GB VRAM)</li>
                                    <li><strong>Automated Evaluation:</strong> Reward model judge on 200 held-out prompts</li>
                                </ul>

                                <h3>Technical Implementation</h3>
                                <div className="technical-details">
                                    <div className="detail-section">
                                        <h4>Training Pipeline</h4>
                                        <ul>
                                            <li>TRL library for DPO, ORPO, KTO, and PPO trainers</li>
                                            <li>4-bit quantization with bitsandbytes for memory efficiency</li>
                                            <li>LoRA adapters on attention layers</li>
                                        </ul>
                                    </div>

                                    <div className="detail-section">
                                        <h4>Evaluation</h4>
                                        <ul>
                                            <li>Intel Orca DPO Pairs dataset (12,859 preference pairs)</li>
                                            <li>Trained reward model as automated judge</li>
                                            <li>Comparison against chosen and rejected baselines</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="project-stats">
                                <div className="stat-card">
                                    <div className="stat-number">0.72</div>
                                    <div className="stat-label">Best Reward</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">4</div>
                                    <div className="stat-label">Methods</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">8GB</div>
                                    <div className="stat-label">GPU VRAM</div>
                                </div>
                            </div>
                        </div>

                        <div className="project-links">
                            <a href="https://github.com/fabiantoh98/llm-preference-learning" target="_blank" rel="noopener noreferrer" className="primary-link">
                                View on GitHub
                            </a>
                            <a href="https://github.com/fabiantoh98/llm-preference-learning#readme" target="_blank" rel="noopener noreferrer" className="secondary-link">
                                Documentation
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-detailed">
                    <div className="project-main">
                        <h2>LLM Fine-Tuning with QLoRA</h2>
                        <div className="tech-badges">
                            <span className="badge">QLoRA</span>
                            <span className="badge">Hugging Face</span>
                            <span className="badge">PEFT</span>
                            <span className="badge">PyTorch</span>
                            <span className="badge">Phi-2</span>
                        </div>

                        <div className="project-content">
                            <div className="project-description">
                                <h3>Project Overview</h3>
                                <p>
                                    Hands-on project for fine-tuning large language models on consumer hardware with
                                    limited VRAM (7GB). Uses QLoRA (4-bit quantization + Low-Rank Adaptation) to
                                    fine-tune Phi-2 on Python code instruction datasets, with comprehensive evaluation
                                    including BLEU scores, syntax validation, and error analysis.
                                </p>

                                <h3>Key Achievements</h3>
                                <ul>
                                    <li><strong>Memory Efficient:</strong> Full fine-tuning pipeline on 7GB VRAM</li>
                                    <li><strong>Complete Pipeline:</strong> Training, inference, evaluation, and error analysis</li>
                                    <li><strong>Code Generation:</strong> Fine-tuned for Python code instruction following</li>
                                    <li><strong>Comprehensive Metrics:</strong> BLEU score, syntax validation, exact match</li>
                                </ul>

                                <h3>Technical Implementation</h3>
                                <div className="technical-details">
                                    <div className="detail-section">
                                        <h4>Model Architecture</h4>
                                        <ul>
                                            <li>Phi-2 base model with 4-bit quantization</li>
                                            <li>LoRA adapters on attention layers</li>
                                            <li>HuggingFace Transformers + PEFT library</li>
                                        </ul>
                                    </div>

                                    <div className="detail-section">
                                        <h4>Engineering</h4>
                                        <ul>
                                            <li>TensorBoard logging for training monitoring</li>
                                            <li>Interactive inference mode for testing</li>
                                            <li>Side-by-side base vs fine-tuned model comparison</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="project-stats">
                                <div className="stat-card">
                                    <div className="stat-number">7GB</div>
                                    <div className="stat-label">VRAM Required</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">4-bit</div>
                                    <div className="stat-label">Quantization</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">Phi-2</div>
                                    <div className="stat-label">Base Model</div>
                                </div>
                            </div>
                        </div>

                        <div className="project-links">
                            <a href="https://github.com/fabiantoh98/finetune-llm" target="_blank" rel="noopener noreferrer" className="primary-link">
                                View on GitHub
                            </a>
                            <a href="https://github.com/fabiantoh98/finetune-llm#readme" target="_blank" rel="noopener noreferrer" className="secondary-link">
                                Documentation
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-detailed">
                    <div className="project-main">
                        <h2>CIFAR-10 Image Classification Pipeline</h2>
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
                                            <li>Custom classifier: Linear(256) &rarr; ReLU &rarr; Dropout(0.2) &rarr; Linear(84)</li>
                                            <li>Input image resizing from 32x32 to 224x224</li>
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
                                View on GitHub
                            </a>
                            <a href="https://github.com/fabiantoh98/CIFAR10-image_classification#readme" target="_blank" rel="noopener noreferrer" className="secondary-link">
                                Documentation
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-detailed">
                    <div className="project-main">
                        <h2>Edge AI RAG Bot</h2>
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
                                View on GitHub
                            </a>
                            <a href="https://github.com/fabiantoh98/edge_ai_rag_bot#readme" target="_blank" rel="noopener noreferrer" className="secondary-link">
                                Documentation
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-detailed">
                    <div className="project-main">
                        <h2>Anomalous Sound Detection</h2>
                        <div className="tech-badges">
                            <span className="badge">Deep Learning</span>
                            <span className="badge">Autoencoders</span>
                            <span className="badge">Audio Processing</span>
                            <span className="badge">Anomaly Detection</span>
                            <span className="badge">PyTorch</span>
                        </div>

                        <div className="project-content">
                            <div className="project-description">
                                <h3>Project Overview</h3>
                                <p>
                                    Implements and evaluates various anomaly detection approaches for the DCASE 2023 Challenge
                                    Task 2: first-shot unsupervised anomalous sound detection for machine condition monitoring.
                                    Compares deep learning autoencoders (FC-AE, Conv-AE, LSTM-AE) against classical ML methods
                                    (Local Outlier Factor, Isolation Forest).
                                </p>

                                <h3>Key Achievements</h3>
                                <ul>
                                    <li><strong>5 Models Compared:</strong> FC-AE, Conv-AE, LSTM-AE, LOF, Isolation Forest</li>
                                    <li><strong>Comprehensive Evaluation:</strong> AUC, pAUC, ROC curves, and confusion matrices</li>
                                    <li><strong>Production-Ready:</strong> YAML configuration, CLI interface, and automated visualization</li>
                                    <li><strong>Reproducible:</strong> Seed control and early stopping for consistent results</li>
                                </ul>

                                <h3>Technical Implementation</h3>
                                <div className="technical-details">
                                    <div className="detail-section">
                                        <h4>Models</h4>
                                        <ul>
                                            <li>Fully Connected, Convolutional, and LSTM Autoencoders</li>
                                            <li>Local Outlier Factor and Isolation Forest baselines</li>
                                            <li>Unsupervised training on normal sound samples only</li>
                                        </ul>
                                    </div>

                                    <div className="detail-section">
                                        <h4>Engineering</h4>
                                        <ul>
                                            <li>YAML-based configuration management</li>
                                            <li>CLI interface for easy experimentation</li>
                                            <li>Automated ROC curve and confusion matrix generation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="project-stats">
                                <div className="stat-card">
                                    <div className="stat-number">5</div>
                                    <div className="stat-label">Models</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">3</div>
                                    <div className="stat-label">Autoencoder Types</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">DCASE</div>
                                    <div className="stat-label">Challenge 2023</div>
                                </div>
                            </div>
                        </div>

                        <div className="project-links">
                            <a href="https://github.com/fabiantoh98/anomalous_sound_detection" target="_blank" rel="noopener noreferrer" className="primary-link">
                                View on GitHub
                            </a>
                            <a href="https://github.com/fabiantoh98/anomalous_sound_detection#readme" target="_blank" rel="noopener noreferrer" className="secondary-link">
                                Documentation
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-detailed">
                    <div className="project-main">
                        <h2>Singapore Rainfall Prediction Pipeline</h2>
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
                                    <li><strong>Best Model Performance:</strong> GRU with RMSE 0.8944 and R&sup2; 0.0821</li>
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
                                View on GitHub
                            </a>
                            <a href="https://github.com/fabiantoh98/rainfall_prediction#readme" target="_blank" rel="noopener noreferrer" className="secondary-link">
                                Documentation
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-detailed">
                    <div className="project-main">
                        <h2>Crops Price Time Series Forecasting</h2>
                        <div className="tech-badges">
                            <span className="badge">Time Series</span>
                            <span className="badge">Forecasting</span>
                            <span className="badge">Data Science</span>
                            <span className="badge">Python</span>
                        </div>

                        <div className="project-content">
                            <div className="project-description">
                                <h3>Project Overview</h3>
                                <p>
                                    Time series forecasting of fruit and vegetable prices using statistical and machine
                                    learning models. Built on a Kaggle agriculture dataset to predict price trends
                                    and support data-driven decision-making in agriculture markets.
                                </p>

                                <h3>Key Achievements</h3>
                                <ul>
                                    <li><strong>Multiple Models:</strong> Comparison of statistical and ML forecasting methods</li>
                                    <li><strong>Agricultural Data:</strong> Real-world Kaggle dataset for produce prices</li>
                                    <li><strong>End-to-End Pipeline:</strong> Data preprocessing through forecasting and evaluation</li>
                                </ul>
                            </div>
                        </div>

                        <div className="project-links">
                            <a href="https://github.com/fabiantoh98/Crops_Price_Time_Series" target="_blank" rel="noopener noreferrer" className="primary-link">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-detailed">
                    <div className="project-main">
                        <h2>Topic Identification Pipeline</h2>
                        <div className="tech-badges">
                            <span className="badge">NLP</span>
                            <span className="badge">LDA</span>
                            <span className="badge">NMF</span>
                            <span className="badge">Text Analytics</span>
                            <span className="badge">Python</span>
                        </div>

                        <div className="project-content">
                            <div className="project-description">
                                <h3>Project Overview</h3>
                                <p>
                                    NLP pipeline exploring various topic identification techniques for unstructured text data.
                                    Implements and compares Bag of Words, Latent Dirichlet Allocation (LDA), and
                                    Non-Negative Matrix Factorization (NMF) approaches with configurable stopword management.
                                </p>

                                <h3>Key Achievements</h3>
                                <ul>
                                    <li><strong>3 Methods:</strong> Bag of Words, LDA, and NMF topic modeling</li>
                                    <li><strong>Text Processing:</strong> Customizable stopword addition and removal</li>
                                    <li><strong>Modular Design:</strong> Common functions shared across all topic identifiers</li>
                                </ul>
                            </div>
                        </div>

                        <div className="project-links">
                            <a href="https://github.com/fabiantoh98/topic_identification" target="_blank" rel="noopener noreferrer" className="primary-link">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-detailed">
                    <div className="project-main">
                        <h2>TODO MCP Server</h2>
                        <div className="tech-badges">
                            <span className="badge">MCP</span>
                            <span className="badge">FastMCP</span>
                            <span className="badge">Python</span>
                            <span className="badge">Claude Desktop</span>
                        </div>

                        <div className="project-content">
                            <div className="project-description">
                                <h3>Project Overview</h3>
                                <p>
                                    A Model Context Protocol (MCP) server for managing and tracking TODO comments in codebases.
                                    Enables AI assistants and MCP clients to store, retrieve, and manage TODO items with
                                    file location and line number references. Integrates with Claude Desktop for seamless workflow.
                                </p>

                                <h3>Key Achievements</h3>
                                <ul>
                                    <li><strong>MCP Integration:</strong> Tools and resources following the MCP standard</li>
                                    <li><strong>Persistent Storage:</strong> JSON-based TODO database with file-based organization</li>
                                    <li><strong>Claude Desktop:</strong> Drop-in configuration for AI assistant integration</li>
                                </ul>
                            </div>
                        </div>

                        <div className="project-links">
                            <a href="https://github.com/fabiantoh98/todo_mcp" target="_blank" rel="noopener noreferrer" className="primary-link">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-detailed">
                    <div className="project-main">
                        <h2>ESG Metrics Platform</h2>
                        <div className="tech-badges">
                            <span className="badge">JavaScript</span>
                            <span className="badge">React</span>
                            <span className="badge">ESG</span>
                            <span className="badge">HackOMania 2024</span>
                        </div>

                        <div className="project-content">
                            <div className="project-description">
                                <h3>Project Overview</h3>
                                <p>
                                    Web platform for generating ESG reports and tracking sustainability metrics, built for
                                    HackOMania 2024. Provides visibility and management of mandatory ESG metrics for business
                                    owners with automated report template generation and metric analysis aligned with SGX
                                    sustainability reporting requirements.
                                </p>

                                <h3>Key Achievements</h3>
                                <ul>
                                    <li><strong>Hackathon Project:</strong> Built at HackOMania 2024</li>
                                    <li><strong>ESG Compliance:</strong> Aligned with SGX sustainability reporting standards</li>
                                    <li><strong>Automated Reports:</strong> Template generation with metric analysis</li>
                                </ul>
                            </div>
                        </div>

                        <div className="project-links">
                            <a href="https://github.com/fabiantoh98/ESG_Metrics_Platform" target="_blank" rel="noopener noreferrer" className="primary-link">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MLProjects;
