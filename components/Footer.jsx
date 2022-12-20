import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer className="footer footer-center p-10 bg-primary text-primary-content">
    <div>
      <img width="50px" height="50px" src="https://i.ibb.co/tbJQrh0/logo.png" alt="logo" border="0" />
      <p className="font-bold">
        Prodat <br />
        Est 2022
      </p>
      <p>Copyright © 2022 - All right reserved</p>
    </div>
    <div>
      <div className="grid grid-flow-col gap-4">
          <Link href="https://www.instagram.com/project_prodat/?hl=en"><a>Follow our instagram ❤️</a></Link>
      </div>
    </div>
  </footer>
);

export default Footer;
