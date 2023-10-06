import styles from './style.module.css';

const Button = ({children, ...args}) => {
  const {customBtn} = styles;
  return (
    <button className={customBtn} {...args}>
      {
        children? children : 'Press me'
      }
    </button>
  );
};

export default Button;