//record delete function open & close
lib.recordDelete =  lib.recordDelete || {};

lib.recordDelete.open = function (records) {
  for(var i = 0; i < records.length; i++) {
    ML.swipeoutOpen(records[i]);
  }
}

lib.recordDelete.close = function (records) {
  for(var i = 0; i < records.length; i++) {
    ML.swipeoutClose(records[i]);
  }
}

lib.recordDelete.change = function (records) {
  if(records.hasClass('swipeout-opened')){
    lib.recordDelete.close(records);
  }
  else{
    lib.recordDelete.open(records);
  }
}