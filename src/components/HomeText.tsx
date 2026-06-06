import Button from './Button';

interface HomeTextProps {
  work: string;
  name: string;
}

function HomeText({ work, name }: HomeTextProps) {
  return (
    <div className="flex flex-col justify-center gap-5 py-3 h-3/5 md:h-auto md:w-4/5 mx-auto">
      <p className="font-nunito text-yellow-text text-center md:text-start md:w-1/2">
        {work.toUpperCase()}
      </p>
      <h1 className="font-playFaire font-bold text-4xl md:text-5xl text-center md:text-start lg:text-6xl md:w-2/5">
        Hello, my name is {name}
      </h1>
      <p className="font-nunito text-grey text-center md:text-2xl px-3 md:w-2/5 md:text-start md:px-0">
        Étudiant en 1ère année d'école d'ingénieur à l'EFREI de Bordeaux, en alternance chez Alveus
        en tant que Software Engineer.
      </p>
      <div className="px-3 flex justify-center gap-2 md:w-1/2 md:justify-start md:px-0">
        <Button label="Projets" href="#projects" color="yellow" border="none" />
        <Button
          label="Linkedin"
          href="https://www.linkedin.com/in/malo-caparros-395029275/"
          color="white"
          border="black"
        />
      </div>
    </div>
  );
}

export default HomeText;
