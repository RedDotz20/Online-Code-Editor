import React from "react";
import LangDropdown from "./NavbarComponents/LangDropdown";
import ThemeDropdown from "./NavbarComponents/ThemeDropdown";
import FontSizeControl from "./NavbarComponents/FontSizeControl";
const Navbar = ({ lang, setLang, theme, setTheme, fontSize, setFontSize }) => {
	return (
		<div className="Navbar">
			<h1>Code Editor</h1>
			<div className="nav-comp-container" id="lang-dd-div">
				<LangDropdown lang={lang} setLang={setLang} />
			</div>

			<div className="nav-comp-container" id="theme-dd-div">
				<ThemeDropdown theme={theme} setTheme={setTheme} />
			</div>

			<div className="nav-comp-container" id="fontsize-control-div">
				<FontSizeControl fontSize={fontSize} setFontSize={setFontSize} />
			</div>
		</div>
	);
};

export default Navbar;
