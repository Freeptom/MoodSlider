// // ***** EVENT LISTENERS AND VARIABLES ***** //

// // input
// const inputElement = document.querySelector("input");
// inputElement.addEventListener("change", handleFiles, false);

// // dropbox
// let dropbox = document.getElementsByClassName("dropbox");
// let dropObj = dropbox[0];
// dropObj.addEventListener("dragenter", dragenter, false);
// dropObj.addEventListener("dragover", dragover, false);
// dropObj.addEventListener("drop", drop, false);

// // *************************** //
// // stop prop of event and prevent default
// function dragenter(e) {
//     e.stopPropagation();
//     e.preventDefault();
// }

// function dragover(e) {
//     e.stopPropagation();
//     e.preventDefault();
// }

// // files dropped
// function drop(e) {
//     e.stopPropagation();
//     e.preventDefault();

//     // const dt = e.dataTransfer;
//     // const files = dt.files;

//     // pass files to dropHandler
//     dropHandler(e)
// }

// function dropHandler(ev) {
//     console.log('File(s) dropped');

//     // Prevent default behavior (Prevent file from being opened)
//     ev.preventDefault();

//     if (ev.dataTransfer.items) {
//         // Use DataTransferItemList interface to access the file(s)
//         for (var i = 0; i < ev.dataTransfer.items.length; i++) {
//             // If dropped items aren't files, reject them
//             if (ev.dataTransfer.items[i].kind === 'file') {
//                 var file = ev.dataTransfer.items[i].getAsFile();
//                 console.log(file);

//                 var reader = new FileReader();
//                 reader.onload = function () {
//                     var dataURL = reader.result;
//                     //   var output = document.getElementById('output');
//                     //   output.src = dataURL;
//                     console.log(dataURL);
//                 };
//                 reader.readAsDataURL(file);

//                 console.log('... file[' + i + '].name = ' + file.name);
//             }
//         }
//     } else {
//         // Use DataTransfer interface to access the file(s)
//         for (var i = 0; i < ev.dataTransfer.files.length; i++) {
//             console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
//         }
//     }

//     // Pass event to removeDragData for cleanup
//     // removeDragData(ev)
// }



// function handleFiles(files) {

//     console.log(files);
//     let parser, xmlDoc;
//     parser = new DOMParser();
//     xmlDoc = parser.parseFromString(files, "text/xml");
//     console.log(xmlDoc)

//     // .getElementsByTagName("title")[0].childNodes[0].nodeValue;



// }



function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; // FileList object.

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                  '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  // Setup the dnd listeners.
  var dropZone = document.getElementById('drop_zone');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);