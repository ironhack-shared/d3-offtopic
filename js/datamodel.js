let DataModel = {
    _dataModel : [],
    generate: function () {
        //here we generate 1050 elements that we map out with the correct values for our dataviz
        this._dataModel = d3.range(window.innerWidth / 5).map((item, index) => {
            return { 
                x: index * 5, 
                y: 40 * Math.sin((index * 5) * Math.PI / 180)+ window.innerHeight / 2,
                y2:  40 * Math.tan((index * 5) * Math.PI / 180) + window.innerHeight / 2,
                r: Math.random () * 20
            }
        })
    },
    get: function () {
        return this._dataModel;
    }
}