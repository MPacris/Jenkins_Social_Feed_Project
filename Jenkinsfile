pipeline {
    agent any

    stages {

        stage ('Install Dependencies'){
            steps {
                sh 'echo "Installing the dependencies..."'
            }

        }

        stage ('Create Optimized React Build'){
            steps {
                sh 'echo "Creating the optimized react build..."'
            }

        }
        
        stage ('Build Docker Image'){
            steps {
                sh 'echo "Building the docker image..."'
            }

        }

        stage ('Push Docker Image'){
            steps {
                sh 'echo "Pushing the docker image..."'
            }

        }

        stage ('Deploy New Image to AWS EC2'){
            steps {
                sh 'echo "Deploying the image to AWS EC2..."'
            }

        }

        



    }
}