export default defineEventHandler(async (event) => {
  const { age } = await readBody(event);
  const { name } = getQuery(event);
  return {
    message: `Hello ${name} , you are ${age} years old!`,
  };
});
