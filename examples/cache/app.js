var cache = []

function updateCacheCount(cache) {
  $('span.cacheCount').text(cache.length)
}

function cacheMouseMovements(event) {
  cache.push({x: event.pageX, y: event.pageY})
  updateCacheCount(cache)
}

$(function() {
  $('.mouseTracker').mousemove(cacheMouseMovement)
  // UNCOMMENT THIS AND COMMENT OUT ABOVE LINE TO FIX LEAK
  //$('.mouseTracker').mousemove(cacheNewestMouseMovement)
})

function cacheNewestMouseMovement(event) {
  var MAX_CACHE_SIZE = 100
  if (cache.length > MAX_CACHE_SIZE) {
    // maybe send to server or save in local storage if we really need it
    cache = []
  }
  cache.push({x: event.pageX, y: event.pageY})
  updateCacheCount(cache)
}
