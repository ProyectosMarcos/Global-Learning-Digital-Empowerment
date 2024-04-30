window.addEventListener('DOMContentLoaded', () => {
  const $modal = document.getElementById('dialog');

  const $btnOpen = document
    .getElementById('open')
    .addEventListener('click', () => $modal.showModal());

  const $btnClose = document
    .getElementById('close')
    .addEventListener('click', () => $modal.close());

  const $btnCancel = document
    .getElementById('close')
    .addEventListener('click', () => $modal.close());
});
