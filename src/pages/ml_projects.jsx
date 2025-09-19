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

                <div className="coming-soon">
                    <h3>🚀 More Projects Coming Soon</h3>
                    <p>Currently working on natural language processing and reinforcement learning projects</p>
                </div>
            </div>
        </div>
    );
}

export default MLProjects;