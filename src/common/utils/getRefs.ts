const root = document.getElementById('root');
if (!root) {
  throw new Error('Please add <div id="root"> to index.html');
}

const modalRoot = document.getElementById('modal-root');
if (!modalRoot) {
  throw new Error('Please add <div id="modal-root"> to index.html');
}

export const getRefs = () => ({
  root,
  modalRoot,
});
