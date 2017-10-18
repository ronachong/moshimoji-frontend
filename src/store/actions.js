export function toggleLoginModal(bool) {
  console.log('toggleLoginModal being called');
  return {
    type: 'TOGGLE_MODAL',
    payload: {
      show: bool,
    },
  };
}
