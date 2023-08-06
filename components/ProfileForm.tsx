 "use client";
 import { useMutation, gql } from "@apollo/client";
 import useAuth, { User } from "../hooks/useAuth";

// const UPDATE_PROFILE = gql`
//   mutation updateProfile(
//     $id: ID!
//     $firstName: String!,
//     $lastName: String!,
//     $email: String!
//   ) {
//     updateUser(input: {
//       id: $id
//       firstName: $firstName
//       lastName: $lastName
//       email: $email
//     }) {
//       user {
//         databaseId
//       }
//     }
//   }
// `;

// export default function ProfileForm() {
//   const { user } = useAuth();
//   const { id, firstName, lastName, email } = user as User;
//   const [updateProfile, { data, loading, error }] = useMutation(UPDATE_PROFILE);
//   const wasProfileUpdated = Boolean(data?.updateUser?.user?.databaseId);

//   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const values = Object.fromEntries(data);
//     updateProfile({
//       variables: { id, ...values, },
//     }).catch(error => {
//       console.error(error);
//     });
//   }

//   return (
//     <form method="post" onSubmit={handleSubmit}>
//       {wasProfileUpdated ? (
//         <p className="profile-update-confirmation">
//           ✅ Profile details have been updated.
//         </p>
//       ) : null}
//       <fieldset disabled={loading} aria-busy={loading}>
//         <label htmlFor="profile-first-name">First Name</label>
//         <input
//           id="profile-first-name"
//           type="text"
//           name="firstName"
//           defaultValue={firstName || ''}
//           autoComplete="given-name"
//         />
//         <label htmlFor="profile-last-name">Last Name</label>
//         <input
//           id="profile-last-name"
//           type="text"
//           name="lastName"
//           defaultValue={lastName || ''}
//           autoComplete="family-name"
//         />
//         <label htmlFor="profile-email">Email</label>
//         <input
//           id="profile-email"
//           type="email"
//           name="email"
//           defaultValue={email || ''}
//           autoComplete="email"
//         />
//         {error ? (
//           <p className="error-message">{error.message}</p>
//         ) : null}
//         <button type="submit" disabled={loading}>
//           {loading ? 'Updating...' : 'Update'}
//         </button>
//       </fieldset>
//     </form>
//   );
// }

import React from 'react';
import Completed from './icons/Completed';
import PrimaryHalfButton from './buttons/PrimaryHalfButton';

export default function ProfileForm() {
  // const { user } = useAuth();
  // const { id, firstName, lastName, email } = user as User;
  // const [updateProfile, { data, loading, error }] = useMutation(UPDATE_PROFILE);
  // const wasProfileUpdated = Boolean(data?.updateUser?.user?.databaseId);

  // function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const values = Object.fromEntries(data);
  //   updateProfile({
  //     variables: { id, ...values, },
  //   }).catch(error => {
  //     console.error(error);
  //   });
  // }
  return (
    <form method="post" className='flex w-full flex-col'>

      <p className="profile-update-confirmation flex flex-row justify-center">
        <span className='mr-2'><Completed fill={'black'} /></span> Profile details have been updated.
      </p>

      <fieldset className='flex w-full flex-col justify-center'>
        <label htmlFor="profile-first-name" className='invisible'>First Name</label>
        <input
          id="profile-first-name"
          type="text"
          name="firstName"
          defaultValue=''
          autoComplete="given-name"
          placeholder='First Name'
          className='appearance-none h-14 p-2.5 border-solid border border-black font-sans text-sm bg-pressedGrey placeholder:text-black/50'
        />
        <label htmlFor="profile-last-name" className='invisible'>Last Name</label>
        <input
          id="profile-last-name"
          type="text"
          name="lastName"
          defaultValue=''
          autoComplete="family-name"
          placeholder='Last Name'
          className='appearance-none h-14 p-2.5 border-solid border border-black font-sans text-sm bg-pressedGrey placeholder:text-black/50'
        />
        <label htmlFor="profile-last-name" className='invisible'>Birthday</label>
        <input
          id="profile-birthday"
          type="date"
          name="birthday"
          defaultValue=''
          autoComplete="birthday"
          placeholder='Birthday'
          className='appearance-none h-14 p-2.5 border-solid border border-black font-sans text-sm bg-pressedGrey text-black/50 focus:text-black cursor-text'
        />
        <label htmlFor="profile-specialty" className='invisible'>Specialty</label>
        <select
          id="profile-specialty"
          name="specialty"
          className='appearance-none h-14 p-2.5 border-solid border border-black font-sans text-sm bg-pressedGrey text-black/50 focus:text-black cursor-pointer'>
          <option value='' className='text-sm font-sans text-black/50'>Specialty</option>
          <option value="Something" className='text-sm font-sans text-black'>Something</option>
          <option value="Something 1" className='text-sm font-sans text-black'>Something 1</option>
          <option value="Something 2" className='text-sm font-sans text-black'>Something 2</option>
        </select>
        <label htmlFor="profile-email" className='invisible'>Email Address</label>
        <input
          id="profile-email"
          type="email"
          name="email"
          defaultValue=''
          autoComplete="email"
          placeholder='Email Address'
          className='appearance-none h-14 p-2.5 border-solid border border-black font-sans text-sm bg-pressedGrey placeholder:text-black/50'
        />

        {/* <p className="error-message flex justify-center text-red">Error Message</p>

        <div className='flex justify-center'>
          <PrimaryHalfButton
            link="#"
            text="RESET PASSWORD"
            textColor="black"
            borderColor="black"
            backgroundColor="white"
            padding="24px"
            width="100%"
            maxWidth="192px"
            type="submit"
            disabled=''
          />
        </div> */}

        {/* <button type="submit" disabled=''>
         Updating or updated
        </button> */}
      </fieldset>
    </form>
  );
}


