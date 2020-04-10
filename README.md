# Create a fair evoting application to ensure correct election results with Hyperledger Fabric and IBM Blockchain Platform (Local)

# Steps (Local Deployment)

1. [Clone the Repo](#step-1-clone-the-repo)
2. [Start the Fabric Runtime](#step-2-start-the-fabric-runtime)
3. [Install Contract](#step-3-install-contract)
4. [Instantiate Contract](#step-4-Instantiate-contract)
5. [Export Connection Details](#step-5-export-connection-details)
6. [Run the App](#step-5-run-the-app)

## Step 1. Clone the Repo

Git clone this repo onto your computer in the destination of your choice, then go into the web-app folder:
```
git clone https://github.com/alisour/blockchain-evote.git
```
## Step 2. Start the Fabric Runtime

- Go to the IBM Blockchain Extension icon then click to 1 Org Local Fabric
  this will take some time.
  
  ## Step 3. Import Install and Instantiate Contract
  
 - Next, we have to import our contract before we can install it. 
    Hover onto smart contracts, then click to '...' choose import a package.
      Then choose the contract/evoting-project@0.0.8.cds.
      
 - After importing, instantiate the contract at FABRIC ENVIRONMENT by clicking the '+instantiate' button.
    -Choose the contract on command panel. It will ask which function to choose write 'init' then 'no' and 'default'

## Step 4. Export Connection Details

 - Connect to gateway by clicking below FABRIC GATEWAYS.
    Connect to 'admin' then click to '...' and click export connection profile.
      Save it here: 'web-app/server/fabric_connection.json' DON'T FORGET TO CHANGE THE NAME!
      
## Step 5. Export Local Wallet

 - Under the 'FABRIC WALLETS' right click on `1 Org Local Fabric - Org1 Wallet`. CLICK THE SECOND ONE!
    Click to 'export wallet' then save it here: web-app/server/wallet. DON'T FORGET TO CHANGE THE NAME!
  

## Step 6. Run the App

 - To run the app, we will need to install dependencies for both our front-end and our back-end. 
 
## Start the Server

  - First, navigate to the `server` directory, and install the node dependencies.
    ```bash
    cd evote/web-app/server
    npm install
    ```
  - Then, start the server: 
    ```bash
    npm start
    ```
  - If all goes well, you should see the following in your terminal:
    ```
      > server@1.0.0 start /Users/Horea.Porutiu@ibm.com/Workdir/testDir/July7/evote/web-app/server
      > ./node_modules/nodemon/bin/nodemon.js src/app.js

      [nodemon] 1.19.1
      [nodemon] to restart at any time, enter `rs`
      [nodemon] watching: *.*
      [nodemon] starting `node src/app.js`  
    ```

### Start the Front-end (Client)

- First, navigate to the `client` directory, and install the node dependencies.
  ```bash
  cd evote/web-app/client
  npm install
  ```
- Then, start the client: 
  ```bash
  npm run serve
  ```
- If all goes well, you should see the following in your terminal:
  ```
      DONE  Compiled successfully in 6803ms                                                                                             11:48:20

      App running at:
      - Local:   http://localhost:8080/ 
      - Network: unavailable

      Note that the development build is not optimized.
      To create a production build, run npm run build. 
  ```

 Nice. We're pretty much ready to submit transactions on our contract. Go to http://localhost:8080/ 
 to see your app.
 
 By the way when you try to restart the server and client you may get an error like this:
  Error: listen EADDRINUSE: address already in use::: 8080
    Don't forget to free 8080 and 8081 port with this command:
      ```bash
          fuser 8080/tcp -k
          
          fuser 8081/tcp -k
      ```
