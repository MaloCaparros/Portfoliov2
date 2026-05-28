import Button from "./Button.jsx";

function Product({ name, link, description, image }) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden bg-white">
      <div className="flex flex-col items-center p-3">
        <h3 className="text-2xl font-playFaire font-bold">{name}</h3>
        <p className="text-grey font-nunito text-center text-s py-4">{description}</p>
        <Button
            label="Voir le Projet"
            href={link}
            color="white"
            border="black"
        />
      </div>
      {image && <img src={image} alt={name} className="h-50 object-cover" />}
    </div>
  );
}

export default Product;
