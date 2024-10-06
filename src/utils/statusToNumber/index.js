export const statusToNumber = (status) => {
  switch (status) {
    case 'non_member':
      return 0;
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
