import React from 'react';

import { Link } from 'react-router-dom';

import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import Master from '../../components/Layout/Master';
import Checkbox from '../../components/Forms/Checkbox';
import Container from '../../components/Containers/Container';
import Heading from '../../components/Headings/Heading';

interface IFormValues {
  name: '',
  maintenance: boolean;
  maintenanceMessage: string;
  siteName: string;
  siteDesc: string;
  smtpPort: string;
  smtpAddress: string;
  fromMail: string;
  fromName: string;
  comments: boolean,
  googleLogin: boolean,
  guestCheckout: boolean;
}

const Settings = (): React.JSX.Element => {
  const [values, setValues] = React.useState<IFormValues>({
    name: '',
    maintenance: false,
    maintenanceMessage: 'Site is under maintenance',
    siteName: 'E-commerce Store',
    siteDesc: 'Worlds greatest e-commerce store',
    smtpPort: '80',
    smtpAddress: 'mail.example.com',
    fromMail: 'noreply@example.com',
    fromName: 'E-commerce Store',
    comments: true,
    googleLogin: true,
    guestCheckout: true,
  });

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = e.target;

    setValues({
      ...values,
      [name]: checked,
    })
  };

  return (
    <Master>
      <Container>
        <Heading text='Settings'>
          <div className='flex flex-gap'>
            <Button type='button' text='Templates' />
            <Button type='button' text='User management' />
          </div>
        </Heading>

        <form noValidate>
          <div className='form-elements'>
            <h4>Logos</h4>
            <div className='form-line'>
              <Link to=''>Click here for logo management</Link>
            </div>
            <h4>General</h4>
            <div className='form-line flex flex-gap'>
              <div className='flex-grow'>
                <div className='label-line'>
                  <label htmlFor='siteName'>Site name</label>
                </div>
                <div className='input-line'>
                  <Input
                    required
                    name='siteName'
                    type='text'
                    value={values.siteName}
                    tabIndex={0}
                    maxLength={128}
                    onChange={handleTextChange}
                    placeholder='Please enter site name'
                  />
                </div>
              </div>
              <div className='flex-grow'>
                <div className='label-line'>
                  <label htmlFor='siteDesc'>Site description</label>
                </div>
                <div className='input-line'>
                  <Input
                    required
                    name='siteDesc'
                    type='text'
                    value={values.siteDesc}
                    tabIndex={0}
                    maxLength={128}
                    onChange={handleTextChange}
                    placeholder='Please enter site description'
                  />
                </div>
              </div>
            </div>
            <h4>Maintenance</h4>
            <div className='form-line'>
              <div className='label-line'>
                <label htmlFor='maintenance'>Maintenance mode</label>
              </div>
              <div className='checkbox-line'>
                <Checkbox
                  name='maintenance'
                  checked={values.maintenance}
                  placeholder='Enable maintenance mode'
                  onChange={handleRadioChange}
                />
              </div>
            </div>
            <div className='form-line'>
              <div className='label-line'>
                <label htmlFor='maintenanceMessage'>Maintenance message</label>
              </div>
              <div className='input-line'>
                <Input
                    required
                    name='maintenanceMessage'
                    type='text'
                    value={values.maintenanceMessage}
                    tabIndex={0}
                    maxLength={128}
                    onChange={handleTextChange}
                    placeholder='Please enter maintenanceMessage'
                  />
              </div>
            </div>

            <h4>Mail settings</h4>
            <div className='form-line flex flex-gap'>
              <div className='flex-grow'>
                <div className='label-line'>
                  <label htmlFor='fromName'>From name</label>
                </div>
                <div className='input-line'>
                  <Input
                    required
                    name='fromName'
                    type='text'
                    value={values.fromName}
                    tabIndex={0}
                    maxLength={128}
                    onChange={handleTextChange}
                    placeholder='Please enter from name'
                  />
                </div>
              </div>
              <div className='flex-grow'>
                <div className='label-line'>
                  <label htmlFor='fromMail'>From email</label>
                </div>
                <div className='input-line'>
                  <Input
                    required
                    name='fromMail'
                    type='email'
                    value={values.fromMail}
                    tabIndex={0}
                    maxLength={128}
                    onChange={handleTextChange}
                    placeholder='Please enter from email'
                  />
                </div>
              </div>
            </div>
            <div className='form-line flex flex-gap'>
              <div className='flex-grow'>
                <div className='label-line'>
                  <label htmlFor='smtpAddress'>SMTP address</label>
                </div>
                <div className='input-line'>
                  <Input
                    required
                    name='smtpAddress'
                    type='text'
                    value={values.smtpAddress}
                    tabIndex={0}
                    maxLength={128}
                    onChange={handleTextChange}
                    placeholder='Please enter SMTP address'
                  />
                </div>
              </div>
              <div className='flex-grow'>
                <div className='label-line'>
                  <label htmlFor='smtp'>SMTP port</label>
                </div>
                <div className='input-line'>
                  <Input
                    required
                    name='smtpPort'
                    type='number'
                    value={values.smtpPort}
                    tabIndex={0}
                    maxLength={3}
                    onChange={handleTextChange}
                    placeholder='Please enter SMTP port'
                  />
                </div>
              </div>
            </div>
            <h4>Site features</h4>
            <div className='form-line'>
              <div className='label-line'>
                <label>Features</label>
              </div>
              <div className='checkbox-line'>
                <Checkbox
                  name='googleLogin'
                  checked={values.googleLogin}
                  placeholder='Enable Google login'
                  onChange={handleRadioChange}
                />
              </div>
              <div className='checkbox-line'>
                <Checkbox
                  name='comments'
                  checked={values.comments}
                  placeholder='Enable product comments'
                  onChange={handleRadioChange}
                />
              </div>
              <div className='checkbox-line'>
                <Checkbox
                  name='guestCheckout'
                  checked={values.guestCheckout}
                  placeholder='Enable guest check out'
                  onChange={handleRadioChange}
                />
              </div>
            </div>
            <div className='button-line flex flex-gap flex-end'>
              <Button type='button' text='Reset to defaults' />
              <Button type='submit' text='Save' />
            </div>
          </div>
        </form>
      </Container>
    </Master>
  );
};

export default Settings;
