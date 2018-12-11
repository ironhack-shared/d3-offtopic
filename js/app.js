let App = {
    colors: ['#ffcc00', '#000'],
    _setFullScreen: function () {
        d3
            .select("#base")
            .attr("width", window.innerWidth)
            .attr("height", window.innerHeight)
            .style("background-color", "#f00")
    },
    _setBackgroundColor: function (hasTransition) {
        let selection = d3
            .select("#base");

        if (hasTransition) {
            selection
                .transition()
                .duration(3000)
                .style("background-color", this.colors[1])
        }   else {
            selection
                .style("background-color", this.colors[1])
        }

    },
    init: function () {
        this._setFullScreen()
        this._setBackgroundColor(false)
    }
}


