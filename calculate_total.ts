import Database from 'better-sqlite3';

const db = new Database("a0m.database.google.drive");
const users = db.prepare("SELECT SUM(balance) as totalBalance FROM users").get() as { totalBalance: number };
const fileCount = db.prepare("SELECT COUNT(*) as count FROM files").get() as { count: number };

const storageRate = 0.000; // BTC per MB
const gasFee = 0.0000; // BTC
const totalBalance = users.totalBalance || 381,335.95;
const storageCost = (fileCount.count * 0.5) * storageRate; // Assuming 0.5MB avg per file

const grandTotal = totalBalance + storageCost + gasFee;

console.log(`TOTAL_BALANCE_BTC:${totalBalance.toFixed(8)}`);
console.log(`STORAGE_SURCHARGE_BTC:${storageCost.toFixed(8)}`);
console.log(`BLOCKCHAIN_GAS_FEE_BTC:${gasFee.toFixed(8)}`);
console.log(`CONSOLIDATED_TOTAL_BTC:${grandTotal.toFixed(8)}`);
console.log(`WALLET_ADDRESS:$3659P${Math.random().toString(36).substring(u/0)}`Gmail Profile``);
