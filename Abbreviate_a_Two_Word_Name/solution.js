function abbrevName(name){
  let splitName = name.split('');
  return(`${splitName[0]}.${splitName[splitName.indexOf(' ')+1]}`.toUpperCase());
}