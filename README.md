StatsD Dashboard
================

[StatsD](https://github.com/etsy/statsd) is a simple network daemon for keeping track of events emitted from your application.  It is typically integrated with [Graphite](graphite.wikidot.com), allowing you to capture application events and visualise trends in those events over time.  

Though StatsD and Graphite are a powerful combination of tools, I built this project because I wanted a very lightweight dashboard that I could attach directly to the StatsD server to get a view of what was happening within the application at a given point in time.

![Dashboard Screenshot](http://benjaminwootton.co.uk/dashboard.png)

The dashboard is by default served as a lightweight HTML page.  On start it connects via a web socket to a StatsD back end, and listens for events.  Each time the metrics are flushed to the StatsD backend, the same object is pushed directly to the web page over a web socket where it is rendered into tables and charts without any page reload.

Technologies Used
=================

Node.js, Express, Socket.IO

Usage 
=====
+ git clone https://github.com/benjaminwootton/statsd-dashboard.git
+ Configure StatsD to use the provided back-end
    ``{
      flushInterval: 1000,
      backends: [ "../statsd-dashboard/server/socketio.js" ]
    }``
+ Start StatsD and ensure it is publishing data correctly
+ Run the StatsD dashboard client
    ``cd client
    node app.js``
+ Navigate to http://localhost:3001 and you should see data flowing into the dashboard at each StatsD flush interval.