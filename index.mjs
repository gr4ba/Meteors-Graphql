import { createSchema, createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'
import fetch from 'node-fetch'

const clients = [
  {
    'name': 'Peter',
    'lastname': 'Parker',
  },
  {
    'name': 'Jon',
  },
  {
    'name': 'Sarah',
    'lastname': 'Logan',
  }
];

const resolvers = {
  Query: {
    clients: () => {
      return clients;
    },
    asteroidsNear: async () => {
      let res =  await fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-12-16&end_date=2022-12-16&api_key=DEMO_KEY")
      res = await res.text();
      console.log(res);
      res = res.replaceAll("2022-12-16", "today");
      res = JSON.parse(res);
      return res;

      return res;
    }
  },
  Mutation: {
    addClient: (_, data ) => {
      let newClient = {
        'name': data.name,
        'lastname': data.lastname
      };
      clients.push(newClient);
      return newClient;
    }
  }
};


//Provider
const typDefinitions = `
type Query {
  clients: [Client],
  asteroidsNear: AsteroidsNear
},
type Mutation{
  addClient(name: String, lastName: String): Client
},
type Client {
  name: String
  lastname: String
},
type AsteroidsNear{
  element_count: Int,
  near_earth_objects: NearEarthObjects
  links: Links
},
type Links{
  next: String,
  prev: String,
  self: String
},
type MissDistance {
  astronomical: String,
  lunar: String,
  kilometers: String,
  miles: String
},

type RelativeVelocity {
  kilometers_per_second: String,
  kilometers_per_hour: String,
  miles_per_hour: String
},

type CloseApproachData {
  close_approach_date: String,
  close_approach_date_full: String,
  epoch_date_close_approach: Int,
  orbiting_body: String,
  miss_distance: MissDistance,
  relative_velocity: RelativeVelocity
},

type Feet {
  estimated_diameter_min: Float,
  estimated_diameter_max: Float
},

type Miles {
  estimated_diameter_min: Float,
  estimated_diameter_max: Float
},

type Meters {
  estimated_diameter_min: Float,
  estimated_diameter_max: Float
},

type Kilometers {
  estimated_diameter_min: Float,
  estimated_diameter_max: Float
},

type EstimatedDiameter {
  feet: Feet,
  miles: Miles,
  meters: Meters,
  kilometers: Kilometers
},

type  Today {
  id: String,
  neo_reference_id: String,
  name: String,
  nasa_jpl_url: String,
  absolute_magnitude_h: Float,
  is_potentially_hazardous_asteroid: Boolean,
  is_sentry_object: Boolean,
  close_approach_data: [CloseApproachData],
  estimated_diameter: EstimatedDiameter,
  links: Links
},

type NearEarthObjects {
  today: [Today]
}
`;

const yoga = createYoga({
  schema: createSchema({
    typeDefs: /* GraphQL */ typDefinitions,
    resolvers: resolvers,
  })
})

const server = createServer(yoga)

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})