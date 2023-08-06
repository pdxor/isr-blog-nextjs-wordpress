"use client";
import React, { useState } from 'react';
import SubTiers from './SubTiers';
import PrimaryHalfButton from './buttons/PrimaryHalfButton';
import Heading from './text/PageHeading';
import NextButton from './buttons/NextButton';
import ActiveFullForm from './forms/ActiveFullForm';
import DateInput from './forms/DateInput';
import Tag from './forms/Tag';
import FormProgressBar from './FormProgressBar';
import FormProgressBarWithoutDescriptions from './progressbar/FormProgressBarWithoutDescriptions';
import FormProgressBarWithDescriptionsOnly from './progressbar/FormProgressBarWithDescriptionsOnly';
import CartComponent from './header/CartComponent';
import { useMutation, gql } from "@apollo/client";
import Link from "next/link";
import { REGISTER_USER } from "@/graphql/mutations";
import H1Text from './text/H1Text';
import BulkGiftPlans from './BulkGiftPlans';

const SignUpForm: React.FC = () => {
  const [register, { data, loading, error }] = useMutation(REGISTER_USER);
  const wasSignUpSuccessful = Boolean(data?.registerUser?.user?.databaseId);

  const [section, setSection] = useState(1);
  const [email, setEmail] = useState('');

  // const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [tags, setTags] = useState(['HAIR COLOR', 'HAIR CUTTING', 'STYLING', 'SOCIAL MEDIA', 'TEXTURE', 'PRODUCTS', "MEN'S", 'EXTENSIONS', 'BUSINESS', 'EVENTS', 'TRENDING', 'CAREER GROWTH', 'DEALS']);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // const [interests, setInterests] = useState('');
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];
  const filledSteps = [1, 2];
  const stepDescriptions = ['Email', 'Basics', 'Interests', 'Payment'];

  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  function isValidEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function isValidName(name: string) {
    return name.trim() !== '';
  }

  const isValidBirthdate = (birthdate: string) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    // Adjust for cases where the birthday hasn't occurred in the current year
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age >= 13;
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags(prev => {
      if (prev.includes(tag)) {
        // If the tag is already selected, unselect it
        return prev.filter(t => t !== tag);
      } else {
        // If the tag is not selected, add it to the selected tags
        return [...prev, tag];
      }
    });
  };

  const handleNext = () => {
    if (section === 2 && (!isValidEmail(email))) {
      alert('Please enter a valid email before proceeding.');
      return;
    }

    if (section === 3 && (!isValidName(firstName) || !isValidName(lastName) || !isValidBirthdate(birthdate))) {
      alert('Please enter your first name, last name, and a valid birthdate (you must be at least 13 years old) before proceeding.');
      return;
    }

    if (!selectedPlan) {
      alert('Please select an option before proceeding.');
      return;
    }

    setSection(section + 1);
  };

  const handleLogin = () => {
    // Perform login logic or navigate to the login page using other means
    console.log('Redirecting to login page...');
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data);
    register({
      variables: values,
    }).catch(error => {
      console.error(error);
    });
    // Process form data or make API calls here
    // Reset form values if needed
    setSection(1);
    setEmail('');
    // setName('');
    setFirstName('');
    setLastName('');
    // setInterests('');
    setBirthdate('');
    setTags(['']);
    setSelectedTags(['']);
  }

  if (wasSignUpSuccessful) {
    return (
      <p>
        Thanks! Check your email – an account confirmation link has been sent to you.
      </p>
    )
  }

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   // Process form data or make API calls here
  //   // Reset form values if needed
  //   setSection(1);
  //   setEmail('');
  //   setName('');
  //   setInterests('');
  // };
  const progressSteps = [
    'Step 1',
    'Step 2',
    'Step 3',
    'Step 4',
    'Step 5',
    'Step 6',
    'Step 7',
  ];
  return (
    <form onSubmit={handleSubmit}>
      {section === 1 && (
        <div className='text-center'>
          <div className="flex justify-center">
            <H1Text text={'Individual Plans'} />

          </div>



          <br>
          </br>
          <div>

          </div>

          <div className="flex justify-center">
            {/* <SubTiers /> */}
            <SubTiers setSelectedPlan={setSelectedPlan} />
          </div>

          <br></br>
          {/* this is really just a next button */}
          {/* to do: this button should change to "register" if customer clicks the free options */}
          <div className='flex justify-center'>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex justify-center text-white border-white bg-[#C4A18D] box-border flex-row items-center p-6 w-48 h-14 gap-2 border-2 rounded-lg"
              style={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '900',
                fontSize: '12px',
                lineHeight: '14px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                letterSpacing: '0.04em',
                flex: 'none',
                order: 0,
                flexGrow: 0,
                boxSizing: 'border-box',
                flexDirection: 'row',
                justifyContent: 'center',
                padding: '24px',
                width: '192px',
                height: '60px',
                gap: '10px',
                borderRadius: '8px',
              }}
            >
              SUBSCRIBE
            </button>  </div>

          <br></br>
          <div style={{ color: 'rgba(0, 0, 0, 0.5)', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '400', lineHeight: '150%', letterSpacing: '-0.015em', textAlign: 'center' }}>
            By signing up you agree to our  Terms of Use and Privacy Policy
          </div>
          <br></br>
          <div className="flex justify-center">
            <H1Text text='Bulk Plans' />
          </div>
          <div className="flex justify-center">

            <BulkGiftPlans setSelectedPlan={setSelectedPlan} />

          </div>
          <div className='flex justify-center'>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex justify-center text-white border-white bg-black box-border flex-row items-center p-6 w-48 h-14 gap-2 border-2 rounded-lg"
              style={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '900',
                fontSize: '12px',
                lineHeight: '14px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                letterSpacing: '0.04em',
                flex: 'none',
                order: 0,
                flexGrow: 0,
                boxSizing: 'border-box',
                flexDirection: 'row',
                justifyContent: 'center',
                padding: '24px',
                width: '192px',
                height: '60px',
                gap: '10px',
                borderRadius: '8px',
              }}
            >
              CHECKOUT
            </button>  </div>
          <div style={{ color: 'black', fontFamily: 'Roboto', fontSize: '16px', fontWeight: '700', lineHeight: '125%', letterSpacing: '0.04em', textAlign: 'center' }}>

            Already have an account?
          </div>
          <br></br>
          <PrimaryHalfButton
            link="/log-in"
            text="LOGIN"
            textColor="white"
            borderColor="black"
            backgroundColor="black"
          />


        </div>
      )}
      {section === 2 && (
        <div>
          <div>
            <Heading text="Email" />

            insert different buttons here... like login w/ social or email, etc.


          </div>
          <div>
            <ActiveFullForm
              placeholder="Enter your Email"
              value={email}
              // onChange={(e) => setEmail(e.target.value)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              fill="red"
            />
          </div>

          <div>

            <NextButton handleNext={handleNext} />

          </div>
          {progressSteps && (
            <FormProgressBar
              section={2}
              steps={['Step 1', 'Step 2', 'Step 3', 'Step 4']}
              filledSteps={[1]}
              stepDescriptions={['EMAIL', 'BASICS', 'INTERETS', 'PAYMENT']}
            />
          )}

        </div>

      )}
      {section === 3 && (
        <div>
          <Heading text="The Basics" />
          <div>
            {/* <ActiveFullForm placeholder="Enter your text" fill="red" /> */}
            <ActiveFullForm
              placeholder="Enter your First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              fill="red"
            />
            <ActiveFullForm
              placeholder="Enter your Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              fill="red"
            />
            <DateInput label="Birthday" value={birthdate} onChange={setBirthdate} fill="red" />

          </div>
          <NextButton handleNext={handleNext} />
          {progressSteps && (
            <FormProgressBar
              section={2}
              steps={['Step 1', 'Step 2', 'Step 3', 'Step 4']}
              filledSteps={[1, 2]}
              stepDescriptions={['EMAIL', 'BASICS', 'INTERETS', 'PAYMENT']}
            />
          )}
        </div>
      )}
      {section === 4 && (
        <div>
          <Heading text="Your Interests" />

          {tags.map((tag, index) => (
            <Tag
              key={index}
              text={tag}
              active={selectedTags.includes(tag)}
              onClick={() => handleTagClick(tag)}
            />
          ))}

          <NextButton handleNext={handleNext} />
          {progressSteps && (
            <FormProgressBar
              section={2}
              steps={['Step 1', 'Step 2', 'Step 3', 'Step 4']}
              filledSteps={[1, 2, 3]}
              stepDescriptions={['EMAIL', 'BASICS', 'INTERETS', 'PAYMENT']}
            />
          )}
        </div>
      )}
      {section === 5 && (
        <div>
          <Heading text="Payment" />

          to insert Stripe card input here

          <NextButton handleNext={handleNext} />
          {progressSteps && (
            <FormProgressBar
              section={2}
              steps={['Step 1', 'Step 2', 'Step 3', 'Step 4']}
              filledSteps={[1, 2, 3, 4]}
              stepDescriptions={['EMAIL', 'BASICS', 'INTERETS', 'PAYMENT']}
            />
          )}
        </div>
      )}
      {/* {section === 6 && (
        <div>
          <Heading text="Location" />

          <NextButton handleNext={handleNext} />
          {progressSteps && (
            <FormProgressBar
              section={2}
              steps={['Step 1', 'Step 2', 'Step 3', 'Step 4']}
              filledSteps={[1, 2, 3]}
              stepDescriptions={['BASICS', 'INTERETS', 'INFO', 'LOGIN']}
            />
          )}
        </div>
      )} */}
      {section === 6 && (
        <div>
          <Heading text="Congrats!" />

          <NextButton handleNext={handleNext} />
        </div>
      )}
      {section === 8 && (
        <div>
          <Heading text="Learn it today, do it tomorrow!" />

          <NextButton handleNext={handleNext} />
        </div>
      )}
      {section === 9 && (
        <div>
          <Heading text="Log In" />

          <div>
            <CartComponent />
          </div>

          <NextButton handleNext={handleNext} />
        </div>
      )}
    </form>
  );
};

export default SignUpForm;
