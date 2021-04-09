function Header() {
  return (
      <div className="header relative mb-6 mt-12">
        <div className="flex flex-col">
          <h3 className="block text-6xl font-bold color-black">Discover</h3>
          <p className="block color-gray">Let's New Food Fast</p>
        </div>
        <img className="rounded-full absolute top-0 right-0 h-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-POQADycaQTtOr-btrBRAp4OcnSRFv7DIww&usqp=CAU"
             target="user perfil"/>
      </div>
  );
}

export default Header;
