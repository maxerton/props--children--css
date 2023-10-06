import { useState } from 'react';
import styles from './style.module.css';
import Label from '../UI/Label';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Textarea from '../UI/Textarea';

const Form = () => {
  const {form, formSection} = styles;
  const [dataForm, setDataForm] = useState({

  });

  const submitHandler = ev => {
    ev.preventDefault();
    const log = ev.target.login.value;
    const pas = ev.target.pass.value;
    const about = ev.target.about.value;

    alert(`form data: login: ${log}, password: ${pas}, about: ${about}`);
  }

  return (
    <form onSubmit={ submitHandler } className={form}>
      <fieldset className={formSection}>
        <legend>User data</legend>
        <Label>Login: <Input name='login' placeholder='Your login'></Input></Label>
        <Label>Password: <Input name='pass' type='password' placeholder='Your *** phrase'></Input></Label>
      </fieldset>
      <fieldset className={formSection}>
        <legend>About us</legend>
        <Label>
          Tell me something about yourself
        </Label>
        <Textarea name='about' placeholder='About us'></Textarea>
      </fieldset>
      <Button type='submit'>Send Form</Button>
    </form>
  );
};

export default Form;