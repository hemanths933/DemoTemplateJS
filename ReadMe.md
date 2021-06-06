-------------
-------------
Installation:
-------------
-------------

Install http-server:
npm install --global http-server

Install Tunneling package:
npm install -g localtunnel

Note:

To run in Windows, waitress server is used for python backend
If you use Linux, alternates like gunicorn or uvicorn could be used

--------------------------------------------------------------------------------------

-------------
-------------
How to Run?
-------------
-------------
1st Terminal:
http-server


2nd Terminal:
lt --port port_number (port number inside server.js)

3rd Terminal:
lt --port port_number (port number inside backend/app.py)

--------------------------------------------------------------------------------------


