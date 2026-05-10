import ThemeToggle from "../ui/theme-toggle";

const Navbar = () => {
    return (
        <div className="pt-10 flex items-center justify-between">
            <h1>Jahid Hasan</h1>
            <ThemeToggle/>
        </div>
    );
};

export default Navbar;