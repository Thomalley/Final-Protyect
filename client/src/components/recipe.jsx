export default function Recipe({ title, diets, image, score }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt="Imagen" />
      <h4>Type of diet: {diets}</h4>
      <h4>Score: {score}</h4>
    </div>
  );
}
