export default function setBackground(elementToSetBg, imageURL, callbackFn) {
  const image = new Image();
  image.src = imageURL;
  image.onload = () => {
    elementToSetBg.style.backgroundImage = `url(${imageURL})`;
    if (callbackFn) callbackFn();
  };
}
