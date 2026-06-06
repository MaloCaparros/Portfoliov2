import Button from './Button';
import Footer from './Footer';

function Contact() {
  return (
    <section id="contacts" className="flex flex-col items-center py-20 px-6 gap-12">
      <div className="flex flex-col w-full items-center gap-5">
        <h2 className="font-playFaire font-bold text-3xl md:text-4xl">Contacts</h2>
        <span className="w-20 h-1 bg-yellow"></span>
      </div>

      <form className="w-full max-w-lg flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-1.5">
          <label className="font-nunito text-sm font-semibold">Nom</label>
          <input
            type="text"
            className="border border-gray-200 rounded-lg px-4 py-2.5 font-nunito bg-white focus:outline-none focus:ring-2 focus:ring-yellow"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-nunito text-sm font-semibold">Email</label>
          <input
            type="email"
            className="border border-gray-200 rounded-lg px-4 py-2.5 font-nunito bg-white focus:outline-none focus:ring-2 focus:ring-yellow"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-nunito text-sm font-semibold">Message</label>
          <textarea
            rows={5}
            className="border border-gray-200 rounded-lg px-4 py-2.5 font-nunito bg-white focus:outline-none focus:ring-2 focus:ring-yellow resize-none"
          />
        </div>
        <div className="flex">
          <Button label="Envoyer" href="#" color="yellow" border="none" />
        </div>
      </form>

      <Footer />
    </section>
  );
}

export default Contact;
