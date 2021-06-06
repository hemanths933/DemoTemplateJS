--------------------------------------------------------------------------------------<br>
--------------------------------------------------------------------------------------<br>
Installation:<br>
--------------------------------------------------------------------------------------<br>
--------------------------------------------------------------------------------------<br>
<br>
Install http-server:<br>
npm install --global http-server<br>
<br>
Install Tunneling package:<br>
npm install -g localtunnel<br>

Note:<br>
<br>
To run in Windows, waitress server is used for python backend<br>
If you use Linux, alternates like gunicorn or uvicorn could be used<br>
comment out <br>
from waitress import serve<br>
<br>
and change <br>
serve(app.run()) to app.run<br>

--------------------------------------------------------------------------------------<br>
--------------------------------------------------------------------------------------<br>
How to Run?<br>
--------------------------------------------------------------------------------------<br>
--------------------------------------------------------------------------------------<br>
<br>
## Step 1: Run sample backend and run it on webserver like waitress or gunicorn<br>
<br>
Open a terminal <br>
<br>
>cd Backend<br>
Windows:<br>
> python app.py<br>
<br>
Linux:<br>
> gunicorn -w 1 --threads 1 -b :8020 app:app<br>
<br>
<br>
## Step 2:  Run UI on node.js http-server<br>
<br>
Open a terminal<br>
<br>
> http-server<br>
<br>
## Step 3:  Make a tunnel for UI<br>
<br>
lt --port port_number (port number inside server.js)<br>
<br>
## Step 4:  Make a tunnel for Backend<br>
<br>
lt --port port_number (port number inside backend/app.py)<br>
<br>
--------------------------------------------------------------------------------------<br>


