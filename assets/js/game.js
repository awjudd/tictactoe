/* 
* @Author: Andrew Judd
* @Date:   2014-02-17 21:07:24
* @Last Modified by:   Andrew Judd
* @Last Modified time: 2014-02-18 06:41:01
*/

// Build the namespace
var game = {}

game.easel = function(options) {

    var stage = null;

    var board = null;

    var initialize = function() {
        this.stage = new createjs.Stage(options.target);

        // Add the board to the canvas
        this.stage.addChild(this.board = new createjs.Container());
        
        this.board.width = this.stage.canvas.width * 0.7;
        this.board.height = this.stage.canvas.height;

        this.board.setBounds(0,0, this.stage.width, this.board.height);

        drawBoard();

        this.stage.update();
    };

    var drawBoard = function() {
        var bar = new createjs.Shape();
        bar.graphics.beginFill("#000000").drawRect(0, 0, this.board.width, 1);
        bar.x = 10;
        bar.y = this.board.height / 3;
        this.board.addChild(bar);

        bar = new createjs.Shape();
        bar.graphics.beginFill("#000000").drawRect(0, 0, this.board.width, 1);
        bar.x = 10;
        bar.y = (this.board.height / 3) * 2
        this.board.addChild(bar);

        bar = new createjs.Shape();
        bar.graphics.beginFill("#000000").drawRect(0, 0, 2, this.board.height - 20);
        bar.y = 10;
        bar.x = (this.board.width / 3) + bar.y;
        this.board.addChild(bar);

        bar = new createjs.Shape();
        bar.graphics.beginFill("#000000").drawRect(0, 0, 2, this.board.height - 20);
        bar.y = 10;
        bar.x = (this.board.width / 3) * 2 + bar.y;
        this.board.addChild(bar);
    };

    // Call the intiialize function
    initialize();

    return {

    };
};

$(document).ready(function(){
    // Setup the stage
    var stage = new game.easel({
        target: 'game-canvas'
    });


});