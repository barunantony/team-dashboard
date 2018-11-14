import {ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, ViewChild} from '@angular/core';
import * as d3 from 'd3';

import { XYData } from './xy-data';

@Component({
  selector: 'app-xy-chart',
  templateUrl: './xy-chart.component.html',
  styleUrls: ['./xy-chart.component.css']
})
export class XyChartComponent implements OnChanges {
  @ViewChild('chart')
  chartElement: ElementRef;

  parseDate = d3.timeParse('%d-%m-%Y');

  @Input() xyStatus: XYData[];
  @Input() xAxisTitle: string;
  @Input() yAxisTitle: string;

  private svgElement: HTMLElement;
  private chartProps: any;

  constructor() { }

  ngOnChanges() {
    if (this.xyStatus &&  this.chartProps) {
      this.updateChart();
    } else if (this.xyStatus) {
      this.buildChart();
    }
  }

  buildChart() {
    this.chartProps = {};
  
    // Set the dimensions of the canvas / graph
    var margin = { top: 30, right: 20, bottom: 30, left: 50 },
      width = 600 - margin.left - margin.right,
      height = 270 - margin.top - margin.bottom;
  
    // Set the ranges
    this.chartProps.x = d3.scaleLinear().range([0, width]);
    this.chartProps.y = d3.scaleLinear().range([height, 0]);
  
    // Define the axes
    var xAxis = d3.axisBottom(this.chartProps.x);
    var yAxis = d3.axisLeft(this.chartProps.y).ticks(5);
  
    let _this = this;
  
    // Define the line
    var valueline = d3.line<XYData>()
      .x(function (d) {
          return _this.chartProps.x(d.xAxis.x);
      })
      .y(function (d) { return _this.chartProps.y(d.yAxis[0].y); });
  
    // Define the line
    var valueline2 = d3.line<XYData>()
      .x(function (d) {
          return _this.chartProps.x(d.xAxis.x);
      })
      .y(function (d) { return _this.chartProps.y(d.yAxis[1].y); });
  
    var svg = d3.select(this.chartElement.nativeElement)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 60)
      .attr("dx", -margin.top - 150 )
      .attr("dy", -margin.left - 40)
      .text(this.yAxisTitle);
  
    svg.append("text")
      .attr("transform", "rotate(0)")
      .attr("x", 10)
      .attr("dx", 20)
      .attr("dy", height + 30 )
      .text(this.xAxisTitle);

    // Scale the range of the data
    this.chartProps.x.domain(
      d3.extent(_this.xyStatus, function (d) {
          return d.xAxis.x;
      }));
    this.chartProps.y.domain([0, d3.max(this.xyStatus, function (d) {
      return Math.max(d.yAxis[0].y, d.yAxis[1].y);
    })]);
  
    // Add the valueline2 path.
    svg.append('path')
      .attr('class', 'line line2')
      .style('stroke', 'green')
      .style('fill', 'none')
      .attr('d', valueline2(_this.xyStatus));
  
    // Add the valueline path.
    svg.append('path')
      .attr('class', 'line line1')
      .style('stroke', 'black')
      .style('fill', 'none')
      .attr('d', valueline(_this.xyStatus));
  
  
    // Add the X Axis
    svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0,${height})`)
      .call(xAxis);
  
    // Add the Y Axis
    svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis);
  
    // Setting the required objects in chartProps so they could be used to update the chart
    this.chartProps.svg = svg;
    this.chartProps.valueline = valueline;
    this.chartProps.valueline2 = valueline2;
    this.chartProps.xAxis = xAxis;
    this.chartProps.yAxis = yAxis;
  }

  updateChart() {
    let _this = this;
  
    // Scale the range of the data again
    this.chartProps.x.domain(d3.extent(this.xyStatus, function (d) {
      return d.xAxis.x;
    }));
  
    this.chartProps.y.domain([0, d3.max(this.xyStatus, 
      function (d) { return Math.max(d.yAxis[0].y, d.yAxis[1].y); })]);
  
    // Select the section we want to apply our changes to
    this.chartProps.svg.transition();
  
    // Make the changes to the line chart
    this.chartProps.svg.select('.line.line1') // update the line
      .attr('d', this.chartProps.valueline(this.xyStatus));
  
    this.chartProps.svg.select('.line.line2') // update the line
      .attr('d', this.chartProps.valueline2(this.xyStatus));
  
    this.chartProps.svg.select('.x.axis') // update x axis
      .call(this.chartProps.xAxis);
  
    this.chartProps.svg.select('.y.axis') // update y axis
      .call(this.chartProps.yAxis);
  }

}
