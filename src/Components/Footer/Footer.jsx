const Footer = () => {
    return (
      <div>
        <footer className="footer p-10 bg-base-200 text-base-content">
          <nav>
            <header className="footer-title">Contact Us</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Information</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Customer Service</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
          <aside className="items-center grid-flow-col">
            <p>
              <img
                className="w-20"
                src="https://i.ibb.co/vL9Kt0Q/mh-store.png"
              />
              <h1 className="inline">Copyright © MH STORE</h1>
            </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <img
                className="w-[300px]"
                src="https://i.ibb.co/cYKKzh9/payment.png"
              />
            </div>
          </nav>
        </footer>
      </div>
    );
};

export default Footer;
