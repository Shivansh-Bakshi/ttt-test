import React from 'react';
import * as d3 from 'd3';
import { useD3 } from '../hooks/useD3';
import { SVG } from '../styled-components/global';

function Chart({ data }) {
    const ref = useD3(
      (svg) => {
        const height = 400;
        const width = 900;
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  
        const x = d3.scaleBand()
          .domain(data.map((d) => d.word))
          .rangeRound([margin.left, width - margin.right])
          .padding(0.1);
  
        const y = d3.scaleLinear()
          .domain([0, d3.max(data, (d) => d.occurance)])
          .rangeRound([height - margin.bottom, margin.top]);
  
        const xAxis = (g) => g.attr("transform", `translate(0,${height - margin.bottom})`)
        .style("color", "#eee")
        .style("font-size", "14px")
        .call(d3.axisBottom(x).ticks(null, "s"))
  
        const yAxis = (g) => g.attr("transform", `translate(${margin.left},0)`)
            .style("color", "#eee")
            .style("font-size", "14px")
            .call(d3.axisLeft(y).ticks(null, "s"))
  
        svg.select(".x-axis").call(xAxis);
        svg.select(".y-axis").call(yAxis);
  
        const div = d3.select("body").append("div")
            .style('position', 'absolute')
            .style("opacity", '0');

        svg.select(".plot-area")
            .attr("fill", "#f6bf3a")
            .selectAll(".bar")
            .data(data)
            .join("rect")
            .on('mousemove', function(event, d) {
                d3.select(this).transition()
                    .duration(50)
                    .attr('opacity', '0.85')
                
                div.transition()
                    .duration(50)
                    .style('opacity', '1');
                div.html("Occurance: " + d.occurance)
                    .style('left', (event.pageX + 10) + "px")
                    .style('top', (event.pageY - 15) + "px")
                    .style('background-color', "#eee")
                    .style('border', '1px solid #85671e')
                    .style('border-radius', '20px')
                    .style('padding', '5px')
            })
            .on('mouseout', function(event, d) {
                d3.select(this).transition()
                    .duration(50)
                    .attr('opacity', '1')

                div.transition()
                    .duration(50)
                    .style('opacity', '0')
            })
            .attr("class", "bar")
            .attr("x", (d) => x(d.word))
            .attr("width", x.bandwidth())
            .attr("y", (d) => y(d.occurance))
            .attr("height", (d) => y(0) - y(d.occurance))
        },
        data
    );
  
    return (
      <SVG ref={ref}>
        <g className="plot-area" />
        <g className="x-axis" />
        <g className="y-axis" />
      </SVG>
    );
  }
  
  export default Chart;