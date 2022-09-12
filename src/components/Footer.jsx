import React from "react";

const Footer = () => {
  const d = new Date();
  return (
    <footer className="mt-3">
      <div className="container py-3 ">
        <h6 id="nameTitle" className="text-center text-dark">
          © {d.getFullYear()}. সর্বস্বত্ব সংরক্ষিত <strong>IslamBD</strong>
          {"-"}
          V.2.0 | সাইট ডিজাইন করেছেন{" "}
          <a
            className="text-decoration-none text-danger"
            href="https://www.srdreamlab.com"
            target="_BLANK"
          >
            SR Dream Lab
          </a>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
