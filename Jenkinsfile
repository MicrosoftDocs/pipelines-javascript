pipeline {
    agent any
    options {
        // This is required if you want to clean before build
        skipDefaultCheckout(true)
    }
    
    tools {nodejs "nodejs"}
    
    stages {
        stage('cleaning workspace') {
            steps {
                // Clean before build
                cleanWs()
            }
        }
        stage('Cloning Git') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/UAT']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/alinakhanSystemsltd/pipelines-javascript.git']]])
                
            }
        }
        stage('BuildingNodejs') {
            steps {
                sh 'npm install'
                
            }
        }
        stage('TestingNodejs') {
            steps {
            sh 'npm run build'
            }
            
        }
        stage('successful') {
            steps {
            echo "successfully built and tested"
               // post { }
              
            }
        }
      
        stage('failed') {
            steps {
           
               echo "unsuccessfully built and tested"
            }
        }
    }
}
