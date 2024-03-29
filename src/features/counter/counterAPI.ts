// A mock function to mimic making an async request for data
const fetchCount = (amount = 1) => {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 1000)
  );
};

export { fetchCount };
