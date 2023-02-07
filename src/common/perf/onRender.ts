export const onRender = (
  id: string,
  phase: string,
  actualDuration: number,
  baseDuration: number
) => {
  // eslint-disable-next-line no-console
  console.table({
    id,
    act: Number(actualDuration.toFixed(1)),
    base: Number(baseDuration.toFixed(1)),
    diff: Number((baseDuration - actualDuration).toFixed(1)),
  });
};
