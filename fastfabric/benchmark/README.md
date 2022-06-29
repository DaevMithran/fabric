# Benchmark

## Release 2.4
- `git checkout release 2.4`
- build orderer image `make orderer-docker`

**Start network**
- Clone `fabric-sample` repo, from `fabric-sample` repo
  - cd `test-network`
  - Create the network : `./network.sh up createChannel`
  - Deploy chaincode: `./network.sh deployCC -ccn basic -ccp ../asset-transfer-basic/chaincode-go -ccl go`
  
***Setup Benchmark**
- Copy `organizations/peerOrganizations/org1.example.com/connection-org1.yaml` to `./connection-org1.yaml`
- `mkdir user1`
- Setup crypto of user1
  - Copy `organizations/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp/signcerts/User1@org1.example.com-cert.pem` to `./user1/cert.pem`
  - Copy `organizations/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp/keystore/priv_sk` to `./user1/priv_sk`

- `npm i`
- `npx caliper bind --caliper-bind-sut fabric:2.4`

**Run benchmark** : `npm run bench`

## FastFab
- `git checkout fast-fabric-2.4`
- build orderer image `make orderer-docker-clean && make orderer-docker`

again, **Start network** >> **Setup Benchmark** >> **Run Benchmark**