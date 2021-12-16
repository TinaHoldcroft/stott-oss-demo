import Link from 'next/link';

const Logo = () => (
    <Link passHref href='/'>
        <a className="logo-wrapper">
            <img className="logo" src="/favicon.svg" alt="" />
            <span className="logo-txt">
                <span>Norges Blindeforbund</span>
                <span>Synshemmedes organisasjon</span>
            </span>
        </a>
    </Link>
);

export default Logo;