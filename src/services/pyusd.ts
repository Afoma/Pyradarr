import { ethers } from "ethers";

const RPC_URL = process.env.NEXT_PUBLIC_GOOGLE_RPC_URL!;
const provider = new ethers.JsonRpcProvider(RPC_URL);

// PYUSD proxy contract address (case-corrected with ethers.getAddress)
const PYUSD_PROXY_ADDRESS = "0x6c3Ea9036406852006290770bEdFcAbA0e23A0E8";

// ERC-20 ABI for metadata
const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function decimals() view returns (uint8)",
];

const contract = new ethers.Contract(PYUSD_PROXY_ADDRESS, ERC20_ABI, provider);

export async function getTokenMetadata() {
    try {
        const [name, symbol, decimals] = await Promise.all([
            contract.name(),
            contract.symbol(),
            contract.decimals(),
        ]);
        console.log("Token metadata:", { name, symbol, decimals });
        return { name, symbol, decimals };
    } catch (error) {
        console.error("Failed to fetch token metadata:", error);
        return { name: "Unknown", symbol: "UNK", decimals: 18 }; // fallback values
    }
}
