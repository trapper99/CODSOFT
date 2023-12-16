/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('project-tool');

// Insert a few documents into the projects collection.
db.getCollection('projects').insertMany([
  { 'projectName': 'kanban', 'description': 'kanban', 'startDate': new Date('2021-02-01T08:00:00Z'), 'endDate': new Date(''), 'status': 'In Progress' },
  { 'projectName': 'meetly', 'description': 'conferencing platform', 'startDate': new Date('2022-04-01T08:00:00Z'), 'endDate': new Date('2022-05-10T09:30:00Z'), 'status': 'Completed' },
  { 'projectName': 'scraper', 'description': 'online scrape tool', 'startDate': new Date('2021-08-11T08:00:00Z'), 'endDate': new Date('2021-09-01T09:30:00Z'), 'status': 'Completed' },
  { 'projectName': 'tola', 'description': 'toll payment application', 'startDate': new Date('2021-10-21T09:00:00Z'), 'endDate': new Date('2021-11-01T09:30:00Z'), 'status': 'Completed' },
  { 'projectName': 'wps-clone', 'description': 'a pdf reader', 'startDate': new Date('2023-10-11T06:00:00Z'), 'endDate': new Date(''), 'status': 'In Progress' },
  { 'projectName': 'movierater', 'description': 'movie recommendation system', 'startDate': new Date('2023-12-01T08:00:00Z'), 'endDate': new Date(''), 'status': 'In Progress' }
]);

db.project