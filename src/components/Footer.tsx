const Footer = () => {
  return (
    <footer className="text-lg py-6 bg-gray-900 text-gray-50">
      <div className="container mx-auto px-8 lg:px-32 flex items-center justify-center">
        <h5>
          &copy; {new Date().getFullYear()}
          <span className="px-1 text-orange-400">Vintage</span>
        </h5>
        <h5>All rights reserved</h5>
      </div>
    </footer>
  );
};

export default Footer;
