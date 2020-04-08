class Helper {
  checkFormatNominal(value) {
    if (typeof value === 'number') {
      let val = (value / 1).toFixed(0).replace(',', '.');
      return 'Rp' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return value;
  }
}

export default Helper;
