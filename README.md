<p align="center"><img width="200" src="https://i.imgur.com/TE6LhaR.png"></p>
<h1 align="center">Code Typewriter</h1>
<p align="center">
A web-based typing game to help users improve their speed when programming
</p>

Main App            |  Post Form
:-------------------------:|:-------------------------:
![](https://i.imgur.com/gppD4H0.png)  |  ![](https://i.imgur.com/F83LRZd.png)

## Inspiration
Code Typewriter is a game heavily inspired by TypeRacer, in which the user is timed on how quickly they can correctly type a block of text. In TypeRacer, however, the text is plain English; your typing speed in TypeRacer might not accurately show your typing speed while programming because of the various characters and symbols present in popular programming languages. 

## What it does
TypeWriter fixes this problem that we face in TypeRacer- you type code, not English. You are prompted with a snippet of code (in this case, JavaScript), and then timed on how fast you can type in this code block. It will calculate your speed, and average words typed per minute.

## How we built it
* Frontend gameplay and UI built with __React__ and JavaScript
* Backend REST API developed with __Python__ and __FastAPI__
* Data held and persisted in a FaunaDB document database

## Challenges we ran into
* Working with new technologies (Fauna, Python, and React)
* Dealing with syntactic differences across users/languages
* Time zone differences

## Accomplishments that we're proud of
* We have a working game that you can play to test your typing skills!
* Learning new technologies and implementing them in our game
* Nice looking frontend game, with timed gameplay

## What we learned
* FaunaDB and NoSQL databases in general were new for our team
* FastAPI was a new framework for most of the team
* React was also a new framework for some of the team members
* Time management and collaboration across timezones 

## Installation
#### Requirements
* Node.js, Python3

#### Setup
* Clone this repository
## Frontend
* `cd` into `/frontend`
* run `npm install` to grab necessary dependencies
* run `npm start` to boot dev server
* dev server should be running on port `3000`

## Backend
* cd into backend
* install dependence in `requirements.txt`
* run `python main.py`
* dev server should be running on port `8000`

Application Should be running
