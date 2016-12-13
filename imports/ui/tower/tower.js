import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Blocks } from '../../api/tower/tower.js';
import { jQuery } from 'meteor/jquery';
import { $ } from 'meteor/jquery';
import { Raphael } from 'meteor/agnito:raphael';
import {jQueryUI} from 'meteor/mizzao:jquery-ui';

import './tower.css';
import './tower.html';

Template.Tower.onCreated(function towerOnCreated() {
  Meteor.subscribe('blocks');
});

// when user first connects
// Template.Tower.onCreated(function(){
//
// });
//
// Template.Tower.helpers({
//
// });
// BASIC DRAWING METHODS
// var updateTowerCanvas = function(gamecanvas) {
//   Tracker.autorun(function(){
//     let ctx = gamecanvas.getContext('2d');
//     ctx.fillStyle = "rgb(45,45,13)";
// 	  ctx.fillRect(0,0,20,20);
//   });
// };
//
//
// // initiate the canvas
// Template.Tower.onRendered(function() {
//   let gamecanvas = this.find('#gamecanvas'); // get canvas from dom
//   updateTowerCanvas(gamecanvas);
// });
//


// // RAPHAEL METHODS
// Template.Tower.onRendered(function(){
//   // var paper = Raphael("canvas", "100%", "100%");
//   // createBlock();
//   // createTetromino();
// });
//
//
// var createBlock = function(paper) {
//   var circle = paper.circle("50%", "50%", 40);
// };
//
// var createTetromino = function(paper) {
//   var tetronimo = paper.path("M 250 250 l 0 -50 l -50 0 l 0 -50 l -50 0 l 0 50 l -50 0 l 0 50 z");
//    tetronimo.attr({fill: '#9cf', stroke: '#ddd', 'stroke-width': 5});
// };
//
// Template.Tower.events({
//   'click #brick-item': function(event){
//     var paper = Raphael("canvas", "100%", "100%");
//     createBoth(paper);
//   }
// });
//
// function createBoth(paper){
//   createTetromino(paper); createBlock(paper);
// }
//

// IMAGE ASSET METHODS
Template.Tower.onRendered(function(){

});

function createKitchen() {
  var canvas = document.getElementById('game-canvas');
  var kitchen = document.createElement('img');
  canvas.appendChild(kitchen);
  kitchen.src="game/kitchen.png";
  kitchen.className = 'kitchen';

  // $(function() {
  //     $( ".kitchen" ).draggable();
  // });

  $(function() {
    $('.kitchen').draggable( {
      // drag: function() {
      //   var offset = $(this).offset();
      //   var xPos = offset.left;
      //   var yPos = offset.top;
      //   // console.log('x: ' + xPos + 'y: ' + yPos);
      //   // $(this).text('x: ' + xPos + 'y: ' + yPos);
      // },
      stop: function(){
        var finalOffset = $(this).offset();
        var finalxPos = finalOffset.left;
        var finalyPos = finalOffset.top;

        Meteor.call('blocks.add', 'kitchen', finalxPos, finalyPos);
      },
    });
  });

  Meteor.call('blocks.add', 'kitchen', xPos, yPos);
}

function createLivingRoom() {
  var canvas = document.getElementById('game-canvas');
  var livingRoom = document.createElement('img');
  canvas.appendChild(livingRoom);
  livingRoom.src='game/livingRoom.png';
  livingRoom.className = 'living-room';

  // $(function() {
  //     $( ".living-room" ).draggable();
  // });

  $(function() {
    $('.living-room').draggable( {
      // drag: function() {
      //   var offset = $(this).offset();
      //   var xPos = offset.left;
      //   var yPos = offset.top;
      //   // console.log('x: ' + xPos + 'y: ' + yPos);
      //   // $(this).text('x: ' + xPos + 'y: ' + yPos);
      // },
      stop: function(){
        var finalOffset = $(this).offset();
        var finalxPos = finalOffset.left;
        var finalyPos = finalOffset.top;

        Meteor.call('blocks.add', 'living-room', finalxPos, finalyPos);
      },
    });
  });


}

Template.Tower.events({
  'click #kitchen-generate': function(event){
    createKitchen();
  },
  'click #living-room-generate': function(event){
    createLivingRoom();
  },
});
