import styles from './Button.module.css'

type ButtonProps = {
  title: string;
  onClick?: () => void;
};

const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
