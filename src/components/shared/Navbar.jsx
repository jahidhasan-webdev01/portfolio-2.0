import NavLink from "../NavLink";
import ThemeToggle from "../ui/theme-toggle";
import Logo from "../Logo";

const Navbar = () => {
    const navLinks = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/about",
            name: "About"
        },
        {
            path: "/skills",
            name: "Skills"
        },
        {
            path: "/projects",
            name: "Projects"
        },
        {
            path: "/contact",
            name: "Contact"
        },
    ]
    return (
        <div className="pt-5 md:pt-10 flex items-center justify-center md:justify-between">
            <div className="font-bold hidden md:block">
                <Logo />
            </div>
            <div className="flex items-center gap-5">
                {
                    navLinks.map((nav, index) => <NavLink key={index} nav={nav} />)
                }
                <ThemeToggle />
            </div>
        </div>
    );
};

export default Navbar;