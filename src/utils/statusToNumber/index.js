export const statusToNumber = (status) => {
  switch (status) {
    case 'pending_verification':
      return 1;
    case 'email_verified':
      return 2;
    case 'approved_member':
      return 3;
    default:
      return 0;
  }
};
