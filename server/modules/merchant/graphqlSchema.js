const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Merchant {
    index: Int
    guid: String
    logo: String
    dateCreated: String
    publishedState: Boolean
    brands: [String]
    merchant: String
    products: [Product]
    commissionFee: String
    contactEmail: String
    phone: String
    address: String
    publishedDate: String
    publishedBy: User
    companyDescription: String
  }
  type Product {
    belongsToBrand: Int
    id: String
    name: String
    price: Float
    description: String
    color: String
    size: String
    quantity: Int
    image: String
  }
  type CartProduct {
    cartProductId: String
    quantity: Int!
    productId: String
    name: String
    price: Float
    color: String
    size: String
  }
  type User {
    userId: String
  }
  type Query {
    merchants: [Merchant!]!
    cart: [CartProduct!]!
  }
  type Mutation {
    editMerchant(publishedState: Boolean!): Merchant
    addToCart(
      productId: String
      name: String
      price: Float
      color: String
      size: String
    ): CartProduct!
  }
`;

module.exports = typeDefs;