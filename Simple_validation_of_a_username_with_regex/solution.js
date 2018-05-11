function validateUsr(username) {
  return /^[\d*?\_*?a-z*?]{4,16}$/.test(username);
}