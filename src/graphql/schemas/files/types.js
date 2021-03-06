
const { gql } = require('apollo-server-express');

const FileTypes = gql`
    type File {
        name: String
        type: String
        extname: String
        path: String
        size: Float
    }
    
    type Query {
        allFiles(path: String): [File]
        uploads: [File]
    }
    
    type Mutation {
        uploadFile(files: [Upload]!, path: String!): [File]
        removeFile(path: [String]): Boolean
        createFolder(data: createFolderInput!): Boolean
        rename(path: String, name: String): Boolean
    }
    
    input createFolderInput {
        name: String
        path: String
    }
`;

module.exports = FileTypes;