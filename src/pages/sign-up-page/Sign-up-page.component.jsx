//React imports
import React from 'react';

//My imports
import Header from './../../components/header';
import SignUpForm from './../../components/sign-up-form';
import Footer from './../../components/footer';

const SignUpPage = () => {
  const owner = 'Controller photo by Uriel Soberanes';
  const ownerLink = 'https://unsplash.com/@soberanes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';

  const acknowledgement = {
    owner, ownerLink
  }

  return(
    <main>
      <Header />
      <SignUpForm />
      <Footer acknowledgement={acknowledgement}/>
    </main>
  );
};

export default SignUpPage;