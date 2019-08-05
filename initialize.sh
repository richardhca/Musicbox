pass=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
echo $pass
sed -i -e 's/POSTGRES_PASSWORD: password/POSTGRES_PASSWORD: '$pass'/g' docker-compose.yml
sed -i -e 's/password: \"password\"/password: \"'$pass'\"/g' config/createConnection.js
