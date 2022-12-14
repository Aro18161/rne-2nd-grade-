// 'use strict';

// // Create an instance
// var wavesurfer; // eslint-disable-line no-var

// // Init & load audio file
// document.addEventListener('DOMContentLoaded', function() {
//     // Init

//     wavesurfer = WaveSurfer.create({
//         container: document.querySelector('#waveform'),
//         waveColor: '#A8DBA8',
//         progressColor: '#3B8686',
//         backend: 'MediaElement',
//         plugins: [
//             WaveSurfer.markers.create({
//                 markers: [
//                     {
//                         time: 0,
//                         label: "BEGIN",
//                         color: '#ff990a',
//                         preventContextMenu: true
//                     },
//                     {
//                         time: 5.5,
//                         label: "V1",
//                         color: '#ff990a',
//                         draggable: true
//                     },

//                     {
//                         time: 24,
//                         label: "END",
//                         color: '#00ffcc',
//                         position: 'top'
//                     }
//                 ]
//             })
//         ]
//     });

//     var img = new Image(40, 40);
//     img.src = "./settings_icon.png";
//     img.onload = () => {
//         wavesurfer.markers.add({
//             time: 12,
//             position: "bottom",
//             markerElement: img
//         });
//     };

//     wavesurfer.on('error', function(e) {
//         console.warn(e);
//     });

//     wavesurfer.on('marker-drag', function(marker) {
//         console.log("marker drag:", marker.label);
//     });

//     wavesurfer.on('marker-drop', function(marker) {
//         console.log("marker drop:", marker.label);
//     });

//     wavesurfer.on('marker-contextmenu', function(marker) {
//         console.log("marker context menu:", marker.label);
//     });

//     // Load audio from URL
//     wavesurfer.load('static/data/test.wav');

//     wavesurfer.fireEvent('ready');

//     wavesurfer.play();
    

// });

// Raw JavaScript
var geocode = JSON.parse(document.getElementById("mydiv").dataset.geocode);


var wavesurfer1 = WaveSurfer.create({
    container: '#waveform1',
    waveColor: '#0E61B4',
    progressColor: '#30A5E0',
    fillParent: false,
    backend: 'MediaElement',
    minPxPerSec: 10,
    height: 85,
    barMinHeight: 26,
    hideScrollbar: true,
    cursor: true,
    responsive: true,
    fillParent: true,
    
    
  });
  
  
  // Load an audio file
  var song = 'static/data/test.wav';
  wavesurfer1.load(song);
  // waveform1.getElementsByTagName("wave")[1].style.border = 'none';
  // change icon and paues and play song


    // Enable creating regions by dragging
    //wavesurfer.enableDragSelection({});
  
    // Add a couple of pre-defined regions

  function togglePlay1() {
    if (wavesurfer1.isPlaying()) {
      wavesurfer1.pause();
      // playSong1.style.display = "block";
      // pauseSong1.style.display = "none";
    } else {
      wavesurfer1.play();
      // playSong1.style.display = "none";
      // pauseSong1.style.display = "block";
    }
  }
  
  wavesurfer1.on('ready', function () {
    // Enable creating regions by dragging
    wavesurfer1.enableDragSelection({});
    // function generateHslaColors (saturation, lightness, alpha, amount) {
    //     let colors = []
    //     let huedelta = Math.trunc(360 / amount)
      
    //     for (let i = 0; i < amount; i++) {
    //       let hue = i * huedelta
    //       colors.push('hsla(${hue},${saturation}%,${lightness}%,${alpha})')
    //     }
      
    //     return colors
    //   }
    // var step;
    // var k=90+5*${step};
    // for(step=0;step<=20;step++) {
    //     wavesurfer1.addRegion({
    //         start: step*5, // time in seconds
    //         end: (step+1)*5, // time in seconds
    //         color: 'hsla(,100%,30%,0.1)'
    //       });
    // }
    // Add a couple of pre-defined regions

    // var step

    // for(step=0;step<20;step++){
    //   col=step*10+80
    //   wavesurfer1.addRegion({
    //     start: step*5, // time in seconds
    //     end: (step+1)*5, // time in seconds
    //     color: `hsla(${col}, 100%, 30%, 0.3)`
    //   });
    //}
    var step

    for(step=0;step<geocode.length;step++){
      col=step*10+80
      wavesurfer1.addRegion({
        start: geocode[step], // time in seconds
        end: geocode[step+1], // time in seconds
        color: `hsla(${col}, 100%, 30%, 0.3)`
      });
    }
    
    
    // wavesurfer1.addRegion({
    //   start: 5,
    //   end: 10,
    //   color: 'hsla(150, 100%, 30%, 0.3)'
    // });

    // wavesurfer1.addRegion({
    //     start: 10, // time in seconds
    //     end: 15, // time in seconds
    //     color: 'hsla(80, 100%, 30%, 0.3)'
    //   });
      
    //   wavesurfer1.addRegion({
    //     start: 15,
    //     end: 20,
    //     color: 'hsla(150, 100%, 30%, 0.3)'
    //   });

    //   wavesurfer1.addRegion({
    //     start: 20, // time in seconds
    //     end: 25, // time in seconds
    //     color: 'hsla(80, 100%, 30%, 0.3)'
    //   });
      
    //   wavesurfer1.addRegion({
    //     start: 25,
    //     end: 30,
    //     color: 'hsla(150, 100%, 30%, 0.3)'
    //   });
    //   wavesurfer1.addRegion({
    //     start: 30, // time in seconds
    //     end: 35, // time in seconds
    //     color: 'hsla(80, 100%, 30%, 0.3)'
    //   });
      
    //   wavesurfer1.addRegion({
    //     start: 35,
    //     end: 40,
    //     color: 'hsla(150, 100%, 30%, 0.3)'
    //   });
    //   wavesurfer1.addRegion({
    //     start: 40, // time in seconds
    //     end: 45, // time in seconds
    //     color: 'hsla(80, 100%, 30%, 0.3)'
    //   });
      
    //   wavesurfer1.addRegion({
    //     start: 45,
    //     end: 50,
    //     color: 'hsla(150, 100%, 30%, 0.3)'
    //   });
    //   wavesurfer1.addRegion({
    //     start: 50, // time in seconds
    //     end: 55, // time in seconds
    //     color: 'hsla(80, 100%, 30%, 0.3)'
    //   });
      
    //   wavesurfer1.addRegion({
    //     start: 55,
    //     end: 60,
    //     color: 'hsla(150, 100%, 30%, 0.3)'
    //   });
    //   wavesurfer1.addRegion({
    //     start: 60, // time in seconds
    //     end: 65, // time in seconds
    //     color: 'hsla(80, 100%, 30%, 0.3)'
    //   });
      
    //   wavesurfer1.addRegion({
    //     start: 65,
    //     end: 70,
    //     color: 'hsla(150, 100%, 30%, 0.3)'
    //   });

    //   wavesurfer1.addRegion({
    //     start: 70, // time in seconds
    //     end: 75, // time in seconds
    //     color: 'hsla(80, 100%, 30%, 0.3)'
    //   });
      
    //   wavesurfer1.addRegion({
    //     start: 75,
    //     end: 80,
    //     color: 'hsla(150, 100%, 30%, 0.3)'
    //   });
  });
  
  
//   //  WaveSurfer2
//   var wavesurfer2 = WaveSurfer.create({
//     container: '#waveform2',
//     waveColor: '#0E61B4',
//     progressColor: '#30A5E0',
//     fillParent: false,
//     backend: 'MediaElement',
//     minPxPerSec: 10,
//     height: 85,
//     barMinHeight: 26,
//     hideScrollbar: true,
//     cursor: true,
//     responsive: true,
//   });
  // Load an audio file
//   var song2 = 'http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3';
//   wavesurfer2.load(song2);
//   // waveform2.getElementsByTagName("wave")[1].style.border = 'none';
    
//     // change icon and paues and play song
//     function togglePlay2() {
//       if (wavesurfer2.isPlaying()) {
//         wavesurfer2.pause();
//         // playSong1.style.display = "block";
//         // pauseSong1.style.display = "none";
//       } else {
//         wavesurfer1.pause();
//         wavesurfer2.play();
//         // playSong1.style.display = "none";
//         // pauseSong1.style.display = "block";
//       }
    // }
  