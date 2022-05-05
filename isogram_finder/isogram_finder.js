const IsogramFinder = function (word) {
    this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
    resultSet = [... new Set(this.word.split(""))]
    comparison = this.word.split("")
    console.log(resultSet)
    console.log(this.word.split(""))
    if (comparison.length === resultSet.length) {
        return true
    } else {
        return false
    }

}

module.exports = IsogramFinder;
