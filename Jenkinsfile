pipeline {
    agent any

    stages {
        stage('Prepare') {
            steps {
                sh '/usr/local/bin/yarn install'
                sh 'sed -i "/baseUrl/ s|\'https\\?://.*\'|\'http://35.234.99.122\'|" src/app/services/token-interceptor.service.ts'
                sh 'cat src/app/services/token-interceptor.service.ts'
            }
        }
        stage('Build') {
            steps {
                sh '/usr/local/bin/ng build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo `pwd`'
                sh 'tar -cjvf artefacts.tar.bz2 ./dist/eSchool/*'
                sh 'scp -o "StrictHostKeyChecking=no" ./artefacts.tar.bz2 bebyx@eschool-fe1:/home/bebyx/CI'
            }
        }
    }
}
