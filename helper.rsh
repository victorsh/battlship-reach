'reach 0.1';

export const informTimeout = (A, B) => {
  each([A, B], () => {
    interact.informTimeout();
  });
}
