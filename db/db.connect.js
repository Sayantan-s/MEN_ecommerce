const { MongoClient } = require("mongodb")

const dbURI = `mongodb+srv://sayan:Sayantan@123@sayantan.zc13y.mongodb.net/Sayantan?retryWrites=true&w=majority`

let _db;

module.exports = callback => MongoClient.connect(dbURI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(client => {
    console.log("MongoDB is connected.");
    _db = client.db();
    return callback(client);
})
.catch(err => {
    console.log(err);
    throw err;
});
/*
MongoClient {
  _events: [Object: null prototype] { newListener: [Function] },
  _eventsCount: 1,
  _maxListeners: undefined,
  s: {
    url: 'mongodb+srv://sayan:Sayantan@123@sayantan.zc13y.mongodb.net/Sayantan?retryWrites=true&w=majority',
    options: {
      servers: [Array],
      authSource: 'admin',
      replicaSet: 'atlas-3itog6-shard-0',
      retryWrites: true,
      w: undefined,
      ssl: true,
      caseTranslate: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      checkServerIdentity: true,
      sslValidate: true,
      auth: [Object],
      dbName: 'Sayantan',
      srvHost: 'sayantan.zc13y.mongodb.net',
      writeConcern: [Object],
      socketTimeoutMS: 0,
      connectTimeoutMS: 10000,
      useRecoveryToken: true,
      readPreference: [ReadPreference],
      credentials: [MongoCredentials],
      promiseLibrary: [Function: Promise]
    },
    promiseLibrary: [Function: Promise],
    dbCache: Map {},
    sessions: Set {},
    writeConcern: WriteConcern { w: 'majority' },
    readPreference: ReadPreference {
      mode: 'primary',
      tags: undefined,
      hedge: undefined
    },
    namespace: MongoDBNamespace { db: 'admin', collection: undefined }
  },
  topology: NativeTopology {
    _events: [Object: null prototype] {
      topologyDescriptionChanged: [Array],
      authenticated: [Function],
      error: [Function],
      timeout: [Function],
      close: [Function],
      parseError: [Function],
      fullsetup: [Function],
      all: [Function],
      reconnect: [Function],
      commandStarted: [Function],
      commandSucceeded: [Function],
      commandFailed: [Function],
      serverOpening: [Function],
      serverClosed: [Function],
      serverDescriptionChanged: [Function],
      serverHeartbeatStarted: [Function],
      serverHeartbeatSucceeded: [Function],
      serverHeartbeatFailed: [Function],
      topologyOpening: [Function],
      topologyClosed: [Function],
      joined: [Function],
      left: [Function],
      ping: [Function],
      ha: [Function],
      connectionPoolCreated: [Function],
      connectionPoolClosed: [Function],
      connectionCreated: [Function],
      connectionReady: [Function],
      connectionClosed: [Function],
      connectionCheckOutStarted: [Function],
      connectionCheckOutFailed: [Function],
      connectionCheckedOut: [Function],
      connectionCheckedIn: [Function],
      connectionPoolCleared: [Function]
    },
    _eventsCount: 34,
    _maxListeners: Infinity,
    s: {
      id: 0,
      options: [Object],
      seedlist: [Array],
      state: 'connected',
      description: [TopologyDescription],
      serverSelectionTimeoutMS: 30000,
      heartbeatFrequencyMS: 10000,
      minHeartbeatFrequencyMS: 500,
      Cursor: [class Cursor extends CoreCursor],
      bson: BSON {},
      servers: [Map],
      sessionPool: [ServerSessionPool],
      sessions: Set {},
      promiseLibrary: [Function: Promise],
      credentials: [MongoCredentials],
      clusterTime: [Object],
      connectionTimers: Set {},
      srvPoller: [SrvPoller],
      detectTopologyDescriptionChange: [Function]
    },
    [Symbol(kCapture)]: false,
    [Symbol(waitQueue)]: Denque {
      _head: 0,
      _tail: 0,
      _capacity: undefined,
      _capacityMask: 3,
      _list: [Array]
    }
  },
  [Symbol(kCapture)]: false
}
Hello I am listening
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
MongoDB is connected.
MongoClient {
  _events: [Object: null prototype] { newListener: [Function] },
  _eventsCount: 1,
  _maxListeners: undefined,
  s: {
    url: 'mongodb+srv://sayan:Sayantan@123@sayantan.zc13y.mongodb.net/Sayantan?retryWrites=true&w=majority',
    options: {
      servers: [Array],
      authSource: 'admin',
      replicaSet: 'atlas-3itog6-shard-0',
      retryWrites: true,
      w: undefined,
      ssl: true,
      caseTranslate: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      checkServerIdentity: true,
      sslValidate: true,
      auth: [Object],
      dbName: 'Sayantan',
      srvHost: 'sayantan.zc13y.mongodb.net',
      writeConcern: [Object],
      socketTimeoutMS: 0,
      connectTimeoutMS: 10000,
      useRecoveryToken: true,
      readPreference: [ReadPreference],
      credentials: [MongoCredentials],
      promiseLibrary: [Function: Promise]
    },
    promiseLibrary: [Function: Promise],
    dbCache: Map {},
    sessions: Set {},
    writeConcern: WriteConcern { w: 'majority' },
    readPreference: ReadPreference {
      mode: 'primary',
      tags: undefined,
      hedge: undefined
    },
    namespace: MongoDBNamespace { db: 'admin', collection: undefined }
  },
  topology: NativeTopology {
    _events: [Object: null prototype] {
      topologyDescriptionChanged: [Array],
      authenticated: [Function],
      error: [Function],
      timeout: [Function],
      close: [Function],
      parseError: [Function],
      fullsetup: [Function],
      all: [Function],
      reconnect: [Function],
      commandStarted: [Function],
      commandSucceeded: [Function],
      commandFailed: [Function],
      serverOpening: [Function],
      serverClosed: [Function],
      serverDescriptionChanged: [Function],
      serverHeartbeatStarted: [Function],
      serverHeartbeatSucceeded: [Function],
      serverHeartbeatFailed: [Function],
      topologyOpening: [Function],
      topologyClosed: [Function],
      joined: [Function],
      left: [Function],
      ping: [Function],
      ha: [Function],
      connectionPoolCreated: [Function],
      connectionPoolClosed: [Function],
      connectionCreated: [Function],
      connectionReady: [Function],
      connectionClosed: [Function],
      connectionCheckOutStarted: [Function],
      connectionCheckOutFailed: [Function],
      connectionCheckedOut: [Function],
      connectionCheckedIn: [Function],
      connectionPoolCleared: [Function]
    },
    _eventsCount: 34,
    _maxListeners: Infinity,
    s: {
      id: 0,
      options: [Object],
      seedlist: [Array],
      state: 'connected',
      description: [TopologyDescription],
      serverSelectionTimeoutMS: 30000,
      heartbeatFrequencyMS: 10000,
      minHeartbeatFrequencyMS: 500,
      Cursor: [class Cursor extends CoreCursor],
      bson: BSON {},
      servers: [Map],
      sessionPool: [ServerSessionPool],
      sessions: Set {},
      promiseLibrary: [Function: Promise],
      credentials: [MongoCredentials],
      clusterTime: [Object],
      connectionTimers: Set {},
      srvPoller: [SrvPoller],
      detectTopologyDescriptionChange: [Function]
    },
    [Symbol(kCapture)]: false,
    [Symbol(waitQueue)]: Denque {
      _head: 0,
      _tail: 0,
      _capacity: undefined,
      _capacityMask: 3,
      _list: [Array]
    }
  },
  [Symbol(kCapture)]: false
}
*/