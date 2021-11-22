async function init() {
  let rustApp = null;

  try {
    rustApp = await import('../pkg');
  } catch (err) {
    console.error(err);
    return;
  }

  console.log(rustApp);

  const input = document.querySelector('#upload');
  const fileReader = new FileReader();

  fileReader.onloadend = () => {
    const base64Image = fileReader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
    const imageDataUrl  = rustApp.grayscale(base64Image);
    document.querySelector("#new-img").setAttribute('src', imageDataUrl);
  }

  input.addEventListener('change', () => fileReader.readAsDataURL(input.files[0]));
}

init();