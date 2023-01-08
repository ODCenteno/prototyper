module.exports.getFormattedDay = function() {
  const today = new Date();
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }
  return today.toLocaleDateString('es-MX', options);;
}


