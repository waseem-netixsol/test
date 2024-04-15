function condenseAndTrimString(str) {
  // Use regular expression to replace multiple whitespaces with a single space
  const condensedString = str.replace(/\s+/g, " ");
  // Use trim() to remove leading and trailing whitespaces
  return condensedString.trim();
}
