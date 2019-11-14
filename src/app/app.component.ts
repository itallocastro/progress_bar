import { Component } from '@angular/core';
import * as d3 from 'd3';
import { max } from 'd3';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'taskgraphic';
  data: number[] = [10,40,168,281,303,365];
  div = document.createElement("div");

  x = d3.scaleLinear()
          .domain([0,d3.max(this.data)])
          .range([0,420]);
  
  
  constructor()
  {
    
  }
  ngAfterContentInit()
  {
    

    d3.select(".chart").selectAll('div').data(this.data).enter().append("div").style("width",function(d){return (d) + "px";}).text(function(d){ return d; });
    this.div.innerHTML = "Hello World";
    document.body.appendChild(this.div);
    d3.select(this.div).style("color", "red");


    
  }
  
  
  
}

