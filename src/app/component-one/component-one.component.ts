import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // The URL of the endpoint that you want to fetch the data from
    const apiUrl = 'https://api.publicapis.org/entries';

    // Use the Fetch API to make the HTTP GET request
    fetch(apiUrl)
      .then(response => {
        // Check if the response is ok (status code in the range 200-299)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the response body as JSON
        return response.json();
      })
      .then(data => {
        // Handle the JSON data
        console.log(data);
      })
      .catch(error => {
        // Handle errors (failed network request or JSON parsing error)
        console.error('There has been a problem with your fetch operation:', error);
      });
  }

}
