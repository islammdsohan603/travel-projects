
import { betterAuth } from "better-auth";

import { jwt } from 'better-auth/plugins'

import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db('traveling');

export const auth = betterAuth({
  database: mongodbAdapter(db, {

    client
  }),

  emailAndPassword: {
    enabled: true,

  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }
  },
  session: {
    cookieCache: {
      enabled: true,
      strategy: 'jwt',
      maxAge: 60 * 60 * 24 * 7,
    }
  },
  plugins: [
    jwt()
  ]

});