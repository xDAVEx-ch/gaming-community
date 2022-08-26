//React imports
import React from 'react';

//My imports
import LogInForm from './../../components/log-in-form';
import Header from './../../components/header';
import Footer from './../../components/footer';

const LogInPage = () => {
  const owner = 'Controller photo by Oleg Gospodarec';
  const ownerLink = 'https://unsplash.com/@aleshcka?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';

  const acknowledgement = {
    owner, ownerLink
  }
  
  return (
    <>
      <LogInForm />
      <Footer acknowledgement={acknowledgement} />
    </>
  );
};

export default LogInPage;