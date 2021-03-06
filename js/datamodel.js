let DataModel = {
    _dataModel : [],
    generate: function () {
        //here we generate 1050 elements that we map out with the correct values for our dataviz
        this._dataModel = d3.range(1050).map((item, index) => {
            return { 
                x: index, 
                y: 40 * Math.sin(index * Math.PI / 180) + 100,
                r: Math.random () * 20
            }
        })
    },
    get: function () {
        return this._dataModel;
    }
}