# Web Project 1 - Peer Evaluations
## Table of Contents

* [About the Project](#about-the-project)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Running the Application](#running-the-application)
* [Troubleshooting](#troubleshooting)

## About the Project

This is a Go project that uses Fiber for building APIs and Air for auto-reloading. It's function is to serve static files for static html development. This software is for doing peer evaluations between students.

CATME

## Prerequisites

To run this project, you'll need to have:

* Go installed on your machine (see below for installation instructions)
* The `go-fiber` package (`github.com/gofiber/fiber/v2`) installed
* The `air` package (`github.com/cosmtrek/air`) installed

## Installation

### Installing Go

To install Go, follow these steps:

1. Download the latest version of Go from the [official website](https://golang.org/dl/).
2. Follow the installation instructions for your operating system.

#### Example: Installing on macOS with Homebrew
```
brew install go
```

#### Installing Air 

To install Air, run: 
```
go get -u github.com/cosmtrek/air
```

#### Running the Application 

To run the application, navigate to the project directory and run: 
```bash
go build main.go && ./main 
# or
go run main.go
```
This will build and run the application. 


#### Auto-reloading with Air 

To use the `air` project to auto reload the go-fiber server when changes are detected in the file system. 
```bash
# run this once air is installed 
air 
```
Troubleshooting 

If you encounter issues with Go installation or `air` not working properly, check the official documentation and Air documentation.
     

