export const callApi = async (param: string) => {
  const response = await fetch(
    `https://api.pizzia.k8s.jeremychauvin.fr/pizza-treatment/${param}`
  );
  if (!response.ok) {
    throw response;
  }
  return response.json();
};
