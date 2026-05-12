import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.NEXT_PUBLIC_BETTER_AUTH_URL);
const db = client.db('traveling');

export const auth = betterAuth({

  emailAndPassword: {
    enabled: true,
  },

  database: mongodbAdapter(db, {

    client
  }),

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },

  }



});