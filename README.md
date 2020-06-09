# PRTG SPF Checker
> Custom PRTG sensor to check Sender Policy Framework (SPF) DNS records

![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)

**About this sensor**

This is a custom sensor for PRTG that allows you to monitor whether specific IP addresses pass an SPF check for a given domain. The IP address and domain are passed as command line arguments.

This sensor is a Node.js project bundled as a PE/exe file through Pkg. If you don't like the idea of downloading a binary from Git, you can run the Pkg command yourself. 

**How to use**

You can use this sensor in two ways. The first is to check whether an IP address passes the SPF conditions on the domain:

``` spf-checker.exe --checkType=ip --ipAddress=45.3.23.5 --domain=myDomain.com ```

The second is to simply ensure that a keyword is present within the SPF TXT record:

``` spf-checker.exe --checkType=keyword --keyword=mailgun --domain=myDomain.com ```

**Building the sensor**

If you wish to build the sensor run Pkg:

``` pkg . --targets node10-win-x64 ```
