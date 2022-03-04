import { BsLightningFill } from "react-icons/bs";

function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-zinc-700 text-primary-content footer-center">
      <BsLightningFill className="text-7xl" />
      <p>Copyright &copy;{footerYear} Ivan Guzman</p>
    </footer>
  );
}

export default Footer;
