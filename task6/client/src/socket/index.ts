export const socket = new WebSocket(`ws://localhost:10000`);

socket.onopen = () => {
  console.log('client connect');
};

socket.onmessage = (event) => {
  console.log(event.data);
};
