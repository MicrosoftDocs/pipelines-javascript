# Script to deploy the app
# This file is needed only when you want to deploy the app to a Linux VM

# install node
pushd .
cd ~
curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt-get install nodejs -y
sudo apt-get install build-essential -y

# install express
sudo npm install express -y -g
popd

# configure nginx
sudo rm -f /etc/nginx/sites-enabled/default
sudo cp -f ./nginx-config /etc/nginx/sites-available/example
sudo ln -fs /etc/nginx/sites-available/example /etc/nginx/sites-enabled
sudo service nginx reload

# install pm2 and start the node server as a daemon
cd ..
sudo npm install pm2 -g -y
pm2 delete example -s
pm2 start server.js -n example
