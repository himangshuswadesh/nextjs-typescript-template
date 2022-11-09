import { Button as AntButton } from 'antd';
import { ReactNode } from 'react';
import styles from './button.module.scss';
type ButtonProps = {
  children: ReactNode;
  extraClasses?: string;
};
const Button = ({ children, extraClasses = '' }: ButtonProps) => {
  return (
    <AntButton className={`${styles.button} ${extraClasses}`}>
      {children}
    </AntButton>
  );
};
export default Button;
