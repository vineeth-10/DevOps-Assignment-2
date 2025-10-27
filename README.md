# 🚀 DevOps Assignment 2: Ticket Booking Web App

Welcome to the **Ticket Booking Web App** — a modern web application built with Python (Flask), fully containerized with Docker, integrated with Jenkins CI/CD, and orchestrated using Kubernetes.

**Developer:** Gvineeth

---

## 📦 Project Structure

DevOps-Assignment-2/
├── app.py
├── requirements.txt
├── Dockerfile
├── Jenkinsfile
├── README.md
├── k8s/
│ ├── deployment.yaml
│ └── service.yaml
├── static/
│ ├── css/
│ │ └── main.css
│ └── js/
│ └── script.js
├── templates/
│ └── index.html
├── .gitignore
├── .dockerignore
├── screenshots/
│ ├── github-repo.png
│ ├── jenkins-pipeline-configure.png
│ ├── jenkins-ci-cd.png
│ ├── dockerhub-image.png
│ ├── kubernetes-pods.png
│ └── application-interface.png


---

## 🛠️ Features

- Elegant Flask UI with Tailwind CSS and JavaScript customization
- Automated builds and tests using Jenkins Pipeline
- Continuous Containerization and deployment to Docker Hub
- Kubernetes Deployment and auto-scaling support
- Cloud-native folder structure for easy extensibility

---

## 🚀 Quick Start

### 1. Clone the repo

git clone https://github.com/vineeth-10/DevOps-Assignment-2.git
cd DevOps-Assignment-2


### 2. Run Locally With Flask

pip install -r requirements.txt
python app.py


Visit [http://localhost:8000](http://localhost:8000)

### 3. Build and Push Docker Image

docker build -t gvineeth/devops-assignment-2-app .
docker push gvineeth/devops-assignment-2-app:latest


### 4. Start Kubernetes Cluster (Minikube)

minikube start
kubectl apply -f k8s/
kubectl get pods,svc
minikube service devops-assignment-2-service


### 5. Jenkins CI/CD Pipeline

- Configure your Jenkins job to use the provided `Jenkinsfile`
- Set credentials `dockerhub-credentials` for Docker Hub pushes
- Trigger the pipeline — it will build, push, and deploy your app

---

## ✨ Screenshots

_Add screenshots of UI, Jenkins pipeline, DockerHub repo, and K8s dashboard here_

---

## ⚡ Tech Stack

- **Frontend:** HTML5, Tailwind CSS, JavaScript
- **Backend:** Python 3, Flask, Gunicorn
- **CI/CD:** Jenkins Pipeline
- **Containerization:** Docker
- **Orchestration:** Kubernetes (Minikube)
- **Cloud Registry:** Docker Hub

---

## 📄 Folder Details

- **/static/** - CSS/JS assets (Tailwind, custom styles, scripts)
- **/templates/** - HTML templates (Jinja2)
- **/k8s/** - Kubernetes deployment and service YAML manifests
- **Jenkinsfile** - Jenkins pipeline definition
- **Dockerfile** - Flask app container image definition

---

## 🪄 Credits

Created by **Gvineeth**   
DevOps Assignment, 2025

---

## 📝 License

This project is for academic purposes.
This README.md reflects all developer references updated to Gvineeth, along with instructions consistent with your project and deployment flow.

