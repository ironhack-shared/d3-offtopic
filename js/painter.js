let Painter = {
    paint: function (dataModel) {
        let selection = d3
            .select("#base")

        let dataModelSelected = dataModel[10]

        selection
            .append("circle")
            .attr("r", dataModelSelected.r)
            .attr("cx", dataModelSelected.x)
            .attr("cy", dataModelSelected.y)
            .style("fill", "red")
    }
}