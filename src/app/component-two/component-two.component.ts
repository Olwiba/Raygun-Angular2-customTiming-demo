import { Component, OnInit } from '@angular/core';

declare var rg4js: any;

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // The URL of the endpoint that you want to fetch the data from
    const apiUrl = 'https://catfact.ninja/fact';
    const fetchStart = new Date().getTime();

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
        rg4js('trackEvent', {
          type: 'customTiming',
          name: 'timeToInteractive',
          duration: new Date().getTime() - fetchStart,
        });
      })
      .catch(error => {
        // Handle errors (failed network request or JSON parsing error)
        console.error('There has been a problem with your fetch operation:', error);
      });
  }

}
