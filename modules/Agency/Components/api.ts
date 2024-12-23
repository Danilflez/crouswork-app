export const SendContact = async (args) => {
  return await fetch('http://localhost:3005/api/auth/supportRequest', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(args)
  }).then((data) => {
    if (!data.ok) return;

    return data.json();
  });
};
