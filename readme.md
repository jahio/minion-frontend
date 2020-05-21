# MINION Dashboard

This is where users of MINION login (the API handles authentication) and
views graphs, searches logs, and executes commands remotely through their
dashboard/web browser. This app maintains a persistent WebSocket connection
with the MINION Agent Service (aka "MAS") to update the dashboard when the agents
installed on servers publish output from running commands.