#### Docker
1. Ejecutar en una nueva terminal los comandos:
    sudo docker start da22ccc9a6f7
    sudo docker exec -it da22ccc9a6f7 bash
2. Una vez en el bash, se ejecuta el siguiente comando:
    sh post_install.sh
3. Despues de un tiempo, se espera a que bash muestre la conexion con oracle en una nueva terminal de sql y se ejecuta el comando:
    sqlplus
4. Despues de otro tiempo, se espera a que sql pida datos de usuario y se ingresan.

#### Nodejs
1. En la terminal en donde se levantara el servidor, se setea antes la variable de entorno para oracledb (HAY QUE TENER CUIDADO CON LA VERSION CORRECTA PARA ESCRIBIRLA EN EL COMANDO):
    export LD_LIBRARY_PATH=/opt/oracle/instantclient_19_9:$LD_LIBRARY_PATH
