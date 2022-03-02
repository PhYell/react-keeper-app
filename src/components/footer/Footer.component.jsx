import "./footer.style.css";

function Footer() {
    return (
        <footer>
            <p className="footerText">Copyright © {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer;
