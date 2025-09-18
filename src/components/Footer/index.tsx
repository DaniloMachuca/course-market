const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white p-12 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {currentYear} Marketplace de Cursos. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
