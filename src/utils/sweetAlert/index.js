import Swal from 'sweetalert2';

export const errorAlert = (text) => {
  Swal.fire({
    title: '오류!',
    text,
    icon: 'error',
    confirmButtonText: '확인',

    customClass: {
      popup: 'custom-popup',
      icon: 'custom-icon',
      title: 'custom-title',
      confirmButton: 'custom-confirm-button',
    },

    didOpen: () => {
      // 팝업 창 인라인 스타일 지정
      const popup = document.querySelector('.custom-popup');
      if (popup) {
        popup.style.backgroundColor = '#ffffff';
        popup.style.color = '#333';
      }

      const icon = document.querySelector('.custom-icon');
      if (icon) {
        icon.style.margin = '0 auto';
      }

      // 제목 인라인 스타일 지정
      const title = document.querySelector('.custom-title');
      if (title) {
        title.style.color = '#FF6347';
        title.style.fontSize = '1.8rem';
        title.style.fontWeight = 'bold';
      }

      //내용
      const text = document.querySelector('.swal2-html-container');
      if (text) {
        text.style.fontSize = '1.6rem';
      }

      // 확인 버튼 인라인 스타일 지정
      const confirmButton = document.querySelector('.custom-confirm-button');
      if (confirmButton) {
        confirmButton.style.backgroundColor = '#5080E1';
        confirmButton.style.color = 'white';
        confirmButton.style.fontSize = '1.4rem';
        confirmButton.style.padding = '10px 25px';
        confirmButton.style.border = 'none';
        confirmButton.style.borderRadius = '4px';
      }
    },
  });
};

export const questionAlert = async ({ title, text }) => {
  const question = await Swal.fire({
    title,
    text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: '예',
    cancelButtonText: '아니오',
    customClass: {
      popup: 'custom-popup',
      icon: 'custom-icon',
      title: 'custom-title',
      confirmButton: 'custom-confirm-button',
      cancelButton: 'custom-cancel-button',
    },

    didOpen: () => {
      // 팝업 창 인라인 스타일 지정
      const popup = document.querySelector('.custom-popup');
      if (popup) {
        popup.style.width = '400px';
        popup.style.height = '250px';
        popup.style.backgroundColor = '#ffffff';
        popup.style.color = '#333';
      }

      const icon = document.querySelector('.custom-icon');
      if (icon) {
        icon.style.margin = '0 auto';
      }

      // 제목 인라인 스타일 지정
      const title = document.querySelector('.custom-title');
      if (title) {
        title.style.color = '#FF6347';
        title.style.fontSize = '1.8rem';
        title.style.fontWeight = 'bold';
      }

      //내용
      const text = document.querySelector('.swal2-html-container');
      if (text) {
        text.style.fontSize = '1.6rem';
      }

      // 확인 버튼 인라인 스타일 지정
      const confirmButton = document.querySelector('.custom-confirm-button');
      if (confirmButton) {
        confirmButton.style.backgroundColor = '#5080E1';
        confirmButton.style.color = 'white';
        confirmButton.style.fontSize = '1.6rem';
        confirmButton.style.padding = '10px 30px';
        confirmButton.style.border = 'none';
        confirmButton.style.borderRadius = '4px';
      }

      // 취소 버튼 인라인 스타일 지정
      const cancelButton = document.querySelector('.custom-cancel-button');
      if (cancelButton) {
        cancelButton.style.backgroundColor = '#ffffff';
        cancelButton.style.color = '#5080E1';
        cancelButton.style.border = '1px solid #5080E1';
        cancelButton.style.fontSize = '1.6rem';
        cancelButton.style.padding = '10px 25px';
        cancelButton.style.borderRadius = '4px';
      }
    },
  });

  return question.isConfirmed;
};

export const confirmAlert = (text) => {
  Swal.fire({
    title: 'success!',
    text,
    icon: 'success',
    confirmButtonText: '확인',

    customClass: {
      popup: 'custom-popup',
      icon: 'custom-icon',
      title: 'custom-title',
      confirmButton: 'custom-confirm-button',
    },

    didOpen: () => {
      // 팝업 창 인라인 스타일 지정
      const popup = document.querySelector('.custom-popup');
      if (popup) {
        popup.style.backgroundColor = '#ffffff';
        popup.style.color = '#333';
        popup.style.padding = '20px 15px';
      }

      const icon = document.querySelector('.custom-icon');
      if (icon) {
        icon.style.margin = '0 auto';
        icon.style.display = 'flex';
        icon.style.justifyContent = 'center';
        icon.style.alignItems = 'center';
      }

      const iconContainer = document.querySelector('.swal2-icon.swal2-success');
      if (iconContainer) {
        iconContainer.style.display = 'none';
      }

      const iconBg = document.querySelector(
        '.swal2-success .swal2-icon-content'
      );
      if (iconBg) {
        iconBg.style.display = 'none';
      }
      // 제목 인라인 스타일 지정
      const title = document.querySelector('.custom-title');
      if (title) {
        title.style.color = '#5080E1';
        title.style.fontSize = '1.8rem';
        title.style.fontWeight = 'bold';
      }

      //내용
      const text = document.querySelector('.swal2-html-container');
      if (text) {
        text.style.fontSize = '1.6rem';
      }

      // 확인 버튼 인라인 스타일 지정
      const confirmButton = document.querySelector('.custom-confirm-button');
      if (confirmButton) {
        confirmButton.style.backgroundColor = '#5080E1';
        confirmButton.style.color = 'white';
        confirmButton.style.fontSize = '1.4rem';
        confirmButton.style.padding = '10px 25px';
        confirmButton.style.border = 'none';
        confirmButton.style.borderRadius = '4px';
      }
    },
  });
};
