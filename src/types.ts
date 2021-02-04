export type PizzaTreatment = {
    imageUrl?: string;
    message?: string;
    succes?: number;
    error?: string;
  };

export type PizzaSuccess = {
  count: number;
};

export type PizzaFailed = {
  count: number;
};

export type PizzaCountData = {
  name: string;
  value: number;
};
