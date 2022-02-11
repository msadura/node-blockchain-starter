import './aliases';
import dotenv from 'dotenv';
dotenv.config();

import { connectProvider } from '@app/blockchain/provider';
import { connectWallet } from '@app/blockchain/wallet';
import { ethers } from 'ethers';

const PORT = process.env.PORT || 3002;

async function main() {
  // await connectProvider();
  // await connectWallet();
  // const app = express();
  // app.listen(PORT, () => {
  //   console.log(`[ server ] ready on port ${PORT}`);
  // });

  const wallets = new Array(100).fill(true).map(() => ethers.Wallet.createRandom().address);
  console.log('🔥', wallets);
}

main();
