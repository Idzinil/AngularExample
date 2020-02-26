app.factory('ComputerService', function() {
    return {
        computerStatus: false,
        toggleComputer: function() {
            this.computerStatus = !this.computerStatus
        },

        getComputerStatus: function() {
            return this.computerStatus
        }
    };
}) 