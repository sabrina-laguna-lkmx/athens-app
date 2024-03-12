"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type Contract = {
  id: string;
  company: string;
  webPakId: number;
  address: string;
  selected: boolean;
  autopay: boolean;
  city: string;
  postalCode: string;
};

interface AuthContextProps {
  contracts: Contract[] | null;
  selectedAccount: Contract | null;
  setContractsAfterLogin: (newContracts: Contract[]) => void;
  setSelectedAccount: (account: Contract | null) => void;
  updateContractSelectedState: (contractId: string, selected: boolean) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [contracts, setContracts] = useState<Contract[] | null>(null);
  const [selectedAccount, setSelectedAccount] = useState<Contract | null>(null);

  // Load state from localStorage on component mount
  useEffect(() => {
    const storedContracts = localStorage.getItem("contracts");
    const storedSelectedAccount = localStorage.getItem("selectedAccount");

    if (storedContracts) {
      setContracts(JSON.parse(storedContracts));
    }

    if (storedSelectedAccount) {
      setSelectedAccount(JSON.parse(storedSelectedAccount));
    }
  }, []);

  // Save state to localStorage whenever contracts or selectedAccount change
  useEffect(() => {
    if (contracts) {
      localStorage.setItem("contracts", JSON.stringify(contracts));
    }
  }, [contracts]);

  useEffect(() => {
    if (selectedAccount) {
      localStorage.setItem("selectedAccount", JSON.stringify(selectedAccount));
    }
  }, [selectedAccount]);

  const setContractsAfterLogin = (newContracts: Contract[]) => {
    const initializedContracts = newContracts.map((contract, index) => ({
      ...contract,
      selected: index === 0,
    }));
    setContracts(initializedContracts);
    setSelectedAccount(
      initializedContracts.length > 0 ? initializedContracts[0] : null
    );
  };

  const updateContractSelectedState = (
    contractId: string,
    selected: boolean
  ) => {
    if (contracts) {
      const updatedContracts = contracts.map((contract) => ({
        ...contract,
        selected: contract.id === contractId ? selected : false,
      }));
      setContracts(updatedContracts);

      // Update the selected account when a contract is selected
      if (selected) {
        const account = contracts.find(
          (contract) => contract.id === contractId
        );
        if (account) {
          setSelectedAccount(account);
        }
      } else {
        // Deselecting a contract, clear the selected account if needed
        setSelectedAccount(null);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        contracts,
        selectedAccount,
        setContractsAfterLogin,
        setSelectedAccount,
        updateContractSelectedState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
