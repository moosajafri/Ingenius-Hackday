/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateHeroInput = {
  id?: string | null;
  name: string;
  category?: string | null;
};

export type ModelHeroConditionInput = {
  name?: ModelStringInput | null;
  category?: ModelStringInput | null;
  and?: Array<ModelHeroConditionInput | null> | null;
  or?: Array<ModelHeroConditionInput | null> | null;
  not?: ModelHeroConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Hero = {
  __typename: "Hero";
  id: string;
  name: string;
  category?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateHeroInput = {
  id: string;
  name?: string | null;
  category?: string | null;
};

export type DeleteHeroInput = {
  id: string;
};

export type ModelHeroFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  category?: ModelStringInput | null;
  and?: Array<ModelHeroFilterInput | null> | null;
  or?: Array<ModelHeroFilterInput | null> | null;
  not?: ModelHeroFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelHeroConnection = {
  __typename: "ModelHeroConnection";
  items?: Array<Hero | null> | null;
  nextToken?: string | null;
};

export type CreateHeroMutation = {
  __typename: "Hero";
  id: string;
  name: string;
  category?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateHeroMutation = {
  __typename: "Hero";
  id: string;
  name: string;
  category?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteHeroMutation = {
  __typename: "Hero";
  id: string;
  name: string;
  category?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetHeroQuery = {
  __typename: "Hero";
  id: string;
  name: string;
  category?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListHeroesQuery = {
  __typename: "ModelHeroConnection";
  items?: Array<{
    __typename: "Hero";
    id: string;
    name: string;
    category?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateHeroSubscription = {
  __typename: "Hero";
  id: string;
  name: string;
  category?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateHeroSubscription = {
  __typename: "Hero";
  id: string;
  name: string;
  category?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteHeroSubscription = {
  __typename: "Hero";
  id: string;
  name: string;
  category?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateHero(
    input: CreateHeroInput,
    condition?: ModelHeroConditionInput
  ): Promise<CreateHeroMutation> {
    const statement = `mutation CreateHero($input: CreateHeroInput!, $condition: ModelHeroConditionInput) {
        createHero(input: $input, condition: $condition) {
          __typename
          id
          name
          category
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateHeroMutation>response.data.createHero;
  }
  async UpdateHero(
    input: UpdateHeroInput,
    condition?: ModelHeroConditionInput
  ): Promise<UpdateHeroMutation> {
    const statement = `mutation UpdateHero($input: UpdateHeroInput!, $condition: ModelHeroConditionInput) {
        updateHero(input: $input, condition: $condition) {
          __typename
          id
          name
          category
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateHeroMutation>response.data.updateHero;
  }
  async DeleteHero(
    input: DeleteHeroInput,
    condition?: ModelHeroConditionInput
  ): Promise<DeleteHeroMutation> {
    const statement = `mutation DeleteHero($input: DeleteHeroInput!, $condition: ModelHeroConditionInput) {
        deleteHero(input: $input, condition: $condition) {
          __typename
          id
          name
          category
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteHeroMutation>response.data.deleteHero;
  }
  async GetHero(id: string): Promise<GetHeroQuery> {
    const statement = `query GetHero($id: ID!) {
        getHero(id: $id) {
          __typename
          id
          name
          category
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetHeroQuery>response.data.getHero;
  }
  async ListHeroes(
    filter?: ModelHeroFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListHeroesQuery> {
    const statement = `query ListHeroes($filter: ModelHeroFilterInput, $limit: Int, $nextToken: String) {
        listHeroes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            category
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListHeroesQuery>response.data.listHeroes;
  }
  OnCreateHeroListener: Observable<
    SubscriptionResponse<OnCreateHeroSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateHero {
        onCreateHero {
          __typename
          id
          name
          category
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateHeroSubscription>>;

  OnUpdateHeroListener: Observable<
    SubscriptionResponse<OnUpdateHeroSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateHero {
        onUpdateHero {
          __typename
          id
          name
          category
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateHeroSubscription>>;

  OnDeleteHeroListener: Observable<
    SubscriptionResponse<OnDeleteHeroSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteHero {
        onDeleteHero {
          __typename
          id
          name
          category
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteHeroSubscription>>;
}
