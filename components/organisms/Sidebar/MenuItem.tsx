import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

interface MenuItemProps {
  title: string;
  icon:
    | 'ic-menu-overview'
    | 'ic-menu-transactions'
    | 'ic-menu-card'
    | 'ic-menu-message'
    | 'ic-menu-reward'
    | 'ic-menu-setting'
    | 'ic-menu-logout';
  active?: boolean;
  href: string;
}
export default function MenuItem({
  title,
  icon,
  active,
  href,
}: Partial<MenuItemProps>) {
  const classItem = cx({
    item: true,
    'mb-30': true,
    active,
  });
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <Link href={`${href}`}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
