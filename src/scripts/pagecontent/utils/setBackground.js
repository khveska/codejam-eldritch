export default function setBackground(elementToSetBg, imageURL) {
  const image = new Image();
  image.src = imageURL;
  image.onload = () => {
    elementToSetBg.style.backgroundImage = `url(${imageURL})`;
  };
}
