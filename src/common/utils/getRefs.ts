const app = document.getElementById('app');
if (!app) {
  throw new Error('Please add <div id="app"> to index.html');
}

const modalRoot = document.getElementById('modal-root');
if (!modalRoot) {
  throw new Error('Please add <div id="modal-root"> to index.html');
}

export const getRefs = () => ({
  app,
  modalRoot,
});
