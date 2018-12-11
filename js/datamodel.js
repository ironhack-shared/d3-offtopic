let DataModel = {
    _dataModel : [],
    generate: function () {
        this._dataModel = d3.range(50).map((item) => {
            return { 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                r: Math.random () * 100
            }
        })
    },
    get: function () {
        return this._dataModel;
    }
}