# Singapore, taxified
*🚕 Visualize Singapore taxi locations using real-time taxi availability data from data.gov.sg. Submission to STEMist Hacks 2022.*

## Inspiration
The issue is simple: **Trying to find a taxi near you.**
We all had that time when we were looking for a taxi near our home, but we couldn't find one. In this project, I wanted to address this issue with a solution that is easy to use and has a simple interface.

## What it does
**Singapore, taxified** is a website that visualizes Singapore taxi locations using real-time taxi availability data from data.gov.sg. It gets the data from data.gov.sg and visualizes it using a map using the [Leaflet.js](https://leafletjs.com/) library.

## How I built it
I used the [Leaflet.js](https://leafletjs.com/) library to build the map. I used the [data.gov.sg](https://data.gov.sg/) API and axios to get the data. The website is built using plain HTML, CSS, and JavaScript.

## Challenges we ran into
The first challenge I ran into was getting the data from data.gov.sg using axios: The API was a bit tricky to use, and I spent a lot of time testing the code.

Another challenge I ran into was getting the data to be displayed on the map. I had to make sure that the data I got was in the correct format so it can be parsed by the Leaflet.js library later. However, I managed to get the data to be displayed on the map, and I even modified the marker to be a custom taxi icon.

## Accomplishments that I'm proud of
I am proud of how I built the website and how I was able to get the data from data.gov.sg and display it on the map. Additionally, I also added a custom marker to the map to represent the taxi.

## What I learned
I learned how to use the Leaflet.js library to build the map and how to use the data.gov.sg API and axios to get the data.

## What's next for: Singapore, taxified
I'm planning to add more features to the website. For example, I want to add a search bar to the map so that I can search for a taxi near me. I also want to add a feature to the map that shows the number of taxis available at a specific location.