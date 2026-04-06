pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "pradeep9100/4thapril2026"
    }

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/PradeepSunny01/practice04april2026.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'pradeep9100',
                    passwordVariable: 'Nagurinu@01'
                )]) {
                    sh '''
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                    docker push $DOCKER_IMAGE
                    '''
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
}
