let Painter = {
    paint: function (dataModel) {
        let selection = d3
            .select("#base")

        dataModel.forEach((dataModelSelected) => {
            selection
                .append("circle")
                .attr("r", dataModelSelected.r)
                .attr("cx", dataModelSelected.x)
                .attr("cy", dataModelSelected.y)
                .style("fill", d3.rgb(0, Math.random() * 255, 0, 1))
        })
    }
}