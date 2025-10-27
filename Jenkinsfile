pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
        DOCKER_IMAGE = 'GVineeth/devops-assignment-2-app'
        GIT_REPO = 'https://github.com/vineeth-10/DevOps-Assignment-2'
        KUBECONFIG = credentials('kubeconfig')
    }
    stages {
        stage('Checkout Code') {
            steps {
                git url: "${env.GIT_REPO}", branch: 'main'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${DOCKER_IMAGE}:${env.BUILD_NUMBER}")
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('', 'dockerhub-credentials') {
                        dockerImage.push("${env.BUILD_NUMBER}")
                        dockerImage.push("latest")
                    }
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    withCredentials([file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG_FILE')]) {
                        bat """
                        set KUBECONFIG=%KUBECONFIG_FILE%
                        kubectl set image deployment/devops-assignment-2-app ^
                        devops-assignment-2-app=${DOCKER_IMAGE}:${env.BUILD_NUMBER} ^
                        --record
        
                        kubectl rollout status deployment/devops-assignment-2-app --timeout=300s
        
                        kubectl get pods -l app=devops-assignment-2-app
                        kubectl get services -l app=devops-assignment-2-app
                        """
                    }
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
