export default function Recipe({ title, diets, image }) {
  return (
    <div>
      <h3>{title}</h3>
      <img
        src={image}
        alt="Imagen"
        onError={(e) => {
          e.target.onError = null;
          e.target.src =
            "https://i0.wp.com/noticieros.televisa.com/wp-content/uploads/2021/03/cheems-1.jpg?w=1080&ssl=1";
        }}
      />
      <h4>{diets}</h4>
    </div>
  );
}
