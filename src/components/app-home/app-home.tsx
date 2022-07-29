import { Component, h } from '@stencil/core';
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";




@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {

  async connect() {
    //  Create WalletConnect Provider
    const provider: any = new WalletConnectProvider({
      infuraId: "27e484dcd9e3efcfd25a83a78777cdf1", // Required
    });

    //  Enable session (triggers QR Code modal)
    await provider.enable();

    //  Create Web3
    const web3 = new Web3(provider);
    console.log("Web:", web3);
  }


  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <button onClick={ () => this.connect() }>Connect</button>
      </div>
    );
  }
}
