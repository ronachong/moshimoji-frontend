export function showLoginModal(bool) {
  return {
    type: 'UPDATE_MODAL_DISPLAY',
    payload: {
      show: bool,
    },
  };
}

export function printLoginModalState() {
  return { type: 'SHOW_MODAL_STATE' };
}
