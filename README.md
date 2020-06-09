# PRTG SPF Checker
> Custom PRTG sensor to check Sender Policy Framework (SPF) DNS records

![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)

**About this sensor**
This is a custom sensor for PRTG that allows you to monitor whether specific IP addresses pass an SPF check for a given domain. The IP address and domain are passed as command line arguments.

This sensor is a Node.js project bundled as a PE/exe file through Pkg. If you don't like the idea of downloading a binary from Git, you can run the Pkg command yourself. 
