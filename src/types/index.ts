export type Error = {
  [key: string]: string;
};

export type User = {
  id: number;
  name: string;
  lastName: string;
  prefix: string;
  title: string;
  imageUrl: string;
};

export type Company = {
  name: string;
  suffix: string;
};

export type Address = {
  zipCode: string;
  city: string;
  streetAddress: string;
  country: string;
  state: string;
};

export type SingleUser = User & {
  email: string;
  ip: string;
  jobArea: string;
  jobDescriptor: string;
  jobType: string;
  company: Company;
  address: Address;
};
