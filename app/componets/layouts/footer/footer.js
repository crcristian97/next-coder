"use client";
const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission logic here
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h1 className="text-xl font-bold mb-4">Contact Us</h1>
            <p className="mb-2">123 E-Commerce Street</p>
            <p className="mb-2">New York, NY 10001</p>
            <p className="mb-2">Phone: (555) 123-4567</p>
            <p>Email: info@ecommerce.com</p>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h2 className="text-xl font-bold mb-4">Newsletter</h2>
            <form onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 mb-2 text-gray-900 rounded"
                required
              />
              <button
                aria-label="Subscribe"
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/about" className="hover:text-blue-400">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/faq" className="hover:text-blue-400">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="/shipping" className="hover:text-blue-400">Shipping Info</a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="hover:text-blue-400">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <p>Facebook</p>
              </a>
              <a href="#" className="hover:text-blue-400">
                <p>Twitter</p>
              </a>
              <a 
                href="https://www.instagram.com/educacioncristian/" 
                rel="noopener noreferrer" 
                target="_blank" 
                className="hover:text-blue-400">
                <p>Instagram</p>
              </a>
              <a href="#" className="hover:text-blue-400">
                <p>Linkedin</p>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} E-Commerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
