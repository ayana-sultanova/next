import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

interface NavLinkProps {
    href: string;
    text: string;
    isActive: boolean;
    onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({href, text, isActive, onClick}) => {
    return (
        <Link href={href}
              className={classNames(
                  'mr-12 hover:border-b border-white',
                  isActive && 'border-b'
              )}
              onClick={onClick}
        >
            {text}
        </Link>
    );
};

export default NavLink;