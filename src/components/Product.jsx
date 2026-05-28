import Button from "./Button.jsx";

function Product({ name, link, description, image }) {
  return (
    <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden bg-white md:h-[24rem]">
      <div className="flex flex-col justify-center items-center p-6 flex-1 md:items-start">
        <h3 className="text-2xl font-playFaire font-bold">{name}</h3>
        <p className="text-grey font-nunito text-sm py-4 text-center md:text-start">{description}</p>
        <Button
            label="Voir le Projet"
            href={link}
            color="white"
            border="black"
        />
      </div>
      {image && (
        <div className="h-48 md:h-full md:w-1/2 shrink-0">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
}

export default Product;
