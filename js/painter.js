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
                var colorScale = d3.scaleLinear().domain([0, dataModel.length]).range(["#f57c00", "#00769b"])
                return colorScale(i)
            })
    },
    animate: function () {
        var cLoop = 0;
        var transitionTime = 2500

        setInterval(() => {
            cLoop++;

            d3
                .selectAll("circle")
                .transition()
                .duration(transitionTime)
                .attr("cy", (d) => (cLoop % 2) ? d.y2 : d.y)
                .attr("r", (d) => 5)
        }, transitionTime + (transitionTime / 2))
    }
}