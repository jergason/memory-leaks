var nodesCache = {}

function start() {
  var p = document.getElementById("p")
  detached = document.createElement("div")
  p.appendChild(detached)
  p.removeChild(detached)
  fill()
}

function addNodes() {
  var nodeString = ""
  for (var i = 0; i < 10000; ++i) {
    nodeString += "<div>yo</div>"
  }
  var $nodes = $(nodeString)
  $('.toAddTo').append($nodes)
  nodesCache.myElements = $nodes
}

function removeNodes() {
  $('.toAddTo').empty()
  // UNCOMMENT TO FIX LEAK
  //nodesCache.myElements = null
}

$(function() {
  $('button.add').click(addNodes)
  $('button.remove').click(removeNodes)
})
