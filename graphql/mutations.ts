import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation registerUser(
    $email: String!
    $firstName: String!
    $lastName: String!
  ) {
    registerUser(
      input: {
        username: $email
        email: $email
        firstName: $firstName
        lastName: $lastName
      }
    ) {
      user {
        databaseId
      }
    }
  }
`;

export const LOG_IN = gql`
  mutation logIn($login: String!, $password: String!) {
    loginWithCookies(input: {
      login: $login
      password: $password
    }) {
      status
    }
  }
`;

// in case user chose paid sub, after stripe payment is confirmed, a Sunbscription object is created in WP
// successfulPayment below is a formality, all will be true as we will only be tracking unsuccessful transations in stripe
export const CREATE_SUBSCRIPTION_MUTATION = gql`
  mutation CREATE_SUBSCRIPTION($input: CreateSubscriptionInput!) {
    createSubscription(input: $input) {
      subscription {
        title
        date
        successfulPayment
        subscriptionMetadata {
            subscriptiontype {
              ... on SubscriptionType {
                id
              }
            }
            subscriptionstartson
            subscriptionrenewson
            subscriptionexpireson
            subscriptionduration
            tigiftrecipientemail
            userid
            tipurchaseid
            tiaffiliate
            tiamountcharged
            appliedcodename
            revenuetype
            quantity
            referrer
            referrertype
            paymenttype
            timestampdate
            activeon
            personalizedmessage
          }
      }
    }
  }
`;

// in case user chose paid sub, after stripe payment is confirmed, a UserData object is created in WP
// alternatively, if the user only regisers w/o subscribing, a UserData object is created in WP
export const CREATE_USERDATA_MUTATION = gql`
  mutation CREATE_USERDATA($input: CreateUserDataInput!) {
    createUserData(input: $input) {
      userData {
        title
        date
        userDataMetadata {
            emailaddress
            firstname
            lastname
            fullname
            address1
            address2
            city
            state
            zipcode
            tistripecustomerid
            userid
            joindate
            latestsubscription {
            ... on Subscription {
                id
            }
            }
            birthday
            referrer {
            ... on UserData {
                id
            }
            }
            usedcodes {
            ... on Code {
                id
            }
            }
            userlatitude
            userlongitude
        }
      }
    }
  }
`;

export const ADD_SUBSCRIPTION_TO_USERDATA = gql`
  mutation AddVideoPlaysToCourse($courseId: ID!, $videoPlayIds: [ID!]!) {
    addVideoPlaysToCourse(input: { courseId: $courseId, videoPlayIds: $videoPlayIds }) {
      course {
        id
        title
        courseMetadata {
          testrel {
            ... on VideoPlay {
              id
              title
            }
          }
        }
      }
    }
  }
`;