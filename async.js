function asyncfun() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('output after 2 sec');
      }, 2000);
    });
  }
  
  async function msg() {
    const msg = await asyncfun();
    console.log('Message:', msg);
  }
  
  msg();