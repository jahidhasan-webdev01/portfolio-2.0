import Logo from "../ui/Logo";
import NavLink from "../ui/NavLink";
import ThemeToggle from "../ui/theme-toggle";

const Navbar = () => {
    const navLinks = [
        {
            path: "#about",
            name: "About"
        },
        {
            path: "#skills",
            name: "Skills"
        },
        {
            path: "#projects",
            name: "Projects"
        },
        {
            path: "#experience",
            name: "Experience"
        },
        {
            path: "#contact",
            name: "Contact"
        },
    ]
    return (
<div className="sticky top-0 z-50 w-full pt-5 bg-white dark:bg-[#0a192f] transition-colors duration-300">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-2 md:px-0">
        <div className="font-bold">
            <Logo />
        </div>
        <div className="flex items-center gap-2 md:gap-3">
            {
                navLinks.map((nav, index) => <NavLink key={index} nav={nav} />)
            }
            <ThemeToggle />
        </div>
    </div>
</div>
    );
};

export default Navbar;