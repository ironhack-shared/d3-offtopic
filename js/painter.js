let Painter = {
    paint: function (dataModel) {
        let selection = d3
            .select("#base")

        // dataModel.forEach((dataModelSelected) => {
        //     selection
        // .append("circle")
        // .attr("r", dataModelSelected.r)
        // .attr("cx", dataModelSelected.x)
        // .attr("cy", dataModelSelected.y)
        // .style("fill", d3.rgb(0, Math.random() * 255, 0, 1))
        // })

        selection
            .selectAll("circle")
            .data(dataModel)
            .enter()
            .append("circle")
            .attr("r", (d) => {
                return 1
            })
            .attr("cx", (d) => {
                return d.x
            })
            .attr("cy", (d) => {
                return d.y
            })
            .style("fill", (d, i) => {
                var colorScale = d3.scaleLinear().domain([0, dataModel.length/2, dataModel.length]).range(["green", "blue", "red"])
                return colorScale(i)
            })
    },
    animate: function () {
        d3
            .selectAll("circle")
            .transition()
            .duration(1000)
            .attr("r", (d) => {
                return d.r * 1
            })
    }
}