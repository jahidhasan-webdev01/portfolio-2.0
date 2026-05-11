import Link from "next/link";
import logoDark from "@/assests/logo-dark.png";
import logoLight from "@/assests/logo-light.png";
import Image from "next/image";

const Logo = () => {
    return (
        <>
            <Link href={"/"}>
                <Image
                    src={logoLight}
                    alt="logo"
                    height={300}
                    width={300}
                    className="block dark:hidden w-20 h-auto"
                />

                <Image
                    src={logoDark}
                    alt="logo"
                    height={300}
                    width={300}
                    className="hidden dark:block w-20 h-auto"
                />
            </Link>
        </>
    );
};

export default Logo;