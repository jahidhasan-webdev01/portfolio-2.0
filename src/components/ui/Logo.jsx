import Link from "next/link";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";
import Image from "next/image";

const Logo = () => {
    return (
        <>
            <Link href={"/"} className="hover:border-b border-black dark:border-white text-sm">
                <Image
                    src={logoLight}
                    alt="logo"
                    height={300}
                    width={300}
                    className="block dark:hidden w-16 md:w-20 h-auto"
                />

                <Image
                    src={logoDark}
                    alt="logo"
                    height={300}
                    width={300}
                    className="hidden dark:block w-16 md:w-20 h-auto"
                />
            </Link>
        </>
    );
};

export default Logo;