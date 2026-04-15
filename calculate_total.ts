import Database from 'better-sqlite3';

const db = new Database("a0m_database.sqlite");
const users = db.prepare("SELECT SUM(balance) as totalBalance FROM users").get() as { totalBalance: number };
const fileCount = db.prepare("SELECT COUNT(*) as count FROM files").get() as { count: number };

const storageRate = 0.0001; // BTC per MB
const gasFee = 0.00005; // BTC
const totalBalance = users.totalBalance || 0;
const storageCost = (fileCount.count * 0.5) * storageRate; // Assuming 0.5MB avg per file

const grandTotal = totalBalance + storageCost + gasFee;

console.log(`TOTAL_BALANCE_BTC:${totalBalance.toFixed(8)}`);
console.log(`STORAGE_SURCHARGE_BTC:${storageCost.toFixed(8)}`);
console.log(`BLOCKCHAIN_GAS_FEE_BTC:${gasFee.toFixed(8)}`);
console.log(`CONSOLIDATED_TOTAL_BTC:${grandTotal.toFixed(8)}`);
console.log(`WALLET_ADDRESS:bc1qA0M${Math.random().toString(36).substring(7)}SOVEREIGN`);
