export function validateEmail(email) {
  const re = /.+@.+\..+/;
  return re.test(String(email).toLowerCase());
}

export function validatePassword(password) {
  if (password.length <= 8) {
    return true;
  } else {
    return false;
  }
}