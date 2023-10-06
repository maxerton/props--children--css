import { useEffect, useState } from 'react';
import styles from './style.module.css';

const Textarea = ({onUpdate=() => {}, initialValue='',rows=2, cols=20, ...args}) => {
  const {text} = styles;
  const [content, setContent] = useState('');
  
  useEffect(() => {
    onUpdate(content);
  }, [content]);

  useEffect(() => {
    setContent(initialValue);
  }, []);

  return (
    <textarea className={text} rows={rows} {...args} value={content} onChange={ev => setContent(ev.target.value)}></textarea>
  );
};

export default Textarea;