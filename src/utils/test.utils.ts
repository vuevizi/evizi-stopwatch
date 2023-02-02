export const findTestElement = (component: any, attr: string) => {
  const findElement: any = component.find(`[data-test="${attr}"]`);
  return findElement;
};
