// Custom types for your PYUSD project

// Token Contract Data
export interface TokenInfo {
    name: string;
    symbol: string;
    decimals: number;
}

// The structure for Total Supply response
export interface TotalSupplyResponse {
    totalSupply: string;
}

// API response structure for fetching data
export interface APIResponse<T> {
    success: boolean;
    data: T;
    error?: string;
}

// Environment Variables Types (optional, but recommended)
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_GOOGLE_RPC_URL: string; // Your Google RPC URL
            NEXT_PUBLIC_ETHERSCAN_API_KEY: string; // Optional: if you use Etherscan API
        }
    }
}

// Contract method types
export interface ContractMethods {
    totalSupply: () => Promise<string>;
    decimals: () => Promise<number>;
    symbol: () => Promise<string>;
    name: () => Promise<string>;
}

