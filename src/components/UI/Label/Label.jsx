import styles from './style.module.css';

const Label = ({ children, ...args }) => {
  const { customLabel } = styles;
  console.log(children);


  return (
    <div>
      <label {...args} className={customLabel}>
        {
          true ? children
            : 'Example Label'
        }
      </label>
    </div>
  );
};

export default Label;