export type Balances = {
  customerNumber: number;
  previousBalance: number;
  pendingPayments: number;
  currentCharges: number;
  currentPayments: number;
  balanceDue: number;
};

export type PaymentMethod = {
  id: string;
  user_id: string;
  accountType: string;
  billingAddress1: string;
  billingAddress2: string;
  city: string;
  creditCard: string;
  cvv: null | string;
  firstName: string;
  lastName: string;
  midInit: string;
  month: null | string;
  state: string;
  year: null | number;
  zipCode: string;
  token: string;
};

export type Bill = {
  controlId: number;
  amount: number;
  date: string;
  description: string;
  invoiceNumber: number;
  dueDate: string;
  accountNumber: number;
};

export type BillingPreferences = {
  autoPayMethod: {
    customerId: number | null;
    paymentMethodId: number | null;
    customerFirstName: string | null;
    customerMiddleName: string | null;
    customerLastName: string | null;
    customerAddressLine1: string | null;
    customerAddressLine2: string | null;
    customerState: string | null;
    customerCity: string | null;
    customerZip: string | null;
    paymentMethodType: string | null;
    paymentMethodLast4: string | null;
    paymentMethodCcv: string | null;
    paymentMethodExpirationDate: string | null;
    paymentMethodToken: string | null;
    paymentMethodCardNumber: string | null;
    paymentMethodBank: string | null;
    paymentMethodBankRoutingNumber: string | null;
    paymentMethodBankAccountNumber: string | null;
    paymentMethodBankAccountType: string | null;
    paymentMethodIsOneTime: number | null;
    isAutoPay: boolean | null;
  };
  emailFlag: boolean;
  pdfFlag: boolean;
  printedFlag: boolean;
};
