var playlist = {"The Beatles": "Hey Jude"};

function updatePlaylist(list, name, title) {
  list.name = title;
  return list;
}

function removeFromPlaylist(list, name) {
  delete list.name;
  return list;
}
