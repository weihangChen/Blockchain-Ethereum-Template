# Airlift - VS Code Walkthrough
As part of the partner airlift event, a walkthrough of an upcoming Visual Studio Code extension for blockchain that is currently under development is available.  This document is the walkthrough of the current features of this developer tool.

## Prerequisities
The extension, at public release, will include all dependencies to streamline the experience for users.  As the release that is provided here is in active development, not all components are installed.  These dependencies will nedd to be installed before using the extension.

* NodeJS - https://nodejs.org/en/  (latest stable build of 10.x is recommeded)
* Truffle - `npm install truffle -g`
* Visual Studio Code - https://code.visualstudio.com/  (latest stable build)
* Python - https://www.python.org/ (2.7.x recommended)
* Git - https://git-scm.com/ (2.21.x recommended)
* Ganache (GUI) - https://www.truffleframework.com/ganache

## Install the VSIX
Open VS code and load the pre-release version of the blockchain extension.
* In the left navigation, click on the square to view any installed extensions.
* Next, click on the top of this pane (...) and select Install from VSIX, navigate to the VSIX file provided to load.

## Walkthrough
1. After the extension is loaded click on the view bar on the left navigation, named Azure Blockchain Consortium.

2. The extension will then load an persistent data from previous sessions.

3. First close any open workspaces / folders in the upper left navigation, by clicking File -> Close Folder/Workspace.

4. Open a new folder (empty), where the project will be created.

5. Next open the Command Pallette.  This can be done by typing <F1> key or <CTRL><SHIFT><P> or by click on the menu View -> Command Pallette.

6. Type Azure Blockchain and you will see several commands.  Select Azure Blockchain: New Solidity Project.

7. Select Create Empty Project.  Then name this something, e.g. test.

8. The extension will scaffold out the source files for a typical project.

9. Now compile the contracts in this solution.  Expand the contracts folder and right click on either contract and select Build Contracts from the context menu.  You can view the output of this in the output window, under Output -> truffle.

10. Now migrate these to a local Ganache instance.  First start the ganache instance from above.  Ensure the port listening is 8545.  If you need to change this, click the gear in the upper left and change under server.

11. Now back to VS Code, right click a contract and click Deploy Contracts.  A prompt will ask for Local (Ganache) or Azure.  Select Local (Ganache).  After a few seconds, the contracts will be signed and written to the local blockchain.

12. (Advanced)  You can deploy these contracts to Azure as well.  This will require a url be added to your truffle configuration in the second for westlake.

13. Next lets explore the infrastructure tooling side of the extension.  First, click on Connect to Consortium.  A prompt will guide you through logging into your Azure account, through subscriptions you have, resource groups and ultimately to any consortiums that are provisioned.

14. (Advanced) Create a new consortium.  This will be an Azure Blockchain Service, and again the prompts will guide you thorugh the deployment process.
