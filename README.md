StatsD Dashboard
================

StatsD is a simple network daemon for keeping track of statistics pertaining to events emitted from your application.

[https://github.com/etsy/statsd/]

StatsD is typically integrated with Graphite, together providing a very powerful solution to capturing events and visualising those events over time.  

Though StatsD and Graphite are excellent, I wanted a very lightweight dashboard that I could attach to the StatsD server to get a view of what was happening within my application.  

The dashboard is by default served as an unstyled valid XHTML document that is updated in real time using data pushed from StatsD over a websocket.

Users can then style the dashboard to their preference using CSS.

Technologies
============
The dashboard is a Node.JS project that is build on the Express framework.
 

Usage 

1) Install the StatsD backend

2) Starts StatsD

3) Run the Server

4) Navigate to http://localhost:3001

