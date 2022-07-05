import { UserPort } from "@/application/port/UserPort";
import { User } from "@/domain/User";
import { gql } from "@apollo/client";

import { UserResponse } from "../response/UserResponse";
import { client } from "./client";

export class UserGQL implements UserPort {
  async login(email: string, password: string) {
    const { data } = await client.mutate<UserResponse>({
      mutation: gql`
        mutation SignIn($email: String!, $password: String!) {
          signup(email: $email, password: $password) {
            id
            lastName
            firstName
          }
        }
      `,
      variables: {
        email,
        password,
      },
    });

    if (!data) throw new Error("failed to login");

    return new User(data.id, data.lastName, data.firstName);
  }
}
