export default function Header() {
  return (
    <header className="flex justify-between items-center p-4  backdrop-blur-md  m-4  ">
  
      <h3 className=" font-bold">Mashhad,<br/>Iran 🌤️</h3>

   
      <a
        href="https://www.google.com/maps/place/Mashhad/"
        target="_blank"
        rel="noopener noreferrer"
      >
   <img
  src={`${import.meta.env.BASE_URL}mapp.png`}
  alt="Mashhad Map"
  className="w-10 h-10 cursor-pointer hover:scale-110 transition"
/>
      </a>

    </header>
  );
}