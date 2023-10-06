import { useEffect, useState } from 'react';
import styles from './style.module.css';

const Input = ({ onUpdate=() => {}, initialValue='', type="text", iwrong=false, ...args }) => {
  const { customInput, wrong } = styles;
  const [content, setContent] = useState('');

  useEffect(() => {
    onUpdate(content);
  }, [content]);

  useEffect(() => {
    setContent(initialValue);
  }, []);

  const classN = [customInput, iwrong ? wrong : ''].join(' ');

  return (
    <input className={classN} type={type} onChange={ev => setContent(ev.target.value)} value={content} {...args} />
  );
};

export default Input;