function nicknameGenerator(name) {
  if (name.length < 4) {
    return "Error: Name too short";
  } else if ("aeiou".indexOf(name[2].toLowerCase()) != -1) {
    return name.slice(0, 4);
  } else {
    return name.slice(0, 3);
  }
}
